// src/app/blog/[slug]/page.tsx - התיקון הנחוש ביותר

import { client } from '@/sanity/client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

// ממשקים (Interfaces)
interface Post {
  title: string;
  body: any[];
}

interface PageProps {
  params: {
    slug: string;
  };
}

// רכיב רנדרר בסיסי ל-Portable Text
const PortableTextRenderer = ({ blocks }: { blocks: any[] }) => {
  return <PortableText value={blocks} />;
};

// Next.js תטען את הדף בזמן הריצה (SSR)
export default async function PostPage(props: PageProps) {

  // הגישה הבטוחה לפרמטרים
  const params = await props.params;
  const { slug } = params;
  const rawSlug = slug || '';
  
  // *** התיקון: אנחנו מפענחים (Decode) את ה-slug מה-URL ***
  const currentSlug = decodeURIComponent(rawSlug);

  if (!currentSlug) {
    return notFound();
  }

  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
    title,
    body
  }`;

  // כאן אנחנו משתמשים ב-currentSlug המפוענח והבטוח
  const post: Post = await client.fetch(POST_QUERY, { slug: currentSlug }); 

  if (!post) {
    // נחזיר 404 אם אין פוסט
    return notFound();
  }

  // **** עיצוב בסיסי לבדיקה ****
  return (
    <div className="container mx-auto p-8 max-w-4xl min-h-screen">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 border-b-2 pb-2">
        {post.title}
      </h1>
      
      <div className="prose lg:prose-xl text-gray-700">
        {/* שימוש ברכיב הרנדרר שהוגדר למעלה */}
        {post.body && <PortableTextRenderer blocks={post.body} />}

        <p className='mt-8 text-sm text-gray-500 italic'>
          *התוכן מוצג באמצעות רנדרר בסיסי, ללא תמונות או רשימות מורכבות.
        </p>
      </div>
      
      <div className="mt-12">
        <Link href="/blog" className="text-pink-600 hover:text-pink-800 font-bold">
          ← חזרה לכל הבלוגים
        </Link>
      </div>
    </div>
  );
}

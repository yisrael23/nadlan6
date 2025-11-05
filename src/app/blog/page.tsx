// src/app/blog/page.tsx

import { client } from '@/sanity/client'; // ייבוא של קובץ החיבור שיצרנו
import Link from 'next/link';
import React from 'react';

// הגדרת הממשק (מבנה נתונים שאנו מצפים לקבל מ-Sanity)
interface Post {
  _id: string;
  slug: { current: string }; // מזהה ייחודי עבור הקישור
  title: string;
  excerpt: string; // תקציר קצר (אם קיים בסכימה של Sanity)
  publishedAt: string; // תאריך הפרסום
}

// הגדרת השאילתה לשליפת כל הפוסטים מ-Sanity
const POSTS_QUERY = `*[_type == "post"] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt
} | order(publishedAt desc)`; // מיין לפי תאריך יורד

// רכיב הדף הראשי (רץ על השרת עבור SSR ו-SEO)
export default async function BlogPage() {
  
  // ביצוע השאילתה ל-Sanity
  const posts: Post[] = await client.fetch(POSTS_QUERY);

  // אם אין פוסטים
  if (!posts || posts.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <h1 className="text-3xl font-bold text-gray-500 text-center">
          עדיין אין פוסטים. אנא כנס ל-Sanity Studio שלך והתחל לכתוב!
        </h1>
      </div>
    );
  }

  // הצגת רשימת הפוסטים בעיצוב בסיסי (Tailwind)
  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <h1 className="text-5xl font-extrabold text-pink-600 mb-12 text-center border-b-4 border-pink-200 pb-4">
        ✨ הבלוג הנוצץ שלך ✨
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          // כרטיס בלוג אחד
          <article
            key={post._id}
            className="p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            {/* *** התיקון: הצפנת ה-slug ל-URL בטוח *** */}
            <Link
                href={`/blog/${encodeURIComponent(post.slug.current)}`}
                className="block"
            >
              <h2 className="text-xl font-bold text-indigo-800 hover:text-indigo-600 transition duration-150 mb-2">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              פורסם ב: {new Date(post.publishedAt).toLocaleDateString('he-IL')}
            </p>
            <p className="text-gray-600">
              {post.excerpt || 'לחץ כאן לקריאת הפוסט המלא...'}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
// src/app/layout.tsx

import type { Metadata } from "next";
// יבואנו רק את ה-CSS הכללי, ללא הגופנים הבעייתיים
import "./globals.css";

// ניתן להשתמש בגופן רגיל של גוגל אם נרצה בעתיד, אבל כרגע נשאיר פשוט
// לדוגמה:
// import { Rubik } from "next/font/google";
// const inter = Rubik({ subsets: ["latin", "hebrew"] });


export const metadata: Metadata = {
  title: "הבלוג הנוצץ שלי | My Glam Blog",
  description: "אתר תדמית ובלוג מנוהל באמצעות Next.js ו-Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      {/* השתמשנו ב-className פשוט. antialiased הוא מ-Tailwind CSS */}
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
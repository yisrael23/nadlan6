// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // הפתרון לאזהרת ה-Lockfile כאשר משתמשים ב-Turbopack
  experimental: {
    turbopack: {
      root: __dirname,
    },
  },
  // הוספת הגדרות TypeScript נוספות כאן אם נדרש
};

export default nextConfig;
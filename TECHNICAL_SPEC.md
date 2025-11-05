# מפרט טכני - פרויקט בלוג Next.js/Sanity

## 🎯 סקירה כללית
אפליקציית בלוג דינמית המבוססת על Next.js 16 (App Router) עם Sanity.io כמערכת ניהול תוכן (CMS).

## 📊 סטטוס פרויקט
**Production Ready for Design Phase**
- ✅ תשתית מוכנה
- ✅ ניתוב פועל
- ✅ טעינת נתונים תקינה
- 🎨 ממתין לשלב העיצוב

---

## 🏗️ ארכיטקטורה

### Stack טכנולוגי
- **Framework**: Next.js 16 (App Router)
- **CMS**: Sanity.io
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Content Rendering**: @portabletext/react

### מבנה תיקיות
```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx          # דף רשימת פוסטים
│   │   └── [slug]/
│   │       └── page.tsx      # דף פוסט בודד (dynamic routing)
│   └── ...
├── sanity/
│   └── client.ts             # חיבור ל-Sanity (authenticated)
└── ...
```

---

## 📄 פירוט קבצים קריטיים

### 1. `/src/app/blog/page.tsx` - דף רשימת הפוסטים

#### ממשק Post
```typescript
interface Post {
  _id: string;
  title: string;
  slug: string;           // ⚠️ CRITICAL: string פשוט, לא אובייקט
  publishedAt: string;
  excerpt?: string;
}
```

#### שאילתת GROQ
```groq
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,    // ⚠️ פישוט ל-string
  publishedAt,
  excerpt
}
```

#### ניווט (קריטי)
```typescript
// ✅ קידוד נכון של slug ב-URL
<Link href={`/blog/${encodeURIComponent(post.slug)}`}>
  {post.title}
</Link>
```

**למה זה קריטי?**
- מבטיח URL בטוח גם עם תווים לא לטיניים (עברית/ערבית)
- מטפל ברווחים ותווים מיוחדים

---

### 2. `/src/app/blog/[slug]/page.tsx` - דף פוסט בודד

#### תיקונים קריטיים שבוצעו

##### א. טיפול בפרמטרים (Next.js 16)
```typescript
// ❌ WRONG (גורם ל-Promise errors)
const { slug } = props.params;

// ✅ CORRECT
const params = await props.params;
const rawSlug = params.slug;
```

##### ב. פענוח Slug
```typescript
const slug = decodeURIComponent(rawSlug);
```
- מתאים לקידוד שנעשה בדף הרשימה
- מאפשר קריאה תקינה של slugs בעברית

##### ג. רינדור תוכן Portable Text
```typescript
import { PortableText } from '@portabletext/react';

// ✅ CORRECT - עם components מותאמים
<PortableText 
  value={post.body} 
  components={{
    block: {
      h1: ({children}) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
      h2: ({children}) => <h2 className="text-3xl font-bold mb-3">{children}</h2>,
      normal: ({children}) => <p className="mb-4">{children}</p>,
    },
    marks: {
      link: ({value, children}) => (
        <a href={value.href} className="text-blue-600 hover:underline">
          {children}
        </a>
      ),
    },
  }}
/>
```

##### ד. מבנה HTML תקין
```typescript
// ❌ WRONG - גורם ל-Hydration Errors
<p>
  <div>...</div>  // לא חוקי!
</p>

// ✅ CORRECT
<article>
  <h1>...</h1>
  <div>
    <PortableText ... />
  </div>
</article>
```

---

## 📦 Dependencies

### הותקנו ידנית
```bash
npm install @portabletext/react
```

### בדיקת תלויות חיוניות
```bash
npm list next @sanity/client @portabletext/react
```

---

## 🔧 קובץ Sanity Client

### `/src/sanity/client.ts`
```typescript
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2024-01-01',
});
```

**Environment Variables נדרשים:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

---

## ⚠️ נקודות קריטיות לתשומת לב

### 1. Next.js 16 App Router
- **params** הם תמיד Promise - חייב `await`
- **searchParams** גם כן Promise
- שימוש ב-`use client` רק כשנחוץ

### 2. Slug Handling
- **תמיד** להשתמש ב-`encodeURIComponent` בלינקים
- **תמיד** להשתמש ב-`decodeURIComponent` בקריאת params
- לטפל בשגיאות של slugs לא חוקיים

### 3. Portable Text
- אסור להשתמש ב-`JSON.stringify` על התוכן
- חובה להשתמש ב-`PortableText` component
- להגדיר serializers מותאמים לעיצוב

### 4. Hydration
- לשמור על מבנה HTML תקין
- להימנע מקינון לא חוקי (`<div>` בתוך `<p>`)
- להשתמש ב-semantic HTML

---

## 🚀 הוראות הרצה

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
npm start
```

### Type Check
```bash
npm run type-check
```

---

## 📋 Checklist לפני Deploy

- [ ] כל ה-Environment Variables מוגדרים
- [ ] `npm run build` עובר בהצלחה
- [ ] אין Hydration errors בקונסול
- [ ] ניווט בין עמודים עובד
- [ ] תוכן מוצג כראוי (לא JSON גולמי)
- [ ] Slugs בעברית עובדים
- [ ] Images נטענות (אם קיימות)

---

## 🎨 מוכן לשלב הבא

הפרויקט מוכן עבור:
1. ✅ עיצוב ב-Tailwind CSS
2. ✅ הוספת רכיבי UI מתקדמים
3. ✅ אופטימיזציה של PortableText components
4. ✅ הוספת תמיכה בתמונות ורכיבים מורכבים

---

## 📝 הערות למפתחים

### עבודה עם Bolt.new
- העלה את כל הקוד ל-GitHub
- ייבא ל-Bolt.new
- בנה feature אחר feature
- בדוק איכות קוד עם Cline AI אחרי כל שינוי

### Git Workflow מומלץ
```bash
git add .
git commit -m "feat: [feature name]"
git push origin main
```

### בדיקת איכות עם Cline
אחרי כל pull מ-GitHub ל-VS Code:
1. הרץ את Cline AI
2. בקש בדיקת איכות קוד
3. תקן בעיות לפני feature הבא

---

## 🆘 פתרון בעיות נפוצות

### שגיאת 404 על פוסט
- בדוק ש-slug מקודד נכון
- ודא ש-decodeURIComponent עובד
- בדוק שהפוסט קיים ב-Sanity

### Hydration Error
- בדוק מבנה HTML
- ודא שאין קינון לא חוקי
- השתמש ב-`suppressHydrationWarning` רק במקרי קצה

### תוכן לא מוצג
- ודא ש-PortableText מיובא
- בדוק ש-`post.body` לא null
- ודא שיש components מוגדרים

---

**Last Updated**: נובמבר 2024
**Version**: 1.0.0
**Status**: Production Ready for Design Phase
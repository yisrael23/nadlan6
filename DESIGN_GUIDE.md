# מדריך עיצוב - פרויקט בלוג Next.js/Sanity

## 🎨 סקירה כללית
מסמך זה מגדיר את כללי העיצוב, הסטיילינג והחוויה החזותית של אפליקציית הבלוג.

---

## 🎯 עקרונות עיצוב

### 1. Clean & Modern
- עיצוב מינימליסטי ונקי
- הרבה רווח לבן (whitespace)
- פוקוס על תוכן

### 2. Mobile First
- עיצוב רספונסיבי החל ממסכים קטנים
- נסיון בשמיש חלק בכל המכשירים
- טאץ'-פרנדלי

### 3. Performance
- טעינה מהירה
- אנימציות חלקות
- אופטימיזציה של תמונות

### 4. Accessibility
- ניגודיות צבעים גבוהה
- תמיכה במקלדת
- ARIA labels מתאימים

---

## 🎨 מערכת עיצוב

### פלטת צבעים

#### צבעים ראשיים
```css
/* Primary Colors */
--primary: #2563eb;        /* Blue 600 */
--primary-dark: #1e40af;   /* Blue 700 */
--primary-light: #3b82f6;  /* Blue 500 */

/* Secondary Colors */
--secondary: #64748b;      /* Slate 500 */
--secondary-dark: #475569; /* Slate 600 */
--secondary-light: #94a3b8;/* Slate 400 */
```

#### צבעי רקע
```css
--bg-primary: #ffffff;     /* White */
--bg-secondary: #f8fafc;   /* Slate 50 */
--bg-tertiary: #f1f5f9;    /* Slate 100 */
```

#### צבעי טקסט
```css
--text-primary: #0f172a;   /* Slate 900 */
--text-secondary: #475569; /* Slate 600 */
--text-tertiary: #94a3b8;  /* Slate 400 */
```

#### צבעים נוספים
```css
--success: #10b981;        /* Green 500 */
--warning: #f59e0b;        /* Amber 500 */
--error: #ef4444;          /* Red 500 */
--info: #3b82f6;           /* Blue 500 */
```

### טיפוגרפיה

#### פונטים
```css
/* Primary Font - Hebrew/English */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Heebo', 'Roboto', sans-serif;

/* Monospace - Code */
font-family: 'Fira Code', 'Courier New', monospace;
```

#### סקאלת גדלים
```
text-xs:   0.75rem  (12px)
text-sm:   0.875rem (14px)
text-base: 1rem     (16px)
text-lg:   1.125rem (18px)
text-xl:   1.25rem  (20px)
text-2xl:  1.5rem   (24px)
text-3xl:  1.875rem (30px)
text-4xl:  2.25rem  (36px)
text-5xl:  3rem     (48px)
```

#### משקלים
```
font-light: 300
font-normal: 400
font-medium: 500
font-semibold: 600
font-bold: 700
font-extrabold: 800
```

### ריווח

#### Spacing Scale (Tailwind)
```
0: 0px
1: 0.25rem (4px)
2: 0.5rem  (8px)
3: 0.75rem (12px)
4: 1rem    (16px)
5: 1.25rem (20px)
6: 1.5rem  (24px)
8: 2rem    (32px)
10: 2.5rem (40px)
12: 3rem   (48px)
16: 4rem   (64px)
20: 5rem   (80px)
24: 6rem   (96px)
```

### פינות מעוגלות
```
rounded-sm:   0.125rem (2px)
rounded:      0.25rem  (4px)
rounded-md:   0.375rem (6px)
rounded-lg:   0.5rem   (8px)
rounded-xl:   0.75rem  (12px)
rounded-2xl:  1rem     (16px)
rounded-full: 9999px
```

### צללים
```
shadow-sm:  0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow:     0 1px 3px 0 rgb(0 0 0 / 0.1)
shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg:  0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl:  0 20px 25px -5px rgb(0 0 0 / 0.1)
shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

---

## 📱 רכיבי UI

### 1. Header (כותרת עליונה)

```tsx
<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <h1 className="text-2xl font-bold text-slate-900">הבלוג שלי</h1>
    <nav className="flex gap-6">
      <a href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
        בית
      </a>
      <a href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">
        בלוג
      </a>
    </nav>
  </div>
</header>
```

**עיצוב:**
- רקע שקוף עם backdrop blur
- sticky למעבר חלק
- shadow עדין בגלילה

### 2. Card (כרטיס פוסט)

```tsx
<article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg hover:-translate-y-1">
  {/* תמונה */}
  <div className="aspect-video overflow-hidden bg-slate-100">
    <img 
      src="..." 
      alt="..."
      className="h-full w-full object-cover transition-transform group-hover:scale-105"
    />
  </div>
  
  {/* תוכן */}
  <div className="p-6">
    {/* תאריך */}
    <time className="text-sm text-slate-500">
      {new Date(publishedAt).toLocaleDateString('he-IL')}
    </time>
    
    {/* כותרת */}
    <h2 className="mt-2 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
      {title}
    </h2>
    
    {/* תקציר */}
    <p className="mt-3 text-slate-600 line-clamp-3">
      {excerpt}
    </p>
    
    {/* קרא עוד */}
    <div className="mt-4 flex items-center text-blue-600 font-medium">
      קרא עוד
      <svg className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </div>
  </div>
</article>
```

**אפקטים:**
- hover: הרמה עדינה + צל
- תמונה: zoom עדין
- כותרת: שינוי צבע
- חץ: תזוזה

### 3. Button (כפתור)

```tsx
{/* Primary Button */}
<button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md hover:shadow-lg">
  לחץ כאן
</button>

{/* Secondary Button */}
<button className="px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-medium hover:bg-slate-200 active:bg-slate-300 transition-colors">
  ביטול
</button>

{/* Outline Button */}
<button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 active:bg-blue-100 transition-colors">
  למד עוד
</button>
```

### 4. Tag (תגית)

```tsx
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
  טכנולוגיה
</span>
```

---

## 📄 עיצוב דפים ספציפיים

### דף רשימת פוסטים (`/blog`)

#### Layout
```tsx
<div className="min-h-screen bg-slate-50">
  {/* Hero Section */}
  <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">הבלוג שלנו</h1>
      <p className="text-xl text-blue-100">מאמרים, טיפים ועדכונים</p>
    </div>
  </section>
  
  {/* Posts Grid */}
  <section className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  </section>
</div>
```

#### Breakpoints
- Mobile: 1 עמודה
- Tablet (md): 2 עמודות
- Desktop (lg): 3 עמודות

### דף פוסט בודד (`/blog/[slug]`)

#### Layout
```tsx
<article className="min-h-screen bg-white">
  {/* Hero */}
  <header className="relative h-[60vh] bg-slate-900">
    <img 
      src="..." 
      alt="..."
      className="absolute inset-0 w-full h-full object-cover opacity-60"
    />
    <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        {title}
      </h1>
      <div className="flex items-center gap-4 text-slate-200">
        <time>{publishedAt}</time>
        <span>•</span>
        <span>5 דקות קריאה</span>
      </div>
    </div>
  </header>
  
  {/* Content */}
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <div className="prose prose-lg prose-slate">
      <PortableText value={body} components={...} />
    </div>
  </div>
</article>
```

---

## 🎨 PortableText Components

### עיצוב תוכן Sanity

```tsx
const components = {
  block: {
    h1: ({children}) => (
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-12">
        {children}
      </h1>
    ),
    h2: ({children}) => (
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 mt-10">
        {children}
      </h2>
    ),
    h3: ({children}) => (
      <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3 mt-8">
        {children}
      </h3>
    ),
    normal: ({children}) => (
      <p className="text-lg text-slate-700 mb-6 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({children}) => (
      <blockquote className="border-r-4 border-blue-600 pr-6 py-2 my-6 italic text-slate-600 bg-slate-50 rounded">
        {children}
      </blockquote>
    ),
  },
  
  marks: {
    strong: ({children}) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({children}) => (
      <em className="italic text-slate-700">{children}</em>
    ),
    code: ({children}) => (
      <code className="px-2 py-1 bg-slate-100 text-pink-600 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({value, children}) => (
      <a 
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-2"
      >
        {children}
      </a>
    ),
  },
  
  list: {
    bullet: ({children}) => (
      <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
        {children}
      </ul>
    ),
    number: ({children}) => (
      <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6">
        {children}
      </ol>
    ),
  },
  
  listItem: {
    bullet: ({children}) => (
      <li className="text-lg">{children}</li>
    ),
    number: ({children}) => (
      <li className="text-lg">{children}</li>
    ),
  },
  
  types: {
    code: ({value}) => (
      <pre className="bg-slate-900 text-slate-50 p-6 rounded-lg overflow-x-auto my-6">
        <code className="font-mono text-sm">{value.code}</code>
      </pre>
    ),
    image: ({value}) => (
      <figure className="my-8">
        <img 
          src={value.asset.url}
          alt={value.alt || ''}
          className="w-full rounded-lg shadow-lg"
        />
        {value.caption && (
          <figcaption className="text-center text-sm text-slate-600 mt-3">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};
```

---

## 📐 Grid Layouts

### Posts Grid (גריד פוסטים)
```css
/* 3 Columns Desktop */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* 2 Columns Tablet */
@media (max-width: 1024px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 1 Column Mobile */
@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🎭 אנימציות ומעברים

### Transitions
```css
/* Default */
transition: all 0.2s ease-in-out;

/* Specific */
transition-colors: color, background-color 0.2s;
transition-transform: transform 0.3s;
transition-opacity: opacity 0.2s;
```

### Hover Effects
```tsx
// Card Lift
hover:-translate-y-1 hover:shadow-lg

// Image Zoom
group-hover:scale-105

// Color Change
hover:text-blue-600 hover:bg-blue-50

// Underline
hover:underline underline-offset-2
```

### Loading States
```tsx
{/* Skeleton */}
<div className="animate-pulse">
  <div className="h-4 bg-slate-200 rounded w-3/4 mb-4"></div>
  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
</div>

{/* Spinner */}
<div className="animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-blue-600"></div>
```

---

## 🌐 תמיכה ב-RTL

### Hebrew Support
```tsx
<html dir="rtl" lang="he">
  {/* תוכן */}
</html>
```

### Tailwind RTL Classes
```tsx
// משמאל לימין
mr-4  // margin-right
ml-4  // margin-left
pr-4  // padding-right
pl-4  // padding-left

// אוטומטי RTL/LTR
ms-4  // margin-inline-start (ימין ב-RTL)
me-4  // margin-inline-end (שמאל ב-RTL)
ps-4  // padding-inline-start
pe-4  // padding-inline-end
```

---

## ✅ Checklist עיצובי

### כללי
- [ ] צבעים עקביים בכל האתר
- [ ] פונטים טעונים נכון
- [ ] ריווח אחיד
- [ ] רספונסיבי בכל המכשירים

### רכיבים
- [ ] כפתורים עם hover states
- [ ] לינקים מודגשים
- [ ] כרטיסים עם אנימציות
- [ ] תמונות מותאמות

### תוכן
- [ ] כותרות בולטות
- [ ] פסקאות קריאות
- [ ] קוד מעוצב
- [ ] ציטוטים מודגשים

### נגישות
- [ ] ניגודיות צבעים מספקת
- [ ] גדלי טקסט ברורים
- [ ] פוקוס אינדיקטורים
- [ ] ARIA labels

---

**Last Updated**: נובמבר 2024
**Version**: 1.0.0
**Status**: Ready for Implementation
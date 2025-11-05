# תהליך עבודה - ניהול פיתוח ב-Bolt.new

## 🎯 סקירת התהליך

מסמך זה מגדיר את תהליך העבודה המלא להעברת הפרויקט ל-Bolt.new ובניית הפיצ'רים באופן מסודר.

---

## 🔄 תרשים זרימה כללי

```
VS Code (Development) 
    ↓ Push
GitHub (Version Control)
    ↓ Import
Bolt.new (Feature Building)
    ↓ Export
GitHub (Updated Code)
    ↓ Pull
VS Code (Quality Check with Cline AI)
    ↓ Fixes (if needed)
GitHub → Bolt.new (Repeat)
```

---

## 📋 שלבים מפורטים

### שלב 1: הכנה ראשונית (One-time Setup)

#### 1.1 העלאת קוד ראשונית ל-GitHub

```bash
# Initialize Git (if not done)
git init
git add .
git commit -m "Initial commit: Next.js blog with Sanity"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

#### 1.2 הוספת קבצי MD לפרויקט

```bash
# Create docs folder
mkdir docs

# Move MD files to docs
mv TECHNICAL_SPEC.md docs/
mv DESIGN_GUIDE.md docs/
mv SEO_STRATEGY.md docs/
mv WORKFLOW.md docs/

# Commit
git add docs/
git commit -m "docs: Add project documentation"
git push
```

#### 1.3 יבוא ל-Bolt.new

1. פתח את https://bolt.new
2. לחץ על "Import from GitHub"
3. בחר את ה-Repository שלך
4. המתן לסיום הטעינה
5. ודא שהפרויקט רץ

---

### שלב 2: בניית Feature (חזרתי)

#### 2.1 תכנון Feature

**לפני שמתחילים, החלט:**
- [ ] מה בדיוק הפיצ'ר צריך לעשות?
- [ ] אילו קבצים יושפעו?
- [ ] יש תלות בפיצ'רים אחרים?
- [ ] מה קריטריוני ההצלחה?

**דוגמה:**
```markdown
Feature: Blog Post Cards with Hover Effects
Files: src/app/blog/page.tsx, tailwind.config
Dependencies: None
Success Criteria: 
  - Card lifts on hover
  - Image zooms smoothly
  - Link color changes
```

#### 2.2 יצירת Prompt ל-Bolt.new

**מבנה Prompt אופטימלי:**

```markdown
I need you to implement [FEATURE_NAME].

Context:
- This is a Next.js 16 blog with Sanity CMS
- Using Tailwind CSS for styling
- Reference docs/DESIGN_GUIDE.md for styling rules

Requirements:
1. [Specific requirement 1]
2. [Specific requirement 2]
3. [Specific requirement 3]

Technical Details:
- File to modify: [FILE_PATH]
- Use these Tailwind classes: [CLASSES]
- Follow the design patterns in docs/DESIGN_GUIDE.md

Expected Result:
[Describe what should happen]

Please implement this feature and show me the changes.
```

**דוגמה מלאה:**

```markdown
I need you to create styled blog post cards for the blog listing page.

Context:
- File: src/app/blog/page.tsx
- Using Tailwind CSS
- Reference docs/DESIGN_GUIDE.md section "Card (כרטיס פוסט)"

Requirements:
1. Create a responsive grid (1 col mobile, 2 tablet, 3 desktop)
2. Each card should have:
   - Featured image with zoom on hover
   - Title that changes color on hover
   - Excerpt with 3-line clamp
   - Published date
   - "Read more" link with arrow
3. Card lifts slightly on hover with shadow

Technical Details:
- Use Next.js Image component for images
- Implement group-hover for synchronized effects
- Follow the exact Tailwind classes from DESIGN_GUIDE.md
- Ensure RTL support for Hebrew

Expected Result:
A beautiful, modern blog listing with smooth animations and responsive layout.

Please implement this feature step by step.
```

#### 2.3 בדיקת התוצאה ב-Bolt.new

**מה לבדוק:**
- [ ] הקוד קומפיל בלי שגיאות
- [ ] התצוגה המקדימה נראית נכון
- [ ] אנימציות עובדות חלק
- [ ] רספונסיבי בכל המסכים (בדוק ב-Dev Tools)
- [ ] RTL עובד אם רלוונטי

**אם יש בעיות:**
```markdown
I see an issue: [DESCRIBE ISSUE]

Please fix it by:
1. [FIX STEP 1]
2. [FIX STEP 2]

Check docs/DESIGN_GUIDE.md for the correct approach.
```

#### 2.4 ייצוא מ-Bolt.new ל-GitHub

**אופציה A: ישירות מ-Bolt.new**
1. לחץ על "Push to GitHub" ב-Bolt.new
2. בחר branch (main או feature branch)
3. הוסף commit message תיאורי
4. Push

**אופציה B: הורדה ידנית**
1. Download הקוד מ-Bolt.new
2. העתק לפרויקט המקומי
3. Review השינויים
4. Commit & Push

```bash
git add .
git commit -m "feat: Add styled blog post cards with hover effects"
git push
```

---

### שלב 3: בדיקת איכות עם Cline AI

#### 3.1 Pull מ-GitHub ל-VS Code

```bash
git pull origin main
```

#### 3.2 הרצת Cline AI לבדיקה

**פתח את Cline AI ב-VS Code:**

**Prompt לCline:**
```markdown
Please review the latest changes to the blog project.

Focus on:
1. Code quality and best practices
2. TypeScript types correctness
3. Tailwind CSS usage (check against docs/DESIGN_GUIDE.md)
4. Next.js 16 App Router patterns
5. Performance implications
6. Accessibility issues
7. Any potential bugs

Files changed:
[LIST FILES THAT CHANGED]

Provide specific feedback and suggestions for improvements.
```

#### 3.3 ניתוח תוצאות Cline

**Cline ימצא בעיות כמו:**
- ❌ Type errors
- ❌ Missing alt texts
- ❌ Non-optimized images
- ❌ Accessibility issues
- ❌ Performance problems
- ❌ Code duplication

**תקן בעיות ב-VS Code:**
```bash
# אחרי תיקונים
git add .
git commit -m "fix: Address Cline AI feedback"
git push
```

#### 3.4 Pull חזרה ל-Bolt.new (אם צריך)

אם עשית תיקונים ב-VS Code:
1. Push ל-GitHub
2. ב-Bolt.new: Pull latest changes
3. המשך לפיצ'ר הבא

---

## 📊 טבלת מעקב Features

צור קובץ `FEATURES_TRACKER.md`:

```markdown
# Feature Tracker

## 🎨 Design Features

| Feature | Status | Assigned To | Bolt Session | Issues | Completed |
|---------|--------|-------------|--------------|---------|-----------|
| Blog Cards Styling | ✅ Done | Bolt.new | 2024-11-05 | None | 2024-11-05 |
| Post Page Layout | 🔄 In Progress | Bolt.new | 2024-11-06 | #1: Image sizing | - |
| Mobile Navigation | 📋 Planned | - | - | - | - |
| Dark Mode Toggle | 📋 Planned | - | - | - | - |

## ⚙️ Technical Features

| Feature | Status | Assigned To | Bolt Session | Issues | Completed |
|---------|--------|-------------|--------------|---------|-----------|
| Meta Tags | ✅ Done | VS Code | - | None | 2024-11-04 |
| Sitemap | 📋 Planned | Bolt.new | - | - | - |
| Image Optimization | 📋 Planned | Bolt.new | - | - | - |

## 🔍 SEO Features

| Feature | Status | Assigned To | Bolt Session | Issues | Completed |
|---------|--------|-------------|--------------|---------|-----------|
| Schema Markup | 📋 Planned | Bolt.new | - | - | - |
| Robots.txt | 📋 Planned | Bolt.new | - | - | - |
```

---

## 💡 טיפים לעבודה עם Bolt.new

### ✅ DO (עשה)

1. **פיצ'ר אחד בכל פעם**
   - אל תנסה לבנות הכל ביחד
   - התחל מהפשוט לmורכב

2. **Prompts ברורים ומפורטים**
   - ציין בדיוק מה אתה רוצה
   - הפנה לdocs כשצריך
   - תן דוגמאות

3. **בדוק אחרי כל שינוי**
   - אל תסמוך על Bolt בעיוור
   - בדוק בכל המסכים
   - בדוק בקונסול

4. **Commit Messages תיאוריים**
   ```
   feat: Add blog post cards with hover effects
   fix: Correct image aspect ratio in cards
   style: Improve spacing in blog layout
   docs: Update DESIGN_GUIDE with new patterns
   ```

5. **שמור גרסאות עובדות**
   - Commit לפני שינויים גדולים
   - צור branches לניסויים
   - Tag גרסאות stable

### ❌ DON'T (אל תעשה)

1. **אל תדלג על בדיקות Cline**
   - זה חוסך זמן בטווח הארוך
   - מונע באגים מצטברים

2. **אל תשכח לעדכן Docs**
   - אם שינית משהו, עדכן ב-MD
   - זה עוזר ל-Bolt להבין את הפרויקט

3. **אל תעשה שינויים גדולים ללא backup**
   - תמיד commit לפני
   - או צור branch

4. **אל תסתמך רק על Bolt**
   - Bolt טוב, אבל לא מושלם
   - תמיד review הקוד
   - תמיד בדוק ידנית

---

## 🐛 טיפול בבעיות

### בעיה: Bolt לא מבין את ההקשר

**פתרון:**
```markdown
Let me provide more context.

This project uses:
- Next.js 16 with App Router
- Sanity CMS for content
- Tailwind CSS for styling
- TypeScript

Please read docs/TECHNICAL_SPEC.md for the full architecture.

Now, let's try again: [REPEAT REQUEST]
```

### בעיה: הקוד לא עובד ב-VS Code

**פתרון:**
1. בדוק dependencies:
   ```bash
   npm install
   ```

2. בדוק TypeScript errors:
   ```bash
   npm run type-check
   ```

3. בדוק build:
   ```bash
   npm run build
   ```

4. אם יש שגיאות, שתף את Cline:
   ```
   Cline, I'm getting this error: [ERROR]
   Please help me fix it.
   ```

### בעיה: Git conflicts

**פתרון:**
```bash
# Pull with rebase
git pull --rebase origin main

# Resolve conflicts
# [Fix conflicts in editor]

# Continue
git rebase --continue

# Push
git push
```

---

## 📈 מדדי הצלחה

### Per Feature
- ✅ עובד ב-Bolt.new
- ✅ עובד ב-VS Code
- ✅ עובר Cline review
- ✅ אין TypeScript errors
- ✅ אין console errors
- ✅ רספונסיבי
- ✅ נגיש (a11y)

### Per Milestone
- ✅ כל הfeatures הושלמו
- ✅ Docs מעודכנים
- ✅ Tests עוברים (אם יש)
- ✅ Build עובר
- ✅ Ready for deploy

---

## 🚀 תוכנית יישום

### שבוע 1: תשתית ועיצוב בסיסי
- [x] Setup ראשוני
- [ ] Blog cards styling
- [ ] Blog page layout
- [ ] Post page layout
- [ ] Navigation component
- [ ] Footer component

### שבוע 2: תוכן וSEO
- [ ] PortableText components
- [ ] Meta tags implementation
- [ ] Sitemap generation
- [ ] Robots.txt
- [ ] Schema markup
- [ ] Image optimization

### שבוע 3: פיצ'רים מתקדמים
- [ ] Search functionality
- [ ] Categories/Tags
- [ ] Related posts
- [ ] Social sharing
- [ ] Comments (if needed)
- [ ] Newsletter signup

### שבוע 4: פוליש ואופטימיזציה
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Mobile testing
- [ ] Cross-browser testing
- [ ] Final Cline review
- [ ] Deploy preparation

---

## 📞 תקשורת עם Bolt.new

### שפה טובה לBolt

**טוב:**
```
Create a card component for blog posts with these features:
1. Hover effect that lifts the card
2. Image that zooms on hover
3. Title color change on hover

Use Tailwind CSS and follow Material Design principles.
```

**לא טוב:**
```
Make it look nice
```

### בקשת הבהרות

```
Can you explain why you chose this approach?
Is there a better way to implement [X]?
Can you show me an alternative solution?
```

### בקשת שינויים

```
This is good, but can you:
1. Change the color to blue-600
2. Make the animation slower (0.3s instead of 0.2s)
3. Add a shadow on hover
```

---

**Last Updated**: נובמבר 2024
**Version**: 1.0.0
**Status**: Active Workflow

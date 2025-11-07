# 🤝 المساهمة في المشروع

<div dir="rtl">

نرحب بمساهماتك في تطوير هذه المكتبة!

## كيفية المساهمة

### 1. Fork المشروع
قم بعمل Fork للمشروع على GitHub

### 2. Clone المشروع

</div>

```bash
git clone https://github.com/YOUR_USERNAME/Ui_library.git
cd Ui_library
```

<div dir="rtl">

### 3. تثبيت التبعيات

</div>

```bash
npm install
```

<div dir="rtl">

### 4. إنشاء Branch جديد

</div>

```bash
git checkout -b feature/your-feature-name
```

<div dir="rtl">

### 5. قم بالتعديلات
- أضف المكون الجديد في `src/components/`
- أنشئ ملف stories للمكون
- اختبر المكون في Storybook
- تأكد من عدم وجود أخطاء TypeScript

### 6. Commit التغييرات

</div>

```bash
git add .
git commit -m "Add: YourComponent"
```

<div dir="rtl">

### 7. Push إلى GitHub

</div>

```bash
git push origin feature/your-feature-name
```

<div dir="rtl">

### 8. افتح Pull Request
قم بفتح Pull Request على GitHub

## معايير المساهمة

### المكونات الجديدة
- يجب أن تكون مكتوبة بـ TypeScript
- يجب أن تدعم RTL/LTR
- يجب أن تحتوي على ملف `.stories.tsx`
- يجب أن تستخدم Tailwind CSS
- يجب أن تتبع نمط shadcn/ui

### الكود
- استخدم TypeScript
- اتبع معايير ESLint
- أضف types لجميع Props
- استخدم `forwardRef` للمكونات
- استخدم `cn()` utility لدمج classes

### التوثيق
- أضف JSDoc comments للمكونات
- أضف أمثلة متعددة في Stories
- وثق جميع Props

### أمثلة على Commit Messages

</div>

```
Add: Button component with variants
Fix: Tooltip positioning in RTL mode
Update: Card component with icon support
Docs: Add examples for Modal component
```

<div dir="rtl">

## الإبلاغ عن المشاكل

إذا وجدت مشكلة، يرجى فتح Issue على GitHub مع:
- وصف واضح للمشكلة
- خطوات إعادة إنتاج المشكلة
- لقطات شاشة إن أمكن
- نسخة المتصفح ونظام التشغيل

## اقتراح ميزات جديدة

لاقتراح ميزة جديدة:
1. افتح Issue
2. وصف الميزة المقترحة
3. اشرح الفائدة من الميزة
4. أضف أمثلة أو mockups إن أمكن

شكراً لمساهمتك! 🙏

</div>


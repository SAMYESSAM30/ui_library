# دليل البدء السريع

## خطوات التثبيت والتشغيل

### 1. تثبيت الحزم
```bash
npm install
```

### 2. تشغيل Storybook
```bash
npm run dev
```

سيتم فتح Storybook على `http://localhost:6006` حيث يمكنك:
- عرض جميع المكونات
- تجربة المكونات بشكل تفاعلي
- تعديل الخصائص في الوقت الفعلي
- رؤية أمثلة مختلفة لكل مكون

## المكونات المتوفرة

### Button (زر)
- متغيرات: primary, secondary, success, warning, danger, info, outline
- أحجام: sm, md, lg
- حالات: loading, disabled
- دعم: fullWidth

### Input (حقل إدخال)
- دعم: label, error, helperText
- أيقونات: leftIcon, rightIcon
- أنواع: text, email, password, number, etc.

### Card (بطاقة)
- متغيرات: default, elevated, outlined
- دعم: title, subtitle, footer
- قابل للنقر: onClick

### Modal (نافذة منبثقة)
- أحجام: sm, md, lg, xl
- دعم: title, footer
- خيارات: closeOnOverlayClick, closeOnEscape

### Badge (شارة)
- متغيرات: primary, secondary, success, warning, danger, info
- أحجام: sm, md, lg

### Alert (تنبيه)
- متغيرات: success, warning, danger, info
- دعم: title, onClose

## التخصيص

جميع الألوان والتصميمات قابلة للتخصيص من خلال ملف `src/styles/theme.css`:

```css
:root {
  --color-primary: #3b82f6; /* غيّر هذا اللون */
  --spacing-md: 1rem; /* غيّر المسافات */
  --radius-md: 0.5rem; /* غيّر الحدود */
  /* ... المزيد */
}
```

## البناء للإنتاج

```bash
npm run build
```

سيتم إنشاء الملفات في مجلد `dist/`

## إضافة مكونات جديدة

1. أنشئ مجلد جديد في `src/components/`
2. أضف ملفات: `ComponentName.tsx`, `ComponentName.css`, `ComponentName.stories.tsx`
3. قم بتصدير المكون من `src/components/index.ts`
4. سيظهر تلقائياً في Storybook!

## نصائح

- استخدم Storybook لتطوير وتجربة المكونات قبل استخدامها
- جميع المكونات تدعم className للتخصيص الإضافي
- استخدم CSS Variables لتغيير التصميم بشكل شامل
- المكونات مكتوبة بـ TypeScript لضمان الأمان في الأنواع


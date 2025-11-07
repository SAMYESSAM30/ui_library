# دليل دعم RTL/LTR والعربية/الإنجليزية

## نظرة عامة

جميع مكونات المكتبة تدعم بشكل كامل:
- **RTL (Right-to-Left)** للغة العربية
- **LTR (Left-to-Right)** للغة الإنجليزية
- خطوط عربية مناسبة (El Messiri)
- خطوط إنجليزية مناسبة (Noto Sans)

## الاستخدام

### 1. استخدام RTL للعربية

```tsx
import { Button, Input, Card } from 'ui-library';

function ArabicComponent() {
  return (
    <div dir="rtl">
      <Button variant="primary">زر أساسي</Button>
      <Input label="الاسم" placeholder="أدخل اسمك" />
      <Card title="بطاقة عربية">
        محتوى البطاقة
      </Card>
    </div>
  );
}
```

### 2. استخدام LTR للإنجليزية

```tsx
import { Button, Input, Card } from 'ui-library';

function EnglishComponent() {
  return (
    <div dir="ltr">
      <Button variant="primary">Primary Button</Button>
      <Input label="Name" placeholder="Enter your name" />
      <Card title="English Card">
        Card content
      </Card>
    </div>
  );
}
```

### 3. استخدام className

يمكنك أيضاً استخدام className:

```tsx
<div className="rtl">
  {/* محتوى عربي */}
</div>

<div className="ltr">
  {/* English content */}
</div>
```

## المكونات المدعومة

جميع المكونات التالية تدعم RTL/LTR:

- ✅ **Button** - الأزرار
- ✅ **Input** - حقول الإدخال (مع دعم الأيقونات)
- ✅ **Card** - البطاقات
- ✅ **Modal** - النوافذ المنبثقة
- ✅ **Alert** - الرسائل التنبيهية
- ✅ **Badge** - الشارات

## الميزات

### 1. الخطوط التلقائية

- عند استخدام `dir="rtl"` يتم تطبيق خطوط عربية (El Messiri)
- عند استخدام `dir="ltr"` يتم تطبيق خطوط إنجليزية (Noto Sans)

### 2. المحاذاة التلقائية

- النصوص تتماشى تلقائياً حسب الاتجاه
- الأيقونات والصور تنعكس تلقائياً

### 3. المسافات والحواف

- استخدام `padding-inline-start/end` بدلاً من `left/right`
- استخدام `margin-inline-start/end` بدلاً من `left/right`
- الحدود تتكيف تلقائياً

## أمثلة في Storybook

في Storybook، ستجد أمثلة لكل مكون:
- **ArabicRTL** - أمثلة بالعربية مع RTL
- **EnglishLTR** - أمثلة بالإنجليزية مع LTR

يمكنك أيضاً استخدام أداة Direction في شريط أدوات Storybook لتبديل الاتجاه.

## التخصيص

يمكنك تخصيص الخطوط في `src/styles/theme.css`:

```css
:root {
  --font-family-ar: 'El Messiri', sans-serif;
  --font-family-en: 'Noto Sans', sans-serif;
}
```

## نصائح

1. **استخدم `dir` attribute** على العنصر الأب لتطبيق الاتجاه
2. **تأكد من الخطوط** - أضف خطوط Noto Sans و El Messiri من Google Fonts
3. **اختبر في كلا الاتجاهين** - تأكد من أن التصميم يعمل في RTL و LTR

## إضافة خطوط Google Fonts

أضف في `<head>` من HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=El+Messiri:wght@400;500;600;700&display=swap" rel="stylesheet">
```

أو في CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=El+Messiri:wght@400;500;600;700&display=swap');
```

### الخطوط المستخدمة:
- **الإنجليزية**: Noto Sans
- **العربية**: El Messiri


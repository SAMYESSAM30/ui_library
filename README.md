# 🎨 UI Library - مكتبة واجهة المستخدم

<div dir="rtl">

مكتبة مكونات UI حديثة وقابلة للتخصيص بالكامل، مبنية باستخدام React، TypeScript، Tailwind CSS، و shadcn/ui.

</div>

## ✨ المميزات

- 🎯 **50+ مكون جاهز للاستخدام**
- 🌍 **دعم كامل للعربية والإنجليزية (RTL/LTR)**
- 🎨 **قابلة للتخصيص بالكامل** باستخدام Tailwind CSS
- ♿ **Accessible** - مبنية على Radix UI
- 📖 **موثقة بالكامل** مع Storybook
- 💪 **Type-safe** - مكتوبة بالكامل بـ TypeScript
- 🎭 **Variants متعددة** لكل مكون
- 📦 **Tree-shakeable** - استورد فقط ما تحتاجه

## 📦 المكونات المتوفرة

### المكونات الأساسية
- **Button** - أزرار بـ variants وأحجام متعددة
- **Input / TextInput** - حقول إدخال مع دعم الأيقونات والأخطاء
- **Textarea** - منطقة نص متعددة الأسطر
- **Checkbox** - مربعات اختيار
- **Radio / RadioGroup** - أزرار راديو
- **Switch** - مفتاح تبديل
- **Select / Dropdown** - قوائم منسدلة
- **Slider** - شريط انزلاق
- **RangeSlider** - شريط نطاق مزدوج

### مكونات العرض
- **Card** - بطاقات مع دعم الأيقونات
- **Badge** - شارات الحالة
- **Tag** - وسوم
- **StatusTag** - وسوم الحالة
- **Alert / InlineAlert** - تنبيهات
- **Toast / Notification** - إشعارات منبثقة
- **Chip** - رقائق قابلة للإزالة
- **Avatar / AvatarGroup** - صور مستخدمين
- **Skeleton** - هياكل التحميل (Circle, Line, Rectangle, Square)
- **Divider** - فواصل

### التنقل
- **Breadcrumb** - مسار التنقل
- **Tabs / TabList** - تبويبات
- **Menu** - قوائم منسدلة
- **HeaderMenuItem** - عناصر قائمة الهيدر
- **NavigationDrawerItem** - عناصر القائمة الجانبية
- **SecondNavHeader** - هيدر تنقل ثانوي
- **SlideoutMenu** - قائمة منزلقة
- **Pagination** - ترقيم الصفحات

### إدخال البيانات
- **NumberInput** - حقل إدخال رقمي
- **SearchBox** - صندوق البحث
- **Autocomplete** - إكمال تلقائي
- **DatePicker / Calendar** - اختيار التاريخ
- **FileUpload / DropZone** - رفع الملفات
- **Rating** - تقييم بالنجوم

### التقدم والمؤشرات
- **ProgressBar** - شريط التقدم
- **ProgressIndicator** - مؤشر التقدم
- **CircularProgressBar** - شريط تقدم دائري
- **Loading** - مؤشر التحميل
- **RadialStepper** - خطوات دائرية

### التخطيط
- **Grid / GridItem** - شبكة مرنة
- **Carousel** - عرض شرائح
- **Modal** - نوافذ منبثقة
- **Popover** - نوافذ صغيرة
- **Tooltip** - تلميحات الأدوات
- **FloatingButton** - زر عائم

### عرض البيانات
- **Table** - جداول
- **List / ListItem** - قوائم
- **Metric** - مقاييس إحصائية
- **Charts** (BarChart, LineChart, PieChart) - مخططات بيانية
- **Quote** - اقتباسات
- **CodeSnippet** - مقتطفات برمجية
- **ContentSwitcher** - محول المحتوى

## 🚀 البدء السريع

### التثبيت

```bash
npm install
```

### تشغيل Storybook

```bash
npm run dev
# أو
npm run storybook
```

سيتم فتح Storybook على `http://localhost:6006`

### بناء المكتبة

```bash
npm run build
```

سيتم إنشاء الملفات المبنية في مجلد `dist/`

### بناء Storybook للإنتاج

```bash
npm run build-storybook
```

## 📖 الاستخدام

### استيراد المكونات

```tsx
import { Button, Input, Card, Modal } from 'ui-library';

function App() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Input label="Name" placeholder="Enter your name" />
      <Card title="My Card">Content here</Card>
    </div>
  );
}
```

### دعم RTL/LTR

<div dir="rtl">

#### استخدام العربية (RTL)

</div>

```tsx
<div dir="rtl" className="rtl">
  <Button variant="default">زر أساسي</Button>
  <Input label="الاسم" placeholder="أدخل اسمك" />
  <Card title="بطاقة">محتوى البطاقة</Card>
</div>
```

#### English Usage (LTR)

```tsx
<div dir="ltr" className="ltr">
  <Button variant="default">Primary Button</Button>
  <Input label="Name" placeholder="Enter your name" />
  <Card title="Card">Card content</Card>
</div>
```

## 🎨 التخصيص

### تخصيص الألوان

يمكنك تخصيص الألوان من خلال تعديل متغيرات CSS في `src/styles/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  --destructive: 0 84.2% 60.2%;
  --radius: 0.5rem;
  /* ... المزيد */
}
```

### تخصيص الخطوط

الخطوط المستخدمة:
- **English (LTR)**: Noto Sans
- **Arabic (RTL)**: El Messiri

يمكنك تغييرها في `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Noto Sans', 'sans-serif'],
  arabic: ['El Messiri', 'sans-serif'],
}
```

## 🛠️ التقنيات المستخدمة

- **React 18** - مكتبة UI
- **TypeScript** - للأمان في الأنواع
- **Tailwind CSS** - للتنسيقات
- **Radix UI** - primitives للوصولية
- **shadcn/ui** - نظام المكونات
- **Storybook** - للتوثيق والتطوير
- **Rollup** - للبناء والتجميع
- **Lucide React** - للأيقونات
- **Recharts** - للمخططات البيانية

## 📂 هيكل المشروع

```
Ui_library/
├── .storybook/          # إعدادات Storybook
├── src/
│   ├── components/      # جميع المكونات
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.stories.tsx
│   │   ├── Input/
│   │   └── ...
│   ├── lib/            # دوال مساعدة
│   ├── styles/         # ملفات CSS
│   └── index.ts        # نقطة التصدير الرئيسية
├── dist/               # ملفات البناء
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── rollup.config.mjs
```

## 🌐 دعم اللغات والاتجاهات

المكتبة تدعم بشكل كامل:

### العربية (RTL)
- خط El Messiri
- اتجاه من اليمين لليسار
- محاذاة نصية صحيحة
- أيقونات وأزرار متجاوبة

### English (LTR)
- Noto Sans font
- Left-to-right direction
- Proper text alignment
- Responsive icons and buttons

## 📝 أمثلة

### زر مع أيقونة

```tsx
import { Button } from 'ui-library';
import { Download } from 'lucide-react';

<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>
```

### بطاقة مع أيقونة

```tsx
import { Card } from 'ui-library';
import { Settings } from 'lucide-react';

<Card 
  title="Settings"
  subtitle="Manage your preferences"
  icon={<Settings className="h-6 w-6" />}
>
  Card content here
</Card>
```

### نموذج مع حقول

```tsx
import { Modal, Input, Button } from 'ui-library';

<Modal>
  <ModalTrigger asChild>
    <Button>Open Form</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Edit Profile</ModalTitle>
    </ModalHeader>
    <Input label="Name" />
    <Input label="Email" type="email" />
    <ModalFooter>
      <Button>Save</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

## 🧪 التطوير

### إضافة مكون جديد

1. أنشئ مجلد في `src/components/`
2. أضف ملف المكون: `ComponentName.tsx`
3. أضف ملف القصص: `ComponentName.stories.tsx`
4. صدّر المكون من `src/components/index.ts`

### تشغيل Storybook

```bash
npm run dev
```

### بناء المشروع

```bash
npm run build
```

## 📄 الترخيص

MIT License

## 🤝 المساهمة

نرحب بالمساهمات! يرجى فتح issue أو pull request.

## 🔗 روابط مفيدة

- [Storybook Documentation](https://storybook.js.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

<div dir="rtl">

صُنع بـ ❤️ باستخدام React و TypeScript

</div>

# 📝 دليل إنشاء Repository على GitHub

## الخطوات:

### 1. إنشاء Repository على GitHub

1. اذهب إلى [GitHub](https://github.com)
2. اضغط على "New Repository" أو زر "+"
3. املأ البيانات:
   - **Repository name**: `ui-library` (أو أي اسم تريده)
   - **Description**: `مكتبة UI حديثة وقابلة للتخصيص مع دعم RTL/LTR`
   - **Public** أو **Private** (حسب اختيارك)
   - ✅ **لا تضف** README أو .gitignore أو LICENSE (موجودين بالفعل)
4. اضغط "Create Repository"

### 2. ربط المشروع بـ Repository

افتح Terminal وقم بتشغيل:

```bash
# إذا لم يكن git مهيأ بعد
git init

# إضافة جميع الملفات
git add .

# Commit أول
git commit -m "Initial commit: UI Library with 50+ components"

# ربط المشروع بـ Repository (استبدل USERNAME بـ username الخاص بك)
git remote add origin https://github.com/USERNAME/ui-library.git

# رفع الملفات
git branch -M main
git push -u origin main
```

### 3. نشر Storybook على GitHub Pages (اختياري)

```bash
# بناء Storybook
npm run build-storybook

# رفع Storybook على GitHub Pages
npx storybook-to-ghpages
```

### 4. إضافة Topics على GitHub

في صفحة Repository على GitHub:
1. اضغط على ⚙️ بجانب "About"
2. أضف Topics:
   - `react`
   - `typescript`
   - `ui-library`
   - `component-library`
   - `tailwindcss`
   - `shadcn-ui`
   - `storybook`
   - `rtl`
   - `arabic`
   - `radix-ui`

### 5. تحديث package.json

أضف repository info في `package.json`:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/USERNAME/ui-library.git"
  },
  "bugs": {
    "url": "https://github.com/USERNAME/ui-library/issues"
  },
  "homepage": "https://github.com/USERNAME/ui-library#readme"
}
```

### 6. إضافة Badges (اختياري)

أضف في `README.md`:

```markdown
![npm version](https://img.shields.io/npm/v/ui-library.svg)
![license](https://img.shields.io/npm/l/ui-library.svg)
![downloads](https://img.shields.io/npm/dm/ui-library.svg)
```

## ✅ تم الانتهاء!

الآن repository جاهز ويحتوي على:
- ✅ README شامل
- ✅ LICENSE
- ✅ CONTRIBUTING.md
- ✅ CHANGELOG.md
- ✅ .gitignore
- ✅ 50+ components
- ✅ 54 Storybook stories
- ✅ دعم RTL/LTR

## 🚀 الخطوات التالية

1. شارك Repository مع الآخرين
2. انشر على npm (إذا أردت)
3. استقبل المساهمات من المطورين
4. استمر في تطوير المكونات


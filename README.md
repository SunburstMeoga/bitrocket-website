# BitRocket Website

基于 React + Vite + Tailwind CSS + i18n 的响应式前端项目。

## 功能特性

- ✅ **React 18** - 现代化的 React 框架
- ✅ **Vite** - 快速的构建工具
- ✅ **Tailwind CSS** - 实用优先的 CSS 框架
- ✅ **i18n 多语言** - 支持中英文切换
- ✅ **三端自适应** - 手机端(390px)、平板端(1024px)、PC 端(1280px)
- ✅ **自定义 vw 插件** - 基于设计稿的响应式布局

## 🎯 响应式设计方案

本项目采用了创新的 vw 自适应方案，通过自定义 Tailwind CSS 3.x 插件实现精确的多设备适配。

### 设计原理

我们的自适应方案基于以下核心概念：

1. **基准宽度设置**：为不同设备类型设置基准宽度
2. **动态计算**：使用 CSS calc 和变量实现动态尺寸计算
3. **插件自动生成**：无需手动定义 CSS 类，插件自动生成所有 vw 工具类
4. **无缝适配**：在不同设备上保持设计比例的一致性

### 基准宽度配置

```javascript
const baseWidths = {
  mobile: 390, // 手机端基准宽度
  pad: 1024, // 平板端基准宽度
  pc: 1280, // 桌面端基准宽度
};
```

### 计算公式

对于任意 `[数字vw]` 值，实际 CSS 值的计算公式为：

```css
calc(数字 * 100vw / var(--base-width))
```

### 实际效果示例

以 `w-[120vw]` 为例：

- **在 390px 视口下**：`calc(120 * 100vw / 390)` ≈ **30.77px**
- **在 375px 视口下**：`calc(120 * 100vw / 390)` ≈ **32px**
- **在 414px 视口下**：`calc(120 * 100vw / 390)` ≈ **28.99px**
- **在 430px 视口下**：`calc(120 * 100vw / 390)` ≈ **33.23px**

这样确保了在基准宽度 390px 下获得合理的像素值，在其他宽度下按比例缩放。

### 响应式断点

项目使用 Tailwind CSS 默认断点：

- `sm`: 640px 及以上
- `md`: 768px 及以上
- `lg`: 1024px 及以上
- `xl`: 1280px 及以上
- `2xl`: 1536px 及以上

在不同断点下，`--base-width` 变量会自动切换：

- 小于 1024px：使用 mobile 基准宽度 (390px)
- 1024px - 1279px：使用 pad 基准宽度 (1024px)
- 1280px 及以上：使用 pc 基准宽度 (1280px)

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── LanguageSwitcher.jsx  # 语言切换组件
│   └── ResponsiveDemo.jsx    # 响应式演示组件
├── i18n/               # 国际化配置
│   ├── index.js        # i18n配置文件
│   └── locales/        # 语言资源文件
│       ├── en.json     # 英文
│       └── zh.json     # 中文
├── utils/              # 工具函数
│   └── tailwind-vw-plugin.js  # 自定义vw插件
├── App.jsx             # 主应用组件
├── main.jsx            # 应用入口
└── index.css           # 全局样式
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 🎨 自适应使用方式

### ✨ 插件自动生成

我们的 Tailwind CSS 3.x 插件会自动生成所有常用的 vw 工具类，**无需手动定义任何 CSS 类**！

插件启动时会显示：

```
VW Plugin loaded!
CSS variables added
Generated 1008 vw utilities
```

### 📝 直接使用方式

你可以直接在 JSX 中使用任意 vw 值，插件会自动处理：

```jsx
// ✅ 直接使用，无需手动定义
<div className="w-[94vw] h-[58vw]">
  宽度94vw，高度58vw的容器
</div>

<img className="w-[120vw] h-[26vw]" src={logo} alt="Logo" />

<span className="text-[17vw] leading-[24vw]">
  字体17vw，行高24vw的文字
</span>

<div className="mt-[93vw] px-[32vw] py-[12vw] gap-[8vw] rounded-[11vw]">
  完整的间距和样式设置
</div>
```

### 🎯 支持的属性类型

插件自动生成以下类型的工具类：

#### 📏 尺寸相关

- `w-[数字vw]` - 宽度
- `h-[数字vw]` - 高度

#### 🔤 字体相关

- `text-[数字vw]` - 字体大小
- `leading-[数字vw]` - 行高

#### 📦 间距相关

- `p-[数字vw]` - 内边距
- `px-[数字vw]` / `py-[数字vw]` - 水平/垂直内边距
- `pt-[数字vw]` / `pr-[数字vw]` / `pb-[数字vw]` / `pl-[数字vw]` - 各方向内边距
- `m-[数字vw]` - 外边距
- `mx-[数字vw]` / `my-[数字vw]` - 水平/垂直外边距
- `mt-[数字vw]` / `mr-[数字vw]` / `mb-[数字vw]` / `ml-[数字vw]` - 各方向外边距

#### 🎨 其他属性

- `gap-[数字vw]` - 间隙
- `rounded-[数字vw]` - 圆角
- `top-[数字vw]` / `right-[数字vw]` / `bottom-[数字vw]` / `left-[数字vw]` - 定位

### 📊 预生成的数值

插件预生成了以下常用数值的工具类：

```javascript
// 字体大小: 11, 14, 16, 17, 18, 20, 24, 28, 32, 36, 48, 64
// 尺寸: 6, 8, 12, 18, 24, 26, 30, 32, 38, 48, 50, 58, 60, 94, 100, 120, 150, 176, 200, 280, 288, 300, 356, 362, 547, 797, 928, 1740
// 间距: 3, 7, 13, 29, 58, 79, 93
```

### 💡 使用示例

```jsx
// Header组件中的实际使用
<header className="w-full h-[58vw] lg:h-[94vw] xl:h-[176vw]">
  <div className="w-[356vw] h-[58vw] flex items-center justify-between">
    <img className="w-[120vw] h-[26vw]" src={logo} alt="Logo" />
    <button className="text-[14vw] px-[18vw] py-[12vw] gap-[8vw]">
      语言切换
    </button>
  </div>
</header>

// Banner组件中的实际使用
<div className="w-[362vw] mt-[93vw]">
  <div className="text-[32vw] font-semibold">标题</div>
  <div className="text-[64vw] leading-[58vw] mt-[18vw]">大标题</div>
  <div className="text-[20vw] leading-[29vw] mt-[18vw]">描述文字</div>
</div>
```

### 🚀 最佳实践

1. **直接使用**：无需预定义，直接在 className 中使用 `w-[94vw]` 等
2. **设计稿对照**：以 390px 宽度的移动端设计稿为基准
3. **数值直观**：`w-[120vw]` 在 390px 视口下约等于 30.77px
4. **自动适配**：在不同设备上自动按比例缩放
5. **性能优异**：插件预生成，无运行时计算开销

## 多语言使用

```jsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t, i18n } = useTranslation();

  // 切换语言
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("zh")}>中文</button>
    </div>
  );
}
```

## 技术栈

- React 18.2.0
- Vite 5.2.0
- Tailwind CSS 3.x
- react-i18next
- PostCSS + Autoprefixer

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

本项目采用了创新的 vw 自适应方案，通过自定义 Tailwind CSS 插件实现精确的多设备适配。

### 设计原理

我们的自适应方案基于以下核心概念：

1. **基准宽度设置**：为不同设备类型设置基准宽度
2. **动态计算**：使用 CSS calc 和变量实现动态尺寸计算
3. **无缝适配**：在不同设备上保持设计比例的一致性

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

以 `text-[17vw]` 为例：

- **在 390px 视口下**：`calc(17 * 100vw / 390)` = **17px**
- **在 375px 视口下**：`calc(17 * 100vw / 390)` ≈ **16.35px**
- **在 414px 视口下**：`calc(17 * 100vw / 390)` ≈ **18.05px**

这样确保了在基准宽度 390px 下获得精确的像素值，在其他宽度下按比例缩放。

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

## 🎨 支持的属性类型

我们的自适应插件支持以下 CSS 属性的 vw 值设置：

### 📏 尺寸相关

- `w-[数字vw]` - 宽度
- `h-[数字vw]` - 高度
- `min-w-[数字vw]` - 最小宽度
- `max-w-[数字vw]` - 最大宽度
- `min-h-[数字vw]` - 最小高度
- `max-h-[数字vw]` - 最大高度

### 🔤 字体相关

- `text-[数字vw]` - 字体大小
- `leading-[数字vw]` - 行高
- `tracking-[数字vw]` - 字母间距

### 📦 间距相关

- `p-[数字vw]` - 内边距
- `px-[数字vw]` - 水平内边距
- `py-[数字vw]` - 垂直内边距
- `pt-[数字vw]` - 上内边距
- `pr-[数字vw]` - 右内边距
- `pb-[数字vw]` - 下内边距
- `pl-[数字vw]` - 左内边距
- `m-[数字vw]` - 外边距
- `mx-[数字vw]` - 水平外边距
- `my-[数字vw]` - 垂直外边距
- `mt-[数字vw]` - 上外边距
- `mr-[数字vw]` - 右外边距
- `mb-[数字vw]` - 下外边距
- `ml-[数字vw]` - 左外边距

### 📍 定位相关

- `top-[数字vw]` - 顶部距离
- `right-[数字vw]` - 右侧距离
- `bottom-[数字vw]` - 底部距离
- `left-[数字vw]` - 左侧距离
- `inset-[数字vw]` - 四边距离

### 🎨 其他属性

- `gap-[数字vw]` - 间隙
- `rounded-[数字vw]` - 圆角
- `border-[数字vw]` - 边框宽度

### 使用示例

```jsx
// 字体大小和行高
<div className="text-[24vw] leading-[32vw]">
  标题文字
</div>

// 间距设置
<div className="mt-[20vw] px-[16vw] py-[12vw]">
  内容区域
</div>

// 尺寸设置
<div className="w-[300vw] h-[200vw] rounded-[8vw]">
  卡片组件
</div>
```

### 最佳实践

1. **设计稿对照**：以 390px 宽度的移动端设计稿为基准进行开发
2. **数值直观**：`text-[16vw]` 在基准宽度下就是 16px，便于理解
3. **比例保持**：所有元素在不同设备上保持相同的视觉比例
4. **性能优化**：使用 CSS 原生 calc 计算，性能优异

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

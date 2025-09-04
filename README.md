# BitRocket Website

基于 React + Vite + Tailwind CSS + i18n 的响应式前端项目。

## 功能特性

- ✅ **React 18** - 现代化的React框架
- ✅ **Vite** - 快速的构建工具
- ✅ **Tailwind CSS** - 实用优先的CSS框架
- ✅ **i18n多语言** - 支持中英文切换
- ✅ **三端自适应** - 手机端(390px)、平板端(1024px)、PC端(1280px)
- ✅ **自定义vw插件** - 基于设计稿的响应式布局

## 响应式设计方案

项目采用基于设计稿的vw单位响应式方案：

### 设计稿基准宽度
- **手机端**: 390px
- **平板端**: 1024px  
- **PC端**: 1280px

### 使用方法
```jsx
// 示例：设计稿上手机端100px，平板端200px，PC端300px的元素
<div className="w-[100vw] h-[100vw] lg:w-[200vw] lg:h-[200vw] xl:w-[300vw] xl:h-[300vw]">
  响应式盒子
</div>
```

### 断点配置
- `默认`: 手机端 (< 1024px)
- `lg:`: 平板端 (≥ 1024px)
- `xl:`: PC端 (≥ 1280px)

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

## 自定义vw插件说明

插件支持以下CSS属性的vw转换：
- 宽高: `w-[100vw]`, `h-[100vw]`
- 内外边距: `p-[16vw]`, `m-[16vw]`, `px-[16vw]`, `py-[16vw]` 等
- 字体大小: `text-size-[16vw]`, `font-size-[16vw]`
- 其他: `gap-[16vw]`, `rounded-[8vw]`, `border-[2vw]`

插件会自动根据不同断点使用对应的基准宽度进行计算。

## 多语言使用

```jsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t, i18n } = useTranslation()
  
  // 切换语言
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh')}>中文</button>
    </div>
  )
}
```

## 技术栈

- React 18.2.0
- Vite 5.2.0
- Tailwind CSS 3.x
- react-i18next
- PostCSS + Autoprefixer

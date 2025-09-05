# Poppins 字体使用指南

## 概述

项目已配置了 Poppins 字体的自定义 Tailwind CSS 类，可以通过 className 直接应用不同字重的 Poppins 字体。

## 可用的字体类

项目提供了以下 5 种 Poppins 字体类：

| 类名                    | 字重 | 对应字体文件         |
| ----------------------- | ---- | -------------------- |
| `font-poppins-light`    | 300  | Poppins-Light.ttf    |
| `font-poppins-regular`  | 400  | Poppins-Regular.ttf  |
| `font-poppins-medium`   | 500  | Poppins-Medium.ttf   |
| `font-poppins-semibold` | 600  | Poppins-SemiBold.ttf |
| `font-poppins-bold`     | 700  | Poppins-Bold.ttf     |

## 使用方法

### 基本用法

```jsx
// Light 字体
<div className="font-poppins-light">轻字重文本</div>

// Regular 字体
<div className="font-poppins-regular">常规字重文本</div>

// Medium 字体
<div className="font-poppins-medium">中等字重文本</div>

// SemiBold 字体
<div className="font-poppins-semibold">半粗字重文本</div>

// Bold 字体
<div className="font-poppins-bold">粗字重文本</div>
```

### 结合 vw 字体大小使用

```jsx
// 结合项目的 vw 字体大小系统
<div className="text-[32vw] font-poppins-semibold">
  大标题文本
</div>

<div className="text-[16vw] font-poppins-regular">
  正文内容
</div>

<div className="text-[14vw] font-poppins-medium">
  小标题文本
</div>
```

### 实际项目中的使用示例

```jsx
// Banner 组件中的标题
<div className="text-white text-[64vw] font-poppins-semibold leading-[58vw] mt-[18vw]">
  {t('banner.title_part2')}
</div>

// Header 组件中的导航链接
<a className="text-white hover:text-gray-300 transition-colors text-[11vw] font-poppins-semibold whitespace-nowrap">
  {item}
</a>

// 数据展示组件中的数值
<span className="text-[48vw] font-poppins-semibold">
  {item.value}
</span>
```

## 技术实现

### Tailwind 配置

在 `tailwind.config.js` 中添加了自定义插件，每个类使用独立的字体族：

```javascript
function({ addUtilities }) {
  const newUtilities = {
    '.font-poppins-light': {
      fontFamily: 'Poppins-Light, system-ui, sans-serif',
    },
    '.font-poppins-regular': {
      fontFamily: 'Poppins-Regular, system-ui, sans-serif',
    },
    '.font-poppins-medium': {
      fontFamily: 'Poppins-Medium, system-ui, sans-serif',
    },
    '.font-poppins-semibold': {
      fontFamily: 'Poppins-SemiBold, system-ui, sans-serif',
    },
    '.font-poppins-bold': {
      fontFamily: 'Poppins-Bold, system-ui, sans-serif',
    },
  }
  addUtilities(newUtilities)
}
```

### 字体文件

字体文件位于 `src/assets/fonts/` 目录下，每个字体文件都定义为独立的字体族：

```css
/* 每个字重使用独立的字体族名称 */
@font-face {
  font-family: "Poppins-Light";
  src: url("/src/assets/fonts/Poppins-Light.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Poppins-Regular";
  src: url("/src/assets/fonts/Poppins-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Poppins-Medium";
  src: url("/src/assets/fonts/Poppins-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Poppins-SemiBold";
  src: url("/src/assets/fonts/Poppins-SemiBold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Poppins-Bold";
  src: url("/src/assets/fonts/Poppins-Bold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

## 迁移说明

项目中原有的 `font-xxx` 类已全部更新为 `font-poppins-xxx` 格式：

- `font-light` → `font-poppins-light`
- `font-normal` → `font-poppins-regular`
- `font-medium` → `font-poppins-medium`
- `font-semibold` → `font-poppins-semibold`
- `font-bold` → `font-poppins-bold`

## 优势

1. **独立字体族**：每个类使用独立的字体族名称，确保加载正确的字体文件
2. **明确性**：类名明确指示使用的是 Poppins 字体的具体字重
3. **一致性**：所有字体类都遵循相同的命名规范
4. **可扩展性**：未来可以轻松添加其他字体系列
5. **精确控制**：每个类直接对应具体的字体文件，避免字重回退问题
6. **性能优化**：字体文件在构建时会被正确处理和优化

## 注意事项

1. 确保 `src/assets/fonts/` 目录下有对应的字体文件
2. 每个字体类使用独立的 `font-family` 名称，不依赖 `font-weight` 属性
3. 包含了 fallback 字体：`system-ui, sans-serif`
4. 使用 `font-display: swap` 优化字体加载性能
5. 所有 `@font-face` 声明都使用 `font-weight: normal` 以避免浏览器字重计算

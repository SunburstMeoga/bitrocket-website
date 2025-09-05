# VW 插件使用说明

## 概述

现在的 Tailwind VW 插件支持**任意数值**的自动生成，你可以使用任何数字（包括小数和负数）的 vw 值，无需预先定义在 `commonValues` 数组中。

## 支持的属性

### 宽度和高度

```html
<!-- 任意宽度值 -->
<div class="w-[10vw]">10vw 宽度</div>
<div class="w-[25.5vw]">25.5vw 宽度</div>
<div class="w-[100vw]">100vw 宽度</div>

<!-- 任意高度值 -->
<div class="h-[15vw]">15vw 高度</div>
<div class="h-[22.5vw]">22.5vw 高度</div>
```

### 字体大小

```html
<!-- 使用 text-[数字vw] -->
<div class="text-[9vw]">9vw 字体大小</div>
<div class="text-[13.5vw]">13.5vw 字体大小</div>
<div class="text-[16vw]">16vw 字体大小</div>
```

### 字间距

```html
<!-- 使用 tracking-[数字vw] -->
<div class="tracking-[1vw]">1vw 字间距</div>
<div class="tracking-[2.5vw]">2.5vw 字间距</div>
<div class="tracking-[4vw]">4vw 字间距</div>

<!-- 负值字间距 -->
<div class="tracking-[-0.5vw]">-0.5vw 字间距</div>
<div class="tracking-[-1vw]">-1vw 字间距</div>
```

### 内边距

```html
<!-- 全方向内边距 -->
<div class="p-[5vw]">5vw 内边距</div>

<!-- 水平/垂直内边距 -->
<div class="px-[8vw]">水平 8vw 内边距</div>
<div class="py-[6vw]">垂直 6vw 内边距</div>

<!-- 单方向内边距 -->
<div class="pt-[4vw]">顶部 4vw 内边距</div>
<div class="pr-[3vw]">右侧 3vw 内边距</div>
<div class="pb-[2vw]">底部 2vw 内边距</div>
<div class="pl-[1vw]">左侧 1vw 内边距</div>
```

### 外边距（支持负值）

```html
<!-- 全方向外边距 -->
<div class="m-[8vw]">8vw 外边距</div>

<!-- 水平/垂直外边距 -->
<div class="mx-[6vw]">水平 6vw 外边距</div>
<div class="my-[4vw]">垂直 4vw 外边距</div>

<!-- 单方向外边距（支持负值） -->
<div class="mt-[5vw]">顶部 5vw 外边距</div>
<div class="-mt-[3vw]">顶部 -3vw 外边距</div>
<div class="mr-[2vw]">右侧 2vw 外边距</div>
<div class="mb-[1vw]">底部 1vw 外边距</div>
<div class="ml-[7vw]">左侧 7vw 外边距</div>
```

### 其他属性

```html
<!-- 间隙 -->
<div class="gap-[4vw] flex">4vw 间隙</div>

<!-- 圆角 -->
<div class="rounded-[6vw]">6vw 圆角</div>

<!-- 定位 -->
<div class="top-[10vw]">顶部定位 10vw</div>
<div class="right-[5vw]">右侧定位 5vw</div>
<div class="bottom-[8vw]">底部定位 8vw</div>
<div class="left-[12vw]">左侧定位 12vw</div>
```

### 响应式显示与渐变背景

```html
<!-- 仅手机端显示的底部渐变div -->
<div
  class="absolute bottom-0 left-0 w-full h-[166vw] lg:hidden"
  style="background: linear-gradient(180deg, rgba(25, 25, 25, 0) 0%, #191919 100%)"
>
  渐变背景div，仅在手机端显示
</div>
```

## 计算原理

所有的 vw 值都会被转换为：`calc(数字 * 100vw / var(--base-width))`

其中 `--base-width` 根据屏幕尺寸自动设置：

- **移动端**（< 1024px）：`--base-width: 390`
- **平板端**（1024px - 1279px）：`--base-width: 1024`
- **桌面端**（≥ 1280px）：`--base-width: 1280`

## 示例

在 430px 视口下：

- `w-[120vw]` = `calc(120 * 100vw / 390)` = `calc(120 * 430px / 390)` ≈ `132.31px`
- `text-size-[16vw]` = `calc(16 * 100vw / 390)` = `calc(16 * 430px / 390)` ≈ `17.64px`

## 注意事项

1. **字体大小**：使用 `text-[数字vw]` 设置字体大小，插件会自动生成正确的 font-size 样式
2. **预定义字体大小**：插件预生成了常用字体大小：11, 14, 16, 17, 18, 20, 24, 28, 32, 36, 48, 64
3. **字间距**：使用 `tracking-[数字vw]` 设置字间距，插件会自动生成正确的 letter-spacing 样式
4. **预定义字间距**：插件预生成了常用字间距：0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20（包括对应的负值）
5. **文字颜色**：使用 `text-red-500` 等颜色类设置文字颜色，不要使用 `text-[颜色值]`
6. **小数支持**：其他属性支持小数值，如 `w-[12.5vw]`、`p-[3.7vw]`
7. **负值支持**：外边距和字间距支持负值，如 `-mt-[5vw]`、`tracking-[-1vw]`
8. **自动生成**：除字体大小和字间距外，其他属性无需预定义，任何数字都会自动生成对应的 CSS 类

## 优势

- ✅ **任意数值**：支持任何数字，无需预定义
- ✅ **自动生成**：Tailwind 会自动生成使用到的类
- ✅ **响应式**：根据屏幕尺寸自动调整基准宽度
- ✅ **类型安全**：支持小数和负数
- ✅ **性能优化**：只生成实际使用的类，不会增加无用的 CSS

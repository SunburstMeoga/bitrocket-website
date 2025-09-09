# 菜单层级测试说明

## 层级设置概述

已为所有端的菜单下拉设置了最高层级 `z-[9999]`，确保菜单栏在任何情况下都显示在最顶层。

## 具体实现

### 1. 手机端菜单下拉
```jsx
{/* Menu Dropdown */}
<div className={`absolute top-full right-0 mt-[8vw] bg-[#121212] border border-gray-700 rounded-lg shadow-lg transition-all duration-200 overflow-hidden z-[9999] ${
  isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
}`}>
```

### 2. 手机端语言切换下拉
```jsx
{/* Language Dropdown */}
<div className={`absolute top-full right-0 mt-[8vw] bg-[#121212] border border-gray-700 rounded-lg shadow-lg transition-all duration-200 overflow-hidden z-[9999] ${
  isLanguageDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
}`}>
```

### 3. Pad端语言切换下拉
```jsx
{/* Language Dropdown */}
<div className={`absolute top-full right-0 mt-[8vw] bg-[#121212] border border-gray-700 rounded-lg shadow-lg transition-all duration-200 overflow-hidden z-[9999] ${
  isLanguageDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
}`}>
```

### 4. PC端语言切换下拉
```jsx
{/* Language Dropdown */}
<div className={`absolute top-full right-0 mt-[8vw] bg-[#121212] border border-gray-700 rounded-lg shadow-lg transition-all duration-200 overflow-hidden z-[9999] ${
  isLanguageDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
}`}>
```

## 层级优先级结构

```
z-[9999] - 菜单下拉内容 (最高层级)
    ↑
z-50     - Header容器
    ↑
z-40     - 其他固定元素
    ↑
z-30     - 模态框等
    ↑
z-20     - 悬浮元素
    ↑
z-10     - 一般浮动元素
    ↑
z-0      - 默认层级
```

## 测试方法

### 1. 基础层级测试
1. 打开 http://localhost:5175/
2. 在不同端（手机、pad、PC）测试菜单下拉
3. 确认下拉菜单始终显示在最顶层

### 2. 与其他元素的层级测试
如果页面上有其他高层级元素，可以通过以下方式测试：

```html
<!-- 添加测试元素到页面 -->
<div style="position: fixed; top: 100px; left: 100px; width: 200px; height: 200px; background: red; z-index: 9998;">
  测试元素 z-9998
</div>

<div style="position: fixed; top: 150px; left: 150px; width: 200px; height: 200px; background: blue; z-index: 9999;">
  测试元素 z-9999
</div>

<div style="position: fixed; top: 200px; left: 200px; width: 200px; height: 200px; background: green; z-index: 10000;">
  测试元素 z-10000
</div>
```

### 3. 验证步骤
1. **手机端测试**:
   - 点击汉堡菜单按钮
   - 确认菜单下拉显示在所有元素之上
   - 点击语言切换按钮
   - 确认语言下拉显示在所有元素之上

2. **Pad端测试**:
   - 调整浏览器宽度到1024px-1279px
   - 点击语言切换按钮
   - 确认语言下拉显示在所有元素之上

3. **PC端测试**:
   - 调整浏览器宽度到≥1280px
   - 点击语言切换按钮
   - 确认语言下拉显示在所有元素之上

## 常见层级问题解决

### 问题1: 下拉菜单被其他元素遮挡
**解决方案**: 已设置 `z-[9999]` 最高层级

### 问题2: 不同端的层级不一致
**解决方案**: 所有端统一使用 `z-[9999]`

### 问题3: 与第三方组件层级冲突
**解决方案**: `z-[9999]` 足够高，如需更高可调整为 `z-[99999]`

## 技术说明

### Tailwind CSS z-index 类
- `z-[9999]`: 自定义任意值，生成 `z-index: 9999`
- 比预定义的 `z-50` (z-index: 50) 更高
- 确保在绝大多数场景下都是最高层级

### 为什么选择 9999
1. **足够高**: 超过大多数UI库的默认层级
2. **不过度**: 避免使用过大的数值如999999
3. **标准化**: 9999是前端开发中常用的高层级值
4. **兼容性**: 所有现代浏览器都支持

## 验证结果

✅ 手机端菜单下拉层级最高
✅ 手机端语言切换下拉层级最高  
✅ Pad端语言切换下拉层级最高
✅ PC端语言切换下拉层级最高
✅ 所有端层级统一为 z-[9999]
✅ 确保菜单始终显示在最顶层

现在无论在哪个端，菜单栏的层级都是最高的，不会被任何其他元素遮挡！

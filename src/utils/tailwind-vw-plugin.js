const plugin = require('tailwindcss/plugin')

// 设计稿基准宽度配置 - 注意：这些值在CSS变量中不能包含单位
const baseWidths = {
  mobile: 390,  // 手机端基准宽度
  pad: 1024,    // pad端基准宽度
  pc: 1280      // pc端基准宽度
}

// vw函数 - 使用CSS calc和变量来动态计算
// w-[120vw] 表示 calc(120 * 100vw / var(--base-width))
function vw(px) {
  return `calc(${px} * 100vw / var(--base-width))`
}

// 创建通用的值处理函数（支持任意数字vw值）
function createValueHandler(cssProperty) {
  return (value) => {
    if (typeof value !== 'string') {
      return { [cssProperty]: value }
    }
    // 支持正数和负数的vw值：12vw, -12vw, 12.5vw, -12.5vw
    const match = value.match(/^(-?\d+(?:\.\d+)?)vw$/)
    if (match) {
      const pxValue = parseFloat(match[1])
      return {
        [cssProperty]: vw(pxValue)
      }
    }
    return {
      [cssProperty]: value
    }
  }
}

// 自定义 vw 插件
const vwPlugin = plugin(function({ addBase, addUtilities, matchUtilities, theme }) {
  console.log('VW Plugin loaded!')

  // 添加CSS变量定义
  addBase({
    ':root': {
      '--base-width': `${baseWidths.mobile}`
    },
    '@media (min-width: 1024px)': {
      ':root': {
        '--base-width': `${baseWidths.pad}`
      }
    },
    '@media (min-width: 1280px)': {
      ':root': {
        '--base-width': `${baseWidths.pc}`
      }
    }
  })

  console.log('CSS variables added')

  // 使用 matchUtilities 来支持任意 vw 值的动态生成
  // 处理宽度 w-[数字vw]
  matchUtilities(
    {
      'w': createValueHandler('width'),
    },
    {
      values: theme('width'),
      type: ['length', 'percentage']
    }
  )

  // 处理高度 h-[数字vw]
  matchUtilities(
    {
      'h': createValueHandler('height'),
    },
    {
      values: theme('height'),
      type: ['length', 'percentage']
    }
  )

  // 处理字体大小 text-[数字vw] - 使用更高优先级的方式
  matchUtilities(
    {
      'text': createValueHandler('font-size'),
    },
    {
      values: theme('fontSize'),
      type: ['length', 'percentage']
    }
  )

  // 处理行高 leading-[数字vw]
  matchUtilities(
    {
      'leading': createValueHandler('line-height'),
    },
    {
      values: theme('lineHeight'),
      type: ['length', 'percentage']
    }
  )

  // 处理内边距相关
  matchUtilities(
    {
      'p': createValueHandler('padding'),
      'px': (value) => {
        const handler = createValueHandler('padding-left')
        const result1 = handler(value)
        const handler2 = createValueHandler('padding-right')
        const result2 = handler2(value)
        return { ...result1, ...result2 }
      },
      'py': (value) => {
        const handler = createValueHandler('padding-top')
        const result1 = handler(value)
        const handler2 = createValueHandler('padding-bottom')
        const result2 = handler2(value)
        return { ...result1, ...result2 }
      },
      'pt': createValueHandler('padding-top'),
      'pr': createValueHandler('padding-right'),
      'pb': createValueHandler('padding-bottom'),
      'pl': createValueHandler('padding-left'),
    },
    {
      values: theme('padding'),
      type: ['length', 'percentage']
    }
  )

  // 处理外边距相关
  matchUtilities(
    {
      'm': createValueHandler('margin'),
      'mx': (value) => {
        const handler = createValueHandler('margin-left')
        const result1 = handler(value)
        const handler2 = createValueHandler('margin-right')
        const result2 = handler2(value)
        return { ...result1, ...result2 }
      },
      'my': (value) => {
        const handler = createValueHandler('margin-top')
        const result1 = handler(value)
        const handler2 = createValueHandler('margin-bottom')
        const result2 = handler2(value)
        return { ...result1, ...result2 }
      },
      'mt': createValueHandler('margin-top'),
      'mr': createValueHandler('margin-right'),
      'mb': createValueHandler('margin-bottom'),
      'ml': createValueHandler('margin-left'),
    },
    {
      values: theme('margin'),
      type: ['length', 'percentage'],
      supportsNegativeValues: true
    }
  )

  // 处理其他常用属性
  matchUtilities(
    {
      'gap': createValueHandler('gap'),
      'rounded': createValueHandler('border-radius'),
      'top': createValueHandler('top'),
      'right': createValueHandler('right'),
      'bottom': createValueHandler('bottom'),
      'left': createValueHandler('left'),
    },
    {
      values: theme('spacing'),
      type: ['length', 'percentage']
    }
  )

  // 特殊处理：覆盖 text-[数字vw] 的默认行为，使其应用到 font-size 而不是 color
  // 这需要在最后执行，以覆盖 Tailwind 的默认处理
  const textVwUtilities = {}

  // 生成常用的字体大小 vw 值
  const fontSizes = [11, 14, 16, 17, 18, 20, 24, 28, 32, 36, 48, 64]
  fontSizes.forEach(size => {
    textVwUtilities[`.text-\\[${size}vw\\]`] = {
      'font-size': `calc(${size} * 100vw / var(--base-width)) !important`
    }
  })

  // 添加这些工具类，使用高优先级覆盖默认行为
  addUtilities(textVwUtilities, { respectPrefix: false, respectImportant: false })

  console.log('Dynamic vw utilities configured - any [数字vw] value will be automatically generated!')
  console.log(`Generated ${Object.keys(textVwUtilities).length} text-[数字vw] font-size utilities`)
})

module.exports = vwPlugin
module.exports.baseWidths = baseWidths
module.exports.vw = vw

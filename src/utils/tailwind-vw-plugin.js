import plugin from 'tailwindcss/plugin'

// 设计稿基准宽度配置
const baseWidths = {
  mobile: 390,  // 手机端基准宽度
  pad: 1024,    // pad端基准宽度
  pc: 1280      // pc端基准宽度
}

// vw函数 - 使用CSS calc和变量来动态计算
function vw(px) {
  return `calc(${px} * 100vw / var(--base-width))`
}

// 创建通用的值处理函数（支持负数）
function createValueHandler(cssProperty) {
  return (value) => {
    console.log(`Processing ${cssProperty}: ${value}`)
    if (typeof value !== 'string') {
      return { [cssProperty]: value }
    }
    // 支持正数和负数的vw值：12vw, -12vw, 12.5vw, -12.5vw
    const match = value.match(/^(-?\d+(?:\.\d+)?)vw$/)
    if (match) {
      const pxValue = parseFloat(match[1])
      const result = vw(pxValue)
      console.log(`Converted ${value} to ${result}`)
      return {
        [cssProperty]: result
      }
    }
    return {
      [cssProperty]: value
    }
  }
}

// 自定义 vw 插件
const vwPlugin = plugin(function({ matchUtilities, theme, addBase }) {
  console.log('VW Plugin loaded!')

  // 添加CSS变量定义
  addBase({
    ':root': {
      '--base-width': `${baseWidths.mobile}`
    },
    [`@media (min-width: ${theme('screens.lg')})`]: {
      ':root': {
        '--base-width': `${baseWidths.pad}`
      }
    },
    [`@media (min-width: ${theme('screens.xl')})`]: {
      ':root': {
        '--base-width': `${baseWidths.pc}`
      }
    }
  })

  console.log('CSS variables added')

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

  // 处理字体大小
  matchUtilities(
    {
      'text-size': createValueHandler('font-size'),
      'font-size': createValueHandler('font-size'),
    },
    {
      values: theme('fontSize'),
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
      'border': createValueHandler('border-width'),
    },
    {
      values: theme('spacing'),
      type: ['length', 'percentage']
    }
  )

})

export default vwPlugin
export { baseWidths, vw }

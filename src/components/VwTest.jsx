import React, { useEffect, useState } from 'react'

const VwTest = () => {
  const [info, setInfo] = useState({
    viewportWidth: 0,
    baseWidth: '',
    actualFontSize: ''
  })

  useEffect(() => {
    const updateInfo = () => {
      const viewportWidth = window.innerWidth
      const baseWidth = getComputedStyle(document.documentElement).getPropertyValue('--base-width')
      const testElement = document.querySelector('.test-14vw')
      const actualFontSize = testElement ? getComputedStyle(testElement).fontSize : ''
      
      setInfo({
        viewportWidth,
        baseWidth: baseWidth || '未设置',
        actualFontSize
      })
      
      console.log('视口宽度:', viewportWidth)
      console.log('基准宽度:', baseWidth)
      console.log('实际字体大小:', actualFontSize)
      
      if (baseWidth) {
        const expectedSize = (14 * viewportWidth) / parseFloat(baseWidth)
        console.log('期望字体大小:', expectedSize + 'px')
      }
    }

    updateInfo()
    window.addEventListener('resize', updateInfo)
    
    return () => window.removeEventListener('resize', updateInfo)
  }, [])

  return (
    <div className="p-[16vw] bg-blue-50 rounded-[8vw] mb-[24vw]">
      <h3 className="text-[20vw] font-bold mb-[12vw]">VW计算测试</h3>
      <div className="space-y-[8vw] text-[14vw]">
        <p>视口宽度: {info.viewportWidth}px</p>
        <p>CSS变量 --base-width: {info.baseWidth}</p>
        <p>实际字体大小: {info.actualFontSize}</p>
        <p className="test-14vw">这是text-[14vw]的测试文字</p>
        <div className="w-[100vw] h-[30vw] bg-red-300 flex items-center justify-center text-white">
          100vw x 30vw 测试盒子
        </div>
      </div>
    </div>
  )
}

export default VwTest

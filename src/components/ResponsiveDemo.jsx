import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ResponsiveDemo = () => {
  const { t } = useTranslation()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth
      setWindowWidth(newWidth)
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">响应式背景色测试</h2>

      {/* 基础背景色测试 */}
      <div className="mb-4">
        <h3 className="text-lg mb-2">基础背景色测试（应该始终显示红色）:</h3>
        <div className="w-full h-20 bg-red-500 flex items-center justify-center text-white font-bold">
          基础红色背景测试
        </div>
      </div>

      {/* 简单响应式测试 */}
      <div className="mb-4">
        <h3 className="text-lg mb-2">简单响应式测试:</h3>
        <div className="w-full h-20 bg-red-500 lg:bg-green-500 xl:bg-blue-500 flex items-center justify-center text-white font-bold">
          简单响应式背景色测试
        </div>
      </div>

      {/* 响应式背景色测试 */}
      <div className="mb-4">
        <h3 className="text-lg mb-2">响应式背景色测试:</h3>
        <div className="w-full h-32 bg-red-300 lg:bg-green-300 xl:bg-blue-300 flex items-center justify-center text-black font-bold border-2 border-gray-400">
          <div className="text-center">
            <div>响应式背景色</div>
            <div className="text-sm mt-1">
              手机端: 红色 | 平板端: 绿色 | 桌面端: 蓝色
            </div>
          </div>
        </div>
      </div>

      {/* 断点显示测试 */}
      <div className="mb-4">
        <h3 className="text-lg mb-2">当前断点显示:</h3>
        <div className="p-4 bg-gray-100 rounded">
          <p className="font-bold">
            当前断点:
            <span className="text-red-600 xl:hidden lg:hidden"> 手机端 (&lt; 1024px)</span>
            <span className="text-green-600 hidden lg:inline xl:hidden"> 平板端 (1024px - 1279px)</span>
            <span className="text-blue-600 hidden xl:inline"> 桌面端 (≥ 1280px)</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            窗口宽度: {windowWidth}px
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveDemo

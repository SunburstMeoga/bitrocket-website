import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'
import ResponsiveDemo from './components/ResponsiveDemo'
import VwTest from './components/VwTest'

function App() {
  const { t } = useTranslation()

  useEffect(() => {
    const updateBaseWidth = () => {
      const baseWidth = getComputedStyle(document.documentElement).getPropertyValue('--base-width')
      const display = document.getElementById('base-width-display')
      if (display) {
        display.textContent = baseWidth || '未设置'
      }
    }

    updateBaseWidth()
    window.addEventListener('resize', updateBaseWidth)

    return () => window.removeEventListener('resize', updateBaseWidth)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 */}
      <header className="bg-white shadow-sm p-[20vw] lg:p-[20vw] xl:p-[20vw]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-[32vw] lg:text-[32vw] xl:text-[32vw] font-bold text-gray-900">
              {t('welcome')}
            </h1>
            <p className="text-[16vw] lg:text-[16vw] xl:text-[16vw] text-gray-600 mt-[8vw] lg:mt-[8vw] xl:mt-[8vw]">
              {t('description')}
            </p>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto p-[20vw]">
        <VwTest />
        <ResponsiveDemo />
      </main>
    </div>
  )
}

export default App

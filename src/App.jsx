import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  const { t } = useTranslation()

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
        {/* 这里可以添加你的主要内容 */}
        <div className="text-center py-[40vw]">
          <p className="text-[18vw] text-gray-600">
            {t('content_placeholder', '内容区域，可以在这里添加你的组件')}
          </p>
        </div>
      </main>
    </div>
  )
}

export default App

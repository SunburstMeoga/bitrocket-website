import { useTranslation } from 'react-i18next'
import Header from './components/Header'

function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* 顶部菜单栏 */}
      <Header />

      {/* 主要内容 - 添加顶部间距以避免被固定头部遮挡 */}
      <main className="pt-[58px] lg:pt-[94px] xl:pt-[176px] min-h-screen">
        {/* 这里可以添加你的主要内容 */}
        <div className="text-center py-[40vw] px-4">
          <h1 className="text-[32vw] lg:text-[32vw] xl:text-[32vw] font-bold text-white mb-4">
            {t('welcome')}
          </h1>
          <p className="text-[16vw] lg:text-[16vw] xl:text-[16vw] text-gray-300 mt-[8vw] lg:mt-[8vw] xl:mt-[8vw]">
            {t('description')}
          </p>
          <div className="mt-8">
            <p className="text-[18vw] text-gray-400">
              {t('content_placeholder', '内容区域，可以在这里添加你的组件')}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

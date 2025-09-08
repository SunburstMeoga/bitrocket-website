import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Banner from './components/Banner'
import DataDisplay from './components/DataDisplay'
import LatestNews from './components/LatestNews'
import OfficialAnnouncement from './components/OfficialAnnouncement'
import WhitePaper from './components/WhitePaper'
import Publicity from './components/Publicity'

function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#191919]">
      {/* 顶部菜单栏 */}
      <Header />

      {/* 主要内容 - 添加顶部间距以避免被固定头部遮挡 */}
      <main className="min-h-screen">
        {/* Banner区域 - 仅在手机端显示 */}
        <Banner />

        {/* 数据展示区域 - 仅在手机端显示 */}
        <DataDisplay />

        {/* Latest News区域 - 仅在手机端显示 */}
        <LatestNews />

        {/* Official Announcement区域 - 仅在手机端显示 */}
        <OfficialAnnouncement />

        {/* White Paper区域 - 仅在手机端显示 */}
        <WhitePaper />

        {/* Publicity区域 - 在所有设备上显示 */}
        <Publicity />

        {/* 其他内容区域 */}
        <div className="text-center py-[40vw] px-[16vw] hidden lg:block">
          <h1 className="text-[32vw] lg:text-[32vw] xl:text-[32vw] font-poppins-bold text-white mb-4">
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

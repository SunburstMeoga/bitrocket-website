import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Banner from './components/Banner'
import DataDisplay from './components/DataDisplay'
import LatestNews from './components/LatestNews'
import OfficialAnnouncement from './components/OfficialAnnouncement'
import WhitePaper from './components/WhitePaper'
import Publicity from './components/Publicity'
import Footer from './components/Footer'

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
      </main>

      {/* Footer区域 - 在所有设备上显示 */}
      <Footer />
    </div>
  )
}

export default App

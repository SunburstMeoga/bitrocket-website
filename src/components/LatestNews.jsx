import { useTranslation } from 'react-i18next'
import latestNewsOne from '../assets/images/phone/latest-news-one.png'
import latestNewsTwo from '../assets/images/phone/latest-news-two.png'
import latestNewsThree from '../assets/images/phone/latest-news-three.png'
// Pad端图片资源
import latestNewsOnePad from '../assets/images/pad/latest-news-one.png'
import latestNewsTwoPad from '../assets/images/pad/latest-news-two.png'
import latestNewsThreePad from '../assets/images/pad/latest-news-three.png'

const LatestNews = () => {
  const { t } = useTranslation()
  const newsItems = [
    {
      id: 1,
      // 手机端配置
      image: latestNewsOne,
      imageWidth: 'w-[256vw]',
      imageHeight: 'h-[238vw]',
      paddingTop: 'pt-[0vw]',
      // Pad端配置
      imagePad: latestNewsOnePad,
      imageWidthPad: 'w-[226vw]',
      imageHeightPad: 'h-[203vw]',
      title: t('latestNews.news.vipTier.title'),
      description: t('latestNews.news.vipTier.description'),
      time: '2025-01-20'
    },
    {
      id: 2,
      // 手机端配置
      image: latestNewsTwo,
      imageWidth: 'w-[164vw]',
      imageHeight: 'h-[164vw]',
      paddingTop: 'pt-[29vw]',
      // Pad端配置
      imagePad: latestNewsTwoPad,
      imageWidthPad: 'w-[140vw]',
      imageHeightPad: 'h-[140vw]',
      title: t('latestNews.news.btcPrediction.title'),
      description: t('latestNews.news.btcPrediction.description'),
      time: '2025-01-19'
    },
    {
      id: 3,
      // 手机端配置
      image: latestNewsThree,
      imageWidth: 'w-[269vw]',
      imageHeight: 'h-[162vw]',
      paddingTop: 'pt-[25vw]',
      // Pad端配置
      imagePad: latestNewsThreePad,
      imageWidthPad: 'w-[228vw]',
      imageHeightPad: 'h-[138vw]',
      title: t('latestNews.news.luckyUsdAirdrop.title'),
      description: t('latestNews.news.luckyUsdAirdrop.description'),
      time: '2025-01-18'
    }
  ]

  return (
    <>
      {/* 手机端布局 */}
      <section className="w-full lg:hidden py-[60vw]">
        <div className="w-full flex flex-col items-center">
          {/* Latest News 标题 */}
          <h2
            className="text-[48vw] font-poppins-bold leading-[67vw] mb-[40vw]"
            style={{
              background: 'linear-gradient(-81deg, #75513D 0%, #F3D5BB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t('latestNews.title')}
          </h2>

          {/* 新闻卡片列表 */}
          <div className="w-full flex flex-col items-center gap-[24vw]">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className={`w-[334vw] bg-[#252525] rounded-[27vw] box-border px-[23vw] pb-[17vw] ${item.paddingTop}`}
              >
                {/* 图片 */}
                <div className="w-full flex justify-center mb-[21vw]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`object-contain ${item.imageWidth} ${item.imageHeight}`}
                  />
                </div>

                {/* 标题 */}
                <h3 className="text-white text-[24vw] font-poppins-medium leading-[25vw] tracking-[0.3vw] mb-[21vw]">
                  {item.title}
                </h3>

                {/* 描述文案 */}
                <p className="text-white text-[16vw] font-poppins-regular leading-[20vw] tracking-[0.3vw] mb-[21vw]">
                  {item.description}
                </p>

                {/* 时间 */}
                <div className="text-[#9D9D9D] text-[14vw] font-poppins-regular leading-[22.5vw] tracking-[0vw]">
                  {item.time}
                </div>
              </div>
            ))}
          </div>

          {/* View all updates 按钮 */}
          <div
            className="w-[320vw] h-[60vw] bg-[#159360] rounded-[17vw] flex items-center justify-center mt-[38vw] cursor-pointer"
            onClick={() => console.log("click view all")}
          >
            <span className="text-white text-[30vw] font-poppins-regular leading-[45.9vw] tracking-[0.03vw]">
              {t('latestNews.viewAllUpdates')}
            </span>
          </div>
        </div>
      </section>

      {/* Pad端布局 */}
      <section className="w-full hidden lg:flex xl:hidden justify-center mt-[90vw]">
        <div className="w-full max-w-[928vw] flex flex-col items-center">
          {/* Latest News 标题 */}
          <h2
            className="text-[70vw] font-poppins-medium leading-[70vw] mb-[90vw]"
            style={{
              background: 'linear-gradient(-81deg, #75513D 0%, #F3D5BB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t('latestNews.title')}
          </h2>

          {/* 新闻卡片列表 - 水平排列 */}
          <div className="w-full flex justify-between px-[43vw]">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="w-[284vw] h-[347vw] bg-[#252525] rounded-[27vw] box-border px-[23vw] pb-[17vw] pt-[20vw] flex flex-col"
              >
                {/* 图片 */}
                <div className="w-full flex justify-center mb-[21vw] flex-shrink-0">
                  <img
                    src={item.imagePad}
                    alt={item.title}
                    className={`object-contain ${item.imageWidthPad} ${item.imageHeightPad} ${item.id === 1 ? '-mt-[40vw]' : ''}`}
                  />
                </div>

                {/* 标题 */}
                <h3 className="text-white text-[20vw] font-poppins-medium leading-[20vw] tracking-[0.3vw] mb-[15vw] flex-shrink-0">
                  {item.title}
                </h3>

                {/* 描述文案 */}
                <p className="text-white text-[12vw] font-poppins-regular leading-[17.1vw] tracking-[0.3vw] mb-[15vw] flex-grow">
                  {item.description}
                </p>

                {/* 时间 */}
                <div className="text-[#9D9D9D] text-[9.95vw] font-poppins-regular leading-[15vw] tracking-[0vw] flex-shrink-0">
                  {item.time}
                </div>
              </div>
            ))}
          </div>

          {/* View all updates 按钮 */}
          <div
            className="w-[272vw] h-[51vw] bg-[#159360] rounded-[14vw] flex items-center justify-center mt-[92vw] mb-[90vw] cursor-pointer"
            onClick={() => console.log("click view all")}
          >
            <span className="text-white text-[24vw] font-poppins-regular leading-[24vw] tracking-[0.03vw]">
              {t('latestNews.viewAllUpdates')}
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default LatestNews

import { useTranslation } from 'react-i18next'
import latestNewsOne from '../assets/images/phone/latest-news-one.png'
import latestNewsTwo from '../assets/images/phone/latest-news-two.png'
import latestNewsThree from '../assets/images/phone/latest-news-three.png'

const LatestNews = () => {
  const { t } = useTranslation()
  const newsItems = [
    {
      id: 1,
      image: latestNewsOne,
      imageWidth: 'w-[256vw]',
      imageHeight: 'h-[238vw]',
      title: t('latestNews.news.vipTier.title'),
      description: t('latestNews.news.vipTier.description'),
      time: '2025-01-20',
      paddingTop: 'pt-[0vw]'
    },
    {
      id: 2,
      image: latestNewsTwo,
      imageWidth: 'w-[164vw]',
      imageHeight: 'h-[164vw]',
      title: t('latestNews.news.btcPrediction.title'),
      description: t('latestNews.news.btcPrediction.description'),
      time: '2025-01-19',
      paddingTop: 'pt-[29vw]'
    },
    {
      id: 3,
      image: latestNewsThree,
      imageWidth: 'w-[269vw]',
      imageHeight: 'h-[162vw]',
      title: t('latestNews.news.luckyUsdAirdrop.title'),
      description: t('latestNews.news.luckyUsdAirdrop.description'),
      time: '2025-01-18',
      paddingTop: 'pt-[25vw]'
    }
  ]

  return (
    <section className="w-full lg:hidden py-[60vw]">
      <div className="w-full flex flex-col items-center">
        {/* Latest News 标题 */}
        <h2
          className="text-[48vw] font-poppins-bold leading-[67vw] mb-[40vw]"
          style={{
            background: 'linear-gradient(-81deg, #F3D5BB 0%, #75513D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {t('latestNews.title')}
        </h2>

        {/* 新闻卡片列表 */}
        <div className="w-full flex flex-col items-center gap-[24vw]">
          {newsItems.map((item, index) => (
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
          className="w-[320vw] h-[60vw] bg-[#159360] rounded-[17vw] flex items-center justify-center mt-[38vw] cursor-pointer lg:w-[240px] lg:h-[45px] lg:rounded-[12px] lg:mt-[28px] xl:w-[280px] xl:h-[50px] xl:rounded-[14px] xl:mt-[32px]"
          onClick={() => console.log("click view all")}
        >
          <span className="text-white text-[30vw] font-poppins-regular leading-[45.9vw] tracking-[0.03vw] lg:text-[30vw] lg:leading-[45.9vw] lg:tracking-[0.03vw] xl:text-[30vw] xl:leading-[45.9vw] xl:tracking-[0.03vw]">
            {t('latestNews.viewAllUpdates')}
          </span>
        </div>
      </div>
    </section>
  )
}

export default LatestNews

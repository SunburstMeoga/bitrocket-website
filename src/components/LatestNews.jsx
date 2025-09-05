import latestNewsOne from '../assets/images/phone/latest-news-one.png'
import latestNewsTwo from '../assets/images/phone/latest-news-two.png'
import latestNewsThree from '../assets/images/phone/latest-news-three.png'

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      image: latestNewsOne,
      imageWidth: 'w-[256vw]',
      imageHeight: 'h-[238vw]',
      title: 'New VIP tier unlocked!',
      description: 'We\'ve introduced VIP7 for elite stakers – enjoy 15% higher dynamic rewards.',
      time: '2 hours ago',
      paddingTop: 'pt-[0vw]'
    },
    {
      id: 2,
      image: latestNewsTwo,
      imageWidth: 'w-[164vw]',
      imageHeight: 'h-[164vw]',
      title: 'BTC prediction accuracy improved',
      description: 'Enhanced real-time charts through Binance API integration provide more accurate forecasts.',
      time: '5 hours ago',
      paddingTop: 'pt-[29vw]'
    },
    {
      id: 3,
      image: latestNewsThree,
      imageWidth: 'w-[269vw]',
      imageHeight: 'h-[162vw]',
      title: 'LuckyUSD daily airdrop increases',
      description: 'Get 50 LuckyUSD for free every day to practice betting now – no risk, all fun!',
      time: '1 day ago',
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
          Latest News
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
      </div>
    </section>
  )
}

export default LatestNews

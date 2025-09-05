import { useTranslation } from 'react-i18next'
import bannerImage from '../assets/images/phone/banner.png'

const Banner = () => {
  const { t } = useTranslation()

  return (
    <section className="relative w-full h-[797px] lg:hidden overflow-hidden">
      
      {/* 背景图片 */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={bannerImage}
          alt="Banner Background"
          className="w-full h-auto"
        />
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 flex justify-center">
        <div className="w-[362vw] mt-[93vw] flex flex-col items-start">
          {/* 第一部分：Revolutionize your */}
          <div className="text-white text-[32vw] font-poppins-semibold -tracking-[0.5vw]">
            {t('banner.title_part1')}
          </div>

          {/* 第二部分：cryptocur-rency experience */}
          <div className="text-white text-[64vw] font-poppins-semibold leading-[58vw] mt-[18vw] -tracking-[0.5vw]">
            {t('banner.title_part2')}
          </div>

          {/* 第三部分：描述文字 */}
          <div className="text-white text-[20vw] font-poppins-regular leading-[29vw] mt-[18vw] -tracking-[0.5vw]">
            {t('banner.description')}
          </div>

          {/* 第四部分：Get Started 按钮 */}
          <div className="mt-[18vw]">
            <div className="bg-[#159360] text-white text-[20vw] font-poppins-regular h-[38vw] px-[32vw] rounded-[11vw] flex items-center justify-center inline-flex">
              {t('banner.get_started')}
            </div>
          </div>

          {/* 第五部分：流动性信息 */}
          <div className="text-white text-[14vw] font-poppins-medium mt-[18vw] -tracking-[0.2vw]">
            {t('banner.liquidity_info')}
          </div>
        </div>
      </div>

      {/* 底部渐变div - 仅手机端显示 */}
      <div
        className="absolute bottom-0 left-0 w-full h-[166vw] lg:hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(25, 25, 25, 0) 0%, #191919 100%)'
        }}
      />
    </section>
  )
}

export default Banner

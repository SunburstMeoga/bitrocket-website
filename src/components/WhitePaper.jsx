import { useTranslation } from 'react-i18next'
import whitePaperBg from '../assets/images/phone/white-paper.png'
import whitePaperBgPad from '../assets/images/pad/white-paper.png'

const WhitePaper = () => {
  const { t } = useTranslation()

  const features = [
    {
      titleKey: 'whitePaper.features.coreFeatures.title',
      descriptionKey: 'whitePaper.features.coreFeatures.description'
    },
    {
      titleKey: 'whitePaper.features.tokenLiquidity.title',
      descriptionKey: 'whitePaper.features.tokenLiquidity.description'
    },
    {
      titleKey: 'whitePaper.features.security.title',
      descriptionKey: 'whitePaper.features.security.description'
    }
  ]

  return (
    <>
      {/* 手机端 */}
      <section className="w-full h-[870vw] lg:hidden relative">
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <img
          src={whitePaperBg}
          alt="White Paper Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 w-full h-full flex justify-center">
        <div className="w-[348vw] flex flex-col justify-center">
          {/* 标题 */}
          <h2
            className="text-[70vw] font-poppins-light leading-[70vw] -tracking-[0.03vw] mt-[20vw] mb-[18vw] break-normal whitespace-normal"
            style={{
              background: 'linear-gradient(-71deg, #75513D 0%, #F3D5BB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t('whitePaper.title')}
          </h2>

          {/* 按钮组 */}
          <div className="flex flex-col gap-[18vw] items-center">
            {/* Download 按钮 */}
            <div className="w-[292vw] h-[72vw] bg-[#159360] border border-[#159360] rounded-[17vw] flex items-center justify-center">
              <span className="text-white text-[24vw] font-poppins-regular leading-[59vw] -tracking-[0.03vw]">
                {t('whitePaper.buttons.download')}
              </span>
            </div>

            {/* Read Online 按钮 */}
            <div className="w-[292vw] h-[72vw] bg-[#222221] border border-[#159360] rounded-[17vw] flex items-center justify-center">
              <span className="text-white text-[24vw] font-poppins-regular leading-[59vw] -tracking-[0.03vw]">
                {t('whitePaper.buttons.readOnline')}
              </span>
            </div>
          </div>

          {/* 描述文案 */}
          <p
            className="text-[#9d9d9d] text-[20vw] font-poppins-medium leading-[24vw] mt-[29vw]"
            style={{ letterSpacing: '0.03em' }}
          >
            {t('whitePaper.description')}
          </p>

          {/* 特性列表 */}
          <ul className="mt-[33vw] space-y-[10vw]">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {/* 圆点 */}
                <div className="w-[8vw] h-[8vw] bg-white rounded-full mt-[8vw] mr-[12vw] flex-shrink-0"></div>
                {/* 内容 */}
                <div className="flex-1">
                  <div
                    className="text-white text-[16vw] font-poppins-medium leading-[24vw]"
                    style={{ letterSpacing: '0.03em' }}
                  >
                    <div className="font-poppins-medium">{t(feature.titleKey)}</div>
                    <div className="font-poppins-medium">{t(feature.descriptionKey)}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </section>

      {/* Pad端 */}
      <section className="w-full hidden lg:flex xl:hidden py-[56vw] px-[52vw] relative">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${whitePaperBgPad})`
          }}
        />

        {/* 内容区域 */}
        <div className="relative z-10 w-full">
          {/* 标题+按钮组区域 */}
          <div>
            {/* 标题 */}
            <h2
              className="w-[558vw] text-[70vw] font-poppins-medium leading-[76.7vw]"
              style={{
                background: 'linear-gradient(-71deg, #75513D 0%, #F3D5BB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t('whitePaper.title')}
            </h2>

            {/* 按钮组 */}
            <div className="flex gap-[17vw] mt-[38vw]">
              {/* Download 按钮 */}
              <div className="w-[248vw] h-[52vw] bg-[#159360] border border-[#159360] rounded-[17vw] flex items-center justify-center px-[24vw] box-border">
                <span className="text-white text-[24vw] font-poppins-regular">
                  {t('whitePaper.buttons.download')}
                </span>
                {/* 右箭头 - 白色 */}
                <span className="text-white text-[22vw] ml-[8vw]">→</span>
              </div>

              {/* Read Online 按钮 */}
              <div className="w-[248vw] h-[52vw] bg-[#222221] border border-[#159360] rounded-[17vw] flex items-center justify-center px-[24vw] box-border">
                <span className="text-white text-[24vw] font-poppins-regular">
                  {t('whitePaper.buttons.readOnline')}
                </span>
                {/* 右箭头 - #159360 */}
                <span className="text-[#159360] text-[22vw] ml-[8vw]">→</span>
              </div>
            </div>
          </div>

          {/* 描述文案+特性列表区域 */}
          <div className="flex justify-end mt-[104vw]">
            <div className="w-[653vw]">
              {/* 描述文案 */}
              <p className="text-[#9d9d9d] text-[22vw] font-poppins-medium leading-[32vw] text-left">
                {t('whitePaper.description')}
              </p>

              {/* 特性列表 */}
              <ul className="mt-[33vw] space-y-[2vw]">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {/* 圆点 */}
                    <div className="w-[8vw] h-[8vw] bg-white rounded-full mt-[8vw] mr-[12vw] flex-shrink-0"></div>
                    {/* 内容 */}
                    <div className="flex-1">
                      <div className="text-white text-[16vw] font-poppins-medium leading-[23.4vw]">
                        <span className="font-poppins-medium">{t(feature.titleKey)}</span>
                        <span className="font-poppins-medium">{t(feature.descriptionKey)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhitePaper

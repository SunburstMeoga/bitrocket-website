import { useTranslation } from 'react-i18next'
import publicityImagePhone from '../assets/images/phone/publicity.png'
import publicityImagePad from '../assets/images/pad/publicity.png'

const Publicity = () => {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-[#000000] pt-[20vw] lg:pt-[46vw] xl:pt-[60vw]">
      {/* 手机端和桌面端的内容容器 */}
      <div className="w-full flex justify-center px-[21vw] lg:hidden xl:flex">
        <div className="w-full max-w-[348vw] xl:max-w-[800vw] flex flex-col">
          {/* 标题 */}
          <div
            className="text-[70vw] xl:text-[64vw] leading-[75vw] xl:leading-[68vw] tracking-[-0.03vw] font-poppins-light text-left mt-[18vw] xl:mt-[32vw]"
            style={{
              background: 'linear-gradient(-71deg, #75513D 0%, #F3D5BB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              maxWidth: '100%',
              boxSizing: 'border-box'
            }}
          >
            {t('publicity.title')}
          </div>

          {/* 文案 */}
          <div className="text-white text-[24vw] xl:text-[20vw] font-poppins-medium leading-[35vw] xl:leading-[28vw] tracking-[0.03vw] text-left mt-[25vw] xl:mt-[24vw]">
            {t('publicity.description')}
          </div>

          {/* Start Now 按钮 */}
          <div className="mt-[100vw] xl:mt-[80vw] flex justify-center">
            <div className="bg-[#159360] w-[328vw] xl:w-[320vw] h-[82vw] xl:h-[80vw] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#138a56] transition-colors">
              <span className="text-white text-[28vw] xl:text-[24vw] font-poppins-medium leading-[24vw] xl:leading-[22vw] xl:tracking-[-2.5vw]">
                {t('publicity.startNow')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pad端的内容容器 */}
      <div className="w-full hidden lg:block xl:hidden box-border  pl-[21vw]">
        <div className="w-full flex flex-col">
          {/* 标题 */}
          <div
            className="text-[140vw] leading-[142.6vw] font-poppins-light text-left w-[940vw]"
            style={{
              background: 'linear-gradient(-71deg, #75513D 0%, #F3D5BB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto'
            }}
          >
            {t('publicity.title')}
          </div>

          {/* 文案 */}
          <div className="text-white text-[32vw] font-poppins-medium leading-[56.1vw] text-left mt-[21vw] w-[940vw]">
            {t('publicity.description')}
          </div>

          {/* Start Now 按钮 */}
          <div className="mt-[336vw] w-full flex justify-center items-center">
            <div className="bg-[#159360] w-[476vw] h-[120vw] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#138a56] transition-colors">
              <span className="text-white text-[45vw] font-poppins-medium">
                {t('publicity.startNow')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 图片 - 占满模块宽度 */}
      <div className="mt-[40vw] lg:mt-[101vw] xl:mt-[40vw] w-full">
        <img
          src={publicityImagePhone}
          alt="Publicity"
          className="w-full h-auto object-contain lg:hidden xl:block"
        />
        <img
          src={publicityImagePad}
          alt="Publicity"
          className="w-full h-auto object-contain hidden lg:block xl:hidden"
        />
      </div>
    </section>
  )
}

export default Publicity

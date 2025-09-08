import { useTranslation } from 'react-i18next'
import publicityImage from '../assets/images/phone/publicity.png'

const Publicity = () => {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-[#000000] pt-[20vw] lg:pt-[40vw] xl:pt-[60vw]">
      {/* 内容容器 - 响应式宽度 */}
      <div className="w-full flex justify-center px-[21vw]">
        <div className="w-full max-w-[348vw] lg:max-w-[600vw] xl:max-w-[800vw] flex flex-col">

          {/* 标题 */}
          <div
            className="text-[70vw] lg:text-[48vw] xl:text-[64vw] leading-[75vw] lg:leading-[52vw] xl:leading-[68vw] tracking-[-0.03vw] font-poppins-light text-left mt-[18vw] lg:mt-[24vw] xl:mt-[32vw]"
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
          <div className="text-white text-[24vw] lg:text-[18vw] xl:text-[20vw] font-poppins-medium leading-[35vw] lg:leading-[26vw] xl:leading-[28vw] tracking-[0.03vw] text-left mt-[25vw] lg:mt-[20vw] xl:mt-[24vw]">
            {t('publicity.description')}
          </div>

          {/* Start Now 按钮 */}
          <div className="mt-[100vw] lg:mt-[60vw] xl:mt-[80vw] flex justify-center">
            <div className="bg-[#159360] w-[328vw] lg:w-[240vw] xl:w-[320vw] h-[82vw] lg:h-[60vw] xl:h-[80vw] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#138a56] transition-colors">
              <span className="text-white text-[28vw] lg:text-[20vw] xl:text-[24vw] font-poppins-medium leading-[24vw] lg:leading-[18vw] xl:leading-[22vw]  lg:tracking-[-2vw] xl:tracking-[-2.5vw]">
                {t('publicity.startNow')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 图片 - 占满模块宽度 */}
      <div className="mt-[40vw] lg:mt-[32vw] xl:mt-[40vw] w-full">
        <img
          src={publicityImage}
          alt="Publicity"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  )
}

export default Publicity

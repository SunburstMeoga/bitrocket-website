import { useTranslation } from 'react-i18next'
import dailyActiveUsersIcon from '../assets/images/daily-active-users.png'
import totalStakeIcon from '../assets/images/total-stake.png'
import paymentProcessedIcon from '../assets/images/payment-prcessed.png'

const DataDisplay = () => {
  const { t } = useTranslation()

  const dataItems = [
    {
      icon: dailyActiveUsersIcon,
      value: '10',
      unit: 'K+',
      description: t('dataDisplay.dailyActiveUsers')
    },
    {
      icon: totalStakeIcon,
      value: '1M',
      unit: 'USDR',
      description: t('dataDisplay.totalStake')
    },
    {
      icon: paymentProcessedIcon,
      value: '$500',
      unit: 'K',
      description: t('dataDisplay.paymentProcessed')
    }
  ]

  return (
    <>
      {/* 手机端布局 */}
      <section className="w-full lg:hidden py-[60vw]">
        <div className="w-full flex flex-col items-center justify-center ">
          {dataItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center mb-[60vw] last:mb-0">
              {/* 图片部分 */}
              <div className="w-[145vw] h-[145vw] mb-[24vw] flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.description}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 数值部分 */}
              <div className="flex items-baseline justify-center h-[76vw]">
                <span
                  className="text-[48vw] font-poppins-semibold"
                  style={{
                    background: 'linear-gradient(45deg, #F3D5BB 0%, #A77F5C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {item.value}
                </span>
                <span
                  className="text-[24vw] font-poppins-semibold ml-[4vw]"
                  style={{
                    background: 'linear-gradient(45deg, #F3D5BB 0%, #A77F5C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {item.unit}
                </span>
              </div>

              {/* 描述文案部分 */}
              <div className="text-[#9D9D9D] text-[16vw] font-poppins-semibold text-center -tracking-[0.5vw]">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pad端布局 */}
      <section className="w-full hidden lg:flex xl:hidden pt-[36vw] px-[65vw]">
        <div className="w-full flex justify-center items-center">
          {dataItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center flex-1 h-[230vw]">
              {/* 图片部分 */}
              <div className="mb-[20vw] flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.description}
                  className="h-[136vw] w-auto object-contain"
                />
              </div>

              {/* 数值部分 */}
              <div className="flex items-baseline justify-center h-[76vw]">
                <span
                  className="text-[48vw] font-poppins-semibold"
                  style={{
                    background: 'linear-gradient(45deg, #F3D5BB 0%, #A77F5C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {item.value}
                </span>
                <span
                  className="text-[24vw] font-poppins-semibold ml-[4vw]"
                  style={{
                    background: 'linear-gradient(45deg, #F3D5BB 0%, #A77F5C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {item.unit}
                </span>
              </div>

              {/* 描述文案部分 */}
              <div className="text-[#9D9D9D] text-[14vw] font-poppins-semibold text-center -tracking-[0.5vw] mt-[8vw]">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default DataDisplay

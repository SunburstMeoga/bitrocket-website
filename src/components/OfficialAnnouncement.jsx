import { useTranslation } from 'react-i18next'
import officialAnnouncementBg from '../assets/images/phone/official-announcement.png'

const OfficialAnnouncement = () => {
  const { t } = useTranslation()

  const announcements = [
    {
      id: 1,
      titleKey: 'officialAnnouncement.announcements.usdrToken.title',
      descriptionKey: 'officialAnnouncement.announcements.usdrToken.description',
      featuresKey: 'officialAnnouncement.announcements.usdrToken.features'
    },
    {
      id: 2,
      titleKey: 'officialAnnouncement.announcements.stakingExit.title',
      descriptionKey: 'officialAnnouncement.announcements.stakingExit.description',
      featuresKey: 'officialAnnouncement.announcements.stakingExit.features'
    }
  ]

  return (
    <section className="w-full lg:hidden bg-[#353535] ">
      <div className="w-full flex flex-col items-center">
        {/* 标题背景图和文案 */}
        <div className="relative w-full h-[200vw]">
          {/* 背景图 */}
          <img
            src={officialAnnouncementBg}
            alt="Official Announcement Background"
            className="w-full h-[200vw] object-cover"
          />

          {/* 标题文案 */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <div className="w-[332vw] ml-[29vw]">
              <h2
                className="text-[48vw] font-poppins-medium leading-[61vw] tracking-[-0.05vw]"
                style={{
                  background: 'linear-gradient(-71deg, #F3D5BB 0%, #75513D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                <div>{t('officialAnnouncement.title.official')}</div>
                <div>{t('officialAnnouncement.title.announcement')}</div>
              </h2>
            </div>
          </div>
        </div>

        {/* 公告卡片列表 */}
        <div className="w-full flex flex-col items-center gap-[25vw]">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="w-full bg-[#252525] py-[24vw] flex justify-center"
            >
              <div className="w-[332vw]">
                {/* 卡片标题 */}
                <h3 className="text-white text-[24vw] font-poppins-medium leading-[29vw] tracking-[0.03vw] mb-[22vw]">
                  {t(announcement.titleKey)}
                </h3>

                {/* 说明文案 */}
                <p className="text-[#9d9d9d] text-[16vw] font-poppins-medium leading-[22vw] tracking-[0.03vw] mb-[20vw]">
                  {t(announcement.descriptionKey)}
                </p>

                {/* 特点列表 */}
                <div className="space-y-[10vw]">
                  {t(announcement.featuresKey, { returnObjects: true }).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      {/* 圆点 */}
                      <div className="w-[8vw] h-[8vw] bg-white rounded-full mt-[8vw] mr-[12vw] flex-shrink-0"></div>
                      {/* 特点文案 */}
                      <span className="text-white text-[16vw] font-poppins-medium leading-[24vw] tracking-[0.03vw] flex-1">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfficialAnnouncement
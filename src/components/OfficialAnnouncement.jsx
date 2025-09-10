import { useTranslation } from 'react-i18next'
import officialAnnouncementBg from '../assets/images/phone/official-announcement.png'
import officialAnnouncementBgPad from '../assets/images/pad/official-announcement.png'
import officialAnnouncementBgPc from '../assets/images/pc/official-announcement.png'

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
    <>
      {/* 手机端 */}
      <section className="w-full lg:hidden bg-[#353535] pb-[18vw]">
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
          <div className="absolute top-0 left-0 w-full h-full flex items-center px-[29vw]">
            <div className="w-full max-w-[332vw]">
              <h2
                className="text-[48vw] font-poppins-medium leading-[61vw] tracking-[-0.05vw] break-words overflow-wrap-anywhere hyphens-auto"
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
              className="w-full bg-[#252525] py-[24vw] flex justify-center px-[29vw]"
            >
              <div className="w-full max-w-[332vw]">
                {/* 卡片标题 */}
                <h3
                  className="text-white text-[24vw] font-poppins-medium leading-[29vw] tracking-[0.03vw] mb-[22vw] break-words overflow-wrap-anywhere hyphens-auto"
                  style={{
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto'
                  }}
                >
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

      {/* Pad端 */}
      <section className="w-full hidden lg:flex xl:hidden bg-[#353535] pt-[60vw] pb-[40vw] justify-center">
        <div className="w-full max-w-[928vw] flex flex-col items-center">
          {/* 标题部分 */}
          <div className="relative w-full h-[241vw] mx-[60vw] mr-[15vw] flex items-center">
            {/* 标题背景图 */}
            <div className="absolute right-[16vw] top-0">
              <img
                src={officialAnnouncementBgPad}
                alt="Official Announcement Background"
                className="w-[449vw] h-[240vw] object-cover"
              />
            </div>

            {/* 标题文案 */}
            <div className="absolute left-[60vw] top-0 h-[241vw] flex items-center">
              <h2
                className="text-[70vw] font-poppins-medium leading-[76.7vw]"
                style={{
                  background: 'linear-gradient(-71deg, #75513D 0%, #F3D5BB 100%)',
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

          {/* 公告卡片列表 */}
          <div className="w-full flex flex-col items-center gap-[20vw]">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="w-[958vw] bg-[#252525] py-[46vw] px-[57vw] box-border rounded-[23vw]"
              >
                {/* 卡片标题 */}
                <h3 className="text-white text-[35vw] font-poppins-medium leading-[21.3vw] mb-[38vw]">
                  {t(announcement.titleKey)}
                </h3>

                {/* 说明文案 */}
                <p className="text-[#9d9d9d] text-[18vw] font-poppins-regular leading-[27vw] mb-[38vw]">
                  {t(announcement.descriptionKey)}
                </p>

                {/* 特点列表 */}
                <div className="space-y-[2vw]">
                  {t(announcement.featuresKey, { returnObjects: true }).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      {/* 圆点 */}
                      <div className="w-[8vw] h-[8vw] bg-white rounded-full mt-[21vw] mr-[12vw] flex-shrink-0"></div>
                      {/* 特点文案 */}
                      <span className="text-white text-[18vw] font-poppins-medium leading-[49.7vw] flex-1">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PC端 */}
      <section className="w-full hidden xl:flex bg-[#353535] pt-0 pb-[64vw] justify-center">
        <div className="w-full flex flex-col items-center">
          {/* 标题部分 */}
          <div className="relative w-full h-[413vw] flex items-center justify-center">
            {/* 标题背景图 */}
            <div className="absolute right-[178vw] top-0">
              <img
                src={officialAnnouncementBgPc}
                alt="Official Announcement Background"
                className="w-[727vw] h-[413vw] object-cover"
              />
            </div>

            {/* 标题文案 */}
            <div className="absolute left-[175vw] top-0 h-[413vw] flex items-center">
              <h2
                className="text-[96vw] font-poppins-medium leading-[108vw]"
                style={{
                  background: 'linear-gradient(-71deg, #75513D 0%, #F3D5BB 100%)',
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

          {/* 公告卡片列表 */}
          <div className="w-full flex flex-col items-center gap-[28vw]">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="w-[1563vw] bg-[#252525] py-[67vw] px-[141vw] box-border rounded-[32vw]"
              >
                {/* 卡片标题 */}
                <h3 className="text-white text-[48vw] font-poppins-medium leading-[30vw] mb-[54vw]">
                  {t(announcement.titleKey)}
                </h3>

                {/* 说明文案 */}
                <p className="text-[#9d9d9d] text-[24vw] font-poppins-regular leading-[38vw] mb-[54vw]">
                  {t(announcement.descriptionKey)}
                </p>

                {/* 特点列表 */}
                <div className="space-y-[1vw]">
                  {t(announcement.featuresKey, { returnObjects: true }).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      {/* 圆点 */}
                      <div className="w-[8vw] h-[8vw] bg-white rounded-full mt-[31vw] mr-[12vw] flex-shrink-0"></div>
                      {/* 特点文案 */}
                      <span className="text-white text-[24vw] font-poppins-medium leading-[70vw] flex-1">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OfficialAnnouncement
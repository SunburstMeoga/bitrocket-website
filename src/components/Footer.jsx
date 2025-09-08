import { useTranslation } from 'react-i18next'
import twitterIcon from '../assets/images/phone/twitter.png'
import telegramIcon from '../assets/images/phone/telegram.png'
import discordIcon from '../assets/images/phone/discord.png'
import redditIcon from '../assets/images/phone/reddit.png'
import instagramIcon from '../assets/images/phone/instagram.png'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const socialMediaLinks = [
    { name: 'twitter', icon: twitterIcon, url: 'https://twitter.com/bitrocket' },
    { name: 'telegram', icon: telegramIcon, url: 'https://t.me/bitrocket' },
    { name: 'discord', icon: discordIcon, url: 'https://discord.gg/bitrocket' },
    { name: 'reddit', icon: redditIcon, url: 'https://reddit.com/r/bitrocket' },
    { name: 'instagram', icon: instagramIcon, url: 'https://instagram.com/bitrocket' }
  ]

  return (
    <footer className="bg-[#353535] w-full flex justify-center">
      {/* Mobile Layout */}
      <div className="w-[310vw] flex flex-col items-center py-[40vw] lg:hidden">
        {/* First Section - Three Lists */}
        <div className="flex flex-col gap-[54vw] w-[310vw]">
          {/* About Us */}
          <div className="flex flex-col items-start w-[310vw]">
            <h3 className="text-[24vw] font-poppins-semibold text-white mb-[27vw]">
              {t('footer.aboutUs.title')}
            </h3>
            <div className="flex flex-col gap-[27vw] items-start">
              <a href="#company-profile" className="text-[20vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.aboutUs.companyProfile')}
              </a>
              <a href="#team-profile" className="text-[20vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.aboutUs.teamProfile')}
              </a>
              <a href="#contact-us" className="text-[20vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.aboutUs.contactUs')}
              </a>
            </div>
          </div>

          {/* Products and Services */}
          <div className="flex flex-col items-start w-[310vw]">
            <h3 className="text-[24vw] font-poppins-semibold text-white mb-[27vw]">
              {t('footer.productsAndServices.title')}
            </h3>
            <div className="flex flex-col gap-[27vw] items-start">
              <a href="#prediction-market" className="text-[20vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.productsAndServices.predictionMarket')}
              </a>
              <a href="#staking-system" className="text-[20vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.productsAndServices.stakingSystem')}
              </a>
              <a href="#vip-levels" className="text-[20vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.productsAndServices.vipLevels')}
              </a>
            </div>
          </div>

          {/* Help Center */}
          <div className="flex flex-col items-start w-[310vw]">
            <h3 className="text-[24vw] font-poppins-semibold text-white mb-[27vw]">
              {t('footer.helpCenter.title')}
            </h3>
            <div className="flex flex-col gap-[27vw] items-start">
              <a href="#beginners-guide" className="text-[20vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.helpCenter.beginnersGuide')}
              </a>
              <a href="#faq" className="text-[20vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.helpCenter.faq')}
              </a>
              <a href="#fees" className="text-[20vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.helpCenter.fees')}
              </a>
            </div>
          </div>
        </div>

        {/* Second Section - Social Media Icons */}
        <div className="w-[310vw] flex justify-between items-center mt-[60vw]">
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-[30vw] h-[30vw] object-contain"
              />
            </a>
          ))}
        </div>

        {/* Third Section - Copyright */}
        <div className="w-[310vw] h-[80vw] flex items-center justify-center mt-[60vw]">
          <p className="text-[14vw] font-poppins-semibold text-[#6C6C6C] text-center">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>

      {/* Pad Layout (lg: 1024px+) */}
      <div className="hidden lg:flex xl:hidden w-[928vw] flex-col items-center py-[60vw]">
        {/* First Section - Three Lists in a row */}
        <div className="flex justify-between w-full">
          {/* About Us */}
          <div className="flex flex-col items-start w-[280vw]">
            <h3 className="text-[32vw] font-poppins-semibold text-white mb-[36vw]">
              {t('footer.aboutUs.title')}
            </h3>
            <div className="flex flex-col gap-[36vw] items-start">
              <a href="#company-profile" className="text-[24vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.aboutUs.companyProfile')}
              </a>
              <a href="#team-profile" className="text-[24vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.aboutUs.teamProfile')}
              </a>
              <a href="#contact-us" className="text-[24vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.aboutUs.contactUs')}
              </a>
            </div>
          </div>

          {/* Products and Services */}
          <div className="flex flex-col items-start w-[280vw]">
            <h3 className="text-[32vw] font-poppins-semibold text-white mb-[36vw]">
              {t('footer.productsAndServices.title')}
            </h3>
            <div className="flex flex-col gap-[36vw] items-start">
              <a href="#prediction-market" className="text-[24vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.productsAndServices.predictionMarket')}
              </a>
              <a href="#staking-system" className="text-[24vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.productsAndServices.stakingSystem')}
              </a>
              <a href="#vip-levels" className="text-[24vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.productsAndServices.vipLevels')}
              </a>
            </div>
          </div>

          {/* Help Center */}
          <div className="flex flex-col items-start w-[280vw]">
            <h3 className="text-[32vw] font-poppins-semibold text-white mb-[36vw]">
              {t('footer.helpCenter.title')}
            </h3>
            <div className="flex flex-col gap-[36vw] items-start">
              <a href="#beginners-guide" className="text-[24vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.helpCenter.beginnersGuide')}
              </a>
              <a href="#faq" className="text-[24vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.helpCenter.faq')}
              </a>
              <a href="#fees" className="text-[24vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.helpCenter.fees')}
              </a>
            </div>
          </div>
        </div>

        {/* Second Section - Social Media Icons */}
        <div className="w-[400vw] flex justify-between items-center mt-[90vw]">
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-[48vw] h-[48vw] object-contain"
              />
            </a>
          ))}
        </div>

        {/* Third Section - Copyright */}
        <div className="w-[400vw] h-[100vw] flex items-center justify-center mt-[90vw]">
          <p className="text-[20vw] font-poppins-semibold text-[#6C6C6C] text-center">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>

      {/* PC Layout (xl: 1280px+) */}
      <div className="hidden xl:flex w-[1200vw] flex-col items-center py-[80vw]">
        {/* First Section - Three Lists in a row */}
        <div className="flex justify-between w-full">
          {/* About Us */}
          <div className="flex flex-col items-start w-[360vw]">
            <h3 className="text-[48vw] font-poppins-semibold text-white mb-[54vw]">
              {t('footer.aboutUs.title')}
            </h3>
            <div className="flex flex-col gap-[45vw] items-start">
              <a href="#company-profile" className="text-[32vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.aboutUs.companyProfile')}
              </a>
              <a href="#team-profile" className="text-[32vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.aboutUs.teamProfile')}
              </a>
              <a href="#contact-us" className="text-[32vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.aboutUs.contactUs')}
              </a>
            </div>
          </div>

          {/* Products and Services */}
          <div className="flex flex-col items-start w-[360vw]">
            <h3 className="text-[48vw] font-poppins-semibold text-white mb-[54vw]">
              {t('footer.productsAndServices.title')}
            </h3>
            <div className="flex flex-col gap-[45vw] items-start">
              <a href="#prediction-market" className="text-[32vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.productsAndServices.predictionMarket')}
              </a>
              <a href="#staking-system" className="text-[32vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.productsAndServices.stakingSystem')}
              </a>
              <a href="#vip-levels" className="text-[32vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.productsAndServices.vipLevels')}
              </a>
            </div>
          </div>

          {/* Help Center */}
          <div className="flex flex-col items-start w-[360vw]">
            <h3 className="text-[48vw] font-poppins-semibold text-white mb-[54vw]">
              {t('footer.helpCenter.title')}
            </h3>
            <div className="flex flex-col gap-[45vw] items-start">
              <a href="#beginners-guide" className="text-[32vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.helpCenter.beginnersGuide')}
              </a>
              <a href="#faq" className="text-[32vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.helpCenter.faq')}
              </a>
              <a href="#fees" className="text-[32vw] font-poppins-medium text-white hover:text-gray-300 transition-colors">
                {t('footer.helpCenter.fees')}
              </a>
            </div>
          </div>
        </div>

        {/* Second Section - Social Media Icons */}
        <div className="w-[600vw] flex justify-between items-center mt-[120vw]">
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-[64vw] h-[64vw] object-contain"
              />
            </a>
          ))}
        </div>

        {/* Third Section - Copyright */}
        <div className="w-[600vw] h-[120vw] flex items-center justify-center mt-[120vw]">
          <p className="text-[28vw] font-poppins-semibold text-[#6C6C6C] text-center">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

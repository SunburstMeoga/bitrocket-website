import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/images/logo.png'

// 语言切换图标组件
const LanguageIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// 下拉箭头图标组件
const DropdownIcon = ({ className, isOpen }) => (
  <svg 
    className={`${className} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
    viewBox="0 0 6 3" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0L3 3L6 0" fill="currentColor"/>
  </svg>
)

// 汉堡菜单图标组件
const HamburgerIcon = ({ className, isOpen }) => (
  <svg className={`${className} transition-transform duration-300`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-300"
    />
  </svg>
)

const Header = () => {
  const { i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en')
  const languageDropdownRef = useRef(null)
  const menuDropdownRef = useRef(null)

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'ko', label: '한국어' }
  ]

  const menuItems = ['Home', 'Prediction Market', 'Staking', 'White Paper']

  // 点击外部区域关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false)
      }
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleLanguage = (langCode) => {
    i18n.changeLanguage(langCode)
    setCurrentLanguage(langCode)
    setIsLanguageDropdownOpen(false)
  }

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full h-[58px] lg:h-[94px] xl:h-[176px] bg-[#121212] fixed top-0 left-0 z-50 shadow-lg">
      <div className="w-full flex justify-center">
        {/* Mobile Layout */}
        <div className="w-[356px] h-[58px] flex items-center justify-between lg:hidden">
          {/* Logo - 左对齐 */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="BitRocket"
              className="w-[120px] h-[26px] object-contain"
            />
          </div>

          {/* Right side controls - 右对齐 */}
          <div className="flex items-center" style={{ gap: '32px' }}>
            {/* Language Switcher */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center text-white hover:text-gray-300 transition-colors"
                style={{ gap: '8px' }}
              >
                <LanguageIcon className="w-[18px] h-[18px]" />
                <span className="text-[14px] font-semibold">
                  {currentLanguage === 'en' ? 'Eng' : currentLanguage === 'zh' ? '中文' : '한국어'}
                </span>
                <DropdownIcon className="w-[6px] h-[3px]" isOpen={isLanguageDropdownOpen} />
              </button>

              {/* Language Dropdown */}
              <div className={`absolute top-full right-0 mt-2 bg-[#121212] border border-gray-700 rounded-lg shadow-lg transition-all duration-200 overflow-hidden ${
                isLanguageDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`} style={{ minWidth: 'max-content' }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => toggleLanguage(lang.code)}
                    className="block w-full text-left py-3 text-white hover:bg-gray-800 transition-colors text-[11px] font-semibold"
                    style={{ height: '48px', display: 'flex', alignItems: 'center', paddingLeft: '18px', paddingRight: '18px' }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hamburger Menu */}
            <div className="relative" ref={menuDropdownRef}>
              <button
                onClick={toggleMenu}
                className="w-6 h-6 text-white hover:text-gray-300 transition-colors"
              >
                <HamburgerIcon className="w-6 h-6" isOpen={isMenuOpen} />
              </button>

              {/* Menu Dropdown */}
              <div className={`absolute top-full right-0 mt-2 bg-[#121212] border border-gray-700 rounded-lg shadow-lg transition-all duration-200 overflow-hidden ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`} style={{ minWidth: 'max-content' }}>
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block text-white hover:bg-gray-800 transition-colors text-[11px] font-semibold"
                    style={{ height: '48px', display: 'flex', alignItems: 'center', paddingLeft: '18px', paddingRight: '18px' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pad Layout (lg: 1024px+) */}
        <div className="hidden lg:flex xl:hidden w-[928px] h-[94px] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="BitRocket"
              className="w-[150px] h-[32px] object-contain"
            />
          </div>

          {/* Menu Items - 水平居中显示 */}
          <div className="flex items-center justify-center w-[288px]" style={{ gap: '24px' }}>
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-gray-300 transition-colors text-[11px] font-semibold whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="relative" ref={languageDropdownRef}>
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center text-white hover:text-gray-300 transition-colors"
              style={{ gap: '8px' }}
            >
              <LanguageIcon className="w-[18px] h-[18px]" />
              <span className="text-[11px] font-semibold">
                {currentLanguage === 'en' ? 'Eng' : currentLanguage === 'zh' ? '中文' : '한국어'}
              </span>
              <DropdownIcon className="w-[6px] h-[3px]" isOpen={isLanguageDropdownOpen} />
            </button>

            {/* Language Dropdown */}
            <div className={`absolute top-full right-0 mt-2 bg-[#121212] border border-gray-700 rounded-lg shadow-lg transition-all duration-200 overflow-hidden ${
              isLanguageDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`} style={{ minWidth: 'max-content' }}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => toggleLanguage(lang.code)}
                  className="block w-full text-left py-3 text-white hover:bg-gray-800 transition-colors text-[11px] font-semibold"
                  style={{ height: '48px', display: 'flex', alignItems: 'center', paddingLeft: '18px', paddingRight: '18px' }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PC Layout (xl: 1280px+) */}
        <div className="hidden xl:flex w-[1740px] h-[176px] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="BitRocket"
              className="w-[280px] h-[60px] object-contain"
            />
          </div>

          {/* Menu Items - 水平居中显示 */}
          <div className="flex items-center justify-center w-[547px]" style={{ gap: '48px' }}>
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-gray-300 transition-colors text-[20px] font-semibold whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="relative" ref={languageDropdownRef}>
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center text-white hover:text-gray-300 transition-colors"
              style={{ gap: '8px' }}
            >
              <LanguageIcon className="w-[32px] h-[32px]" />
              <span className="text-[20px] font-semibold">
                {currentLanguage === 'en' ? 'Eng' : currentLanguage === 'zh' ? '中文' : '한국어'}
              </span>
              <DropdownIcon className="w-[13px] h-[7px]" isOpen={isLanguageDropdownOpen} />
            </button>

            {/* Language Dropdown */}
            <div className={`absolute top-full right-0 mt-2 bg-[#121212] border border-gray-700 rounded-lg shadow-lg transition-all duration-200 overflow-hidden ${
              isLanguageDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`} style={{ minWidth: 'max-content' }}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => toggleLanguage(lang.code)}
                  className="block w-full text-left py-3 text-white hover:bg-gray-800 transition-colors text-[11px] font-semibold"
                  style={{ height: '48px', display: 'flex', alignItems: 'center', paddingLeft: '18px', paddingRight: '18px' }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

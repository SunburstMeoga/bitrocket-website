import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex items-center gap-[12vw] lg:gap-[12vw] xl:gap-[12vw]">
      <span className="text-[14vw] lg:text-[14vw] xl:text-[14vw] text-gray-700">
        {t('language')}:
      </span>
      <div className="flex gap-[8vw] lg:gap-[8vw] xl:gap-[8vw]">
        <button
          onClick={() => changeLanguage('en')}
          className={`px-[12vw] lg:px-[12vw] xl:px-[12vw] py-[6vw] lg:py-[6vw] xl:py-[6vw] text-[14vw] lg:text-[14vw] xl:text-[14vw] rounded-[4vw] lg:rounded-[4vw] xl:rounded-[4vw] transition-colors ${
            i18n.language === 'en'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage('zh')}
          className={`px-[12vw] lg:px-[12vw] xl:px-[12vw] py-[6vw] lg:py-[6vw] xl:py-[6vw] text-[14vw] lg:text-[14vw] xl:text-[14vw] rounded-[4vw] lg:rounded-[4vw] xl:rounded-[4vw] transition-colors ${
            i18n.language === 'zh'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          中文
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitcher

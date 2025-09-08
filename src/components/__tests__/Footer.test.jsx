import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import Footer from '../Footer'

// Mock the image imports
vi.mock('../../assets/images/phone/twitter.png', () => ({ default: 'twitter.png' }))
vi.mock('../../assets/images/phone/telegram.png', () => ({ default: 'telegram.png' }))
vi.mock('../../assets/images/phone/discord.png', () => ({ default: 'discord.png' }))
vi.mock('../../assets/images/phone/reddit.png', () => ({ default: 'reddit.png' }))
vi.mock('../../assets/images/phone/instagram.png', () => ({ default: 'instagram.png' }))

const renderWithI18n = (component) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  )
}

describe('Footer Component', () => {
  it('renders all three main sections', () => {
    renderWithI18n(<Footer />)
    
    // Check for About Us section
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Company Profile')).toBeInTheDocument()
    expect(screen.getByText('Team Profile')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    
    // Check for Products and Services section
    expect(screen.getByText('Products and Services')).toBeInTheDocument()
    expect(screen.getByText('Prediction Market')).toBeInTheDocument()
    expect(screen.getByText('Staking System')).toBeInTheDocument()
    expect(screen.getByText('VIP Levels')).toBeInTheDocument()
    
    // Check for Help Center section
    expect(screen.getByText('Help Center')).toBeInTheDocument()
    expect(screen.getByText('Beginner\'s Guide')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Fees')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    renderWithI18n(<Footer />)
    
    // Check for social media links
    const socialLinks = screen.getAllByRole('link')
    const socialMediaLinks = socialLinks.filter(link => 
      link.href.includes('twitter.com') || 
      link.href.includes('t.me') || 
      link.href.includes('discord.gg') || 
      link.href.includes('reddit.com') || 
      link.href.includes('instagram.com')
    )
    
    expect(socialMediaLinks).toHaveLength(15) // 5 icons × 3 layouts (mobile, pad, pc)
  })

  it('renders copyright with current year', () => {
    renderWithI18n(<Footer />)
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear} Bitrocket`))).toBeInTheDocument()
  })

  it('has correct background color', () => {
    renderWithI18n(<Footer />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-[#353535]')
  })

  it('supports language switching', async () => {
    // Test Chinese language
    await i18n.changeLanguage('zh')
    renderWithI18n(<Footer />)
    
    expect(screen.getByText('关于我们')).toBeInTheDocument()
    expect(screen.getByText('产品与服务')).toBeInTheDocument()
    expect(screen.getByText('帮助中心')).toBeInTheDocument()
    
    // Test Korean language
    await i18n.changeLanguage('ko')
    renderWithI18n(<Footer />)
    
    expect(screen.getByText('회사 소개')).toBeInTheDocument()
    expect(screen.getByText('제품 및 서비스')).toBeInTheDocument()
    expect(screen.getByText('도움말 센터')).toBeInTheDocument()
    
    // Reset to English
    await i18n.changeLanguage('en')
  })
})

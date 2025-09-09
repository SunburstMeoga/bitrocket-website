import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import OfficialAnnouncement from '../OfficialAnnouncement'

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, options) => {
      const translations = {
        'officialAnnouncement.title.official': '官方',
        'officialAnnouncement.title.announcement': '公告',
        'officialAnnouncement.announcements.usdrToken.title': 'USDR代币在BSC上线',
        'officialAnnouncement.announcements.usdrToken.description': 'USDR现已在币安智能链上线！完全符合BEP-20标准，支持透明铸造和转账。由USDT储备支持，可1:1赎回。',
        'officialAnnouncement.announcements.usdrToken.features': [
          '无缝兑换：应用内USDT到USDR随时提取：链上',
          '提取并提供自动审核支持'
        ],
        'officialAnnouncement.announcements.stakingExit.title': '质押退出机制更新',
        'officialAnnouncement.announcements.stakingExit.description': '质押奖励达到3倍了吗？通过一键再投资自动继续赚取。无中断 - 只有增长！',
        'officialAnnouncement.announcements.stakingExit.features': [
          'VIP特权：更高等级享受优先再投资奖金',
          '公平游戏：所有计算均可在链上验证'
        ]
      }
      
      if (options?.returnObjects && Array.isArray(translations[key])) {
        return translations[key]
      }
      
      return translations[key] || key
    }
  })
}))

// Mock image imports
vi.mock('../assets/images/phone/official-announcement.png', () => ({
  default: 'phone-official-announcement.png'
}))
vi.mock('../assets/images/pad/official-announcement.png', () => ({
  default: 'pad-official-announcement.png'
}))

describe('OfficialAnnouncement', () => {
  it('renders mobile layout with correct responsive classes', () => {
    const { container } = render(<OfficialAnnouncement />)
    const mobileSections = container.querySelectorAll('section')
    const mobileSection = mobileSections[0]

    expect(mobileSection).toHaveClass('w-full', 'lg:hidden', 'bg-[#353535]')
  })

  it('renders pad layout with correct responsive classes', () => {
    const { container } = render(<OfficialAnnouncement />)
    const sections = container.querySelectorAll('section')
    const padSection = sections[1]

    expect(padSection).toHaveClass('w-full', 'hidden', 'lg:flex', 'xl:hidden', 'bg-[#353535]')
  })

  it('renders title in both layouts', () => {
    render(<OfficialAnnouncement />)
    
    // Should render title text multiple times (once for each layout)
    const officialTexts = screen.getAllByText('官方')
    const announcementTexts = screen.getAllByText('公告')
    
    expect(officialTexts.length).toBeGreaterThanOrEqual(2)
    expect(announcementTexts.length).toBeGreaterThanOrEqual(2)
  })

  it('renders announcement cards with correct content', () => {
    render(<OfficialAnnouncement />)
    
    // Check if announcement titles are rendered
    expect(screen.getAllByText('USDR代币在BSC上线')).toHaveLength(2) // Mobile + Pad
    expect(screen.getAllByText('质押退出机制更新')).toHaveLength(2) // Mobile + Pad
  })

  it('renders announcement descriptions', () => {
    render(<OfficialAnnouncement />)
    
    // Check if descriptions are rendered
    expect(screen.getAllByText(/USDR现已在币安智能链上线/)).toHaveLength(2)
    expect(screen.getAllByText(/质押奖励达到3倍了吗/)).toHaveLength(2)
  })

  it('renders feature lists with bullet points', () => {
    const { container } = render(<OfficialAnnouncement />)
    
    // Check if bullet points (white circles) are rendered
    const bulletPoints = container.querySelectorAll('.bg-white.rounded-full')
    expect(bulletPoints.length).toBeGreaterThan(0)
  })

  it('renders background images with correct sources', () => {
    render(<OfficialAnnouncement />)
    
    // Check if images are rendered with correct alt text
    const bgImages = screen.getAllByAltText('Official Announcement Background')
    expect(bgImages).toHaveLength(2) // Mobile + Pad
  })

  it('has correct padding and spacing in pad layout', () => {
    const { container } = render(<OfficialAnnouncement />)
    const sections = container.querySelectorAll('section')
    const padSection = sections[1]

    // Check if pad section has correct padding classes
    expect(padSection).toHaveClass('pt-[60vw]', 'pb-[40vw]')
  })

  it('renders cards with correct dimensions in pad layout', () => {
    const { container } = render(<OfficialAnnouncement />)
    const padCards = container.querySelectorAll('section:nth-child(2) .w-\\[958vw\\]')
    
    // Should have 2 announcement cards in pad layout
    expect(padCards).toHaveLength(2)
  })
})

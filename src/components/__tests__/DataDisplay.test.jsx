import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import DataDisplay from '../DataDisplay'

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        'dataDisplay.dailyActiveUsers': 'Daily active users',
        'dataDisplay.totalStake': 'Total stake',
        'dataDisplay.paymentProcessed': 'Payment processed'
      }
      return translations[key] || key
    }
  })
}))

// Mock image imports
vi.mock('../assets/images/daily-active-users.png', () => ({
  default: 'daily-active-users.png'
}))
vi.mock('../assets/images/total-stake.png', () => ({
  default: 'total-stake.png'
}))
vi.mock('../assets/images/payment-prcessed.png', () => ({
  default: 'payment-processed.png'
}))

describe('DataDisplay', () => {
  it('renders all three data items', () => {
    render(<DataDisplay />)
    
    // Check if all three descriptions are rendered
    expect(screen.getByText('Daily active users')).toBeInTheDocument()
    expect(screen.getByText('Total stake')).toBeInTheDocument()
    expect(screen.getByText('Payment processed')).toBeInTheDocument()
  })

  it('renders correct values and units', () => {
    render(<DataDisplay />)
    
    // Check if values are rendered
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('1M')).toBeInTheDocument()
    expect(screen.getByText('$500')).toBeInTheDocument()
    
    // Check if units are rendered
    expect(screen.getByText('K+')).toBeInTheDocument()
    expect(screen.getByText('USDR')).toBeInTheDocument()
    expect(screen.getByText('K')).toBeInTheDocument()
  })

  it('renders images with correct alt text', () => {
    render(<DataDisplay />)
    
    // Check if images are rendered with correct alt text
    expect(screen.getByAltText('Daily active users')).toBeInTheDocument()
    expect(screen.getByAltText('Total stake')).toBeInTheDocument()
    expect(screen.getByAltText('Payment processed')).toBeInTheDocument()
  })

  it('has correct responsive classes for mobile layout', () => {
    const { container } = render(<DataDisplay />)
    const mobileSection = container.querySelector('section')

    // Check if the mobile section has the correct responsive classes
    expect(mobileSection).toHaveClass('w-full', 'lg:hidden')
  })

  it('has correct responsive classes for pad layout', () => {
    const { container } = render(<DataDisplay />)
    const sections = container.querySelectorAll('section')
    const padSection = sections[1] // Second section is for pad layout

    // Check if the pad section has the correct responsive classes
    expect(padSection).toHaveClass('w-full', 'hidden', 'lg:flex', 'xl:hidden')
  })

  it('renders both mobile and pad layouts', () => {
    const { container } = render(<DataDisplay />)
    const sections = container.querySelectorAll('section')

    // Should have two sections: one for mobile, one for pad
    expect(sections).toHaveLength(2)
  })
})

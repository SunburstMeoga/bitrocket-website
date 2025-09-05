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
vi.mock('../assets/images/phone/daily-active-users.png', () => ({
  default: 'daily-active-users.png'
}))
vi.mock('../assets/images/phone/total-stake.png', () => ({
  default: 'total-stake.png'
}))
vi.mock('../assets/images/phone/payment-prcessed.png', () => ({
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

  it('has correct responsive classes', () => {
    const { container } = render(<DataDisplay />)
    const section = container.querySelector('section')
    
    // Check if the section has the correct responsive classes
    expect(section).toHaveClass('w-full', 'lg:hidden')
  })
})

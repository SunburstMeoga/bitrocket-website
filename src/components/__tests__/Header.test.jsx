import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import Header from '../Header'

// Mock the logo import
jest.mock('../../assets/images/logo.png', () => 'logo.png')

describe('Header Component', () => {
  const renderWithI18n = (component) => {
    return render(
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    )
  }

  test('renders logo correctly', () => {
    renderWithI18n(<Header />)
    const logo = screen.getByAltText('BitRocket')
    expect(logo).toBeInTheDocument()
  })

  test('renders language switcher with all language options', () => {
    renderWithI18n(<Header />)
    const languageButton = screen.getByText(/Eng|中文|한국어/)
    expect(languageButton).toBeInTheDocument()
  })

  test('renders hamburger menu button on mobile', () => {
    renderWithI18n(<Header />)
    const hamburgerButton = screen.getByRole('button')
    expect(hamburgerButton).toBeInTheDocument()
  })

  test('toggles mobile menu when hamburger is clicked', () => {
    renderWithI18n(<Header />)

    // Click hamburger button (last button should be hamburger)
    const hamburgerButtons = screen.getAllByRole('button')
    const hamburgerButton = hamburgerButtons[hamburgerButtons.length - 1]
    fireEvent.click(hamburgerButton)

    // Menu items should now be visible (using translated text)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Prediction Market')).toBeInTheDocument()
    expect(screen.getByText('Staking')).toBeInTheDocument()
    expect(screen.getByText('White Paper')).toBeInTheDocument()
  })

  test('toggles language dropdown when clicked', () => {
    renderWithI18n(<Header />)

    // Find language switcher button
    const languageButton = screen.getByText(/Eng|中文|한국어/)
    fireEvent.click(languageButton.closest('button'))

    // Check if dropdown options appear
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByText('中文')).toBeInTheDocument()
    expect(screen.getByText('한국어')).toBeInTheDocument()
  })

  test('has correct background color and responsive heights', () => {
    renderWithI18n(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-[#121212]') // Updated background color
    expect(header).toHaveClass('h-[58vw]') // Mobile height
    expect(header).toHaveClass('lg:h-[96vw]') // Pad height (updated)
    expect(header).toHaveClass('xl:h-[176vw]') // PC height
  })

  test('pad layout has correct dimensions', () => {
    renderWithI18n(<Header />)

    // Check if pad layout exists with correct classes
    const padLayout = document.querySelector('.hidden.lg\\:flex.xl\\:hidden')
    expect(padLayout).toBeInTheDocument()
    expect(padLayout).toHaveClass('w-[928vw]', 'h-[96vw]')

    // Check menu container width
    const menuContainer = document.querySelector('.w-\\[288vw\\]')
    expect(menuContainer).toBeInTheDocument()
  })

  test('language switcher has correct icon sizes for different breakpoints', () => {
    renderWithI18n(<Header />)

    // Check if language icons have correct responsive classes
    const languageIcons = document.querySelectorAll('svg')
    const languageIcon = Array.from(languageIcons).find(icon =>
      icon.classList.contains('w-[18vw]') ||
      icon.classList.contains('w-[17vw]') ||
      icon.classList.contains('w-[32vw]')
    )
    expect(languageIcon).toBeInTheDocument()
  })
})

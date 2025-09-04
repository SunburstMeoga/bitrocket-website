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
    expect(logo).toHaveClass('w-[120px]', 'h-[26px]')
  })

  test('renders language switcher', () => {
    renderWithI18n(<Header />)
    const languageButton = screen.getByText(/Eng|中文/)
    expect(languageButton).toBeInTheDocument()
  })

  test('renders hamburger menu button', () => {
    renderWithI18n(<Header />)
    const hamburgerButton = screen.getByRole('button')
    expect(hamburgerButton).toBeInTheDocument()
  })

  test('toggles mobile menu when hamburger is clicked', () => {
    renderWithI18n(<Header />)
    
    // Initially menu should be closed
    expect(screen.queryByText('Home')).not.toBeVisible()
    
    // Click hamburger button
    const hamburgerButtons = screen.getAllByRole('button')
    const hamburgerButton = hamburgerButtons[1] // Second button is hamburger
    fireEvent.click(hamburgerButton)
    
    // Menu should now be visible
    expect(screen.getByText('Home')).toBeVisible()
    expect(screen.getByText('About')).toBeVisible()
    expect(screen.getByText('Features')).toBeVisible()
    expect(screen.getByText('Contact')).toBeVisible()
  })

  test('has correct background color and height', () => {
    renderWithI18n(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-[#121212]', 'h-[58px]')
  })

  test('has correct max width for content', () => {
    renderWithI18n(<Header />)
    const header = screen.getByRole('banner')
    const contentDiv = header.querySelector('div')
    expect(contentDiv).toHaveClass('max-w-[373px]')
  })
})

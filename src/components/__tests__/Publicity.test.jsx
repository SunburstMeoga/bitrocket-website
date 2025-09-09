import React from 'react'
import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import Publicity from '../Publicity'

// Mock the publicity image imports
jest.mock('../../assets/images/phone/publicity.png', () => 'publicity-phone.png')
jest.mock('../../assets/images/pad/publicity.png', () => 'publicity-pad.png')

describe('Publicity Component', () => {
  const renderWithI18n = (component) => {
    return render(
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    )
  }

  test('renders the publicity component', () => {
    renderWithI18n(<Publicity />)

    // 检查标题是否渲染
    expect(screen.getByText(/Ready to predict, stake, and earn/i)).toBeInTheDocument()

    // 检查描述文字是否渲染
    expect(screen.getByText(/Simple, fast, and highly rewarding/i)).toBeInTheDocument()

    // 检查按钮是否渲染
    expect(screen.getByText(/Start Now/i)).toBeInTheDocument()

    // 检查图片是否渲染
    const image = screen.getByAltText('Publicity')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
  })

  test('supports multiple languages', async () => {
    // 测试中文
    await i18n.changeLanguage('zh')
    renderWithI18n(<Publicity />)

    expect(screen.getByText(/准备好预测、质押和赚取收益了吗/i)).toBeInTheDocument()
    expect(screen.getByText(/立即开始/i)).toBeInTheDocument()

    // 恢复英文
    await i18n.changeLanguage('en')
  })

  test('has correct responsive styling classes', () => {
    renderWithI18n(<Publicity />)

    // 检查容器的背景色和样式
    const section = screen.getByRole('img').closest('section')
    expect(section).toHaveClass('w-full', 'bg-[#000000]')

    // 检查按钮的样式
    const button = screen.getByText(/Start Now/i).closest('div')
    expect(button).toHaveClass('bg-[#159360]', 'rounded-full')
  })

  test('has correct text alignment and font styles', () => {
    renderWithI18n(<Publicity />)

    // 检查标题是否左对齐且使用light字体
    const title = screen.getByText(/Ready to predict, stake, and earn/i)
    expect(title).toHaveClass('text-left', 'font-poppins-light')

    // 检查描述文字是否左对齐
    const description = screen.getByText(/Simple, fast, and highly rewarding/i)
    expect(description).toHaveClass('text-left')
  })

  test('button is centered', () => {
    renderWithI18n(<Publicity />)

    // 检查按钮容器是否居中
    const buttonContainer = screen.getByText(/Start Now/i).closest('div').parentElement
    expect(buttonContainer).toHaveClass('flex', 'justify-center')
  })

  test('has pad-specific styling for lg breakpoint', () => {
    renderWithI18n(<Publicity />)

    // 检查pad端容器是否存在
    const padContainer = document.querySelector('.hidden.lg\\:block.xl\\:hidden')
    expect(padContainer).toBeInTheDocument()

    // 检查pad端图片是否存在
    const padImage = document.querySelector('img.hidden.lg\\:block.xl\\:hidden')
    expect(padImage).toBeInTheDocument()
    expect(padImage).toHaveAttribute('src', 'publicity-pad.png')
  })

  test('renders different images for different breakpoints', () => {
    renderWithI18n(<Publicity />)

    // 检查手机端图片
    const phoneImage = document.querySelector('img.lg\\:hidden.xl\\:block')
    expect(phoneImage).toBeInTheDocument()
    expect(phoneImage).toHaveAttribute('src', 'publicity-phone.png')

    // 检查pad端图片
    const padImage = document.querySelector('img.hidden.lg\\:block.xl\\:hidden')
    expect(padImage).toBeInTheDocument()
    expect(padImage).toHaveAttribute('src', 'publicity-pad.png')
  })
})

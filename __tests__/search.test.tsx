import { screen, render, fireEvent } from '@testing-library/react'
import Search from '@/components/Search'
import { describe } from 'vitest'

describe('search', () => {
  render(<Search />)

  const input = screen.getByRole('input')

  test('check visibility search input', () => {
    expect(input).toBeVisible()
  })

  test('search for items', () => {
    fireEvent.change(input, { target: { value: 'Shoe' } })
    const searchValueElement = screen.getByText('Shoe', { exact: false })
    expect(searchValueElement).toBeInTheDocument()
  })
})

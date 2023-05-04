import { screen, render, fireEvent } from '@testing-library/react'
import Search from '@/app/components/Search'

test('renders search icon, open search bar and try to search for items', () => {
  render(<Search />)

  const searchIcon = document.querySelector('#search-icon') as HTMLButtonElement
  const searchBar = document.querySelector('#search-bar') as HTMLInputElement

  expect(searchIcon).toBeVisible()
  expect(searchBar).not.toBeVisible()

  fireEvent.click(searchIcon)
  expect(searchBar).toBeVisible()

  fireEvent.change(searchBar, { target: { value: 'Shoe' } })
  const searchValueElement = screen.getByText('Shoe', { exact: false })
  expect(searchValueElement).toBeInTheDocument()

  fireEvent.click(searchIcon)
  expect(searchBar).not.toBeVisible()
})

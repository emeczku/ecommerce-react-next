import { render } from '@testing-library/react'
import Navbar from '@/components/Navbar'
import links from '@/data/navbarLinks.json'

test('renders all navbar items', () => {
  const { getByRole } = render(<Navbar items={links.items} />)
  const nav = getByRole('navigation')
  expect(nav).toBeVisible()

  const navLinks = nav.querySelectorAll('a')
  expect(navLinks.length).toBe(links.items.length)

  navLinks.forEach((item, index) => {
    expect(navLinks[index].textContent).toBe(links.items[index].name)
  })
})

import { render } from '@testing-library/react'
import Navbar from '@/app/components/Navbar'
import { links } from '@/app/data/navbarLinks.json'

test('renders all navbar items', () => {
  const { getByRole } = render(<Navbar items={links} />)
  const nav = getByRole('navigation')
  expect(nav).toBeVisible()

  const navLinks = nav.querySelectorAll('a')
  expect(navLinks.length).toBe(links.length)

  navLinks.forEach((item, index) => {
    expect(navLinks[index].textContent).toBe(links[index].name)
  })
})

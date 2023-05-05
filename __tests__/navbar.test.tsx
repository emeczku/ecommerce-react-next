import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'
import links from '@/data/navbarLinks'
import { describe } from 'vitest'

describe('navbar', () => {
  test('render navbar and all links', () => {
    render(<Navbar items={links} />)

    const nav = screen.getByRole('navigation')
    expect(nav).toBeVisible()

    const navLinks = screen.getAllByRole('link')
    expect(navLinks.length).toBe(links.length)

    navLinks.forEach((item, index) => {
      expect(navLinks[index].textContent).toBe(links[index].name)
    })
  })
})

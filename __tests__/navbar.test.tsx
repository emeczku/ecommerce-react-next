import { render, screen, within } from '@testing-library/react'
import navbar from '../src/app/components/navbar'

test('home', () => {
    render(<navbar />);

    const wrapper = within(screen.getByRole('nav'));

    expect(wrapper).toBeDefined()

    const items = screen.getAllByRole('nav-item')

    expect(items.length).toBe(4)
})
import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    )
  })

  it('should render with markers in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Petrolina',
        slug: 'petrolina',
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      {
        id: '2',
        name: 'Juazeiro',
        slug: 'juazeiro',
        location: {
          latitude: 1,
          longitude: 1
        }
      }
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/petrolina/i)).toBeInTheDocument()
    expect(screen.getByTitle(/juazeiro/i)).toBeInTheDocument()
  })
})

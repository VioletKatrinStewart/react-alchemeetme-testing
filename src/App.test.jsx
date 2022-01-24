import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const heading = screen.getByText(/meet/i)

  const name = await screen.findByText(/vonta/i)

  const logo = await screen.findByAltText(/alchemy logo/i)

  expect(heading).toBeInTheDocument()
  expect(name).toBeInTheDocument()
  expect(logo).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react';
import HeaderComponent from '../components/HeaderComponent'
import { MemoryRouter } from 'react-router-dom';

test('renders Header test', () => {
  render(<HeaderComponent />, {wrapper: MemoryRouter});
  const textElement = screen.getByText('Personal Pokedex!');
  expect(textElement).toBeInTheDocument();
});

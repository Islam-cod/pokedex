import { render, screen } from '@testing-library/react';
import ErrorComponent from '../components/ErrorComponent'

test('renders SomeError test', () => {
  render(<ErrorComponent error={"SomeError"}/>);
  const textElement = screen.getByText(/SomeError/i);
  expect(textElement).toBeInTheDocument();
});

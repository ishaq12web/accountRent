import { render, screen } from '@testing-library/react';
import Header from './header'; // Adjust the path if necessary

test('renders header component', () => {
  render(<Header />);
  expect(screen.getByText(/header text/i)).toBeInTheDocument();
});

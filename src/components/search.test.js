import { render, screen } from '@testing-library/react';
import App from '../pages/index.js';

test('render header', () => {
render(<App />);
const linkElement = screen.getByText(/home/i);
expect(linkElement).toBeInTheDocument();
});
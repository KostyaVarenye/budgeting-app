import { render, screen } from '@testing-library/react';
import App from './App';

test('renders First', () => {
  render(<App />);
  const linkElement = screen.getByText(/First/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Second', () => {
  render(<App />);
  const linkElement = screen.getByText(/Second/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Third', () => {
  render(<App />);
  const linkElement = screen.getByText(/Third/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders App component', () => {
  render(<App />);
  const linkElement = screen.queryByText(/Fourth/i);
  expect(linkElement).not.toBeInTheDocument();
});
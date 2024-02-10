import { render, screen } from '@testing-library/react';
import App from './App';

test('render', () => {
  render(<App />);
  const liveHeader = screen.getByText(/LIVE:/i);
  expect(liveHeader).toBeInTheDocument();
});

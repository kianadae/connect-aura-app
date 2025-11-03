import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it('renders the application with all providers', () => {
    const { container } = render(<App />);
    // The app should render with the router and providers
    expect(container).toBeInTheDocument();
  });
});

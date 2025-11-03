# Testing Guide

This project uses **Vitest** and **React Testing Library** for testing.

## Running Tests

```bash
# Run tests in watch mode (interactive)
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

- **`setup.ts`** - Global test setup and configuration
- **`utils/test-utils.tsx`** - Custom render function with all providers

## Writing Tests

### Basic Component Test

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils/test-utils';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Testing User Interactions

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils/test-utils';
import userEvent from '@testing-library/user-event';
import MyButton from './MyButton';

describe('MyButton', () => {
  it('handles click events', async () => {
    const user = userEvent.setup();
    render(<MyButton />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(button).toHaveClass('clicked');
  });
});
```

## Best Practices

1. **Use the custom render** from `test-utils.tsx` to include all providers
2. **Query by role or text** instead of test IDs when possible
3. **Test user behavior**, not implementation details
4. **Keep tests simple** and focused on one thing
5. **Use descriptive test names** that explain what is being tested

## File Naming

- Test files should be named `*.test.tsx` or `*.test.ts`
- Place tests next to the component they test, or in a `__tests__` folder

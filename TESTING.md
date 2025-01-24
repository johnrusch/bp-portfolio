# Testing Guide

This document outlines the testing strategy and setup for the BP Portfolio application.

## Testing Stack

- **Unit Tests**: Vitest + Testing Library
- **Integration Tests**: Playwright
- **Test Files Location**:
  - Unit tests: Located next to the components in `__tests__` directories
  - Integration tests: Located in the `/tests` directory

## Running Tests

```bash
# Run all tests
npm test

# Run only unit tests
npm run test:unit

# Run only integration tests
npm run test:integration

# Run tests in watch mode (for development)
npm run test:unit -- --watch
```

## Test Structure

### Unit Tests
Unit tests cover individual components and utilities:

- **Components**: Test rendering, props, user interactions
  - `Item.test.ts`: Tests thumbnail generation, link handling, keyboard navigation
  - `ContainerView.test.ts`: Tests slot content rendering, animations

- **Utilities**: Test configuration and helper functions
  - `sanityClient.test.ts`: Tests client configuration
  - `layout.server.test.ts`: Tests data fetching and processing

### Integration Tests
Integration tests cover end-to-end user flows:

- **Navigation**: Tests page navigation and content loading
- **Image Loading**: Tests lazy loading functionality
- **External Links**: Tests opening content in new tabs

## Writing New Tests

### Component Tests
1. Create a new test file in the `__tests__` directory next to the component
2. Import the component and testing utilities
3. Write tests for:
   - Initial rendering
   - Props handling
   - User interactions
   - Error states

### Integration Tests
1. Add new test files in the `/tests` directory
2. Focus on user flows and interactions
3. Use page objects when tests get complex

## Best Practices

1. **Test Coverage**:
   - Test both success and error cases
   - Test edge cases and boundary conditions
   - Test accessibility features
   - Test thumbnail handling for various scenarios:
     - Valid thumbnails with assets
     - Missing thumbnails
     - Invalid thumbnail structures

2. **Maintainability**:
   - Keep tests focused and atomic
   - Use descriptive test names
   - Follow the Arrange-Act-Assert pattern
   - Properly mock external dependencies:
     - Use `vi.fn()` for function mocks
     - Use `Object.defineProperty` for window methods
     - Clean up mocks in afterEach blocks

3. **Performance**:
   - Mock external services in unit tests
   - Use test isolation
   - Clean up after tests
   - Avoid unnecessary re-renders in component tests

4. **Component Testing**:
   - Test slot content rendering properly:
     - Use appropriate slot syntax for Svelte components
     - Verify slot content is rendered correctly
   - Test animations and transitions:
     - Verify presence of animation classes
     - Check transition timing when relevant
   - Test user interactions:
     - Click events
     - Keyboard navigation
     - External link handling

## Continuous Integration

Tests are run automatically:
- On every pull request
- Before deployment to production
- Nightly for regression testing

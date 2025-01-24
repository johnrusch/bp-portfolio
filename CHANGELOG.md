# Changelog

## [2025-01-24]
- Added comprehensive test suite
  - Purpose: To ensure code reliability and make future changes easier
  - Changes:
    - Added unit tests for components using Vitest and Testing Library
    - Added integration tests using Playwright
    - Added tests for Sanity client and server-side data loading
  - Affected files:
    - Added `src/components/__tests__/Item.test.ts`
    - Added `src/components/__tests__/ContainerView.test.ts`
    - Added `src/lib/__tests__/sanityClient.test.ts`
    - Added `src/routes/__tests__/layout.server.test.ts`
    - Added `tests/navigation.test.ts`
  - Dependencies added:
    - Added `@testing-library/svelte` for component testing

## [2025-01-24]
- Improved image loading performance
  - Purpose: To optimize image loading and reduce initial page load time
  - Changes:
    - Added lazy loading and async decoding to images
    - Optimized Sanity CDN image delivery with appropriate sizing and formats
    - Enhanced Sanity client configuration for better CDN utilization
  - Affected files:
    - Modified `src/components/Item.svelte`
    - Modified `src/routes/+layout.server.js`
    - Modified `src/sanityClient.js`

## [2025-01-24]
- Downgraded Node.js version requirement to v18.x
  - Purpose: To ensure compatibility with SvelteKit's adapter-vercel which supports Node.js 16 or 18
  - Affected files: 
    - Modified `.nvmrc` to specify Node.js 18.19.0
    - Updated `package.json` to specify Node.js 18.x in engines field

## [2025-01-24]
- Updated Node.js version requirement to v20.x
  - Purpose: To comply with Vercel's Node.js version requirements and maintain compatibility
  - Affected files: 
    - Added `.nvmrc` file specifying Node.js 20.11.0
    - Updated `package.json` to specify Node.js >=20.0.0 in engines field

## [2025-01-24]
### Fixed
- Fixed failing tests across the codebase
  - Purpose: Improve test reliability and ensure proper component behavior validation
  - Affected files:
    - `src/components/__tests__/ContainerView.test.ts`: Updated slot handling and animation tests
    - `src/components/__tests__/Item.test.ts`: Fixed window.open mocking and event handling
    - `src/routes/__tests__/layout.server.test.ts`: Improved thumbnail handling test cases
    - `src/test/setup.ts`: Added proper test environment configuration

### Changed
- Improved test infrastructure and assertions
  - Purpose: Better align test behavior with production code and improve maintainability
  - Changes:
    - Refactored test setup and teardown procedures
    - Updated mock implementations to match actual component behavior
    - Added more specific assertions for edge cases
    - Improved error handling in async tests

# Changelog

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

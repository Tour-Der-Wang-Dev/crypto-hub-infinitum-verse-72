
# Scripts Reference

This document provides a reference for all npm scripts defined in the project's package.json file.

## Available Scripts

### Development Scripts

#### `dev`
```typescript
interface DevScriptOptions {
  host?: string;    // Optional: Host to bind to (default: localhost)
  port?: number;    // Optional: Port to use (default: 8080)
}
```

**Description:** Starts the development server with hot module replacement.

**Usage:**
```bash
# Start with default configuration
npm run dev

# Start with custom port
npm run dev -- --port=3000

# Start with host and port specified
npm run dev -- --host=0.0.0.0 --port=4000
```

#### `build:dev`
```typescript
interface BuildDevOptions {
  mode: 'development';   // Build in development mode
  sourcemap: boolean;    // Generate source maps (default: true)
}
```

**Description:** Builds the application in development mode with source maps enabled.

**Usage:**
```bash
# Build for development
npm run build:dev
```

### Production Scripts

#### `build`
```typescript
interface BuildOptions {
  mode?: 'production';   // Build in production mode (default)
  minify?: boolean;      // Minify output (default: true)
  sourcemap?: boolean;   // Generate source maps (default: false)
}
```

**Description:** Builds the application for production deployment with optimizations.

**Usage:**
```bash
# Standard production build
npm run build
```

#### `preview`
```typescript
interface PreviewOptions {
  port?: number;    // Optional: Port to use (default: 8080)
}
```

**Description:** Serves the production build locally for preview before deployment.

**Usage:**
```bash
# Preview the production build
npm run preview

# Preview on a specific port
npm run preview -- --port=5000
```

### Testing Scripts

#### `test`
```typescript
interface TestOptions {
  watch?: boolean;       // Watch mode (default: false)
  coverage?: boolean;    // Generate coverage reports (default: false)
  ui?: boolean;          // Open UI for test results (default: false)
}
```

**Description:** Runs tests using Vitest.

**Usage:**
```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage report
npm run test -- --coverage
```

#### `test:e2e`
```typescript
interface E2ETestOptions {
  headed?: boolean;      // Run in headed mode (default: false)
  browser?: 'chromium' | 'firefox' | 'webkit';  // Browser to use
}
```

**Description:** Runs end-to-end tests using Playwright.

**Usage:**
```bash
# Run e2e tests
npm run test:e2e

# Run e2e tests in headed mode
npm run test:e2e -- --headed

# Run e2e tests with Firefox
npm run test:e2e -- --browser=firefox
```

### Linting and Formatting Scripts

#### `lint`
```typescript
interface LintOptions {
  fix?: boolean;         // Auto-fix issues (default: false)
  cache?: boolean;       // Use ESLint cache (default: true)
}
```

**Description:** Lints the codebase using ESLint.

**Usage:**
```bash
# Check for linting issues
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

#### `format`
```typescript
interface FormatOptions {
  check?: boolean;       // Check formatting without changing files
  ignore?: string[];     // Patterns to ignore
}
```

**Description:** Formats the codebase using Prettier.

**Usage:**
```bash
# Format all files
npm run format

# Check if files are formatted correctly
npm run format -- --check

# Format with specific ignored paths
npm run format -- --ignore-path=".gitignore"
```

### Type Checking Scripts

#### `typecheck`
```typescript
interface TypecheckOptions {
  watch?: boolean;       // Watch mode (default: false)
  incremental?: boolean; // Use incremental compilation (default: true)
}
```

**Description:** Runs TypeScript type checking.

**Usage:**
```bash
# Check types
npm run typecheck

# Check types in watch mode
npm run typecheck -- --watch
```

### Utility Scripts

#### `clean`
**Description:** Cleans the build output directories.

**Usage:**
```bash
npm run clean
```

#### `postinstall`
**Description:** Runs automatically after packages are installed to set up the development environment.

**Usage:**
```bash
# Automatically executed after npm install
npm install
```

### Analysis Scripts

#### `analyze`
```typescript
interface AnalyzeOptions {
  open?: boolean;        // Open analyzer in browser (default: true)
}
```

**Description:** Analyzes the bundle size.

**Usage:**
```bash
# Analyze bundle size
npm run analyze

# Analyze without opening the browser
npm run analyze -- --open=false
```

## Common Script Combinations

### Complete Development Workflow
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Deployment Preparation
```bash
# Type check
npm run typecheck

# Lint code
npm run lint

# Run tests
npm run test

# Build for production
npm run build

# Preview the production build
npm run preview
```

### CI Pipeline Example
```bash
# Clean previous builds
npm run clean

# Type checking
npm run typecheck

# Linting
npm run lint

# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Production build
npm run build

# Bundle analysis
npm run analyze -- --open=false
```

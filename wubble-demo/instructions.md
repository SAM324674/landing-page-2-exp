# Next.js Development Manual
## Engineering Standards & Best Practices

---

## Table of Contents
1. [Core Principles](#core-principles)
2. [Project Setup](#project-setup)
3. [Development Standards](#development-standards)
4. [Testing Requirements](#testing-requirements)
5. [Code Quality](#code-quality)
6. [Performance Guidelines](#performance-guidelines)
7. [Deployment Process](#deployment-process)
8. [Documentation Standards](#documentation-standards)

---

## Core Principles

### The Golden Rules
1. **Always write tests** - No code ships without tests
2. **Server Components first** - Only use Client Components when absolutely necessary
3. **Type everything** - TypeScript is mandatory, not optional
4. **Performance matters** - Every millisecond counts
5. **Document decisions** - Future you will thank present you

---

## Project Setup

### Initial Configuration

```bash
# Create new Next.js project with TypeScript
npx create-next-app@latest my-app --typescript --tailwind --app --use-npm

# Install essential dependencies
npm install zod react-hook-form @tanstack/react-query
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
npm install -D @playwright/test eslint-plugin-testing-library
```

### Required File Structure
```
/app
  /api
  /[routes]
    page.tsx
    layout.tsx
    loading.tsx
    error.tsx
/components
  /ui
  /features
/lib
  /utils
  /actions
  /hooks
/tests
  /unit
  /integration
  /e2e
/public
.env.local
.env.example
tsconfig.json
next.config.js
```

### Configuration Files

**tsconfig.json** - Ensure strict mode:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**next.config.js** - Essential settings:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    ppr: 'incremental',
  },
}

module.exports = nextConfig
```

---

## Development Standards

### Component Architecture

#### Server Components (Default)
```typescript
// app/dashboard/page.tsx
import { getServerSession } from 'next-auth'

/**
 * Dashboard page - Server Component
 * Fetches user data server-side for optimal performance
 */
export default async function DashboardPage() {
  const session = await getServerSession()
  const userData = await fetchUserData(session.user.id)
  
  return <DashboardView data={userData} />
}
```

#### Client Components (When Needed)
```typescript
// components/interactive-chart.tsx
'use client'

import { useState } from 'react'

/**
 * Interactive chart component
 * Client Component required for: useState, event handlers
 */
export function InteractiveChart({ data }: ChartProps) {
  const [selected, setSelected] = useState<string | null>(null)
  
  return (
    <div onClick={(e) => setSelected(e.target.id)}>
      {/* Chart implementation */}
    </div>
  )
}
```

### When to Use Client Components
- `useState`, `useEffect`, or other React hooks
- Event listeners (`onClick`, `onChange`, etc.)
- Browser-only APIs (`window`, `localStorage`)
- Third-party libraries that rely on React hooks

### Code Organization Rules

1. **Colocation**: Keep related files together
2. **Separation**: Business logic in `/lib`, UI in `/components`
3. **Naming**: Use descriptive names, kebab-case for files, PascalCase for components
4. **Exports**: Prefer named exports for utilities, default for pages/components

### Data Fetching Patterns

```typescript
// Server Component with caching
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // Cache for 1 hour
  })
  return res.json()
}

// Server Action for mutations
'use server'
export async function updateUser(formData: FormData) {
  const validated = userSchema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
  })
  
  await db.user.update(validated)
  revalidatePath('/profile')
}
```

### Environment Variables

**Critical Rules:**
- Never commit `.env.local`
- Always provide `.env.example`
- Prefix public variables with `NEXT_PUBLIC_`
- Document all environment variables

```bash
# .env.example
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your_secret_here
```

---

## Testing Requirements

### Testing Hierarchy
1. **Unit Tests** - 70% of your tests
2. **Integration Tests** - 20% of your tests
3. **E2E Tests** - 10% of your tests

### Unit Testing Setup

**jest.config.js**
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
```

### Writing Unit Tests

```typescript
// components/button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './button'

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies disabled state correctly', () => {
    render(<Button disabled>Click me</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

### Testing Server Components

```typescript
// app/dashboard/page.test.tsx
import { render, screen } from '@testing-library/react'
import DashboardPage from './page'

// Mock the data fetching
jest.mock('@/lib/api', () => ({
  fetchUserData: jest.fn().mockResolvedValue({
    name: 'John Doe',
    email: 'john@example.com',
  }),
}))

describe('Dashboard Page', () => {
  it('displays user data', async () => {
    const page = await DashboardPage()
    render(page)
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
```

### E2E Testing with Playwright

```typescript
// tests/e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('user can sign in successfully', async ({ page }) => {
    await page.goto('/login')
    
    await page.fill('[name="email"]', 'user@example.com')
    await page.fill('[name="password"]', 'password123')
    await page.click('button[type="submit"]')
    
    await expect(page).toHaveURL('/dashboard')
    await expect(page.locator('h1')).toContainText('Welcome')
  })

  test('shows error for invalid credentials', async ({ page }) => {
    await page.goto('/login')
    
    await page.fill('[name="email"]', 'wrong@example.com')
    await page.fill('[name="password"]', 'wrongpassword')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('[role="alert"]')).toContainText('Invalid credentials')
  })
})
```

### Testing Checklist

Before any PR, ensure:
- [ ] All new components have unit tests
- [ ] All new API routes have integration tests
- [ ] Critical user flows have E2E tests
- [ ] Test coverage is above 70%
- [ ] All tests pass locally
- [ ] No console errors or warnings

---

## Code Quality

### TypeScript Standards

```typescript
// ✅ GOOD: Explicit types, clear interfaces
interface UserProfile {
  id: string
  email: string
  name: string
  createdAt: Date
}

async function getUserProfile(userId: string): Promise<UserProfile> {
  const user = await db.user.findUnique({ where: { id: userId } })
  if (!user) throw new Error('User not found')
  return user
}

// ❌ BAD: Any types, implicit returns
async function getUserProfile(userId: any) {
  const user = await db.user.findUnique({ where: { id: userId } })
  return user
}
```

### Error Handling

```typescript
// ✅ GOOD: Proper error boundaries and handling
'use client'

export function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error('Error logged:', error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

// Server-side error handling
try {
  const data = await riskyOperation()
  return data
} catch (error) {
  if (error instanceof ValidationError) {
    return { error: 'Invalid input' }
  }
  throw error // Re-throw unexpected errors
}
```

### Validation with Zod

```typescript
import { z } from 'zod'

// Define schema
const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  age: z.number().min(18).optional(),
})

// Use in Server Actions
'use server'
export async function createUser(formData: FormData) {
  const validated = userSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  
  // Type-safe: validated.email and validated.password are guaranteed
  return await db.user.create({ data: validated })
}
```

### ESLint Configuration

```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:testing-library/react"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/exhaustive-deps": "error"
  }
}
```

---

## Performance Guidelines

### Image Optimization

```typescript
import Image from 'next/image'

// ✅ GOOD: Proper Next.js Image usage
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL={blurData}
/>

// ❌ BAD: Regular img tag
<img src="/hero.jpg" alt="Hero image" />
```

### Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/heavy-chart'), {
  loading: () => <ChartSkeleton />,
  ssr: false, // Disable SSR if not needed
})

export default function AnalyticsPage() {
  return <HeavyChart data={data} />
}
```

### Loading States

```typescript
// app/dashboard/loading.tsx
export default function Loading() {
  return <DashboardSkeleton />
}

// Streaming with Suspense
import { Suspense } from 'react'

export default function Page() {
  return (
    <div>
      <Header />
      <Suspense fallback={<ContentSkeleton />}>
        <SlowContent />
      </Suspense>
    </div>
  )
}
```

### Caching Strategy

```typescript
// Static data - Cache indefinitely
fetch('https://api.example.com/static', { cache: 'force-cache' })

// Revalidate after 1 hour
fetch('https://api.example.com/data', { next: { revalidate: 3600 } })

// No caching for dynamic data
fetch('https://api.example.com/live', { cache: 'no-store' })

// Using unstable_cache for expensive operations
import { unstable_cache } from 'next/cache'

const getCachedData = unstable_cache(
  async (id: string) => await expensiveDbQuery(id),
  ['data-key'],
  { revalidate: 3600 }
)
```

### Performance Checklist
- [ ] All images use `next/image`
- [ ] Above-the-fold images have `priority` prop
- [ ] Heavy components are dynamically imported
- [ ] Proper loading states for all async content
- [ ] Appropriate caching strategy applied
- [ ] No unnecessary client components
- [ ] Lighthouse score above 90

---

## Deployment Process

### Pre-Deployment Checklist

**Code Quality**
- [ ] All tests passing (`npm test`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Build succeeds locally (`npm run build`)

**Performance**
- [ ] Lighthouse audit performed (score > 90)
- [ ] Bundle size checked (`npm run build` - check output)
- [ ] No console warnings in production build

**Security**
- [ ] Environment variables properly set
- [ ] No secrets in code
- [ ] Dependencies updated (`npm audit`)
- [ ] Authentication/authorization tested

### Deployment Configuration

**Vercel (Recommended)**
1. Connect GitHub repository
2. Configure environment variables in Vercel dashboard
3. Enable automatic deployments from `main` branch
4. Set up preview deployments for all PRs

**Environment Variables in Vercel**
```bash
# Production
DATABASE_URL=production_url
API_KEY=production_key

# Preview (for PRs)
DATABASE_URL=staging_url
API_KEY=staging_key
```

### CI/CD Pipeline

**GitHub Actions Example**
```yaml
# .github/workflows/test.yml
name: Test and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm test
      - run: npm run build
```

### Monitoring

**Essential Monitoring Setup**
- Vercel Analytics for performance metrics
- Error tracking (Sentry or similar)
- Log aggregation for debugging
- Uptime monitoring

---

## Documentation Standards

### Code Comments

```typescript
/**
 * Fetches user profile with caching
 * 
 * @param userId - The unique user identifier
 * @returns User profile data
 * @throws {NotFoundError} When user doesn't exist
 * 
 * @example
 * const profile = await getUserProfile('user_123')
 */
export async function getUserProfile(userId: string): Promise<UserProfile> {
  // Cache for 1 hour to reduce database load
  const cached = await cache.get(`user:${userId}`)
  if (cached) return cached
  
  const user = await db.user.findUnique({ where: { id: userId } })
  if (!user) throw new NotFoundError('User not found')
  
  await cache.set(`user:${userId}`, user, 3600)
  return user
}
```

### When to Comment

**DO Comment:**
- Complex business logic
- Performance optimizations
- Non-obvious architectural decisions
- Why you chose Client Component over Server Component
- Workarounds for library limitations
- Security considerations

**DON'T Comment:**
- Obvious code (e.g., "increment counter")
- What the code does (code should be self-documenting)
- Outdated information

### README Requirements

Every feature module should have a README:

```markdown
# Feature Name

## Purpose
Brief description of what this feature does.

## Architecture
- Server Components: [List]
- Client Components: [List]
- API Routes: [List]

## Key Decisions
- Why we chose approach X over Y
- Performance considerations
- Trade-offs made

## Testing
- How to run tests
- What's covered
- Known limitations

## Future Improvements
- [ ] Planned enhancement 1
- [ ] Planned enhancement 2
```

---

## Quick Reference Checklist

### Before Starting a Feature
- [ ] Read this manual section relevant to your work
- [ ] Check existing patterns in the codebase
- [ ] Plan your component architecture (Server vs Client)
- [ ] Consider testing strategy

### During Development
- [ ] Write tests alongside code
- [ ] Use TypeScript strictly
- [ ] Comment non-obvious decisions
- [ ] Optimize images and imports
- [ ] Handle errors properly

### Before Submitting PR
- [ ] All tests pass
- [ ] No TypeScript/ESLint errors
- [ ] Code is documented
- [ ] Build succeeds
- [ ] Performance is acceptable
- [ ] README updated if needed

### Before Deploying
- [ ] All PR checks pass
- [ ] Manual QA completed
- [ ] Environment variables set
- [ ] Monitoring configured
- [ ] Rollback plan ready

---

## Questions or Issues?

If you encounter situations not covered by this manual:
1. Consult the team lead
2. Check Next.js official documentation
3. Update this manual with the solution

**Remember: When in doubt, ask. Never guess about best practices.**

---

*Last Updated: October 2025*
*Version: 1.0*
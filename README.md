# Next.js + Clerk

A modern, full-stack Next.js 15 starter template with Clerk authentication, Mantine UI components, and SQLite database integration.

## ✨ Features

- 🔐 **Authentication** - Complete auth system with Clerk
- 🎨 **UI Components** - Beautiful, accessible components with Mantine UI
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🌙 **Dark/Light Mode** - Theme switching with system preference support
- 🗃️ **Database** - SQLite with Drizzle ORM for type-safe queries
- 📊 **Protected Dashboard** - Authenticated dashboard routes
- 🎯 **TypeScript** - Full TypeScript support throughout
- ⚡ **Fast Development** - Turbo mode for lightning-fast builds
- 🔄 **State Management** - Jotai for atomic state management
- 🌐 **Data Fetching** - TanStack Query for server state
- 🎭 **Icons** - Iconify for beautiful icons

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Authentication**: Clerk
- **UI Library**: Mantine v8
- **Database**: Bun SQLite + Drizzle ORM
- **Styling**: Sass
- **State Management**: Jotai
- **Data Fetching**: TanStack Query
- **Icons**: Iconify
- **Runtime**: Bun (recommended)
- **Language**: TypeScript

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 20+
- [Clerk](https://clerk.com) account for authentication

### Installation

1. **Clone and install**:

   ```bash
   git clone https://github.com/codjix/next-clerk
   cd next-clerk
   bun install
   ```

2. **Environment setup**:

   ```bash
   cp .env.example .env.local
   ```

   Add your Clerk keys to `.env.local`:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

3. **Database setup**:

   ```bash
   bun run db:push    # Generate and apply migrations
   bun run db:seed    # Seed with sample data (optional)
   ```

4. **Start development**:

   ```bash
   bun run dev
   ```

5. **Open your browser** to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next-clerk/
├── app/                    # Next.js App Router
│   ├── (landing)/          # Public pages (home, about, etc.)
│   ├── auth/               # Authentication pages
│   ├── dash/               # Protected dashboard area
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI components
│   ├── Header/             # Header and navigation
│   ├── Layout/             # Layout components
│   ├── Providers/          # Context providers
│   └── ui/                 # Base UI components
├── database/
│   ├── schema/             # Database schemas
│   ├── migrations/         # Auto-generated migrations
│   └── seeds               # Seed data scripts
├── features/               # Feature-specific code
│   └── core/               # Core app configuration
├── hooks/                  # Custom React hooks
└── scripts/                # Build and deployment scripts
```

## 📜 Available Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `bun run dev`       | Start development server with Turbo  |
| `bun run build`     | Build for production                 |
| `bun run start`     | Start production server              |
| `bun run db:push`   | Generate and run database migrations |
| `bun run db:seed`   | Seed database with sample data       |
| `bun run db:studio` | Open Drizzle Studio (database GUI)   |
| `bun run format`    | Format code with Prettier            |
| `bun run check`     | Type check with TypeScript           |

## 🔐 Authentication

Authentication is handled by [Clerk](https://clerk.com) with the following features:

- **Sign in/up flows** - Pre-built authentication pages
- **Route protection** - Middleware protects `/dash/*` routes automatically
- **User management** - Complete user profile and session management
- **Social logins** - Easy integration with Google, GitHub, etc.

The authentication middleware is configured in `middleware.ts` to protect dashboard routes.

## 🗃️ Database

The template uses **SQLite** with **Drizzle ORM** for the database layer:

- **Location**: `./data/db.sqlite`
- **Schema**: Defined in `./database/schema/`
- **Migrations**: Auto-generated in `./database/migrations/`
- **Type Safety**: Full TypeScript integration with Drizzle

### Database Commands

```bash

# Create Data Dir
mkdir ./data

# Generate migrations from schema changes
bun run db:push

# Open database browser
bun run db:studio

# Seed with sample data
bun run db:seed
```

## 🎨 Customization

### Branding

- Update logo in `assets/images`
- Update app configuration in `features/core/const/config.ts`:

```typescript
export const CONFIG = {
  title: "Your App Name",
  description: "Your app description",
} as const;
```

### Theme

Modify the Mantine theme in `components/Providers/MantineProvider.tsx`

### Navigation

Add new pages to the navigation config in `features/core/const/pages.ts`

### Database Schema

Extend the database schema in `database/schema/` and run `bun run db:push`

## 🚀 Deployment

The template is ready for deployment to any platform that supports Next.js:

1. **Build the application**:

   ```bash
   bun run build
   ```

2. **Deploy** to your preferred platform:
   - Vercel (recommended for Next.js)
   - Your own server

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

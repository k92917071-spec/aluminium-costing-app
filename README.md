# Aluminium Costing App

A professional-grade costing intelligence system for aluminium products.

## Features
- **Smart Formula Engine**: Dynamic calculation logic stored in the database.
- **Fuzzy Search**: Google-like search for product sizes.
- **Admin Panel**: Full CRUD for sizes, variables, and formulas.
- **PWA Ready**: Offline-first reliability for industrial environments.
- **PDF Export**: Generate professional quotes and breakdowns.

## Tech Stack
- **Frontend**: Next.js (App Router), Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **State Management**: Zustand / SWR
- **Utilities**: jsPDF, html2canvas

## Setup
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up Supabase environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   ```
4. Run the development server: `npm run dev`.

## Database Schema
### Sizes Table
```sql
CREATE TABLE sizes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  size_name TEXT UNIQUE,
  weight_per_km NUMERIC,
  category TEXT
);
```

### Variables Table
```sql
CREATE TABLE variables (
  key TEXT PRIMARY KEY,
  value NUMERIC
);
```

### Formulas Table
```sql
CREATE TABLE formulas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  expression TEXT,
  description TEXT
);
```

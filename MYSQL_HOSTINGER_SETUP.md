# MySQL & Hostinger Setup Guide

## Overview
This project has been fully migrated from Supabase PostgreSQL to MySQL. All backend operations now use MySQL via API routes instead of Supabase client libraries.

## Key Changes Made

### ✅ Removed:
- `@supabase/auth-helpers-nextjs` (v0.15.0)
- `@supabase/supabase-js` (v2.101.1)
- All Supabase client and server files
- Supabase imports from all pages and API routes

### ✅ Updated:
- **App Pages:**
  - `/app/booking/page.tsx` - Removed Supabase client references
  - `/app/page.tsx` - Fixed JSX structure and Footer component
  - `/app/admin/page.tsx` - Fixed malformed Card closing tags

- **API Routes (all now use MySQL via `mysql2`):**
  - `/app/api/admin/settings/route.ts`
  - `/app/api/admin/gallery/route.ts`
  - `/app/api/admin/gallery/[id]/route.ts`
  - `/app/api/admin/destinations/route.ts`
  - `/app/api/admin/destinations/[id]/route.ts`

- **Library Files:**
  - `/lib/supabase/client.ts` - Deprecated (empty)
  - `/lib/supabase/server.ts` - Deprecated (empty)

## Environment Variables Required

Add these to your Hostinger environment variables or `.env.local`:

```env
# MySQL Database Connection
MYSQL_HOST=your_hostinger_mysql_host
MYSQL_USER=your_mysql_username
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=nomads_ridge
```

## Database Schema Requirements

The following MySQL tables must exist in your `nomads_ridge` database:

### Table: `site_settings`
```sql
CREATE TABLE site_settings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  company_name VARCHAR(255),
  contact_email VARCHAR(255),
  contact_phone VARCHAR(20),
  whatsapp_number VARCHAR(20),
  facebook_url TEXT,
  instagram_url TEXT,
  location VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Table: `destinations`
```sql
CREATE TABLE destinations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  country_id INT,
  description TEXT,
  image_url TEXT,
  highlights JSON,
  best_time_to_visit VARCHAR(255),
  wildlife JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX(country_id)
);
```

### Table: `gallery`
```sql
CREATE TABLE gallery (
  id INT PRIMARY KEY AUTO_INCREMENT,
  image_url TEXT NOT NULL,
  caption VARCHAR(255),
  destination_id INT,
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX(destination_id)
);
```

## Deployment Steps

### 1. Setup Hostinger MySQL Database
- Access Hostinger control panel
- Create a new MySQL database named `nomads_ridge`
- Create a MySQL user with full privileges
- Note the database host, user, and password

### 2. Run Database Schema
Execute the SQL scripts above in Hostinger's MySQL tool to create the required tables.

### 3. Set Environment Variables
In your Hostinger Node.js deployment:
- Go to Environment Variables section
- Add all `MYSQL_*` variables from the section above
- Deploy the application

### 4. Verify Connection
Test that the application can connect to MySQL by:
- Visiting the admin dashboard: `/admin`
- Checking that no Supabase errors appear in console
- Verifying data retrieval from the API endpoints

## API Routes Reference

All admin routes require Bearer token authentication with `admin_token_` prefix.

### Settings
- `GET /api/admin/settings` - Fetch site settings
- `PUT /api/admin/settings` - Update site settings

### Destinations
- `GET /api/admin/destinations` - List all destinations
- `POST /api/admin/destinations` - Create new destination
- `PUT /api/admin/destinations` - Update destination
- `DELETE /api/admin/destinations?id=123` - Delete destination
- `PUT /api/admin/destinations/[id]` - Update by route param
- `DELETE /api/admin/destinations/[id]` - Delete by route param

### Gallery
- `GET /api/admin/gallery` - List all gallery images
- `POST /api/admin/gallery` - Upload new gallery image
- `PUT /api/admin/gallery` - Update gallery image
- `DELETE /api/admin/gallery?id=123` - Delete gallery image
- `PUT /api/admin/gallery/[id]` - Update by route param
- `DELETE /api/admin/gallery/[id]` - Delete by route param

## Package Dependencies

All Supabase packages have been removed. The project now uses:
- `mysql2@^3.20.0` - MySQL client library
- `bcryptjs@^2.4.3` - For password hashing
- Standard Next.js 16 and React 19

## Testing Locally

```bash
# Install dependencies
pnpm install

# Set local environment variables
cp .env.local.example .env.local
# Edit .env.local with your MySQL credentials

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Notes

- All data is now stored in MySQL on Hostinger servers
- No dependency on Supabase or any third-party hosted services
- Admin authentication uses simple token-based system (Bearer tokens)
- Consider implementing proper JWT authentication for production
- Database connections are created per-request (consider connection pooling for high traffic)

## Support

For issues with:
- **Hostinger MySQL Setup**: Contact Hostinger support
- **Node.js Deployment**: Check Hostinger Node.js documentation
- **Application Code**: Check Next.js 16 and React 19 documentation

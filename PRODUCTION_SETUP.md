# Nomads Ridge Safaris - Production Setup Guide

## 🎯 Project Overview

This is a luxury safari website built with Next.js and MySQL. The project includes:
- **Frontend**: Luxury safari landing page with hero sections, destination cards, gallery
- **Admin Dashboard**: Triple-click protected admin panel for managing content
- **Database**: MySQL backend for all content management
- **API**: RESTful API endpoints for frontend and admin operations

## ⚠️ Important: Supabase Removed - MySQL Only

This version uses **MySQL exclusively** (no Supabase). All database operations use mysql2 library.

## 📋 System Requirements

- Node.js 18+
- npm or yarn
- MySQL 5.7+ (provided by Hostinger)
- Modern web browser

## 🚀 Local Development Setup

### 1. Clone and Install

```bash
git clone your-repo-url
cd nomads-ridge-safaris
npm install
```

### 2. Install MySQL Packages

```bash
npm install mysql2 bcryptjs
```

### 3. Create Local MySQL Database

```bash
# Using MySQL CLI
mysql -u root -p
CREATE DATABASE nomads_ridge;
USE nomads_ridge;
SOURCE scripts/mysql-schema.sql;
```

Or use phpMyAdmin/MySQL Workbench to import the schema.

### 4. Configure Environment

Create `.env.local`:

```env
# MySQL Configuration
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=nomads_ridge

# Admin Settings
ADMIN_PASSWORD=Kesh09it7
ADMIN_EMAIL=bknglabs.dev@gmail.com

# Site URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 5. Setup Admin Password

```bash
node scripts/setup-admin.js
```

Follow the prompts to set up the admin user.

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 🛠️ Admin Access

### Accessing Admin Dashboard

1. Go to website footer
2. **Triple-click** on copyright text (© 2025 Nomads Ridge Safaris...)
3. Enter password: `Kesh09it7`
4. Enter email: `bknglabs.dev@gmail.com`
5. Redirected to `/admin` dashboard

### Admin Features

- **Destinations**: Add/Edit/Delete safari destinations
- **Gallery**: Manage photos and images
- **Settings**: Update company info, contact details
- **Protected**: Direct URL access to `/admin` returns 404

## 📦 Deployment to Hostinger

See `HOSTINGER_DEPLOYMENT.md` for detailed instructions.

### Quick Deployment Checklist

- [ ] MySQL database created on Hostinger
- [ ] Database schema imported
- [ ] Admin password set via setup script
- [ ] `.env.local` configured with Hostinger credentials
- [ ] Build tested locally: `npm run build`
- [ ] Node.js version set to 18+ in Hostinger
- [ ] Startup command: `npm start`
- [ ] All files uploaded to Hostinger

## 🗄️ Database Schema

### Tables

**admin_users**
- id, email, password_hash, created_at, updated_at

**site_settings**
- id, setting_key, setting_value, setting_type, created_at, updated_at

**countries**
- id, name, code, description, image_url, best_season, created_at, updated_at

**destinations**
- id, country_id, name, slug, description, long_description, image_url, best_season, wildlife_species, location, altitude, best_time_to_visit, price_range, duration_days, created_at, updated_at

**gallery**
- id, destination_id, title, description, image_url, category, alt_text, featured, display_order, created_at, updated_at

**bookings**
- id, destination_id, visitor_name, visitor_email, visitor_phone, number_of_people, start_date, end_date, message, status, created_at, updated_at

**inquiries**
- id, name, email, phone, message, subject, status, created_at, updated_at

**audit_logs**
- id, admin_id, action, entity_type, entity_id, old_values, new_values, ip_address, user_agent, created_at

## 🔌 API Endpoints

### Public Endpoints

**GET /api/destinations**
```json
Returns: [
  {
    "id": 1,
    "country_id": 1,
    "name": "Maasai Mara",
    "description": "...",
    "image_url": "...",
    "price_range": "$1000-$5000",
    ...
  }
]
```

**GET /api/gallery**
```json
Returns: [
  {
    "id": 1,
    "destination_id": 1,
    "title": "Lion in Maasai Mara",
    "image_url": "...",
    "category": "wildlife",
    ...
  }
]
```

### Admin Endpoints

All admin endpoints require authentication via cookies/session.

**POST /api/admin/login**
```json
Request: {
  "email": "bknglabs.dev@gmail.com",
  "password": "Kesh09it7"
}
Response: { "message": "Login successful", "admin": {...} }
```

**POST /api/admin/destinations** - Create destination
**GET /api/admin/destinations** - List destinations
**PUT /api/admin/destinations/[id]** - Update destination
**DELETE /api/admin/destinations/[id]** - Delete destination

**POST /api/admin/gallery** - Create gallery item
**GET /api/admin/gallery** - List gallery
**PUT /api/admin/gallery/[id]** - Update gallery
**DELETE /api/admin/gallery/[id]** - Delete gallery

**GET /api/admin/settings** - Get settings
**PUT /api/admin/settings** - Update settings

## 🛡️ Security Features

- ✅ Triple-click password protection for admin
- ✅ HTTP-only secure cookies
- ✅ Bcrypt password hashing
- ✅ Protected API routes
- ✅ SQL injection prevention (parameterized queries)
- ✅ CORS protection
- ✅ Environment variables for credentials

## 📝 File Structure

```
nomads-ridge-safaris/
├── app/
│   ├── admin/                    # Protected admin routes
│   │   ├── destinations/
│   │   ├── gallery/
│   │   ├── settings/
│   │   └── page.tsx
│   ├── api/
│   │   ├── destinations/         # Public API
│   │   ├── gallery/
│   │   └── admin/                # Protected API
│   │       ├── login/
│   │       ├── destinations/
│   │       └── gallery/
│   ├── page.tsx                  # Home page
│   ├── layout.tsx
│   └── globals.css
├── components/                   # Reusable components
├── lib/
│   ├── db.ts                     # MySQL connection pool
│   └── admin-auth-context.tsx    # Admin auth state
├── public/                       # Static assets
├── scripts/
│   ├── mysql-schema.sql          # Database schema
│   └── setup-admin.js            # Admin setup script
├── .env.example                  # Environment template
├── HOSTINGER_DEPLOYMENT.md       # Hostinger guide
└── PRODUCTION_SETUP.md           # This file
```

## 🐛 Troubleshooting

### Database Connection Errors

**Error**: "connect ECONNREFUSED"
- Check MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD
- Verify MySQL is running
- Test with: `mysql -h host -u user -p`

**Error**: "Too many connections"
- Reduce connectionLimit in lib/db.ts
- Close idle connections properly
- Check Hostinger's connection limits

### Admin Dashboard Issues

**404 on direct URL access**
- This is intentional! Use triple-click method
- Check if admin_session cookie exists
- Verify browser accepts HTTP-only cookies

**Password not working**
- Ensure password was set with setup-admin.js
- Check password_hash in admin_users table
- Try updating via setup script again

### Image Issues

**Images not displaying**
- Verify image_url paths in database
- Check public/ folder contains images
- Ensure URLs are accessible

### Build Issues

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## 🔄 Maintenance

### Regular Tasks

- Monitor database size
- Backup MySQL database weekly
- Review audit logs monthly
- Update passwords every 90 days
- Check error logs in production

### Updating Admin Password

1. Run: `node scripts/setup-admin.js`
2. Enter new password when prompted

### Updating Site Settings

1. Access admin dashboard
2. Go to Settings page
3. Update company info, contact details, social links

## 📞 Support

- Check error logs: Hostinger panel → Logs
- Review console errors in browser DevTools
- Verify .env.local configuration
- Test API endpoints with Postman/curl

## 📄 License

© 2025 Nomads Ridge Safaris. All rights reserved.

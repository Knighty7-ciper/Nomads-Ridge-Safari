# Nomads Ridge Safaris - Hostinger Deployment Guide

## Prerequisites
- Hostinger account with MySQL database
- Node.js 18+ installed locally
- Git installed

## Step 1: Create MySQL Database on Hostinger

1. Log in to your Hostinger panel
2. Go to **MySQL Databases** section
3. Create a new database:
   - Database name: `nomads_ridge`
   - Username: `(create your user)`
   - Password: `(create a strong password)`
   - Host: `localhost` (usually provided by Hostinger)

4. Note down these credentials - you'll need them later

## Step 2: Import Database Schema

1. Go to **phpMyAdmin** in your Hostinger panel
2. Select your database (`nomads_ridge`)
3. Click **Import** tab
4. Upload the file `scripts/mysql-schema.sql`
5. Click **Go** to import

The database will now have all required tables:
- admin_users
- site_settings
- countries
- destinations
- gallery
- bookings
- inquiries
- audit_logs

## Step 3: Set Admin Password

1. In phpMyAdmin, go to `nomads_ridge` database
2. Find the `admin_users` table
3. Edit the row with email `bknglabs.dev@gmail.com`
4. Update the `password_hash` field with a bcrypt hash

To generate a bcrypt hash locally:
```bash
npm install bcryptjs
node -e "require('bcryptjs').hash('Kesh09it7', 10, (err, hash) => console.log(hash))"
```

Then paste the generated hash into the password_hash field.

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in your project root:

```env
MYSQL_HOST=your_hostinger_mysql_host
MYSQL_USER=your_database_user
MYSQL_PASSWORD=your_database_password
MYSQL_DATABASE=nomads_ridge

ADMIN_PASSWORD=Kesh09it7
ADMIN_EMAIL=bknglabs.dev@gmail.com

NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

2. Get these values from your Hostinger panel:
   - **MYSQL_HOST**: Usually `localhost` or provided in Hostinger
   - **MYSQL_USER**: Username you created
   - **MYSQL_PASSWORD**: Password you set
   - **MYSQL_DATABASE**: `nomads_ridge`

## Step 5: Build and Deploy

### Local Testing
```bash
npm install
npm run build
npm run start
```

Visit http://localhost:3000 to test

### Deploy to Hostinger

1. Install Hostinger's deployment tool or use FTP/File Manager
2. Build the project:
   ```bash
   npm run build
   ```

3. Upload the following to your Hostinger account:
   - `.next/` folder (build output)
   - `node_modules/` folder (or let Hostinger install dependencies)
   - `public/` folder
   - `.env.local` file (with your credentials)
   - `package.json` and `package-lock.json`

4. Set Node.js version: **18.x or higher** in Hostinger panel
5. Set startup command: `npm start`

## Step 6: Access Admin Dashboard

1. Go to your website
2. Scroll to the footer
3. **Triple-click on the copyright text** (© 2025 Nomads Ridge Safaris...)
4. A password prompt will appear
5. Enter password: `Kesh09it7`
6. You'll be prompted for email: `bknglabs.dev@gmail.com`
7. After successful login, you're redirected to `/admin`

## Admin Dashboard Features

### Manage Destinations
- Add/Edit/Delete safari destinations
- Upload destination images
- Set wildlife information, pricing, seasons
- Organize by country

### Manage Gallery
- Add/Edit/Delete gallery photos
- Organize by category
- Set featured images
- Link to destinations

### Manage Settings
- Update company contact information
- Set phone, email, WhatsApp numbers
- Update office address and business hours
- Manage social media URLs
- Edit company description and tagline

## API Endpoints

### Public Endpoints
- `GET /api/destinations` - Get all destinations
- `GET /api/gallery` - Get all gallery images

### Admin Endpoints (Protected)
- `POST /api/admin/login` - Admin login
- `POST/GET /api/admin/destinations` - Create/List destinations
- `PUT/DELETE /api/admin/destinations/[id]` - Update/Delete destination
- `POST/GET /api/admin/gallery` - Create/List gallery
- `PUT/DELETE /api/admin/gallery/[id]` - Update/Delete gallery
- `GET/PUT /api/admin/settings` - Get/Update settings

## Troubleshooting

### "Too Many Connections" Error
- Check connection pool settings in `lib/db.ts`
- Verify MYSQL_DATABASE is correctly named
- Ensure mysql2 package is installed: `npm install mysql2`

### Database Connection Failed
- Verify MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD in .env.local
- Check if MySQL is enabled in Hostinger panel
- Test connection with phpMyAdmin first

### Admin Dashboard Returns 404
- Ensure you're triple-clicking the copyright text (must be fast)
- Check browser console for errors
- Verify .env.local has correct ADMIN_EMAIL

### Images Not Loading
- Check image URLs in database
- Ensure image files are in `public/` folder
- Update image paths in admin panel

## Maintenance

### Regular Backups
1. Go to Hostinger panel
2. Schedule automatic MySQL backups
3. Download backups regularly

### Monitor Database
- Check table sizes in phpMyAdmin
- Delete old audit logs periodically
- Monitor gallery images storage

### Update Settings
- Email configuration
- Phone numbers
- Social media links
- Company description

---

**Support**: For issues, check error logs in Hostinger panel or contact Hostinger support with your database connection details.

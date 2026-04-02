# Nomads Ridge Safaris - Pre-Deployment Checklist

## Phase 1: Preparation (Before Purchasing Hostinger)

- [x] Database schema ready (`scripts/mysql-schema.sql`)
- [x] API endpoints ready (destinations, gallery, admin)
- [x] MySQL connection utility ready (`lib/db.ts`)
- [x] Admin authentication system ready
- [x] Environment configuration template ready (`.env.example`)
- [x] Logo removed from all pages
- [x] Hotel functionality completely removed
- [x] Gallery and landing pages clean

### Files Created for Production

```
✅ scripts/mysql-schema.sql          - Database schema
✅ lib/db.ts                         - MySQL connection pool
✅ app/api/destinations/route.ts     - Destinations CRUD API
✅ app/api/gallery/route.ts          - Gallery CRUD API
✅ app/api/admin/login/route.ts      - Admin login API
✅ .env.example                      - Environment template
✅ HOSTINGER_DEPLOYMENT.md           - Hostinger guide
✅ PRODUCTION_SETUP.md               - Setup instructions
✅ scripts/setup-admin.js            - Admin password setup
✅ package.json                      - Updated (Supabase removed, MySQL added)
```

## Phase 2: Hosting Setup (After Purchasing Hostinger)

### Step 1: Create MySQL Database
- [ ] Log into Hostinger panel
- [ ] Create MySQL database: `nomads_ridge`
- [ ] Create database user with strong password
- [ ] Note: HOST, USER, PASSWORD, DATABASE name
- [ ] Save these credentials securely

### Step 2: Import Database Schema
- [ ] Access phpMyAdmin in Hostinger
- [ ] Select `nomads_ridge` database
- [ ] Go to Import tab
- [ ] Upload `scripts/mysql-schema.sql`
- [ ] Click Import/Go
- [ ] Verify all tables created (8 tables total)

### Step 3: Setup Admin Password
**Option A: Via phpMyAdmin**
- [ ] In admin_users table, find `bknglabs.dev@gmail.com`
- [ ] Generate bcrypt hash of "Kesh09it7"
- [ ] Update password_hash field with hash

**Option B: Via Setup Script (Local)**
```bash
npm install  # If not done yet
node scripts/setup-admin.js
# Follow prompts with Hostinger MySQL credentials
```

### Step 4: Configure Environment
- [ ] Get these from Hostinger:
  - MYSQL_HOST
  - MYSQL_USER
  - MYSQL_PASSWORD
  - MYSQL_DATABASE
- [ ] Create `.env.local` with credentials:
```env
MYSQL_HOST=hostinger_provided_host
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=nomads_ridge
ADMIN_PASSWORD=Kesh09it7
ADMIN_EMAIL=bknglabs.dev@gmail.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

## Phase 3: Build & Test (Local)

- [ ] Run `npm install` to install all dependencies
- [ ] Verify MySQL connection works locally:
  ```bash
  npm run dev
  ```
- [ ] Test homepage loads at http://localhost:3000
- [ ] Test destinations API: http://localhost:3000/api/destinations
- [ ] Test gallery API: http://localhost:3000/api/gallery
- [ ] Test admin access (triple-click footer)
- [ ] Test login with credentials
- [ ] Create a test destination
- [ ] Create a test gallery item
- [ ] Build for production:
  ```bash
  npm run build
  ```
- [ ] Verify build completes without errors

## Phase 4: Deploy to Hostinger

### Option A: Using Hostinger's Deployment Tool (Recommended)

- [ ] Connect GitHub repo to Hostinger
- [ ] Select branch to deploy
- [ ] Set build command: `npm run build`
- [ ] Set start command: `npm start`
- [ ] Set Node.js version to 18.x or higher
- [ ] Add environment variables from `.env.local` to Hostinger panel
- [ ] Trigger deployment
- [ ] Wait for build to complete

### Option B: Manual FTP/File Manager Upload

- [ ] Build locally: `npm run build`
- [ ] Upload via FTP/File Manager:
  - [ ] `.next/` folder (entire)
  - [ ] `public/` folder (entire)
  - [ ] `node_modules/` folder OR let Hostinger install
  - [ ] `package.json`
  - [ ] `package-lock.json`
  - [ ] `.env.local` (with YOUR credentials)
- [ ] Set Node.js version to 18.x in Hostinger panel
- [ ] Set startup command to `npm start`
- [ ] Restart application

## Phase 5: Post-Deployment Testing

- [ ] Visit website at your domain
- [ ] Verify homepage loads with hero section
- [ ] Check all navigation links work
- [ ] Test API endpoints:
  - [ ] GET /api/destinations
  - [ ] GET /api/gallery
- [ ] Verify footer displays correctly
- [ ] **Triple-click copyright** to test admin access
- [ ] Login with credentials
- [ ] Add test destination through admin
- [ ] Add test gallery image through admin
- [ ] Verify new items appear on frontend
- [ ] Delete test items
- [ ] Check Settings page loads

## Phase 6: Content Setup

- [ ] Add all safari destinations
  - [ ] Maasai Mara
  - [ ] Serengeti
  - [ ] Amboseli
  - [ ] Other destinations...
- [ ] Upload destination images
- [ ] Upload gallery photos by category
- [ ] Update company settings:
  - [ ] Phone number
  - [ ] Email address
  - [ ] WhatsApp number
  - [ ] Office address
  - [ ] Business hours
  - [ ] Social media URLs
  - [ ] Company description

## Phase 7: Monitoring & Maintenance

- [ ] Set up automatic MySQL backups (Hostinger panel)
- [ ] Monitor error logs weekly
- [ ] Test admin login monthly
- [ ] Check database size monthly
- [ ] Update passwords every 90 days
- [ ] Review audit logs for unauthorized access attempts
- [ ] Test email notifications (if implemented)

## Phase 8: SEO & Analytics (Optional)

- [ ] Add Google Analytics tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Update robots.txt
- [ ] Add meta tags to pages
- [ ] Test page speed with PageSpeed Insights
- [ ] Set up SSL certificate (usually auto on Hostinger)

## Troubleshooting During Deployment

### Build Fails
```bash
# Clear and rebuild
rm -rf .next
npm install
npm run build
```

### Database Connection Error
- [ ] Verify MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD in .env.local
- [ ] Check MySQL is enabled in Hostinger panel
- [ ] Test connection with: `mysql -h host -u user -p`

### Admin Dashboard 404
- [ ] Verify you're triple-clicking (must be fast)
- [ ] Check browser console for errors
- [ ] Verify .env.local has ADMIN_EMAIL

### Images Not Loading
- [ ] Check image URLs in database
- [ ] Verify image files are in public/ folder
- [ ] Update paths in admin if needed

## Support Contacts

- **Hostinger Support**: Via Hostinger panel help
- **MySQL Help**: Hostinger panel → Databases
- **Node.js Issues**: Hostinger panel → Node.js settings

## Final Verification

```
✅ Website loads at your domain
✅ All pages accessible
✅ Admin dashboard protected
✅ Database operations working
✅ Images displaying correctly
✅ Email notifications working (if applicable)
✅ SSL certificate active (https)
✅ Performance acceptable
✅ Backups scheduled
✅ Monitoring in place
```

## Go Live Decision

Only flip the switch when:
- [ ] All content added (destinations, galleries)
- [ ] Admin can add/edit/delete items
- [ ] Settings page working correctly
- [ ] Email configurations verified
- [ ] SSL certificate active
- [ ] Backup system in place
- [ ] Admin has tested everything
- [ ] Performance acceptable
- [ ] No errors in logs

**You're ready to launch! 🚀**

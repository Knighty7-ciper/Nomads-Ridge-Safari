# ⚡ Nomads Ridge Safaris - Quick Reference Card

## 🚀 Launch in 4 Steps

### Step 1: Local Test (5 minutes)
```bash
npm install
npm run dev
# Visit http://localhost:3000
# Triple-click footer copyright to test admin
```

### Step 2: Purchase Hostinger & Create DB (5 minutes)
- Create MySQL database named `nomads_ridge`
- Note: HOST, USER, PASSWORD

### Step 3: Setup & Deploy (10 minutes)
```bash
# Run admin setup with Hostinger credentials
node scripts/setup-admin.js

# Update .env.local with Hostinger MySQL info
# Build and deploy to Hostinger
npm run build
```

### Step 4: Add Content (Your time)
- Login to admin (triple-click footer)
- Add destinations, galleries, update settings
- Launch!

---

## 🔑 Key Credentials

| Item | Value |
|------|-------|
| Admin Email | bknglabs.dev@gmail.com |
| Admin Password | Kesh09it7 |
| Database Name | nomads_ridge |
| Admin Access | Triple-click footer |

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `scripts/mysql-schema.sql` | Database schema (import to MySQL) |
| `scripts/setup-admin.js` | Setup admin password |
| `lib/db.ts` | MySQL connection |
| `.env.example` | Environment template |
| `HOSTINGER_DEPLOYMENT.md` | Hostinger setup guide |

---

## 🌐 Website Structure

```
Frontend
├── Home (Hero + sections)
├── About
├── Destinations (with filters)
├── Gallery (photo showcase)
├── Blog
└── Contact

Admin
├── /admin (dashboard)
├── /admin/destinations (CRUD)
├── /admin/gallery (CRUD)
└── /admin/settings (config)

APIs
├── GET /api/destinations
├── GET /api/gallery
└── /api/admin/* (protected)
```

---

## 🗄️ Database Tables

| Table | Purpose |
|-------|---------|
| admin_users | Admin accounts |
| site_settings | Config data |
| countries | Safari regions |
| destinations | Safari packages |
| gallery | Photos |
| bookings | Reservations |
| inquiries | Contact form |
| audit_logs | Changes log |

---

## 🔐 Admin Access

**How to Login:**
1. Scroll to footer
2. **Triple-click** copyright (© 2025 Nomads Ridge Safaris...)
3. Password: `Kesh09it7`
4. Email: `bknglabs.dev@gmail.com`
5. → Admin dashboard

---

## ⚙️ Environment Variables

```env
MYSQL_HOST=your_hostinger_host
MYSQL_USER=your_db_user
MYSQL_PASSWORD=your_db_password
MYSQL_DATABASE=nomads_ridge
ADMIN_PASSWORD=Kesh09it7
ADMIN_EMAIL=bknglabs.dev@gmail.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

---

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| DB connection fails | Check .env.local credentials |
| Admin login doesn't work | Triple-click must be fast and continuous |
| 404 on /admin | Only accessible after auth |
| Images not showing | Check paths in database |
| Build fails | Delete .next, npm install, rebuild |

---

## 📊 API Endpoints

### Public
```
GET /api/destinations        → List all destinations
GET /api/gallery            → List all photos
```

### Admin Protected
```
POST   /api/admin/login                           → Login
POST   /api/admin/destinations                    → Create
GET    /api/admin/destinations                    → List
PUT    /api/admin/destinations/[id]               → Update
DELETE /api/admin/destinations/[id]               → Delete

POST   /api/admin/gallery                         → Create
GET    /api/admin/gallery                         → List
PUT    /api/admin/gallery/[id]                    → Update
DELETE /api/admin/gallery/[id]                    → Delete

GET    /api/admin/settings                        → Get config
PUT    /api/admin/settings                        → Update config
```

---

## 📋 Pre-Launch Checklist

- [ ] Local test works
- [ ] Hostinger MySQL created
- [ ] Schema imported
- [ ] Admin password set
- [ ] .env.local updated
- [ ] Build successful
- [ ] Deployed to Hostinger
- [ ] Admin login works
- [ ] Create test destination
- [ ] Create test gallery item
- [ ] Delete test items
- [ ] Add real content
- [ ] Update company settings
- [ ] Test all pages
- [ ] Mobile test
- [ ] Go live!

---

## 🛠️ Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm start               # Start production server

# Setup
node scripts/setup-admin.js   # Setup admin password

# Database
mysql -h host -u user -p nomads_ridge < scripts/mysql-schema.sql
```

---

## 📞 Documentation

1. **README_PRODUCTION.md** - Complete overview
2. **HOSTINGER_DEPLOYMENT.md** - Hostinger-specific
3. **PRODUCTION_SETUP.md** - Detailed setup
4. **DEPLOYMENT_CHECKLIST.md** - Pre-launch
5. **COMPLETION_SUMMARY.md** - What's done
6. **QUICK_REFERENCE.md** - This file

---

## ✅ Quality Checklist

- ✅ Logo removed
- ✅ Hotels removed (safari-only)
- ✅ Supabase removed (MySQL-only)
- ✅ Gallery empty (ready for content)
- ✅ Admin protected
- ✅ APIs functional
- ✅ Documentation complete
- ✅ Production ready

---

## 🎯 Next Action

1. **Review**: Read README_PRODUCTION.md (2 min)
2. **Test**: Run locally (5 min)
3. **Purchase**: Get Hostinger (5 min)
4. **Setup**: Follow HOSTINGER_DEPLOYMENT.md (15 min)
5. **Launch**: Add content & go live!

---

## 💰 Hostinger Plan Requirements

- **Minimum**: Basic Plan + MySQL Database
- **Recommended**: Business Plan (better performance)
- **Node.js**: 18.x or higher

---

## 🚀 You're Ready to Launch!

All systems go. Follow the guides and you'll be live today!

Questions? Check the documentation files - everything is covered there.

Good luck! 🎉

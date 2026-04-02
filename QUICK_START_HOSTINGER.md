# 🚀 Quick Start Guide - Deploy to Hostinger Today

## 1️⃣ Get Your Hostinger MySQL Credentials (5 minutes)

In Hostinger control panel:
1. Go to **Databases** section
2. Create new MySQL database named: `nomads_ridge`
3. Create MySQL user with full privileges
4. **Copy these details:**
   ```
   Host: cp.hostinger.com (or your host)
   Username: xxxxx_nomads
   Password: xxxxxxxxx
   Database: xxxxx_nomads_ridge
   ```

## 2️⃣ Create MySQL Database Tables (2 minutes)

Go to **phpMyAdmin** in Hostinger:

```sql
-- Table 1: Settings
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

-- Table 2: Destinations
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

-- Table 3: Gallery
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

-- Initial Settings
INSERT INTO site_settings (company_name, contact_email, contact_phone, whatsapp_number, location) 
VALUES (
  'Nomads Ridge Safaris',
  'nomadsridgesafaris@gmail.com',
  '+254 714 703 892',
  '+254 714 703 892',
  'Kenya'
);
```

## 3️⃣ Deploy to Hostinger (10 minutes)

### Option A: Git Deployment (Recommended)
```bash
# 1. Push to GitHub
git add .
git commit -m "Remove Supabase, add MySQL"
git push origin main

# 2. In Hostinger dashboard:
# - Connect your GitHub repository
# - Set deployment branch to "main"
# - Add environment variables (see below)
# - Click Deploy
```

### Option B: Manual Upload
```bash
# 1. Build locally
pnpm build

# 2. Upload to Hostinger:
# - Upload entire project via FTP/File Manager
# - Or use Hostinger's command line deployment
```

## 4️⃣ Set Environment Variables in Hostinger

In your **Hostinger Node.js Environment Variables**:

```
MYSQL_HOST=cp.hostinger.com
MYSQL_USER=xxxxx_nomads
MYSQL_PASSWORD=your_password_here
MYSQL_DATABASE=xxxxx_nomads_ridge
```

## 5️⃣ Verify It Works (5 minutes)

After deployment:

✅ Visit: `https://yourdomain.com/`  
✅ Check admin: `https://yourdomain.com/admin`  
✅ View logs in Hostinger dashboard for any errors  

---

## 📋 File Reference

| Document | Purpose | Read Time |
|----------|---------|-----------|
| **MIGRATION_COMPLETE.md** | Full summary of all changes | 10 min |
| **MYSQL_HOSTINGER_SETUP.md** | Detailed setup & troubleshooting | 15 min |
| **SUPABASE_REMOVAL_CHANGELOG.md** | Technical details of changes | 10 min |
| **QUICK_START_HOSTINGER.md** | This guide - deploy in 30 min | 5 min |

---

## 🔧 Troubleshooting

### "Database connection refused"
- ❌ Wrong host/credentials
- ✅ Solution: Double-check environment variables in Hostinger

### "Table doesn't exist"  
- ❌ Didn't run SQL schema
- ✅ Solution: Run SQL tables in phpMyAdmin

### "Build fails on Hostinger"
- ❌ Missing environment variables
- ✅ Solution: Set MYSQL_* vars before deploying

### "Admin page shows error"
- ❌ Database not connected
- ✅ Solution: Check credentials, run tables, verify network

---

## 📞 Need Help?

1. **Hostinger Issues** → Hostinger Support
2. **Database Issues** → Check phpMyAdmin
3. **Code Issues** → Review logs in Hostinger dashboard
4. **Deployment Issues** → Re-read MYSQL_HOSTINGER_SETUP.md

---

## ✅ Success Checklist

- [ ] MySQL database created
- [ ] Database tables created via SQL
- [ ] Environment variables set
- [ ] Code deployed to Hostinger
- [ ] Admin dashboard loads
- [ ] Can fetch destinations/gallery
- [ ] Can create/edit content

---

**You're all set! Deploy now and enjoy your MySQL-powered safari website! 🦁**

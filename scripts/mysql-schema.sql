-- Nomads Ridge Safaris - MySQL Database Schema
-- This schema is designed for production deployment on Hostinger

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email)
);

-- Site Settings Table
CREATE TABLE IF NOT EXISTS site_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  setting_key VARCHAR(255) UNIQUE NOT NULL,
  setting_value LONGTEXT NOT NULL,
  setting_type VARCHAR(50) DEFAULT 'text',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_key (setting_key)
);

-- Countries Table
CREATE TABLE IF NOT EXISTS countries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(10) UNIQUE NOT NULL,
  description TEXT,
  image_url VARCHAR(1024),
  best_season VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_name (name)
);

-- Destinations (Safari) Table
CREATE TABLE IF NOT EXISTS destinations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  country_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  long_description LONGTEXT,
  image_url VARCHAR(1024),
  best_season VARCHAR(255),
  wildlife_species TEXT,
  location VARCHAR(255),
  altitude VARCHAR(100),
  best_time_to_visit VARCHAR(255),
  price_range VARCHAR(100),
  duration_days INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE,
  INDEX idx_country (country_id),
  INDEX idx_name (name),
  INDEX idx_slug (slug)
);

-- Gallery Table
CREATE TABLE IF NOT EXISTS gallery (
  id INT AUTO_INCREMENT PRIMARY KEY,
  destination_id INT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(1024) NOT NULL,
  category VARCHAR(100),
  alt_text VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  display_order INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE SET NULL,
  INDEX idx_destination (destination_id),
  INDEX idx_category (category),
  INDEX idx_featured (featured)
);

-- Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  destination_id INT,
  visitor_name VARCHAR(255) NOT NULL,
  visitor_email VARCHAR(255) NOT NULL,
  visitor_phone VARCHAR(20),
  number_of_people INT DEFAULT 1,
  start_date DATE,
  end_date DATE,
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE SET NULL,
  INDEX idx_destination (destination_id),
  INDEX idx_status (status),
  INDEX idx_email (visitor_email)
);

-- Audit Logs Table
CREATE TABLE IF NOT EXISTS audit_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  admin_id INT,
  action VARCHAR(255) NOT NULL,
  entity_type VARCHAR(100),
  entity_id INT,
  old_values LONGTEXT,
  new_values LONGTEXT,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES admin_users(id) ON DELETE SET NULL,
  INDEX idx_action (action),
  INDEX idx_entity (entity_type, entity_id),
  INDEX idx_created (created_at)
);

-- Inquiries Table
CREATE TABLE IF NOT EXISTS inquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  subject VARCHAR(255),
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_status (status),
  INDEX idx_email (email),
  INDEX idx_created (created_at)
);

-- Insert default admin user (password will be set during initial setup)
INSERT INTO admin_users (email, password_hash) VALUES ('bknglabs.dev@gmail.com', '') ON DUPLICATE KEY UPDATE email=email;

-- Insert default site settings
INSERT INTO site_settings (setting_key, setting_value, setting_type) VALUES
  ('company_name', 'Nomads Ridge Safaris', 'text'),
  ('phone', '+254 714 703 892', 'text'),
  ('email', 'nomadsridgesafaris@gmail.com', 'text'),
  ('whatsapp', '+254714703892', 'text'),
  ('office_address', 'Nairobi, Kenya', 'text'),
  ('business_hours', 'Mon-Sun: 8am-6pm EAT', 'text'),
  ('emergency_number', '+254 714 703 892', 'text'),
  ('company_description', 'Beyond Destinations, Into the Wild', 'text'),
  ('facebook_url', 'https://www.facebook.com/profile.php?id=61586691939066', 'text'),
  ('instagram_url', 'https://www.instagram.com/nomadsridgesafaris', 'text'),
  ('tagline', 'Where ancient traditions meet untamed wilderness', 'text')
ON DUPLICATE KEY UPDATE setting_key=setting_key;

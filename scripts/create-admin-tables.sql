-- Create admin_credentials table for storing admin access info
CREATE TABLE IF NOT EXISTS public.admin_credentials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email varchar NOT NULL UNIQUE,
  password_hash varchar NOT NULL,
  master_password_hash varchar NOT NULL,
  is_active boolean DEFAULT true,
  last_login timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create admin_sessions table for tracking login sessions
CREATE TABLE IF NOT EXISTS public.admin_sessions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_id uuid NOT NULL REFERENCES public.admin_credentials(id) ON DELETE CASCADE,
  session_token varchar NOT NULL UNIQUE,
  expires_at timestamp with time zone NOT NULL,
  ip_address varchar,
  user_agent varchar,
  created_at timestamp with time zone DEFAULT now()
);

-- Create site_settings table for storing location info, contact details, etc.
CREATE TABLE IF NOT EXISTS public.site_settings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key varchar NOT NULL UNIQUE,
  setting_value text NOT NULL,
  description text,
  updated_by uuid REFERENCES public.admin_credentials(id),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create countries table for organizing destinations
CREATE TABLE IF NOT EXISTS public.countries (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name varchar NOT NULL UNIQUE,
  description text,
  image_url text,
  featured boolean DEFAULT false,
  display_order integer,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Alter destinations table to include country reference if not exists
ALTER TABLE public.destinations
ADD COLUMN IF NOT EXISTS country_id uuid REFERENCES public.countries(id) ON DELETE SET NULL;

-- Create gallery table for managing photo galleries
CREATE TABLE IF NOT EXISTS public.gallery (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title varchar NOT NULL,
  description text,
  image_url text NOT NULL,
  alt_text varchar,
  category varchar,
  tags varchar[],
  display_order integer,
  featured boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create content_audit_log for tracking changes
CREATE TABLE IF NOT EXISTS public.content_audit_log (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_id uuid NOT NULL REFERENCES public.admin_credentials(id) ON DELETE SET NULL,
  action varchar NOT NULL,
  table_name varchar NOT NULL,
  record_id uuid,
  old_values jsonb,
  new_values jsonb,
  created_at timestamp with time zone DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_admin_sessions_admin_id ON public.admin_sessions(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_token ON public.admin_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_site_settings_key ON public.site_settings(setting_key);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON public.gallery(category);
CREATE INDEX IF NOT EXISTS idx_gallery_featured ON public.gallery(featured);
CREATE INDEX IF NOT EXISTS idx_destinations_country ON public.destinations(country_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_admin ON public.content_audit_log(admin_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_table ON public.content_audit_log(table_name);

-- Insert default admin credentials (password: Kesh09it7, email: bknglabs.dev@gmail.com)
-- Note: These are bcrypt hashed - you'll need to generate these with proper bcrypt hashing
INSERT INTO public.admin_credentials (email, password_hash, master_password_hash, is_active)
VALUES (
  'bknglabs.dev@gmail.com',
  '$2b$10$placeholder_password_hash',
  '$2b$10$placeholder_master_password_hash',
  true
) ON CONFLICT (email) DO NOTHING;

-- Insert default site settings
INSERT INTO public.site_settings (setting_key, setting_value, description)
VALUES 
  ('company_name', 'Nomads Ridge Safaris', 'Company name'),
  ('company_email', 'nomadsridgesafaris@gmail.com', 'Company email'),
  ('company_phone', '+254 714 703 892', 'Company phone number'),
  ('company_address', 'Kenya', 'Company address'),
  ('company_description', 'Beyond Destinations, Into the Wild', 'Company tagline'),
  ('facebook_url', 'https://www.facebook.com/profile.php?id=61586691939066', 'Facebook URL'),
  ('instagram_url', 'https://www.instagram.com/nomadsridgesafaris', 'Instagram URL'),
  ('whatsapp_number', '+254714703892', 'WhatsApp number'),
  ('website_url', 'https://nomadsridgesafaris.com', 'Website URL')
ON CONFLICT (setting_key) DO NOTHING;

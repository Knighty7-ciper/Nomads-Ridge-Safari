-- Seed initial data for Riverdale Travel

-- Insert destinations
INSERT INTO destinations (name, description, location, price, duration, image_url, featured, max_capacity) VALUES
('Maasai Mara Safari', 'Experience the Great Migration and witness the Big Five in Kenya''s most famous game reserve.', 'Maasai Mara', 45000.00, '3 Days / 2 Nights', '/maasai-mara-safari.png', true, 40),
('Diani Beach Getaway', 'Relax on pristine white sand beaches with crystal clear waters and vibrant coral reefs.', 'Diani Beach', 35000.00, '4 Days / 3 Nights', '/diani-beach-kenya.png', true, 60),
('Mount Kenya Hiking', 'Challenge yourself with a trek to Africa''s second-highest peak through diverse ecosystems.', 'Mount Kenya', 55000.00, '5 Days / 4 Nights', '/mount-kenya-hikers.png', true, 25),
('Amboseli National Park', 'Enjoy spectacular views of Mount Kilimanjaro while observing large elephant herds.', 'Amboseli', 40000.00, '3 Days / 2 Nights', '/amboseli-elephants-kilimanjaro.png', true, 35);

-- Insert hotels
INSERT INTO hotels (name, description, location, price_per_night, rating, amenities, image_url, max_capacity) VALUES
('Luxury Hotel Nairobi', 'Premium accommodation in the heart of Nairobi with world-class amenities.', 'Nairobi CBD', 15000.00, 4.8, ARRAY['WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym', 'Conference Rooms'], '/luxury-hotel-nairobi.png', 120),
('Kenyan Beach Resort', 'Beachfront resort with stunning ocean views and tropical paradise setting.', 'Diani Beach', 18000.00, 4.9, ARRAY['Beach Access', 'Pool', 'Restaurant', 'Bar', 'Water Sports', 'Spa'], '/kenyan-beach-resort.png', 80),
('Nairobi Heritage Hotel', 'Historic hotel combining traditional Kenyan hospitality with modern comfort.', 'Nairobi', 12000.00, 4.6, ARRAY['WiFi', 'Restaurant', 'Business Center', 'Airport Shuttle'], '/nairobi-heritage-hotel.png', 90),
('Boutique Hotel Karen', 'Intimate boutique hotel in the prestigious Karen suburb with personalized service.', 'Karen, Nairobi', 20000.00, 4.7, ARRAY['WiFi', 'Garden', 'Restaurant', 'Spa', 'Library'], '/boutique-hotel-karen-nairobi.png', 40),
('Luxury Hotel Westlands', 'Modern luxury hotel in Westlands with contemporary design and premium facilities.', 'Westlands, Nairobi', 16000.00, 4.8, ARRAY['WiFi', 'Pool', 'Gym', 'Restaurant', 'Bar', 'Parking'], '/luxury-hotel-westlands-nairobi.png', 100);

-- Insert pricing rules
INSERT INTO pricing_rules (rule_type, name, description, discount_type, discount_value, conditions, active) VALUES
('age', 'Children Discount', 'Special discount for children under 12', 'percentage', 50.00, '{"max_age": 12}', true),
('group', 'Family Package', 'Discount for families (2 adults + 2+ children)', 'percentage', 15.00, '{"min_adults": 2, "min_children": 2}', true),
('group', 'Large Group Discount', 'Discount for groups of 6 or more people', 'percentage', 20.00, '{"min_total": 6}', true),
('seasonal', 'Peak Season Surcharge', 'Additional charge during peak season', 'percentage', 25.00, '{"months": [12, 1, 7, 8]}', true),
('early_bird', 'Early Bird Special', 'Discount for bookings made 30+ days in advance', 'percentage', 10.00, '{"days_advance": 30}', true);

-- Insert blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, published) VALUES
('Ultimate Guide to Maasai Mara Safari', 'ultimate-guide-maasai-mara-safari', 'Everything you need to know for an unforgettable Maasai Mara safari experience.', 'The Maasai Mara National Reserve is Kenya''s most celebrated game park, offering an unparalleled safari experience...', '/maasai-mara-safari.png', true),
('Diani Beach: Paradise Found', 'diani-beach-paradise-found', 'Discover why Diani Beach is considered one of Africa''s most beautiful coastal destinations.', 'Diani Beach stretches for 25 kilometers along Kenya''s south coast, offering pristine white sand beaches...', '/diani-beach-kenya.png', true);

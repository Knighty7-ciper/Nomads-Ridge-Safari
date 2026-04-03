-- Updated seed data with only 3 destinations and 3 hotels, with enhanced content

-- Clear existing data
DELETE FROM destination_images;
DELETE FROM hotel_images;
DELETE FROM bookings;
DELETE FROM destinations;
DELETE FROM hotels;

-- Insert 3 featured destinations with detailed content
INSERT INTO destinations (id, name, description, location, price, duration, image_url, featured, max_capacity, highlights, inclusions, exclusions, difficulty_level, best_time_to_visit, category, faq, itinerary) VALUES 
(
  gen_random_uuid(),
  'Maasai Mara Safari Adventure',
  'Experience the world-famous Great Migration and witness millions of wildebeest, zebras, and gazelles crossing the Mara River. This iconic safari destination offers unparalleled wildlife viewing opportunities in Kenya''s most celebrated game reserve.',
  'Maasai Mara National Reserve, Kenya',
  1299.00,
  '4 Days / 3 Nights',
  '/maasai-mara-safari.png',
  true,
  12,
  ARRAY['Great Migration viewing', 'Big Five encounters', 'Maasai cultural visits', 'Hot air balloon safari option', 'Professional guide services'],
  ARRAY['Airport transfers', 'Game drives', 'Professional guide', 'Park fees', 'Accommodation', 'All meals', 'Bottled water'],
  ARRAY['International flights', 'Visa fees', 'Travel insurance', 'Personal expenses', 'Tips and gratuities', 'Hot air balloon safari'],
  'Moderate',
  'July to October (Great Migration), December to March (Calving season)',
  'safari',
  '[
    {"question": "When is the best time to see the Great Migration?", "answer": "The Great Migration typically occurs from July to October when millions of animals cross from Serengeti to Maasai Mara."},
    {"question": "What animals can I expect to see?", "answer": "You can expect to see the Big Five (lion, leopard, elephant, buffalo, rhino), cheetahs, hippos, crocodiles, and over 450 bird species."},
    {"question": "Is this safari suitable for children?", "answer": "Yes, this safari is family-friendly and suitable for children above 5 years old."},
    {"question": "What should I pack?", "answer": "Pack neutral-colored clothing, comfortable walking shoes, hat, sunscreen, binoculars, and camera with extra batteries."}
  ]',
  '[
    {"day": 1, "title": "Arrival & First Game Drive", "activities": ["Airport pickup", "Drive to Maasai Mara", "Check-in at lodge", "Afternoon game drive", "Dinner at lodge"]},
    {"day": 2, "title": "Full Day Safari", "activities": ["Early morning game drive", "Breakfast in the bush", "Visit Maasai village", "Lunch at lodge", "Evening game drive", "Sundowner drinks"]},
    {"day": 3, "title": "Migration Viewing", "activities": ["Dawn game drive", "Mara River crossing viewing", "Picnic lunch", "Photography session", "Return to lodge", "Cultural entertainment"]},
    {"day": 4, "title": "Departure", "activities": ["Final game drive", "Breakfast", "Check-out", "Souvenir shopping", "Transfer to airport"]}
  ]'
),
(
  gen_random_uuid(),
  'Mount Kenya Trekking Expedition',
  'Conquer Africa''s second-highest peak on this challenging yet rewarding trekking adventure. Experience diverse ecosystems, from bamboo forests to alpine meadows, while enjoying breathtaking views of the surrounding landscape.',
  'Mount Kenya National Park, Kenya',
  899.00,
  '5 Days / 4 Nights',
  '/mount-kenya-hikers.png',
  true,
  8,
  ARRAY['Summit Point Lenana (4,985m)', 'Diverse ecosystems', 'Alpine lakes', 'Unique flora and fauna', 'UNESCO World Heritage Site'],
  ARRAY['Professional mountain guide', 'Porter services', 'Camping equipment', 'All meals on mountain', 'Park fees', 'Rescue insurance'],
  ARRAY['Personal trekking gear', 'Sleeping bag', 'International flights', 'Accommodation before/after trek', 'Personal expenses'],
  'Challenging',
  'January to March, June to October (dry seasons)',
  'trekking',
  '[
    {"question": "Do I need prior trekking experience?", "answer": "Yes, good physical fitness and some trekking experience is recommended for this challenging expedition."},
    {"question": "What is the success rate for reaching Point Lenana?", "answer": "With proper preparation and acclimatization, the success rate is approximately 85-90%."},
    {"question": "What gear do I need to bring?", "answer": "You need proper trekking boots, warm clothing, rain gear, sleeping bag, and personal items. We provide camping equipment."},
    {"question": "Is altitude sickness a concern?", "answer": "Yes, we include acclimatization days and our guides are trained in altitude sickness recognition and treatment."}
  ]',
  '[
    {"day": 1, "title": "Naro Moru to Met Station", "activities": ["Meet guide and porters", "Equipment check", "Trek through bamboo forest", "Camp at Met Station (3,048m)", "Acclimatization walk"]},
    {"day": 2, "title": "Met Station to Mackinders Camp", "activities": ["Early morning start", "Trek through moorland", "Lunch at Teleki Valley", "Arrive at Mackinders Camp (4,200m)", "Rest and prepare for summit"]},
    {"day": 3, "title": "Summit Day - Point Lenana", "activities": ["3:00 AM start", "Summit Point Lenana (4,985m)", "Sunrise at summit", "Descend to Shipton Camp", "Celebrate achievement"]},
    {"day": 4, "title": "Shipton to Old Moses", "activities": ["Descend through Sirimon route", "Different scenery and wildlife", "Camp at Old Moses (3,300m)", "Relax and recover"]},
    {"day": 5, "title": "Old Moses to Sirimon Gate", "activities": ["Final descent", "Wildlife viewing", "Certificate presentation", "Transfer back to Nairobi"]}
  ]'
),
(
  gen_random_uuid(),
  'Amboseli Elephant Paradise',
  'Discover the land of giants beneath the majestic Mount Kilimanjaro. Amboseli is renowned for its large elephant herds and offers spectacular views of Africa''s highest peak as a backdrop to incredible wildlife encounters.',
  'Amboseli National Park, Kenya',
  1099.00,
  '3 Days / 2 Nights',
  '/amboseli-elephants-kilimanjaro.png',
  true,
  15,
  ARRAY['Large elephant herds', 'Mount Kilimanjaro views', 'Diverse birdlife', 'Maasai culture', 'Swamp ecosystems'],
  ARRAY['Game drives', 'Professional guide', 'Park fees', 'Accommodation', 'All meals', 'Airport transfers', 'Bottled water'],
  ARRAY['International flights', 'Visa fees', 'Travel insurance', 'Personal expenses', 'Tips', 'Optional activities'],
  'Easy',
  'June to October, January to March (clear Kilimanjaro views)',
  'safari',
  '[
    {"question": "Will I see Mount Kilimanjaro clearly?", "answer": "The best views are early morning and late afternoon. Weather conditions affect visibility, but chances are highest during dry seasons."},
    {"question": "How many elephants can we expect to see?", "answer": "Amboseli has over 1,600 elephants. You can expect to see multiple herds, especially around the swamps."},
    {"question": "Is this suitable for photography?", "answer": "Amboseli offers some of the best wildlife photography opportunities in Africa, especially elephants against Kilimanjaro."},
    {"question": "What other animals will we see?", "answer": "Besides elephants, you''ll see lions, cheetahs, buffalo, zebras, wildebeest, giraffes, and over 400 bird species."}
  ]',
  '[
    {"day": 1, "title": "Arrival & Afternoon Safari", "activities": ["Pickup from Nairobi", "Drive to Amboseli", "Check-in at lodge", "Lunch", "Afternoon game drive", "Sunset at Observation Hill"]},
    {"day": 2, "title": "Full Day Amboseli", "activities": ["Sunrise game drive", "Breakfast", "Visit Maasai village", "Lunch at lodge", "Afternoon at swamps", "Evening game drive", "Dinner under stars"]},
    {"day": 3, "title": "Final Safari & Departure", "activities": ["Early morning game drive", "Breakfast", "Last wildlife viewing", "Check-out", "Lunch en route", "Return to Nairobi"]}
  ]'
);

-- Insert 3 featured hotels with detailed content
INSERT INTO hotels (id, name, description, location, price_per_night, rating, amenities, image_url, max_capacity, highlights, room_types, policies, nearby_attractions, check_in_time, check_out_time) VALUES 
(
  gen_random_uuid(),
  'Diani Beach Resort & Spa',
  'A luxury beachfront resort offering pristine white sand beaches, crystal-clear waters, and world-class amenities. Perfect for relaxation after your safari adventure or as a romantic getaway destination.',
  'Diani Beach, Kwale County, Kenya',
  299.00,
  4.8,
  ARRAY['Private beach access', 'Spa services', 'Swimming pool', 'Water sports', 'Fine dining', 'WiFi', 'Airport transfers'],
  '/diani-beach-kenya.png',
  200,
  ARRAY['Private beach access', 'Award-winning spa', 'Multiple dining options', 'Water sports center', 'Coral reef snorkeling'],
  '[
    {"type": "Ocean View Suite", "size": "65 sqm", "occupancy": "2 adults + 1 child", "amenities": ["King bed", "Ocean balcony", "Mini bar", "Air conditioning"]},
    {"type": "Beach Villa", "size": "120 sqm", "occupancy": "4 adults + 2 children", "amenities": ["2 bedrooms", "Private terrace", "Kitchenette", "Living area"]},
    {"type": "Presidential Suite", "size": "200 sqm", "occupancy": "6 adults", "amenities": ["3 bedrooms", "Private pool", "Butler service", "Panoramic views"]}
  ]',
  '[
    {"type": "Check-in/Check-out", "details": "Check-in: 2:00 PM, Check-out: 11:00 AM. Early check-in subject to availability."},
    {"type": "Cancellation", "details": "Free cancellation up to 48 hours before arrival. Late cancellations subject to one night charge."},
    {"type": "Children", "details": "Children under 12 stay free when sharing with parents. Extra bed available for additional charge."},
    {"type": "Pets", "details": "Pets are not allowed in the resort premises."}
  ]',
  ARRAY['Shimba Hills National Reserve', 'Colobus Conservation', 'Kongo Mosque', 'Diani Beach Art Gallery', 'Jadini Forest'],
  '14:00',
  '11:00'
),
(
  gen_random_uuid(),
  'Nairobi Serena Hotel',
  'An elegant city hotel blending modern luxury with African heritage. Located in the heart of Nairobi, it offers easy access to the city''s attractions while providing a peaceful retreat from urban bustle.',
  'Central Nairobi, Kenya',
  189.00,
  4.6,
  ARRAY['Business center', 'Fitness center', 'Swimming pool', 'Conference facilities', 'Restaurant', 'Bar', 'WiFi', 'Concierge'],
  '/nairobi-serena-hotel.png',
  300,
  ARRAY['Central location', 'African-inspired design', 'Award-winning cuisine', 'Business facilities', 'Cultural performances'],
  '[
    {"type": "Standard Room", "size": "32 sqm", "occupancy": "2 adults", "amenities": ["Queen bed", "City view", "Work desk", "Air conditioning"]},
    {"type": "Executive Room", "size": "40 sqm", "occupancy": "2 adults + 1 child", "amenities": ["King bed", "Sitting area", "Executive lounge access", "Premium amenities"]},
    {"type": "Presidential Suite", "size": "150 sqm", "occupancy": "4 adults", "amenities": ["2 bedrooms", "Living room", "Dining area", "Butler service"]}
  ]',
  '[
    {"type": "Check-in/Check-out", "details": "Check-in: 2:00 PM, Check-out: 12:00 PM. Late check-out available until 6:00 PM for additional charge."},
    {"type": "Cancellation", "details": "Free cancellation up to 24 hours before arrival. Same-day cancellations subject to full charge."},
    {"type": "Business Services", "details": "24-hour business center, meeting rooms, and conference facilities available."},
    {"type": "Transportation", "details": "Airport shuttle service available. City tour arrangements through concierge."}
  ]',
  ARRAY['Nairobi National Park', 'Karen Blixen Museum', 'Giraffe Centre', 'National Museum', 'Uhuru Park'],
  '14:00',
  '12:00'
),
(
  gen_random_uuid(),
  'Mara Safari Lodge',
  'An authentic safari lodge overlooking the Maasai Mara, offering front-row seats to the greatest wildlife show on earth. Experience luxury in the wilderness with unparalleled game viewing from your room.',
  'Maasai Mara National Reserve, Kenya',
  449.00,
  4.9,
  ARRAY['Game viewing deck', 'Safari drives', 'Cultural visits', 'Bush dining', 'Spa treatments', 'WiFi', 'All meals included'],
  '/mara-safari-lodge.png',
  60,
  ARRAY['Prime Mara location', 'Wildlife viewing from rooms', 'Expert safari guides', 'Cultural experiences', 'Luxury tented accommodation'],
  '[
    {"type": "Safari Tent", "size": "45 sqm", "occupancy": "2 adults", "amenities": ["King bed", "Private deck", "River view", "En-suite bathroom"]},
    {"type": "Family Tent", "size": "65 sqm", "occupancy": "2 adults + 2 children", "amenities": ["2 bedrooms", "Shared deck", "Game viewing area", "Family bathroom"]},
    {"type": "Luxury Suite", "size": "85 sqm", "occupancy": "2 adults", "amenities": ["Separate living area", "Private butler", "Premium location", "Champagne service"]}
  ]',
  '[
    {"type": "Safari Package", "details": "All meals, game drives, and park fees included. Minimum 2-night stay required."},
    {"type": "Cancellation", "details": "Free cancellation up to 7 days before arrival. Shorter notice subject to 50% charge."},
    {"type": "Game Drives", "details": "Two game drives daily included. Additional drives and special requests available."},
    {"type": "Cultural Visits", "details": "Maasai village visits included. Cultural performances arranged on request."}
  ]',
  ARRAY['Mara River', 'Maasai Villages', 'Balloon Safari Launch', 'Hippo Pools', 'Migration Crossing Points'],
  '14:00',
  '11:00'
);

-- Insert sample images for destinations
INSERT INTO destination_images (destination_id, image_url, alt_text, display_order, is_primary) 
SELECT d.id, '/maasai-mara-safari.png', 'Maasai Mara wildlife safari', 0, true
FROM destinations d WHERE d.name = 'Maasai Mara Safari Adventure';

INSERT INTO destination_images (destination_id, image_url, alt_text, display_order, is_primary) 
SELECT d.id, '/mount-kenya-hikers.png', 'Mount Kenya trekking expedition', 0, true
FROM destinations d WHERE d.name = 'Mount Kenya Trekking Expedition';

INSERT INTO destination_images (destination_id, image_url, alt_text, display_order, is_primary) 
SELECT d.id, '/amboseli-elephants-kilimanjaro.png', 'Amboseli elephants with Kilimanjaro backdrop', 0, true
FROM destinations d WHERE d.name = 'Amboseli Elephant Paradise';

-- Insert sample images for hotels
INSERT INTO hotel_images (hotel_id, image_url, alt_text, display_order, is_primary) 
SELECT h.id, '/diani-beach-kenya.png', 'Diani Beach Resort luxury accommodation', 0, true
FROM hotels h WHERE h.name = 'Diani Beach Resort & Spa';

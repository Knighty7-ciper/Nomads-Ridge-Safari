import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

// Destination image mappings - using Unsplash image IDs
const destinations = [
  // Kenya
  {
    id: 'maasai-mara',
    name: 'Maasai Mara',
    unsplashQuery: 'maasai-mara-wildlife-safari',
    unsplashId: 'mara-wildlife-1',
    filename: 'mara-golden-sunset.jpg'
  },
  {
    id: 'amboseli',
    name: 'Amboseli',
    unsplashQuery: 'amboseli-elephant-kilimanjaro',
    unsplashId: 'amboseli-elephant',
    filename: 'amboseli-kilimanjaro.jpg'
  },
  {
    id: 'tsavo',
    name: 'Tsavo',
    unsplashQuery: 'tsavo-national-park-elephants',
    unsplashId: 'tsavo-red-earth',
    filename: 'tsavo-red-earth.jpg'
  },
  {
    id: 'lake-naivasha',
    name: 'Lake Naivasha',
    unsplashQuery: 'lake-naivasha-birds-wildlife',
    unsplashId: 'naivasha-lake',
    filename: 'naivasha-lake-birds.jpg'
  },
  {
    id: 'samburu',
    name: 'Samburu',
    unsplashQuery: 'samburu-reserve-grevy-zebra',
    unsplashId: 'samburu-wildlife',
    filename: 'samburu-reserve.jpg'
  },
  // Tanzania
  {
    id: 'serengeti',
    name: 'Serengeti',
    unsplashQuery: 'serengeti-migration-plains-safari',
    unsplashId: 'serengeti-plains',
    filename: 'serengeti-plains.jpg'
  },
  {
    id: 'ngorongoro',
    name: 'Ngorongoro',
    unsplashQuery: 'ngorongoro-crater-wildlife',
    unsplashId: 'ngorongoro-crater',
    filename: 'ngorongoro-crater.jpg'
  },
  {
    id: 'kilimanjaro',
    name: 'Kilimanjaro',
    unsplashQuery: 'mount-kilimanjaro-summit-tanzania',
    unsplashId: 'kilimanjaro-summit',
    filename: 'kilimanjaro-summit.jpg'
  },
  {
    id: 'tarangire',
    name: 'Tarangire',
    unsplashQuery: 'tarangire-elephants-wildlife',
    unsplashId: 'tarangire-elephants',
    filename: 'tarangire-elephants.jpg'
  },
  // Uganda & Rwanda
  {
    id: 'bwindi',
    name: 'Bwindi',
    unsplashQuery: 'bwindi-forest-mountain-gorilla',
    unsplashId: 'bwindi-forest',
    filename: 'bwindi-forest.jpg'
  },
  {
    id: 'volcanoes',
    name: 'Volcanoes',
    unsplashQuery: 'volcanoes-national-park-rwanda-gorilla',
    unsplashId: 'volcanoes-park',
    filename: 'volcanoes-park.jpg'
  },
  {
    id: 'kibale',
    name: 'Kibale',
    unsplashQuery: 'kibale-forest-chimpanzee',
    unsplashId: 'kibale-forest',
    filename: 'kibale-forest.jpg'
  }
];

// Create the public/images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created public/images directory');
}

// Using placeholder images from Unsplash for now
// In production, you would use the Unsplash API with a proper key
const placeholderImages = {
  'mara-golden-sunset.jpg': 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop',
  'amboseli-kilimanjaro.jpg': 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1200&h=800&fit=crop',
  'tsavo-red-earth.jpg': 'https://images.unsplash.com/photo-1524429656589-6f3f3ff21f23?w=1200&h=800&fit=crop',
  'naivasha-lake-birds.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
  'samburu-reserve.jpg': 'https://images.unsplash.com/photo-1534391130812-1d5ba5c96f09?w=1200&h=800&fit=crop',
  'serengeti-plains.jpg': 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=800&fit=crop',
  'ngorongoro-crater.jpg': 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=1200&h=800&fit=crop',
  'kilimanjaro-summit.jpg': 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop',
  'tarangire-elephants.jpg': 'https://images.unsplash.com/photo-1551986782-d244d7d3f3f5?w=1200&h=800&fit=crop',
  'bwindi-forest.jpg': 'https://images.unsplash.com/photo-1551551479-29efc2df330d?w=1200&h=800&fit=crop',
  'volcanoes-park.jpg': 'https://images.unsplash.com/photo-1598218657323-d7f7f4c0ab39?w=1200&h=800&fit=crop',
  'kibale-forest.jpg': 'https://images.unsplash.com/photo-1551551479-29efc2df330d?w=1200&h=800&fit=crop'
};

async function downloadImage(url, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const buffer = await response.buffer();
    const filepath = path.join(imagesDir, filename);
    fs.writeFileSync(filepath, buffer);
    console.log(`✓ Downloaded ${filename}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Starting destination image downloads...\n');
  
  let downloaded = 0;
  let failed = 0;
  
  for (const [filename, url] of Object.entries(placeholderImages)) {
    const success = await downloadImage(url, filename);
    if (success) {
      downloaded++;
    } else {
      failed++;
    }
  }
  
  console.log(`\nDownload complete: ${downloaded} successful, ${failed} failed`);
  console.log(`Images saved to: public/images/`);
}

main().catch(console.error);

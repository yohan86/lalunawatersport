export interface Services {
  id: string | number;
  title: string;
  slug: string;
  cat: "thrill" | "towable" | "safari" | "underwater";
  description: string;
  fullDescription: string;
  price: string;
  duration: string;
  intensity: "Mild" | "Moderate" | "Extreme";
  image: string;
  size: "small" | "large";
}


export const SERVICES_DATA: Services[] = [
        // 1. THRILLS (High Speed)
        { id: 1, title: 'Jet Ski',
           slug: 'jet-ski', 
           cat: 'thrill',
           description:`Feel the ultimate rush of the Indian Ocean`,
           fullDescription: `Feel the ultimate rush of the Indian Ocean as you command a high-performance Yamaha Waverunner across Sri Lanka's pristine tropical waters. Speed past palm-fringed coastlines and golden beaches in a thrilling, high-speed adventure that combines pure adrenaline with freedom.`, 
           price: '$80', 
           duration: '30 mins', 
           intensity: 'Extreme', 
           image: `/images/services/jetski.jpg`, 
           size: 'large' 
        },
        { 
          id: 2, 
          title: 'Water Ski', 
          slug: 'water-ski', 
          cat: 'thrill', 
          description: 'Classic water skiing experience.',
          fullDescription: 'Experience the thrill of gliding over the water on skis, with the wind in your hair and the sun on your face.',
          price: '$60', 
          duration: '30 mins',
          intensity: 'Extreme', 
          image: `/images/services/water-ski2.jpg`, 
          size: 'small' 
        },
        { 
          id: 3,
          title: 'Fly Fish',
          slug: 'fly-fish',
          cat: 'thrill',
          description: 'Towable fly fish ride for adrenaline seekers.',
          fullDescription: 'Experience the thrill of being towed behind a boat on a giant inflatable fish.',
          price: '$55',
          duration: '20 mins',
          intensity: 'Extreme',
          image: `/images/services/fly-fish2.jpg`,
          size: 'small'
        },
        { 
          id: 4,
          title: 'Speed Boat Ride',
          slug: 'speed-boat-ride',
          cat: 'thrill',
          description: 'Fast paced speed boat trip.',
          fullDescription: 'Feel the adrenaline rush as you speed across the water in our high-powered boat.',
          price: '$90',
          duration: '30 mins',
          intensity: 'Extreme',
          image: `/images/services/speedboat.jpg`,
          size: 'small'
        },
        { 
          id: 5, 
          title: 'Wave Surfing',
          slug: 'wave-surfing',
          cat: 'thrill',
          description: 'Surf the waves with guidance.',
          fullDescription: 'Join our expert instructors and ride the waves like a pro.',
          price: '$50',
          duration: '45 mins',
          intensity: 'Extreme',
          image: `/images/services/wavesurfing.jpg`,
          size: 'small'
        },

        // 2. TOWABLES (Fun Rides)
        { 
          id: 6, 
          title: 'Tube Riding', 
          slug: 'tube-riding', 
          cat: 'towable', 
          description: 'Experience the thrill of being towed on a giant',
          fullDescription: 'Experience the thrill of being towed on a giant inflatable tube.',
          price: '$30', 
          duration: '15 mins', 
          intensity: 'Moderate', 
          image: `/images/services/tuberide.jpg`, 
          size: 'small' 
        },
        { 
          id: 7, 
          title: 'Banana Boat Riding', 
          slug: 'banana-boat-riding', 
          cat: 'towable', 
          description: 'Enjoy a fun-filled ride on our banana boat',
          fullDescription: 'Enjoy a fun-filled ride on our banana boat, perfect for groups and families.', 
          price: '$45', 
          duration: '20 mins', 
          intensity: 'Moderate', 
          image: `/images/services/bananaboat.jpg`, 
          size: 'large' 
        },
        { 
          id: 8, 
          title: 'Sofa Riding', 
          slug: 'sofa-riding', 
          cat: 'towable', 
          description: 'Enjoy a leisurely ride on our sofa-style towable',
          fullDescription: 'Enjoy a leisurely ride on our sofa-style towable, perfect for families and groups.',
          price: '$30', 
          duration: '15 mins', 
          intensity: 'Moderate', 
          image: `/images/services/sofaride.jpg`, 
          size: 'small' 
        },
        { 
          id: 9, 
          title: 'Lay Down Riding', 
          slug: 'lay-down-riding', 
          cat: 'towable', 
          description: 'Experience a comfortable and thrilling ride',
          fullDescription: 'Experience a comfortable and thrilling ride on our lay down towable, perfect for those who want to relax while enjoying the water.',
           price: '$30', 
           duration: '15 mins', 
           intensity: 'Moderate', 
           image: `/images/services/laydown.jpg`, 
           size: 'small' 
        },

        // 3. PADDLES & TOURS (River & Ocean Safaris)
        { 
          id: 10, 
          title: 'Yacht Cruise Tours', 
          slug: 'yacht-cruise-tours', cat: 'safari', 
          description: 'Scenic yacht cruises and tours.', 
          fullDescription: 'Experience the beauty of Sri Lanka\'s coastline with our scenic yacht cruises and tours, perfect for a relaxing day on the water.',
          price: '$200', 
          duration: '2 hrs', 
          intensity: 'Mild', 
          image: `/images/services/yacht.jpg`, 
          size: 'large' 
        },
        { id: 11, title: 'Boat Trip', slug: 'boat-trip', cat: 'safari', 
          description: 'Enjoy a pleasant boat trip along the river',
          fullDescription: 'Enjoy a pleasant boat trip along the river, perfect for sightseeing and relaxing with friends and family.',
          price: '$70', 
          duration: '1 hr', 
          intensity: 'Mild', 
          image: `/images/services/boattrip.jpg`, size: 'small' 
        },
        { 
          id: 12, 
          title: 'Kayak', 
          slug: 'kayak', 
          cat: 'safari', 
          description: 'Explore the serene waters with our guided kayak tours',
          fullDescription: 'Explore the serene waters with our guided kayak tours, perfect for those seeking a peaceful and immersive experience in nature.',
          price: '$40', duration: '1 hr', intensity: 'Moderate', image: `/images/services/kayak.jpg`, 
          size: 'small' 
        },
        { 
          id: 13,
          title: 'Canoeing', slug: 'canoeing', cat: 'safari', 
          description: 'Canoe trips for groups.',
          fullDescription: 'Experience the tranquility of the water with our canoe trips, perfect for groups and families looking to connect with nature.',
          price: '$40', 
          duration: '1 hr', 
          intensity: 'Moderate', 
          image: `/images/services/canoeing.jpg`, 
          size: 'small' 
        },
        { 
          id: 14, 
          title: 'Stand-up Paddling', 
          slug: 'stand-up-paddling', 
          cat: 'safari', 
          description: 'SUP sessions for beginners and pros.',
          fullDescription: 'Experience the joy of stand-up paddling with our SUP sessions, perfect for both beginners and experienced paddlers looking to enjoy the water at their own pace.',
          price: '$35', 
          duration: '45 mins', 
          intensity: 'Moderate', 
          image: `/images/services/sup.jpg`, 
          size: 'small' 
        },
        { 
          id: 15, 
          title: 'Fishing Trips', 
          slug: 'fishing-trips', 
          cat: 'safari', 
          description: 'Guided fishing excursions.',
          fullDescription: 'Experience the thrill of fishing with our guided fishing excursions, perfect for those looking to catch some of the local fish species while enjoying the beauty of the water.',
          price: '$120', 
          duration: '3 hrs', 
          intensity: 'Mild', 
          image: `/images/services/fishing.jpg`, 
          size: 'small' 
        },

        // 4. UNDERWATER & WINDS
        { 
          id: 16, 
          title: 'Deep Sea Diving', 
          slug: 'deep-sea-diving', 
          cat: 'underwater', 
          description: 'Certified deep sea diving experiences.',
          fullDescription: 'Experience the wonders of the underwater world with our certified deep sea diving experiences, perfect for those looking to explore the vibrant marine life and coral reefs.',
          price: '$250', 
          duration: '3 hrs', 
          intensity: 'Moderate', 
          image: `/images/services/diving.jpg`, 
          size: 'large' 
        },
        { 
          id: 17, 
          title: 'Snorkeling', 
          slug: 'snorkeling', 
          cat: 'underwater', 
          description: 'Shallow water snorkeling tours.', 
          fullDescription: 'Explore the beautiful coral reefs and marine life with our shallow water snorkeling tours, perfect for beginners and families.', 
          price: '$50', 
          duration: '1 hr', 
          intensity: 'Mild', 
          image: `/images/services/snorkeling.jpg`, 
          size: 'small' 
        },
        { 
          id: 18, 
          title: 'Wind Surfing', 
          slug: 'wind-surfing', 
          cat: 'underwater', 
          description: 'Wind surfing lessons and rentals.', 
          fullDescription: 'Experience the thrill of wind surfing with our lessons and rentals, suitable for all skill levels.', 
          price: '$60', 
          duration: '1 hr', 
          intensity: 'Moderate', 
          image: `/images/services/windsurfing.jpg`, 
          size: 'small' 
        },
];

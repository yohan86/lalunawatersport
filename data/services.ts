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
  detailimage?: string;
  size: "small" | "large";
  metaTitle?: string;
  metaDescription?: string;
  highlights?: string[];
  faqs?: { question: string; answer: string }[];
}

export const SERVICES_DATA: Services[] = [
  // 1. THRILLS (High Speed)
  { 
    id: 1, 
    title: 'Jet Ski Rental in Bentota',
    slug: 'jet-ski-bentota', 
    cat: 'thrill',
    metaTitle: 'Jet Ski Rental in Bentota | High-Speed Ocean & River Riding',
    metaDescription: 'Ride high-speed Yamaha and Sea-Doo Waverunners in Bentota River & Lagoon. Safe, guided jet ski rentals at LaLuna Water Sports with certified safety gear included.',
    description: 'Command a high-performance Yamaha and Sea-Doo Waverunner across the calm Bentota River or open ocean waves with direct operator pricing.',
    fullDescription: 'Feel the ultimate rush of the Indian Ocean and Bentota Lagoon as you command a high-performance Yamaha and Sea-Doo Waverunner. Speed past palm-fringed coastlines and golden sandbars on a thrilling adventure under the guidance of our certified safety marshals. Book direct with the equipment owner to avoid middleman commissions.', 
    price: 'Inquire Direct Rate', 
    duration: '15 / 30 / 60 mins', 
    intensity: 'Extreme', 
    image: `/images/services/jetski_bentota_02_900.jpg`,
    detailimage: `/images/services/jetski_bentota_900.jpg`,
    size: 'large',
    highlights: [
      "High-speed Yamaha and Sea-Doo Waverunners maintained daily",
      "Choice between calm Bentota River lagoon or open ocean waves",
      "Certified life jackets and safety briefing included",
      "Solo riding or tandem ride with a friend/partner",
      "Direct equipment operator - no driver or broker commissions"
    ],
    faqs: [
      {
        question: "How do I get the best experience and rate for Jet Skiing in Bentota?",
        answer: "By contacting LaLuna Water Sports Center directly on WhatsApp, you get instant confirmation, customized activity packages, and real-time scheduling updates whether you are visiting independently or traveling with a local guide."
      },
      {
        question: "Do I need prior experience or a license to ride a Jet Ski?",
        answer: "No experience or special license is required! Our instructors provide a complete 5-minute safety orientation before you hit the water."
      },
      {
        question: "Can two people ride on one Jet Ski?",
        answer: "Yes, our Yamaha Waverunners comfortably accommodate up to two riders (tandem riding) at no extra charge."
      }
    ]
  },
  { 
    id: 2, 
    title: 'Water Skiing in Bentota', 
    slug: 'water-ski-bentota', 
    cat: 'thrill', 
    description: 'Carve across the mirror-flat waters of Bentota Lagoon with expert boat drivers and professional ski gear.',
    fullDescription: 'Glide over the glassy waters of Bentota Lagoon as our speedboats pull you across scenic tropical waterways. Whether you are a seasoned skier looking to slice through deep turns or a beginner taking your first lesson, our experienced captains ensure a smooth, exhilarating session.',
    price: 'Best Direct Rate', 
    duration: '15 / 30 mins',
    intensity: 'Extreme', 
    image: `/images/services/water-ski2.jpg`, 
    size: 'small',
    metaTitle: 'Water Skiing in Bentota | Lessons & Rides | LaLuna Water Sports',
    metaDescription: 'Experience water skiing on the calm waters of the Bentota Lagoon. Beginner lessons and equipment rentals directly from LaLuna Water Sports.',
    highlights: [
      "Mirror-flat river water condition ideal for smooth carving",
      "Professional ski gear and adjustable life vests included",
      "Dedicated boat captains experienced in precise towing speeds",
      "Specialized beginner coaching and safety instruction"
    ],
    faqs: [
      {
        question: "Are water skiing lessons available for beginners in Bentota?",
        answer: "Yes, we offer beginner sessions where our certified instructors teach you proper balance, pop-up techniques, and hand signals before hitting the lagoon."
      }
    ]
  },
  { 
    id: 3,
    title: 'Fly Fish Ride Bentota',
    slug: 'fly-fish-ride-bentota',
    cat: 'thrill',
    description: 'Hover above the river waves on an extreme inflatable craft designed to catch air and fly as it gets towed.',
    fullDescription: 'Experience the exhilarating sensation of real airtime on our high-speed Fly Fish inflatable! Towed behind a high-powered speedboat, this specialized craft catches the sea breeze and lifts 3 to 6 feet above the water, offering an unforgettable mix of flight, speed, and splashing water.',
    price: 'Group Direct Discount',
    duration: '2 Rounds (15 mins)',
    intensity: 'Extreme',
    image: `/images/services/fly_fish_bentota_900.jpg`,
    detailimage: `/images/services/fly_fish_bentota_900.jpg`,
    size: 'small',
    metaTitle: 'Extreme Fly Fish Water Ride Bentota | LaLuna Water Sports',
    metaDescription: 'Fly high above the ocean on an inflatable Fly Fish tube in Bentota. The ultimate extreme high-speed towed water adventure.',
    highlights: [
      "Catches wind and lifts 3 to 6 feet above the river surface",
      "Ultra-durable, safety-checked inflatable craft",
      "Ideal for thrill-seekers looking for airborne adrenaline",
      "Monitored closely by experienced safety boat crews"
    ],
    faqs: [
      {
        question: "Is the Fly Fish ride safe?",
        answer: "Yes. All riders wear high-buoyancy certified life jackets, and our powerboat drivers adjust speeds according to safety standards and rider comfort levels."
      }
    ]
  },
  { 
    id: 4,
    title: 'Speed Boat Rides in Bentota',
    slug: 'speed-boat-ride-bentota',
    cat: 'thrill',
    description: 'Embark on a high-speed coastal charter or lagoon dash aboard our twin-engine powerboats.',
    fullDescription: 'Feel the wind in your hair as our high-powered speedboats zip across the waters of the Bentota River and open ocean. Ideal for families, couples, or small groups, this ride combines rapid turns, coastal sightseeing, and pure aquatic excitement led by our licensed captains.',
    price: 'Custom Direct Rates',
    duration: '15 / 30 / 60 mins',
    intensity: 'Extreme',
    image: `/images/services/speedboat.jpg`,
    size: 'small',
    metaTitle: 'Bentota Speedboat Rides & Lagoon Cruises | LaLuna Water Sports',
    metaDescription: 'High-speed boat rides along Bentota river and coast. Perfect for family rides, thrill-seekers, and coastal sightseeing.',
    highlights: [
      "High-horsepower motorboats maintained for maximum speed and safety",
      "Custom routes covering both Bentota Lagoon and coastal ocean waters",
      "Spacious seating suitable for small families or friend groups",
      "Direct group booking packages"
    ]
  },
  { 
    id: 5, 
    title: 'Wave Surfing Lessons & Rental',
    slug: 'wave-surfing-bentota',
    cat: 'thrill',
    description: 'Catch your first wave or refine your technique with local certified surf instructors and board rentals.',
    fullDescription: 'Experience the warmth of Sri Lanka’s golden coast while surfing gentle beach breaks in Bentota. Our seasoned surf coaches provide tailored step-by-step guidance on pop-ups, wave timing, and ocean safety, making this ideal for absolute beginners and intermediate surfers alike.',
    price: 'Inquire Direct Rate',
    duration: '1 Hour / Half-Day',
    intensity: 'Extreme',
    image: `/images/services/wavesurfing.jpg`,
    size: 'small',
    metaTitle: 'Wave Surfing Lessons & Board Rental Bentota | Sri Lanka',
    metaDescription: 'Catch waves along Bentota beach! Surf lessons for beginners and surfboard rentals for experienced surfers in Sri Lanka.',
    highlights: [
      "Gentle sand-bottom breaks ideal for learning safely",
      "Wide selection of soft-top boards for beginners and hardboards for pros",
      "1-on-1 coaching available from experienced local surfers"
    ]
  },

  // 2. TOWABLES (Fun Rides)
  { 
    id: 6, 
    title: 'Tube & Donut Riding', 
    slug: 'tube-riding-bentota', 
    cat: 'towable', 
    description: 'Hold tight on a bouncy donut tube as our ski boat whips you across the river waves.',
    fullDescription: 'Hang on for a wild, laugh-out-loud ride on our high-speed donut tube towables! Perfect for thrill-seekers and friends looking to test their grip, this tube skims, spins, and bounces across the wake of our powerboats in a completely safe, life-jacket protected environment.',
    price: 'Inquire Direct Rate', 
    duration: '15 mins', 
    intensity: 'Moderate', 
    image: `/images/services/donut_ride_bentota_680.jpg`, 
    size: 'small',
    metaTitle: 'Extreme Donut Tube Ride Bentota | Fun Water Sports',
    metaDescription: 'Hold on tight during a high-speed donut tube ride in Bentota! An ultra-fun water tube towable ride for groups and families.',
    highlights: [
      "Spin and bounce across speedboat wakes",
      "Individual or double-tube ride options",
      "Guaranteed fun and splash action for groups",
      "Direct operator pricing with safety gear included"
    ]
  },
  { 
    id: 7, 
    title: 'Banana Boat Riding in Bentota', 
    slug: 'banana-boat-riding-bentota', 
    cat: 'towable', 
    description: 'The ultimate group splash adventure! Pile up on a giant multi-person banana tube for high-speed turns.',
    fullDescription: 'Gather your family or travel crew for a classic water sports favorite! Mounted on a large multi-rider inflatable, your group will balance together as our speed boat takes you through exhilarating turns, splashing waves, and a guaranteed good time along the Bentota waterfront.',
    price: 'Group Direct Rates', 
    duration: '15 / 20 mins', 
    intensity: 'Moderate', 
    image: `/images/services/banana_boat_bentota_02_900.jpg`, 
    detailimage: `/images/services/banana_boat_bentota_02_680.jpg`, 
    size: 'large',
    metaTitle: 'Banana Boat Rides in Bentota | Group & Family Fun',
    metaDescription: 'Fun group banana boat rides in Bentota! Perfect for friends and families looking for splashes, laughter, and speed.',
    highlights: [
      "Accommodates up to 6 riders at the same time",
      "Great activity for kids, families, and tour groups",
      "Complimentary high-buoyancy life vests for all ages"
    ],
    faqs: [
      {
        question: "What is the minimum group size for a Banana Boat ride?",
        answer: "While groups of 3 to 6 riders are ideal, contact us via WhatsApp to join an existing group or arrange a private ride."
      }
    ]
  },
  { 
    id: 8, 
    title: 'Sofa Tube Riding', 
    slug: 'sofa-tube-riding-bentota', 
    cat: 'towable', 
    description: 'Sit back, hold on, and enjoy a comfortable yet thrilling couch-style towable ride across the water.',
    fullDescription: 'Experience all the high-speed thrill of towable sports with extra comfort and back support! Our Sofa Tube allows up to four riders to sit side-by-side on an inflatable couch while skimming across the lagoon wake—making it a hit for younger kids, families, and relaxed riders.',
    price: 'Inquire Direct Rate', 
    duration: '15 mins', 
    intensity: 'Moderate', 
    image: `/images/services/sofa-bed-bentota-680.jpg`, 
    size: 'small',
    metaTitle: 'Sofa Tube Ride Bentota | Bouncy Family Water Ride',
    metaDescription: 'Glide and bounce across the water on a bouncy Sofa Tube in Bentota. Ultra-safe and exciting water fun for all ages.',
    highlights: [
      "Secure backrests ideal for younger riders and non-swimmers",
      "Holds up to 4 riders comfortably side-by-side",
      "High-speed option available for adrenaline lovers"
    ]
  },
  { 
    id: 9, 
    title: 'Lay Down Tube Ride', 
    slug: 'lay-down-tube-bentota', 
    cat: 'towable', 
    description: 'Lie flat inches above the water line on a high-speed towable tube for an intense sense of velocity.',
    fullDescription: 'Get as close to the water as possible without sinking! The Lay Down Tube positions you flat on your stomach, amplifying every bump, spray, and wave carve. It is the ultimate high-adrenaline option for riders who want an intense, ground-level thrill.',
    price: 'Inquire Direct Rate', 
    duration: '15 mins', 
    intensity: 'Moderate', 
    image: `/images/services/lay_down_bentota_900.jpg`, 
    detailimage: `/images/services/lay_down_bentota_680.jpg`, 
    size: 'small',
    metaTitle: 'Lay Down Tube Water Ride Bentota | High Adrenaline',
    metaDescription: 'Skim inches above the water lying flat on a speed tube! Bentota’s premier high-adrenaline towed water sport.',
    highlights: [
      "Stomach-down position for an amplified sensation of speed",
      "Heavy-duty hand grips and padded deck surface",
      "Thrill-packed option for teens and young adults"
    ]
  },

  // 3. PADDLES & TOURS (River & Ocean Safaris)
  { 
    id: 10, 
    title: 'Luxury Yacht Cruise Tours', 
    slug: 'yacht-cruise-tours-bentota',
    cat: 'safari', 
    description: 'Experience luxury private ocean charters, sunset cruises, and coastal sightseeing in absolute comfort.',
    fullDescription: 'Unwind aboard a private motor yacht or catamaran charter along the pristine southern coast of Sri Lanka. Perfect for romantic sunsets, family gatherings, or private parties, our yacht cruises include open-deck loungers, swimming stops in sheltered bays, and personalized hospitality.',
    price: 'Private Charter Rates', 
    duration: '2 - 4 Hours', 
    intensity: 'Mild', 
    image: `/images/services/yacht.jpg`, 
    size: 'large',
    metaTitle: 'Bentota Yacht Cruise Tours & Private Charters | LaLuna Water Sports',
    metaDescription: 'Private luxury yacht cruises along the Bentota coast. Sunset cruises, swimming stops, and VIP private ocean charters.',
    highlights: [
      "Private luxury catamaran and motorboat options",
      "Sunset cruises along the golden Bentota coastline",
      "Anchorage stops for swimming and snorkeling",
      "Custom catering and beverage arrangements on request"
    ]
  },
  { 
    id: 11, 
    title: 'Bentota River Mangrove Safari', 
    slug: 'bentota-river-boat-safari', 
    cat: 'safari', 
    description: 'Cruise through dense mangrove tunnels to spot water monitors, exotic birds, and river wildlife.',
    fullDescription: 'Discover the rich biodiversity of the Bentota River ecosystem on a guided boat safari. Glide beneath thick mangrove canopies, visit traditional herbal islands, and spot wild water monitor lizards, fruit bats, kingfishers, and baby crocodiles with our local guides.',
    price: 'Best Direct Rate', 
    duration: '1 - 2 Hours', 
    intensity: 'Mild', 
    image: `/images/services/boattrip.jpg`, 
    size: 'small',
    metaTitle: 'Bentota River Mangrove Safari | Boat Tours & Wildlife',
    metaDescription: 'Explore Bentota River mangroves, herbal gardens, and spot monitor lizards, crocodiles, and exotic birds on a river safari.',
    highlights: [
      "Guaranteed wildlife sightings including monitor lizards and exotic birds",
      "Passage through dark mangrove tunnels and natural waterways",
      "Shaded motorboats suitable for all age groups and seniors"
    ]
  },
  { 
    id: 12, 
    title: 'River Kayaking in Bentota', 
    slug: 'kayaking-bentota', 
    cat: 'safari', 
    description: 'Paddle through serene, sheltered mangrove tributaries at your own pace with premium kayak rentals.',
    fullDescription: 'Escape the crowds and immerse yourself in nature on a tranquil kayaking trip through the backwaters of Bentota. Our stable single and double kayaks let you navigate narrow mangrove arches, observe birdlife up close, and enjoy a peaceful eco-adventure.',
    price: 'Inquire Direct Rate', 
    duration: '1 - 2 Hours', 
    intensity: 'Moderate', 
    image: `/images/services/canoeing.jpg`, 
    size: 'small',
    metaTitle: 'Bentota River Kayaking & Rental | Mangrove Exploration',
    metaDescription: 'Paddle through quiet mangrove channels on Bentota River. Single and double kayak rentals available with full safety gear.',
    highlights: [
      "Single and double sit-top kayak rentals",
      "Paddles, dry bags, and buoyant life vests provided",
      "Ideal eco-friendly activity for nature photographers"
    ]
  },
  { 
    id: 14, 
    title: 'Stand-up Paddleboarding (SUP)', 
    slug: 'stand-up-paddling-bentota', 
    cat: 'safari', 
    description: 'Test your balance and paddle along calm lagoon waters on a high-stability Stand-Up Paddleboard.',
    fullDescription: 'Enjoy a peaceful core workout while taking in views of the tropical coastline on a Stand-Up Paddleboard (SUP). Perfect for flat water paddling on the Bentota River, our high-buoyancy boards make it easy for beginners to stand up, balance, and glide within minutes.',
    price: 'Inquire Direct Rate', 
    duration: '45 - 60 mins', 
    intensity: 'Moderate', 
    image: `/images/services/sup.jpg`, 
    size: 'small',
    metaTitle: 'Stand-Up Paddleboarding (SUP) Bentota | Board Rental',
    metaDescription: 'Glide across calm Bentota lagoon waters on a Stand-Up Paddleboard. SUP gear rentals and beginner lessons available.',
    highlights: [
      "High-volume, stable boards suitable for beginners",
      "Calm, current-free river zone ideal for balancing",
      "Short introductory coaching included with rental"
    ]
  },
  { 
    id: 15, 
    title: 'Deep Sea & River Fishing Trips', 
    slug: 'deep-sea-fishing-bentota', 
    cat: 'safari', 
    description: 'Head into deep waters or river spots with experienced captains, fishing tackle, and live bait.',
    fullDescription: 'Set sail for an exciting deep-sea trolling or river angling expedition led by local master fishermen. Equipped with professional rods, lures, and fish finders, our charters take you to prime hotspots to target King Mackerel, Giant Trevally, Tuna, Sailfish, and Barracuda.',
    price: 'Charter Direct Rates', 
    duration: '3 - 5 Hours', 
    intensity: 'Mild', 
    image: `/images/services/fishing.jpg`, 
    size: 'small',
    metaTitle: 'Bentota Deep Sea Fishing Trips & River Angling | LaLuna Water Sports',
    metaDescription: 'Book deep sea fishing tours and Bentota river angling. Catch King Mackerel, GT, Tuna, and Barracuda with experienced local crew.',
    highlights: [
      "Equipped with modern rods, reels, lures, and bait",
      "Target big game species like Sailfish, GT, Mackerel, and Barracuda",
      "Experienced local crew who know prime coastal reef locations"
    ]
  },

  // 4. UNDERWATER & WINDS
  { 
    id: 16, 
    title: 'Scuba Diving in Bentota', 
    slug: 'scuba-diving-bentota', 
    cat: 'underwater', 
    description: 'Explore coral reefs and historic shipwrecks alongside certified PADI dive masters.',
    fullDescription: 'Dive into the vibrant marine ecosystems off the coast of Bentota. Accompanied by experienced PADI certified instructors, you will explore colorful coral gardens, underwater rock formations, and historic coastal shipwrecks teeming with sea turtles, reef fish, and rays.',
    price: 'Custom Dive Rates', 
    duration: '2 - 4 Hours', 
    intensity: 'Moderate', 
    image: `/images/services/diving.jpg`, 
    size: 'large',
    metaTitle: 'Scuba Diving in Bentota | Coral Reef & Shipwreck Dives',
    metaDescription: 'Discover coral reefs and historic shipwrecks in Bentota. PADI certified dive masters, equipment rental, and courses.',
    highlights: [
      "Guided by certified PADI dive instructors",
      "Dives at famous offshore reef sites and historic shipwrecks",
      "Complete dive gear rental and tank refills included"
    ]
  },
  { 
    id: 17, 
    title: 'Coral Reef Snorkeling Tours', 
    slug: 'snorkeling-tours-bentota', 
    cat: 'underwater', 
    description: 'Swim in crystal-clear coastal waters and discover shallow reef beds brimming with tropical fish.',
    fullDescription: 'Discover Sri Lanka’s underwater beauty without needing scuba certification! Our guided snorkeling excursions take you by boat to clear, shallow reef sites near Bentota, complete with sanitized masks, fins, floating vests, and safety escorts.',
    price: 'Inquire Direct Rate', 
    duration: '1 - 2 Hours', 
    intensity: 'Mild', 
    image: `/images/services/snorkeling.jpg`, 
    size: 'small',
    metaTitle: 'Bentota Coral Reef Snorkeling Tours | Equipment Included',
    metaDescription: 'Guided snorkeling trips in Bentota clear ocean waters. Explore tropical marine life and shallow coral reef beds.',
    highlights: [
      "Sanitized masks, snorkels, and fins provided",
      "Boat transit directly to clear shallow reef sites",
      "Floating safety vests suitable for non-swimmers"
    ]
  },
  { 
    id: 18, 
    title: 'Windsurfing in Bentota', 
    slug: 'windsurfing-bentota', 
    cat: 'underwater', 
    description: 'Harness the tropical sea breeze with beginner-friendly lessons or professional rig rentals.',
    fullDescription: 'Combine the thrill of sailing and surfing in one of Sri Lanka’s top windsurfing locations. Thanks to the calm flat waters of Bentota Lagoon paired with steady sea breezes, beginners can quickly learn sail control while experienced windsurfers can rent top-tier rigs.',
    price: 'Inquire Direct Rate', 
    duration: '1 Hour / Multi-Day', 
    intensity: 'Moderate', 
    image: `/images/services/windsurfing.jpg`, 
    size: 'small',
    metaTitle: 'Bentota Windsurfing Lessons & Gear Rental | LaLuna Water Sports',
    metaDescription: 'Harness the tropical breeze! Beginner to advanced windsurfing lessons and rig rentals on calm river waters or ocean waves.',
    highlights: [
      "Steady, reliable wind conditions across Bentota Lagoon",
      "Modern sails and boards suitable for all skill levels",
      "Step-by-step coaching available for absolute beginners"
    ]
  }
];
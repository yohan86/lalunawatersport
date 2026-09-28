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
  imageAlt?:string;
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
    title: 'Jet Ski Ride & Rental in Bentota',
    slug: 'jet-ski-bentota', 
    cat: 'thrill',
    metaTitle: 'Jet Ski Ride Bentota & Aluthgama | Rates | LaLuna Sri Lanka',
    metaDescription: 'Experience the ultimate jet ski ride in Bentota & Aluthgama! Book jet ski directly with LaLuna Water Sports, Sri Lanka. View rates & book via WhatsApp.',
    description: 'Command a high-performance Yamaha or Sea-Doo Waverunner across the calm Bentota River and Aluthgama lagoon with official operator pricing in Sri Lanka.',
    fullDescription: 'Feel the ultimate rush on the Bentota River and Aluthgama coastline in Sri Lanka as you command a high-performance Yamaha or Sea-Doo Waverunner. Speed past palm-fringed riversides and open ocean waves on a thrilling adventure guided by certified safety marshals. Book direct with the primary equipment operator for instant confirmation.', 
    price: 'Official Direct Rate', 
    duration: '15 / 30 / 60 mins', 
    intensity: 'Extreme', 
    image: '/images/services/jetski_bentota_02_900.jpg',
    detailimage: '/images/services/jetski_bentota_900.jpg',
    imageAlt: 'Jet ski ride on Bentota river and ocean in Sri Lanka',
    size: 'large',
    highlights: [
      "High-speed Yamaha and Sea-Doo Waverunners maintained daily",
      "Choice between calm Bentota River & Aluthgama lagoon or open ocean waves",
      "Certified life jackets and comprehensive safety briefing included",
      "Solo riding or tandem ride with a friend/partner at no extra charge",
      "Primary equipment operator with certified safety marshals on site"
    ],
    faqs: [
      {
        question: "How do I get the best rate for a Jet Ski ride in Bentota & Aluthgama?",
        answer: "Whether you contact LaLuna Water Sports directly on WhatsApp or arrive with your local tour guide, you receive official direct-operator rates, instant scheduling, and full safety equipment."
      },
      {
        question: "Do I need prior experience or a license to ride a Jet Ski in Sri Lanka?",
        answer: "No prior experience or license is required! Our certified safety marshals provide a thorough 5-minute safety briefing before you start your ride."
      },
      {
        question: "Can two people ride on one Jet Ski?",
        answer: "Yes, our high-performance Yamaha and Sea-Doo Waverunners comfortably seat two riders (tandem riding) at no additional charge."
      },
      {
        question: "Is Jet Skiing in Bentota accessible on a day trip from Colombo or Kalutara?",
        answer: "Yes! LaLuna Water Sports Center in Bentota/Aluthgama is located just a 1-hour drive from Colombo via the Southern Expressway, making it ideal for day trips from Colombo, Kalutara, or Beruwala."
      },
      {
        question: "What is included in the Bentota Jet Ski rental package?",
        answer: "Every rental includes a premium Yamaha or Sea-Doo jet ski, safety briefing, life jackets, fuel, and safety boat supervision."
      },
      {
        question: "Can I book a Jet Ski ride at LaLuna if I am staying in Hikkaduwa or Galle?",
        answer: "Yes! LaLuna Water Sports Center in Bentota is just a 40-minute drive from Hikkaduwa and under 45 minutes from Galle via the Southern Expressway. We welcome day-trippers and can arrange or assist with private transport."
      },
      {
        question: "Is LaLuna Water Sports a good stop when traveling between Colombo/Airport and Mirissa?",
        answer: "Yes! LaLuna in Bentota is located directly along the main coastal route between Colombo and Mirissa. It's the ideal place to stop for 1–2 hours of jet skiing, river safaris, or water sports before continuing your journey south."
      }
    ]
  },
  { 
    id: 2, 
    title: 'Water Skiing in Bentota', 
    slug: 'water-ski-bentota', 
    cat: 'thrill', 
    metaTitle: 'Water Skiing in Bentota | Lessons & Ski Rides | LaLuna Water Sports',
    metaDescription: 'Master the glassy waters of Bentota Lagoon. Professional water skiing lessons, expert boat drivers, and top-tier ski gear at LaLuna Water Sports Sri Lanka.',
    description: 'Carve across the mirror-flat waters of Bentota Lagoon with expert boat drivers, professional ski gear, and direct surface coaching.',
    fullDescription: 'Experience the speed and thrill of water skiing over the mirror-like waters of the sheltered Bentota Lagoon. Pulled by high-performance speedboats with dedicated drivers, you get exact speed control tailored to your skill level—whether you are a beginner taking your first lesson or an experienced skier carving sharp turns.',
    price: 'Official Direct Rate', 
    duration: '15 / 30 mins',
    intensity: 'Extreme', 
    image: '/images/services/water-ski2.jpg', 
    detailimage: '/images/services/water-ski2.jpg',
    imageAlt: 'Water skiing on calm Bentota lagoon river in Sri Lanka',
    size: 'small',
    highlights: [
      "Sheltered, mirror-flat lagoon water providing ideal carving conditions",
      "Professional speedboats operated by experienced captains",
      "Dual skis and monoskis available for all experience levels",
      "Step-by-step beginner instruction covering balance and water starts",
      "Certified high-buoyancy life vests and safety gear included"
    ],
    faqs: [
      {
        question: "Are water skiing lessons available for beginners in Bentota?",
        answer: "Yes! We offer beginner-specific sessions where our certified instructors teach you proper balance, pop-up techniques, and hand signals on land before guiding you through your first deep-water start."
      },
      {
        question: "Do I need strong swimming skills to go water skiing?",
        answer: "While basic confidence in the water is helpful, you do not need to be an expert swimmer. You will wear a certified high-buoyancy life vest at all times that keeps you afloat effortlessly."
      },
      {
        question: "Can I try mono skiing (slalom skiing) at LaLuna Water Sports?",
        answer: "Yes! Advanced skiers can choose our slalom monoskis to slice through sharp turns. Simply let our boat captain know your preference before setting off."
      },
      {
        question: "What should I wear for a water skiing session in Bentota?",
        answer: "We recommend comfortable swimwear or a rash guard with board shorts. Avoid loose clothing that creates drag in the water. We provide all ski gear, tow ropes, and life vests."
      },
      {
        question: "Is water skiing in Bentota accessible on a day trip from Colombo or Galle?",
        answer: "Yes! LaLuna Water Sports Center in Bentota/Aluthgama is located about 1 hour from Colombo and 45 minutes from Galle via the Southern Expressway, making it ideal for day trips."
      }
    ]
  },
  { 
    id: 3,
    title: 'Fly Fish Ride Bentota',
    slug: 'fly-fish-ride-bentota',
    cat: 'thrill',
    metaTitle: 'Fly Fish Ride Bentota | Airborne Water Sports | LaLuna Sri Lanka',
    metaDescription: 'Experience extreme airtime with the Fly Fish ride in Bentota Lagoon. Lift 3 to 6 feet above the water on a towed inflatable wing with certified safety captains.',
    description: 'Hover above the river waves on an extreme inflatable craft designed to catch air and fly as it gets towed.',
    fullDescription: 'Experience the exhilarating sensation of real airtime on our high-speed Fly Fish inflatable! Towed behind a high-powered speedboat, this specialized hydro-aerodynamic craft catches the breeze and lifts 3 to 6 feet above the water surface, offering an unforgettable mix of flying, high-speed carving, and water splashes.',
    price: 'Group Direct Discount',
    duration: '2 Rounds (15 mins)',
    intensity: 'Extreme',
    image: '/images/services/fly_fish_bentota_900.jpg',
    detailimage: '/images/services/fly_fish_bentota_900.jpg',
    imageAlt: 'Fly Fish inflatable water ride flying above Bentota Lagoon water in Sri Lanka',
    size: 'small',
    highlights: [
      "Catches wind and lifts 3 to 6 feet above the river surface",
      "Ultra-durable, safety-checked inflatable craft designed for airtime",
      "Ideal for thrill-seekers looking for airborne adrenaline",
      "Monitored closely by experienced boat captains and safety crews"
    ],
    faqs: [
      {
        question: "Is the Fly Fish ride in Bentota safe?",
        answer: "Yes! All riders wear high-buoyancy life jackets, and our speedboats are piloted by certified captains who adjust tow speed according to wind conditions and rider experience."
      },
      {
        question: "How high does the Fly Fish inflatable actually lift?",
        answer: "Depending on boat speed and river wind conditions, the inflatable wing lifts roughly 3 to 6 feet (1 to 2 meters) above the water surface."
      },
      {
        question: "How many people can go on a Fly Fish ride together?",
        answer: "The Fly Fish craft is designed to comfortably hold 2 to 3 riders side-by-side, making it a great shared adventure for friends and couples."
      },
      {
        question: "Do I need to know how to swim to do the Fly Fish ride?",
        answer: "Basic confidence in the water is recommended, but you will be wearing a fitted high-buoyancy life vest at all times that keeps you floating effortlessly if you fall off."
      },
      {
        question: "What should I wear for the Fly Fish ride?",
        answer: "Wear secure swimwear or board shorts with a rash guard. Avoid loose accessories, hats, or sunglasses without a strap, as they can easily fall off during airborne lifts."
      }
    ]
  },
    { 
    id: 4, 
    title: 'Banana Boat Riding in Bentota', 
    slug: 'banana-boat-riding-bentota', 
    cat: 'towable', 
    metaTitle: 'Banana Boat Rides in Bentota | Group & Family Fun | LaLuna',
    metaDescription: 'Fun group banana boat rides in Bentota Lagoon! Perfect for friends, families, and tour groups looking for high-speed turns, splashes, and laughter at LaLuna Water Sports.',
    description: 'The ultimate group splash adventure! Pile up on a giant multi-person banana tube for high-speed turns.',
    fullDescription: 'Gather your family or travel crew for a classic water sports favorite! Straddling a large multi-rider inflatable wing, your group will balance together as our speed boat takes you through exhilarating sharp turns, splashing wakes, and guaranteed laughter along the calm waters of the Bentota River lagoon.',
    price: 'Group Direct Rates', 
    duration: '15 / 20 mins', 
    intensity: 'Moderate', 
    image: '/images/services/banana_boat_bentota_02_900.jpg', 
    detailimage: '/images/services/banana_boat_bentota_02_680.jpg', 
    imageAlt: 'Group of friends riding a banana boat inflatable towed across Bentota Lagoon in Sri Lanka',
    size: 'large',
    highlights: [
      "Accommodates groups up to 6 to 8 riders on a single inflatable craft",
      "Ideal group activity for children, families, corporate outings, and friends",
      "Piloted by experienced speed boat captains offering custom speed levels",
      "Calm lagoon waters ensure controlled turns and safe splash drops",
      "Fitted high-buoyancy life jackets provided for all ages and sizes"
    ],
    faqs: [
      {
        question: "What is the minimum group size for a Banana Boat ride in Bentota?",
        answer: "While groups of 3 to 6 riders are ideal to fill the banana boat, solo travelers or couples can contact us directly via WhatsApp to pair up with an existing group or book a private session."
      },
      {
        question: "Will we fall off into the water during the ride?",
        answer: "Flipping over into the water at the final sharp turn is part of the fun for many groups! However, if you are riding with young children or prefer a dry ride, simply inform our captain before setting off, and we will keep the turns smooth and upright."
      },
      {
        question: "Are banana boat rides safe for children?",
        answer: "Yes! Children can safely join when accompanied by adults. We provide small-size fitted life jackets and instruct our speedboat captains to maintain a gentle, stable speed for family groups."
      },
      {
        question: "Do passengers need to know how to swim to ride the banana boat?",
        answer: "No. High-buoyancy life jackets are mandatory for every passenger before stepping onto the inflatable. Even if you slip into the water during a turn, your vest keeps you safely afloat while the captain loops around to assist you back on board."
      },
      {
        question: "What should we wear for a banana boat ride?",
        answer: "Wear fitted swimwear or board shorts with rash guards. Leave hats, loose footwear, sunglasses, and valuable jewelry on shore or with our staff before boarding."
      }
    ]
  },
  { 
    id: 5,
    title: 'Speed Boat Rides in Bentota',
    slug: 'speed-boat-ride-bentota',
    cat: 'thrill',
    metaTitle: 'Bentota Speedboat Rides & Lagoon Cruises | LaLuna Water Sports',
    metaDescription: 'Experience high-speed boat rides along the Bentota River and coast. Perfect for family rides, thrill-seekers, and coastal sightseeing in Sri Lanka.',
    description: 'Embark on a high-speed coastal charter or lagoon dash aboard our twin-engine powerboats.',
    fullDescription: 'Feel the wind and spray as our high-powered speedboats zip across the smooth waters of the Bentota River and along the scenic coastline. Ideal for families, couples, or small groups, this ride combines rapid turns, coastal sightseeing, and aquatic excitement guided by our licensed boat captains.',
    price: 'Custom Direct Rates',
    duration: '15 / 30 / 60 mins',
    intensity: 'Extreme',
    image: '/images/services/speedboat.jpg',
    detailimage: '/images/services/speedboat.jpg',
    imageAlt: 'High speed powerboat cruising on the river in Bentota, Sri Lanka',
    size: 'small',
    highlights: [
      "High-horsepower motorboats maintained for maximum speed and safety",
      "Customizable routes covering both Bentota River lagoon and coastal sea waters",
      "Spacious, comfortable seating suitable for families or groups of friends",
      "Tailored speed preferences—from gentle scenic cruising to thrill-focused high-speed turns",
      "Equipped with fitted high-buoyancy life jackets for all passengers"
    ],
    faqs: [
      {
        question: "Are speed boat rides in Bentota suitable for young children and families?",
        answer: "Yes! Our captains adjust the speed and driving style based on your group's preferences. We can offer a gentle, scenic lagoon cruise for families with children or a high-speed, thrill-packed ride for adventurous groups."
      },
      {
        question: "How many people can ride in a single speedboat?",
        answer: "Depending on the specific boat model, our speedboats comfortably accommodate small groups and families ranging from 2 up to 8 passengers per ride."
      },
      {
        question: "Do passengers have to wear life jackets during the speedboat ride?",
        answer: "Yes. Safety is our top priority, and every passenger is provided with a fitted, high-buoyancy life jacket to wear throughout the entire journey."
      },
      {
        question: "Can we combine a speedboat ride with a Bentota river mangrove safari?",
        answer: "Absolutely! For longer durations (such as 30 or 60 minutes), our captains can take you deeper into the Bentota River mangroves to spot local wildlife like monitor lizards, birds, and fruit bats before speeding back across the open river."
      },
      {
        question: "What is the best time of day for a speed boat ride in Bentota?",
        answer: "Morning and late afternoon sessions offer the calmest river conditions and pleasant lighting for photos, while sunset rides along the lagoon provide spectacular scenic views."
      }
    ]
  },
  { 
    id: 6, 
    title: 'Wave Surfing Lessons & Rental',
    slug: 'wave-surfing-bentota',
    cat: 'thrill',
    metaTitle: 'Wave Surfing Lessons & Surfboard Rental Bentota | Sri Lanka',
    metaDescription: 'Learn to surf on the sandy beach breaks of Bentota! Professional 1-on-1 surf lessons, soft-top beginner boards, and surfboard rentals at LaLuna Water Sports.',
    description: 'Catch your first wave or refine your technique with local experienced surf instructors and board rentals.',
    fullDescription: 'Experience the warmth of Sri Lanka’s golden coast while surfing gentle beach breaks in Bentota. Our seasoned surf coaches provide tailored step-by-step guidance on pop-ups, wave timing, paddling technique, and ocean safety—making this ideal for absolute beginners, kids, and intermediate surfers looking to catch clean waves.',
    price: 'Inquire Direct Rate',
    duration: '1 Hour / Half-Day',
    intensity: 'Extreme',
    image: '/images/services/wavesurfing.jpg',
    detailimage: '/images/services/wavesurfing.jpg',
    imageAlt: 'Surfer riding a wave on golden beach in Bentota, Sri Lanka',
    size: 'small',
    highlights: [
      "Gentle sand-bottom beach breaks ideal for learning to surf safely without reef hazards",
      "Wide selection of foam soft-top boards for beginners and shortboards/epoxy boards for pros",
      "1-on-1 personalized coaching covering beach theory, paddling, pop-ups, and wave safety",
      "Flexible packages available for hourly lessons or daily surfboard rentals",
      "Rash guards and safety leash included with all surfboard rentals and coaching sessions"
    ],
    faqs: [
      {
        question: "Is Bentota beach suitable for beginner surf lessons?",
        answer: "Yes! Bentota Beach features sandy-bottom wave breaks with no dangerous coral reefs or sharp rocks, making it one of the safest spots on the West Coast of Sri Lanka for beginners to learn pop-ups and ocean safety."
      },
      {
        question: "When is the best season for wave surfing in Bentota?",
        answer: "The primary surfing and beach season on Sri Lanka's West Coast runs from November through April, offering clean ocean swells, offshore winds, and ideal wave conditions for learning."
      },
      {
        question: "What types of surfboards are available for rent at LaLuna?",
        answer: "We offer high-buoyancy foam soft-top boards ideal for beginners, as well as epoxy and fiberglass shortboards, funboards, and longboards for intermediate and experienced surfers."
      },
      {
        question: "Do I need to bring my own surfing gear?",
        answer: "No. We supply everything you need, including surfboards, safety leg leashes, and UV protective rash guards. Just bring comfortable swimwear, sunscreen, and a towel."
      },
      {
        question: "Are 1-on-1 private surf instructors available?",
        answer: "Yes! Our surf coaches offer dedicated 1-on-1 instruction to guide you through beach safety theory, paddling out, catching white-water waves, and riding your first unbroken wave."
      }
    ]
  },

  // 2. TOWABLES (Fun Rides)
 { 
    id: 7, 
    title: 'Tube & Donut Riding', 
    slug: 'tube-riding-bentota', 
    cat: 'towable', 
    metaTitle: 'Tube & Donut Ride in Bentota | Fun Towable Water Sports | LaLuna',
    metaDescription: 'Hold on tight during an exciting donut tube ride on Bentota River! High-speed towable rides for groups, friends, and families at LaLuna Water Sports Sri Lanka.',
    description: 'Hold tight on a bouncy donut tube as our ski boat whips you across the river waves.',
    fullDescription: 'Hang on for a wild, laugh-out-loud ride on our high-speed donut tube towables! Perfect for thrill-seekers, friends, and families looking to test their grip, this inflatable tube skims, spins, and bounces across the wake of our powerboats in a fun, controlled environment on the calm Bentota River.',
    price: 'Inquire Direct Rate', 
    duration: '15 mins', 
    intensity: 'Moderate', 
    image: '/images/services/donut_ride_bentota_680.jpg', 
    detailimage: '/images/services/donut_ride_bentota_680.jpg', 
    imageAlt: 'Donut tube ride towed by speed boat on Bentota Lagoon in Sri Lanka',
    size: 'small',
    highlights: [
      "Skim, spin, and bounce across speedboat wakes on the calm Bentota River",
      "Individual, double, and group tube options available",
      "Guaranteed fun, high-energy splash action for friends and families",
      "Custom speed control operated by experienced speedboat captains",
      "Fitted high-buoyancy life jackets provided for all riders"
    ],
    faqs: [
      {
        question: "Is the donut tube ride suitable for children and families?",
        answer: "Yes! Our captains adjust the boat speed and intensity based on who is on board. We can offer a gentle, fun cruise for younger kids or a fast, spinning ride for thrill-seeking groups."
      },
      {
        question: "How many people can go on a donut tube at the same time?",
        answer: "We have various tube sizes accommodating single riders, pairs (2 people), and larger multi-rider options so friends and families can enjoy the splash action together."
      },
      {
        question: "What happens if I fall off the tube into the river?",
        answer: "Falling into the calm Bentota Lagoon is completely safe! All riders wear fitted high-buoyancy life jackets that keep you floating effortlessly. Our boat captain immediately slows down and loops back to pick you up."
      },
      {
        question: "Do I need to know how to swim to do tube riding?",
        answer: "While basic confidence in the water is helpful, non-swimmers can safely enjoy the ride because high-buoyancy life jackets are mandatory and keep you safely afloat at all times."
      },
      {
        question: "What should I wear for a tube ride in Bentota?",
        answer: "Wear secure swimwear or board shorts with a rash guard. Avoid loose items, hats, or unstrapped sunglasses, as they can easily slip off during spins and splashes."
      }
    ]
  },
  { 
    id: 8, 
    title: 'Sofa Tube Riding', 
    slug: 'sofa-tube-riding-bentota', 
    cat: 'towable', 
    metaTitle: 'Sofa Tube Ride Bentota | Family Towable Water Sports | LaLuna',
    metaDescription: 'Glide and bounce across Bentota Lagoon on a comfortable Sofa Tube! Secure couch-style towable ride perfect for kids, families, and friends at LaLuna Water Sports Sri Lanka.',
    description: 'Sit back, hold on, and enjoy a comfortable yet thrilling couch-style towable ride across the water.',
    fullDescription: 'Experience all the high-speed thrill of towable sports with extra comfort and back support! Our Sofa Tube allows up to four riders to sit side-by-side on an inflatable couch while skimming across the river wake—making it a huge hit for younger kids, families, and riders looking for high-speed fun without balancing struggles.',
    price: 'Inquire Direct Rate', 
    duration: '15 mins', 
    intensity: 'Moderate', 
    image: '/images/services/sofa-bed-bentota-680.jpg', 
    detailimage: '/images/services/sofa-bed-bentota-680.jpg', 
    imageAlt: 'Sofa tube inflatable ride towed by powerboat on Bentota River lagoon in Sri Lanka',
    size: 'small',
    highlights: [
      "Comfortable sofa seating with high backrests for added safety and stability",
      "Accommodates up to 2 to 4 riders sitting side-by-side",
      "Ideal option for young children, non-swimmers, and family groups",
      "Speed adaptable—from calm scenic gliding to fast wake bouncing",
      "Fitted high-buoyancy life jackets provided for all passengers"
    ],
    faqs: [
      {
        question: "What makes the Sofa Tube ride different from a Donut or Banana Boat ride?",
        answer: "The Sofa Tube features a supportive backrest and side handles, allowing riders to sit upright comfortably rather than straddling or holding on with their full body strength. It offers maximum stability while still delivering exciting wake bounces and turns."
      },
      {
        question: "Is the Sofa Tube ride safe for young children and first-timers?",
        answer: "Yes! Because of the secure backrest design and low center of gravity, it is one of the safest water sports for young kids and hesitant riders. Our captains can maintain gentle boat speeds for family rides."
      },
      {
        question: "How many riders can sit on the Sofa Tube at once?",
        answer: "Our Sofa Tubes comfortably fit 2 to 4 riders side-by-side, allowing parents and children or groups of friends to enjoy the experience together."
      },
      {
        question: "Do riders need to know how to swim for the Sofa Tube ride?",
        answer: "No. All passengers wear fitted high-buoyancy life jackets prior to boarding. Combined with the upright seating structure, falling off is rare, but if it happens, your life jacket keeps you afloat effortlessly."
      },
      {
        question: "What should we wear for a Sofa Tube session in Bentota?",
        answer: "Comfortable swimwear, board shorts, or rash guards are recommended. Secure any loose items or sunglasses on shore before boarding."
      }
    ]
  },
  { 
    id: 9, 
    title: 'Lay Down Tube Ride', 
    slug: 'lay-down-tube-bentota', 
    cat: 'towable', 
    metaTitle: 'Lay Down Tube Ride Bentota | High-Speed Towable | LaLuna',
    metaDescription: 'Skim inches above the water lying flat on a speed tube in Bentota! Experience maximum velocity, wake jumps, and adrenaline at LaLuna Water Sports Sri Lanka.',
    description: 'Lie flat inches above the water line on a high-speed towable tube for an intense sense of velocity.',
    fullDescription: 'Get as close to the water as possible without sinking! The Lay Down Tube positions you flat on your stomach, amplifying every bump, spray, and wave carve. Skimming inches above the surface of Bentota Lagoon, it is the ultimate high-adrenaline option for riders who want an intense, ground-level thrill.',
    price: 'Inquire Direct Rate', 
    duration: '15 mins', 
    intensity: 'Moderate', 
    image: '/images/services/lay_down_bentota_900.jpg', 
    detailimage: '/images/services/lay_down_bentota_680.jpg', 
    imageAlt: 'Riders lying flat on a Lay Down Tube towed by a speedboat in Bentota Lagoon, Sri Lanka',
    size: 'small',
    highlights: [
      "Prone stomach-down position creates an incredible, ground-level sensation of speed",
      "Heavy-duty padded handles and neoprene knuckle guards for a firm, comfortable grip",
      "Accommodates up to 2 to 3 riders lying side-by-side on a heavy-duty inflatable deck",
      "High-adrenaline wake carves and whip turns tailored by experienced boat captains",
      "Fitted high-buoyancy life vests and safety gear provided for all participants"
    ],
    faqs: [
      {
        question: "How does the Lay Down Tube compare to other towable rides like the Sofa or Donut?",
        answer: "Unlike the seated Sofa Tube or upright Donut Tube, the Lay Down Tube places you flat on your stomach inches from the water surface. This low profile amplifies the perception of speed, making every turn and wake bounce feel much faster and more thrilling."
      },
      {
        question: "Is it difficult to hold on while lying down?",
        answer: "Not at all. The tube features heavy-duty neoprene-padded handles strategically placed for a natural, strong grip, along with a anti-abrasion chest pad to keep you comfortable during sharp turns."
      },
      {
        question: "Can multiple people ride the Lay Down Tube together?",
        answer: "Yes! Our Lay Down Tubes accommodate 2 to 3 riders side-by-side, making it a fantastic shared adrenaline experience for friends, siblings, and couples."
      },
      {
        question: "What happens if I lose my grip and slide off into the lagoon?",
        answer: "Sliding off into the calm waters of Bentota River is completely safe! All riders wear fitted high-buoyancy life jackets that keep you afloat instantly. Our boat captain slows down immediately and loops back to pick you up."
      },
      {
        question: "Is the Lay Down Tube ride suitable for teenagers?",
        answer: "Yes, it is extremely popular with teenagers and young adults looking for a fast-paced water activity. Captains adjust the boat speed based on rider preference and comfort."
      }
    ]
  },

  // 3. PADDLES & TOURS (River & Ocean Safaris)
  { 
    id: 10, 
    title: 'Luxury Yacht Cruise Tours', 
    slug: 'yacht-cruise-tours-bentota',
    cat: 'safari', 
    metaTitle: 'Bentota Yacht Cruise Tours & Private Charters | LaLuna Water Sports',
    metaDescription: 'Private luxury yacht cruises along the Bentota coast. Sunset cruises, swimming stops, and VIP private ocean charters in Sri Lanka.',
    description: 'Experience luxury private ocean charters, sunset cruises, and coastal sightseeing in absolute comfort.',
    fullDescription: 'Unwind aboard a private motor yacht or catamaran charter along the pristine southern coast of Sri Lanka. Perfect for romantic sunsets, family gatherings, corporate events, or private celebrations, our yacht cruises feature spacious open-deck loungers, swimming and snorkeling stops in sheltered bays, and personalized hospitality from an experienced crew.',
    price: 'Private Charter Rates', 
    duration: '2 - 4 Hours', 
    intensity: 'Mild', 
    image: '/images/services/yacht.jpg', 
    detailimage: '/images/services/yacht.jpg', 
    imageAlt: 'Luxury motor yacht cruising along the golden coast of Bentota, Sri Lanka during sunset',
    size: 'large',
    highlights: [
      "Private luxury catamaran and motorboat charter options tailored to your schedule",
      "Scenic sunset cruises along the golden coastline of Bentota and Beruwala",
      "Anchorage stops in calm, sheltered bays for swimming, paddleboarding, and snorkeling",
      "Spacious sunbathing decks, sheltered lounge seating, and indoor cabins",
      "Custom onboard catering, fresh fruit, seafood platters, and beverage setups available on request"
    ],
    faqs: [
      {
        question: "What types of yacht charters are available in Bentota?",
        answer: "We offer private luxury motor yacht charters and spacious sailing catamarans suitable for romantic couples' trips, family day cruises, sunset cocktail tours, and small corporate gatherings."
      },
      {
        question: "What is included in a private yacht charter with LaLuna?",
        answer: "Charters include a professional captain and crew, fuel, safety gear, bottled water, and access to onboard amenities. Extended tours include stops for swimming or paddleboarding, with options to pre-order gourmet catering or seafood BBQs."
      },
      {
        question: "Can we customize the charter duration and cruise itinerary?",
        answer: "Yes! While our popular options range from 2 to 4 hours (including prime sunset slots), custom half-day and full-day coastal charters along the South Coast can be tailored to your group's preferences."
      },
      {
        question: "Is yacht cruising safe for children and elderly family members?",
        answer: "Absoluty. Our yachts are wide, highly stable vessels featuring comfortable shaded lounge areas, sturdy handrails, and onboard restrooms. Fitted safety life vests are available for guests of all ages."
      },
      {
        question: "What is the best time of day for a yacht cruise in Bentota?",
        answer: "Morning cruises (around 8:30 AM – 11:00 AM) offer calm seas and ideal light for swimming and snorkeling, while late afternoon cruises (4:00 PM – 6:30 PM) provide spectacular ocean sunset views."
      }
    ]
  },
  { 
    id: 11, 
    title: 'Bentota River Mangrove Safari', 
    slug: 'bentota-river-boat-safari', 
    cat: 'safari', 
    metaTitle: 'Bentota River Mangrove Safari | Boat Tours & Wildlife | LaLuna',
    metaDescription: 'Explore Bentota River mangroves, natural water tunnels, cinnamon islands, and spot monitor lizards, baby crocodiles, and exotic birds on a guided river boat safari in Sri Lanka.',
    description: 'Cruise through dense mangrove tunnels to spot water monitors, exotic birds, and river wildlife.',
    fullDescription: 'Discover the rich biodiversity of the Bentota River ecosystem on a guided boat safari. Glide beneath thick mangrove canopies, visit traditional cinnamon and herbal islands, and spot wild water monitor lizards, fruit bats, kingfishers, and baby crocodiles alongside our experienced local boat captains.',
    price: 'Best Direct Rate', 
    duration: '1 - 2 Hours', 
    intensity: 'Mild', 
    image: '/images/services/boattrip.jpg', 
    detailimage: '/images/services/boattrip.jpg', 
    imageAlt: 'Safari motorboat navigating through a narrow mangrove cave tunnel on the Bentota River in Sri Lanka',
    size: 'small',
    highlights: [
      "Navigate through narrow, natural mangrove caves and river tributaries",
      "Spot native wildlife including Asian water monitors, fruit bats, kingfishers, and baby crocodiles",
      "Optional stops at local cinnamon islands to learn about traditional spice processing",
      "Shaded canopy motorboats equipped with safety life jackets for all ages",
      "Private boat options perfect for families, seniors, photographers, and nature lovers"
    ],
    faqs: [
      {
        question: "What wildlife can we expect to see on the Bentota River Safari?",
        answer: "Common sightings include large Asian water monitor lizards, land monitors, flying fox fruit bat colonies, kingfishers, herons, egrets, and occasionally small crocodiles resting along the mangrove roots."
      },
      {
        question: "Is the river boat safari suitable for young children and elderly family members?",
        answer: "Yes! The Bentota River is extremely calm, and our motorboats are equipped with comfortable seating, sun-protection roofs, and fitted life jackets. It is a relaxed, low-intensity tour ideal for all age groups."
      },
      {
        question: "What is the best time of day for a mangrove river boat tour?",
        answer: "Early mornings (7:30 AM – 9:30 AM) and late afternoons (3:30 PM – 5:30 PM) are best. Wildlife and birds are most active during these cooler hours, and late afternoon tours offer beautiful river sunset views."
      },
      {
        question: "How long does the safari take and are the boats private?",
        answer: "Tours typically last between 1 to 2 hours depending on your chosen route. We offer private boat charters so your family or group can explore at your own pace with dedicated local guides."
      },
      {
        question: "What should we bring on the Bentota River Safari?",
        answer: "We recommend bringing a camera or smartphone, sunglasses, sunblock, light insect repellent, and a hat. Binoculars are also great for bird watchers."
      }
    ]
  },
  { 
    id: 12, 
    title: 'River Kayaking in Bentota', 
    slug: 'kayaking-bentota', 
    cat: 'safari', 
    metaTitle: 'Bentota River Kayaking & Rental | Mangrove Exploration | LaLuna',
    metaDescription: 'Paddle through quiet mangrove channels on Bentota River. Single and double kayak rentals, dry bags, and safety gear at LaLuna Water Sports Sri Lanka.',
    description: 'Paddle through serene, sheltered mangrove tributaries at your own pace with premium kayak rentals.',
    fullDescription: 'Escape the crowds and immerse yourself in nature on a tranquil kayaking trip through the peaceful backwaters of Bentota. Our stable sit-on-top single and double kayaks allow you to self-navigate narrow mangrove arches, observe vibrant birdlife up close, and enjoy an eco-friendly paddle adventure on the calm river water.',
    price: 'Inquire Direct Rate', 
    duration: '1 - 2 Hours', 
    intensity: 'Moderate', 
    image: '/images/services/canoeing.jpg', 
    detailimage: '/images/services/canoeing.jpg', 
    imageAlt: 'Kayaker paddling a double kayak through mangrove trees on calm Bentota River in Sri Lanka',
    size: 'small',
    highlights: [
      "Stable single and double sit-on-top kayaks suitable for all experience levels",
      "Lightweight aluminum paddles, waterproof dry bags, and fitted life vests provided",
      "Self-guided or guided exploration routes through quiet mangrove tributaries",
      "Eco-friendly, silent water sport ideal for bird watching and nature photography",
      "Calm, current-free lagoon waters offer a relaxed and safe paddling environment"
    ],
    faqs: [
      {
        question: "Are single and double kayaks available for rent at LaLuna?",
        answer: "Yes! We offer both single kayaks for solo paddlers and double (tandem) kayaks for couples, friends, or parents paddling with a child."
      },
      {
        question: "Is kayaking on the Bentota River safe for beginners?",
        answer: "Yes. The Bentota Lagoon and its mangrove backwaters are sheltered from ocean currents, providing calm, mirror-like water conditions perfect for first-time paddlers and casual kayakers."
      },
      {
        question: "Do we get a guide or is kayaking self-guided?",
        answer: "We offer both options! You can rent kayaks for a self-guided exploration using our recommended river map routes, or request an experienced local guide to accompany you through the mangrove tunnels."
      },
      {
        question: "How do we protect our phones and cameras while kayaking?",
        answer: "We provide complimentary waterproof dry bags with every kayak rental so you can safely store your phone, camera, and personal items while taking photos on the river."
      },
      {
        question: "What is the best time of day for kayaking in Bentota?",
        answer: "Early mornings (7:00 AM – 9:30 AM) offer cool temperatures, glassy water, and maximum bird activity, making it the prime time for peaceful nature paddling."
      }
    ]
  },
  { 
    id: 13, 
    title: 'Stand-up Paddleboarding (SUP)', 
    slug: 'stand-up-paddling-bentota', 
    cat: 'safari', 
    metaTitle: 'Stand-Up Paddleboarding (SUP) Bentota | Board Rental & Lessons | LaLuna',
    metaDescription: 'Glide across calm Bentota Lagoon waters on a Stand-Up Paddleboard! High-stability SUP board rentals, beginner coaching, and safety gear at LaLuna Water Sports Sri Lanka.',
    description: 'Test your balance and paddle along calm lagoon waters on a high-stability Stand-Up Paddleboard.',
    fullDescription: 'Enjoy a peaceful core workout while taking in views of the tropical riverbanks on a Stand-Up Paddleboard (SUP). Perfect for flat-water paddling on the smooth Bentota River, our high-volume, high-stability boards make it easy for beginners and first-timers to stand up, balance, and glide within minutes.',
    price: 'Inquire Direct Rate', 
    duration: '45 - 60 mins', 
    intensity: 'Moderate', 
    image: '/images/services/sup.jpg', 
    detailimage: '/images/services/sup.jpg', 
    imageAlt: 'Stand-Up Paddleboarder paddling along glassy mangrove waters on Bentota River, Sri Lanka',
    size: 'small',
    highlights: [
      "High-volume, wide SUP boards providing maximum balance and stability for first-time paddlers",
      "Calm, glassy river lagoon zone sheltered from ocean waves and strong currents",
      "Short land-based balance demonstration and paddle instruction included before launching",
      "Adjustable lightweight paddles and fitted high-buoyancy life vests provided",
      "Ideal eco-friendly activity for casual fitness, core balancing, and tranquil sightseeing"
    ],
    faqs: [
      {
        question: "Is Stand-Up Paddleboarding (SUP) hard for complete beginners?",
        answer: "Not at all! We use wide, high-buoyancy beginner SUP boards that make balancing easy. Combined with the mirror-flat water of Bentota Lagoon, most guests are standing up and paddling comfortably within 5 to 10 minutes."
      },
      {
        question: "Do I need to know how to swim to go paddleboarding?",
        answer: "While basic confidence in the water is helpful, it is not mandatory. All paddlers wear a fitted high-buoyancy life jacket at all times, ensuring you stay safely afloat if you happen to lose your balance."
      },
      {
        question: "Where do SUP sessions take place in Bentota?",
        answer: "Our paddleboard sessions take place on the sheltered Bentota River lagoon. This current-free zone keeps you away from heavy waves, making it the safest environment for paddling and balance control."
      },
      {
        question: "What is included with a SUP rental at LaLuna?",
        answer: "Every SUP rental includes a high-stability paddleboard, an adjustable paddle, an ankle leash, a fitted life jacket, and a brief introductory lesson on stance, paddling strokes, and turning technique."
      },
      {
        question: "What should I wear for a Stand-Up Paddleboard session?",
        answer: "Wear comfortable swimwear, board shorts, or UV rash guards. Apply waterproof sunscreen, and feel free to go barefoot on the board for the best grip."
      }
    ]
  },
  { 
    id: 14, 
    title: 'Deep Sea & River Fishing Trips', 
    slug: 'deep-sea-fishing-bentota', 
    cat: 'safari', 
    metaTitle: 'Bentota Deep Sea Fishing Trips & River Angling | LaLuna Water Sports',
    metaDescription: 'Book deep sea fishing charters and Bentota river angling tours. Target King Mackerel, Giant Trevally, Yellowfin Tuna, and Barracuda with local fishermen.',
    description: 'Head into deep waters or river spots with experienced captains, fishing tackle, and live bait.',
    fullDescription: 'Set sail for an exciting deep-sea trolling or tranquil river angling expedition led by local master fishermen. Equipped with quality rods, reels, lures, and navigational knowledge, our boat charters take you to prime offshore drop-offs and river hotspots to target King Mackerel, Giant Trevally (GT), Yellowfin Tuna, Sailfish, and Barracuda.',
    price: 'Charter Direct Rates', 
    duration: '3 - 5 Hours', 
    intensity: 'Mild', 
    image: '/images/services/fishing.jpg', 
    detailimage: '/images/services/fishing.jpg', 
    imageAlt: 'Angler holding a fresh fish catch aboard a deep sea fishing charter boat in Bentota, Sri Lanka',
    size: 'small',
    highlights: [
      "Fully equipped boat with fishing rods, trolling reels, lures, and live bait setups",
      "Target big game saltwater species like Yellowfin Tuna, GT, Sailfish, Mackerel, and Barracuda",
      "Choice between deep-sea offshore trolling and peaceful Bentota River angling",
      "Guided by seasoned local captains with deep knowledge of coastal reef structures",
      "Safety gear, life jackets, and complimentary drinking water included on all charters"
    ],
    faqs: [
      {
        question: "When is the best season for deep sea fishing in Bentota?",
        answer: "The prime ocean fishing season on Sri Lanka's West Coast runs from October through April, when sea conditions are calm and pelagic species like Yellowfin Tuna, Sailfish, and King Mackerel migrate close to shore."
      },
      {
        question: "Do we need to bring our own fishing gear?",
        answer: "No. We supply all required fishing tackle, including rods, reels, trolling lures, hooks, and bait. However, experienced anglers are welcome to bring their preferred personal gear."
      },
      {
        question: "What is the difference between deep sea trolling and river fishing?",
        answer: "Deep sea fishing takes place 5 to 12 nautical miles offshore in open ocean waters targeting large game fish. River angling stays inside the calm Bentota River lagoon, targeting species like Mangrove Jack and Barramundi in a relaxed setting."
      },
      {
        question: "Can we keep the fish we catch during the trip?",
        answer: "Yes! Guests are welcome to keep edible fish caught during the trip. Many local beach restaurants in Bentota can even prepare and grill your fresh catch for dinner upon request."
      },
      {
        question: "Is deep sea fishing safe for beginners and children?",
        answer: "Yes. Our charters are private and tailored to your group's experience level. Equipped with fitted safety life jackets and guided by experienced captains, it is a memorable offshore adventure for families and beginners."
      }
    ]
  },

  // 4. UNDERWATER & WINDS
  { 
    id: 15, 
    title: 'Scuba Diving in Bentota', 
    slug: 'scuba-diving-bentota', 
    cat: 'underwater', 
    metaTitle: 'Scuba Diving in Bentota | Coral Reefs & Shipwreck Dives | LaLuna',
    metaDescription: 'Discover vibrant coral reefs and historic shipwrecks in Bentota! PADI-certified dive masters, Discover Scuba for beginners, and gear rentals at LaLuna Water Sports Sri Lanka.',
    description: 'Explore coral reefs and historic shipwrecks alongside certified PADI dive masters.',
    fullDescription: 'Dive into the vibrant marine ecosystems off the coast of Bentota. Accompanied by experienced PADI-certified dive instructors, you will explore colorful coral gardens, underwater rock formations, and historic coastal shipwrecks teeming with sea turtles, reef fish, moray eels, and stingrays.',
    price: 'Custom Dive Rates', 
    duration: '2 - 4 Hours', 
    intensity: 'Moderate', 
    image: '/images/services/diving.jpg', 
    detailimage: '/images/services/diving.jpg', 
    imageAlt: 'Scuba diver exploring a vibrant coral reef with tropical fish in Bentota, Sri Lanka',
    size: 'large',
    highlights: [
      "Guided dives led by experienced PADI-certified dive instructors and local dive masters",
      "Explore famous offshore reef sites, underwater rock pinnacles, and historic shipwrecks",
      "Discover Scuba Diving (DSD) introductory courses available for complete non-certified beginners",
      "Full scuba gear rental included—tanks, regulators, BCDs, wetsuits, masks, and fins",
      "Small dive group ratios to ensure maximum safety, personal attention, and underwater visibility"
    ],
    faqs: [
      {
        question: "Can beginners without a scuba license try diving in Bentota?",
        answer: "Yes! We offer the PADI Discover Scuba Diving (DSD) program designed specifically for first-time divers. After a brief pool/shallow water orientation on dive equipment and breathing, a PADI instructor guides you on a safe, shallow ocean dive."
      },
      {
        question: "When is the best season for scuba diving in Bentota?",
        answer: "The official diving season on Sri Lanka's West Coast runs from November through April. During these months, sea conditions are calm, currents are mild, and underwater visibility ranges between 10 to 20 meters."
      },
      {
        question: "What marine life can I expect to see while diving in Bentota?",
        answer: "Bentota's dive sites are home to sea turtles, stingrays, moray eels, lionfish, pufferfish, sea anemones, clownfish, and vast schools of tropical reef fish navigating colorful coral structures."
      },
      {
        question: "Are shipwreck dives available off the Bentota coast?",
        answer: "Yes! For certified Open Water and Advanced divers, there are several fascinating historic shipwreck sites located off the coast of Bentota and Beruwala offering incredible artificial reef marine life."
      },
      {
        question: "What equipment is included in the dive package?",
        answer: "Our dive rates include all essential scuba gear: tanks, weight belts, regulators, BCDs, wetsuits, masks, and fins. Experienced certified divers with their own gear are also welcome to join tank-only charter boats."
      }
    ]
  },
  { 
    id: 16, 
    title: 'Coral Reef Snorkeling Tours', 
    slug: 'snorkeling-tours-bentota', 
    cat: 'underwater', 
    metaTitle: 'Bentota Coral Reef Snorkeling Tours | Equipment Included | LaLuna',
    metaDescription: 'Guided snorkeling trips in Bentota clear ocean waters! Explore tropical marine life, sea turtles, and shallow coral reef beds with LaLuna Water Sports Sri Lanka.',
    description: 'Swim in crystal-clear coastal waters and discover shallow reef beds brimming with tropical fish.',
    fullDescription: 'Discover Sri Lanka’s underwater beauty without needing a scuba certification! Our guided snorkeling excursions take you by boat to clear, shallow reef sites around Bentota and nearby Barberyn Island, complete with sanitized masks, fins, high-buoyancy life vests, and experienced safety guides.',
    price: 'Inquire Direct Rate', 
    duration: '1 - 2 Hours', 
    intensity: 'Mild', 
    image: '/images/services/snorkeling.jpg', 
    detailimage: '/images/services/snorkeling.jpg', 
    imageAlt: 'Snorkeler swimming over shallow coral reef with colorful tropical fish near Bentota, Sri Lanka',
    size: 'small',
    highlights: [
      "High-quality sanitized snorkeling masks, comfortable silicone snorkels, and fins provided",
      "Short boat transit directly to clear, shallow reef beds and rocky ocean outcrops",
      "High-buoyancy floating safety vests available to ensure a comfortable experience for non-swimmers",
      "Guided by experienced local watermen who assist in spotting sea turtles and marine life",
      "Family-friendly ocean activity suitable for kids, adults, and first-time snorkelers"
    ],
    faqs: [
      {
        question: "Can non-swimmers join the coral reef snorkeling tour in Bentota?",
        answer: "Yes! Non-swimmers and beginners can safely enjoy snorkeling with us. We provide fitted, high-buoyancy floating life vests and offer guided ocean escorts so you can float effortlessly while looking down at the underwater marine life."
      },
      {
        question: "When is the best season for snorkeling in Bentota?",
        answer: "The best snorkeling season on Sri Lanka's West Coast runs from November through April, when the ocean is calm, waves are minimal, and water visibility is at its peak."
      },
      {
        question: "What marine life can we see while snorkeling in Bentota?",
        answer: "You can spot colorful parrotfish, butterflyfish, surgeonfish, sea anemones, clownfish, sea urchins, and frequently wild sea turtles swimming around the shallow rock reefs."
      },
      {
        question: "Are snorkeling equipment and boat transit included in the price?",
        answer: "Yes! Our package includes boat transport to the snorkeling spots, fully sanitized masks and snorkels, adjustable fins, high-buoyancy life vests, and safety escorts."
      },
      {
        question: "What should we bring on a snorkeling tour?",
        answer: "Just wear your swimwear or rash guard, bring a towel, apply reef-safe sunscreen, and bring an underwater camera or phone with a waterproof pouch if you want to capture photos."
      }
    ]
  },
  { 
    id: 17, 
    title: 'Windsurfing in Bentota', 
    slug: 'windsurfing-bentota', 
    cat: 'underwater', 
    metaTitle: 'Bentota Windsurfing Lessons & Gear Rental | LaLuna Water Sports',
    metaDescription: 'Harness the tropical breeze in Bentota! Professional beginner windsurfing lessons, instructor coaching, and rig rentals on calm river waters or ocean swells.',
    description: 'Harness the tropical sea breeze with beginner-friendly lessons or professional rig rentals.',
    fullDescription: 'Combine the thrill of sailing and surfing in one of Sri Lanka’s premier water sports destinations. Thanks to the smooth, flat waters of the Bentota River lagoon paired with consistent thermal sea breezes, absolute beginners can easily learn sail balance and steering, while experienced windsurfers can rent high-performance rigs to venture out into the open ocean waves.',
    price: 'Inquire Direct Rate', 
    duration: '1 Hour / Multi-Day', 
    intensity: 'Moderate', 
    image: '/images/services/windsurfing.jpg', 
    detailimage: '/images/services/windsurfing.jpg', 
    imageAlt: 'Windsurfer navigating the calm lagoon waters in Bentota, Sri Lanka with colorful sail',
    size: 'small',
    highlights: [
      "Ideal learning environment on the calm, flat waters of the Bentota River lagoon",
      "Step-by-step coaching by experienced instructors for absolute beginners and kids",
      "Modern freeride and beginner windsurf rigs with light sails and high-volume stability boards",
      "Option for advanced windsurfers to venture out into ocean swells off Bentota Beach",
      "Safety boat cover and buoyancy vests included for every session"
    ],
    faqs: [
      {
        question: "Is windsurfing in Bentota suitable for complete beginners?",
        answer: "Yes! The calm, current-free waters of the Bentota River lagoon serve as a safe learning environment. Beginners practice on wide, stable training boards paired with lightweight sails that make pulling up the rig and balancing effortless."
      },
      {
        question: "When is the best season for windsurfing in Bentota?",
        answer: "The main season on the West Coast runs from October/November through April, offering clear skies, warm waters, and reliable thermal afternoon breezes ideal for both learning and freeriding."
      },
      {
        question: "What equipment is included in windsurfing lessons or rentals?",
        answer: "All sessions include a complete rig setup (board, sail, mast, boom, and uphaul), life vest, safety briefing, and dedicated safety boat monitoring while you are on the water."
      },
      {
        question: "Can I do windsurfing in the ocean as well as the river?",
        answer: "Yes. Complete beginners start on the flat river lagoon to master sail control and gybing. Intermediate and advanced riders can launch directly into the ocean off Bentota Beach to carve through open ocean chop and swells."
      },
      {
        question: "How many lessons are needed to windsurf independently?",
        answer: "Most guests can stand up, steer, and sail back and forth independently within their first 1 to 2 hours. A multi-day course (3 to 5 hours) will teach you tacking, gybing, and sailing upwind."
      }
    ]
  }
];
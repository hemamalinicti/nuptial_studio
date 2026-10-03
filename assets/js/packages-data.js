/* ==========================================================================
   CodeThrive Photography Studio - Packages & Couple Stories Dataset
   Candid Wedding Photography, Cinematic Films, Pre-Wedding & Luxury Events
   Developer: Hemamalini S | CODETHRIVE INFOTECH [CTI5492026]
   ========================================================================== */

const packagesData = [
  // COLUMN 1: Item 1 & Item 2 (Starts Top Level, Compact Landscape Heights)
  {
    id: "pkg-prithivi-keerthana",
    coupleName: "Prithivi & Keerthana",
    title: "Luxury Candid Wedding & Cinematic Package",
    type: "wedding",
    category: "luxury",
    badge: "Signature Couple",
    tag: "Most Popular",
    duration: "2 Days Full Coverage",
    location: "Coimbatore & All South India",
    rating: 5.0,
    reviews: 184,
    basePrice: 85000,
    aspectClass: "img-compact-landscape",
    cardOffsetClass: "",
    image: "assets/images/plan-royal-turban-wedding.png",
    quote: "Prithivi and Keerthana share a love that grows deeper with every passing moment.",
    description: "Complete candid photography & 4K cinematic film coverage for Reception and Muhurtham with dual senior candid photographers, 4K teaser, and luxury Canvera album.",
    itinerary: [
      { day: 1, title: "Day 1: Haldi & Sangeet Evening Gala", desc: "Joyous yellow floral haldi ceremony followed by dynamic Sangeet stage dance performances with multi-camera cinematic coverage." },
      { day: 2, title: "Day 2: Auspicious Muhurtham & Royal Reception", desc: "Sacred Vedic rituals, Tali tying ceremony, family blessing portraits, and evening grand chandelier stage reception." },
      { day: 3, title: "Post-Event Editing & Luxury Deliveries", desc: "4K color grading, 3-5 minute cinematic teaser, 40-minute feature film, and handcrafted Canvera hardcover album proofing." }
    ],
    inclusions: [
      "2 Senior Candid Photographers + 2 Senior 4K Cinematographers",
      "1 Traditional Photographer + 1 Traditional Videographer",
      "1 Premium Canvera Hardcover Photo Album (250+ Edited Photos)",
      "3-5 Minute 4K Cinematic Trailer Teaser (Instagram Ready)",
      "Full Length 4K Edited Wedding Film (30-45 Mins)",
      "High-Res Edited Soft Copies delivered via Cloud & Pen Drive"
    ],
    exclusions: [
      "Outstation travel & accommodation charges (outside Coimbatore)",
      "Drone aerial photography (Available as optional add-on)",
      "Extra physical photo album copies"
    ],
    gallery: [
      {
        src: "assets/images/plan-royal-turban-wedding.png",
        caption: "Royal Turban & Pastel Lehenga Couple Portrait",
        eventTag: "Muhurtham Ceremony",
        outfit: "Peach Brocade Sherwani & Embroidered Pink Lehenga"
      },
      {
        src: "assets/images/story-prithivi-haldi.png",
        caption: "Joyful Marigold Flower Splash & Haldi Festivities",
        eventTag: "Haldi Ceremony",
        outfit: "Bright Yellow Kurta & Floral Silk Lehenga"
      },
      {
        src: "assets/images/story-prithivi-sangeet.png",
        caption: "Electrifying Sangeet Dance Floor & Stage Sparklers",
        eventTag: "Sangeet Night",
        outfit: "Royal Navy Blue Bandhgala & Sequin Lehenga"
      },
      {
        src: "assets/images/story-prithivi-reception.png",
        caption: "Grand Chandelier Stage Reception Stance",
        eventTag: "Grand Reception",
        outfit: "Black Velvet Tuxedo & Emerald Green Designer Gown"
      },
      {
        src: "assets/images/krishna-6-sunset.jpg",
        caption: "Sunset Golden Hour Outdoor Romance",
        eventTag: "Outdoor Pre-Wedding",
        outfit: "Breezy Pastel Linen Suit & Flowing Gown"
      },
      {
        src: "assets/images/krishna-7-candid.jpg",
        caption: "Candid Laughter & Joyous Smiles",
        eventTag: "Candid Portraits",
        outfit: "Traditional Wedding Day Finery"
      },
      {
        src: "assets/images/drone-shot.png",
        caption: "Grand Wedding Venue Aerial Architecture View",
        eventTag: "Drone Aerials",
        outfit: "Palace Venue & Landscape Overview"
      }
    ]
  },
  {
    id: "pkg-krishna-kabila",
    coupleName: "Krishna & Kabila",
    title: "Night Sangeet & Romance Film Gala",
    type: "wedding",
    category: "luxury",
    badge: "Trending Couple",
    tag: "Evening Gala",
    duration: "1 Day (8 Hours)",
    location: "Coimbatore & Bangalore",
    rating: 4.9,
    reviews: 135,
    basePrice: 48000,
    aspectClass: "img-compact-landscape",
    cardOffsetClass: "",
    image: "assets/images/plan-night-sangeet.png",
    quote: "Krishna and Kabila share a love that feels peaceful, honest, and beautifully soulful.",
    description: "Enchanting twilight reception & sangeet session capturing dazzling night bokeh fairy lights, candid couple kisses, and lively stage dance films.",
    itinerary: [
      { day: 1, title: "Twilight Getting-Ready & Decor Frames", desc: "Intimate bridal makeup portraits, sherwani styling, venue lighting details, and couple romantic photoshoot." },
      { day: 2, title: "Stage Performances & Sangeet Highlights", desc: "Multi-camera dance floor coverage, family candid interactions, and 4K Instagram reels." }
    ],
    inclusions: [
      "2 Candid Photographers + 1 Cinema Videographer",
      "1 Teaser Video (90-sec for Reels & YouTube Shorts)",
      "50 Retouched High-Resolution Portraits",
      "Online Private Gallery Access"
    ],
    exclusions: [
      "Special pyrotechnic effects",
      "Travel costs outside Tamil Nadu"
    ],
    gallery: [
      {
        src: "assets/images/plan-night-sangeet.png",
        caption: "Intimate Twilight Kiss Under Magical Fairy Lights",
        eventTag: "Sangeet Night",
        outfit: "Midnight Black Kurta & Embroidered Maroon Lehenga"
      },
      {
        src: "assets/images/krishna-1-cover.jpg",
        caption: "Grand Reception Stage Entry & Smiles",
        eventTag: "Grand Reception",
        outfit: "Embroidered Velvet Sherwani & Deep Red Zardozi Lehenga"
      },
      {
        src: "assets/images/krishna-2-haldi.jpg",
        caption: "Joyful Haldi Splash & Turmeric Festivities",
        eventTag: "Haldi Ceremony",
        outfit: "Bright Yellow Kurta & Floral Haldi Attire"
      },
      {
        src: "assets/images/krishna-3-sangeet.jpg",
        caption: "Sangeet Musical Night & Couple Dance Stance",
        eventTag: "Dance Floor",
        outfit: "Sparkling Sequin Party Lehengas & Bandhgala"
      },
      {
        src: "assets/images/krishna-4-muhurtham.jpg",
        caption: "Sacred Vedic Rituals & Mandap Vows",
        eventTag: "Muhurtham Rituals",
        outfit: "Traditional Silk Dhoti & Pure Kanchipuram Saree"
      },
      {
        src: "assets/images/krishna-5-reception.jpg",
        caption: "Twilight Reception Cocktail Gala",
        eventTag: "Evening Cocktail",
        outfit: "Black Tuxedo Suit & Shimmering Evening Gown"
      },
      {
        src: "assets/images/krishna-6-sunset.jpg",
        caption: "Golden Hour Outdoor Sunset Stroll",
        eventTag: "Outdoor Pre-Wedding",
        outfit: "Casual Chic Pastel Linen & Chiffon Dress"
      },
      {
        src: "assets/images/krishna-7-candid.jpg",
        caption: "Intimate Candid Smiles & Pre-Event Glow",
        eventTag: "Getting Ready",
        outfit: "Bridal Robe & Groom Ethnic Casuals"
      }
    ]
  },

  // COLUMN 2: Item 3 & Item 4 (Offset Staggered, Tall Portrait & Royal Sword Portrait)
  {
    id: "pkg-sabari-shobi",
    coupleName: "Sabari & Shobi",
    title: "Signature Traditional Muhurtham & Silk Drape",
    type: "wedding",
    category: "traditional",
    badge: "Heritage Rituals",
    tag: "Family Choice",
    duration: "2 Days Full Coverage",
    location: "Madurai, Coimbatore & Chennai",
    rating: 4.9,
    reviews: 142,
    basePrice: 65000,
    aspectClass: "img-tall-portrait",
    cardOffsetClass: "offset-top-sm",
    image: "assets/images/plan-south-indian-silk.png",
    quote: "Sabari and Shobi share a love that feels calm, real, and beautifully meaningful.",
    description: "Heartfelt coverage of traditional South Indian temple rituals, silk drape bridal portraits, sacred mantras, floral garlands, and exuberant family blessings.",
    itinerary: [
      { day: 1, title: "Day 1: Vratham & Evening Reception", desc: "Detailed coverage of auspicious pre-wedding pooja, stage greeting of extended family, and vibrant musical reception." },
      { day: 2, title: "Day 2: Auspicious Muhurtham & Kanyadaanam", desc: "Complete documentation of Vedic rituals, Mangalyadharanam, Sapthapadi, Oonjal swing ceremony, and bridal send-off." }
    ],
    inclusions: [
      "2 Traditional HD Photographers + 1 Candid Specialist",
      "2 Full HD Cinematographers with Gimbal Stabilization",
      "1 Premium Handcrafted Velvet Album (200 Photos)",
      "Full Traditional Wedding Video + 3-Min Highlights Teaser",
      "All Unedited Raw Photos and Master Footage on Hard Drive"
    ],
    exclusions: [
      "Live LED wall video streaming setup",
      "Drone aerial permit fees"
    ],
    gallery: [
      {
        src: "assets/images/plan-south-indian-silk.png",
        caption: "Pastel Silk Saree & Temple Gold Jewellery Stance",
        eventTag: "Traditional Muhurtham",
        outfit: "Mint Green Pattu Saree & Silver Brocade Kurta"
      },
      {
        src: "assets/images/sabari-2-haldi.jpg",
        caption: "Nalangu & Haldi Turmeric Celebrations",
        eventTag: "Haldi & Nalangu",
        outfit: "Yellow Silk Pavada & Cotton Kurta"
      },
      {
        src: "assets/images/sabari-3-sangeet.jpg",
        caption: "Joyful Sangeet Dance Floor Celebrations",
        eventTag: "Sangeet Night",
        outfit: "Teal Embroidered Anarkali & Bandhgala"
      },
      {
        src: "assets/images/sabari-4-reception.jpg",
        caption: "Grand Stage Reception Banquet",
        eventTag: "Grand Reception",
        outfit: "Navy Blue Suit & Gold Brocade Saree"
      },
      {
        src: "assets/images/sabari-5-temple.jpg",
        caption: "Historic Temple Stone Pillars Couple Stroll",
        eventTag: "Temple Courtyard",
        outfit: "Pure Kanchipuram Silk Saree & Veshti"
      },
      {
        src: "assets/images/sabari-6-candid.jpg",
        caption: "Candid Joy with Extended Family Elders",
        eventTag: "Family Blessings",
        outfit: "Festive Traditional Silks"
      },
      {
        src: "assets/images/sabari-7-sunset.jpg",
        caption: "Outdoor Pre-Wedding Sunset Romance",
        eventTag: "Pre-Wedding Shoot",
        outfit: "Pastel Peach Dress & Linen Shirt"
      }
    ]
  },
  {
    id: "pkg-karthik-sneha",
    coupleName: "Karthik & Sneha",
    title: "Royal Sword Gala & Sangeet Ceremony",
    type: "prewedding",
    category: "prewedding",
    badge: "Royal Gala",
    tag: "Celebration",
    duration: "1 Day (8 Hours)",
    location: "Coimbatore, Bengaluru & Chennai",
    rating: 4.8,
    reviews: 115,
    basePrice: 52000,
    aspectClass: "img-portrait",
    cardOffsetClass: "",
    image: "assets/images/plan-royal-sword-wedding.png",
    quote: "Karthik and Sneha celebrate a joy that radiates light, laughter, and timeless elegance.",
    description: "Opulent white sherwani & pink zardozi lehenga coverage featuring traditional royal wedding sword portraits, rose garlands, and reception gala film.",
    itinerary: [
      { day: 1, title: "Glamour Royal Styling & Stage Entry", desc: "Bridal couture details, royal sword styling shots, grand entrance fireworks, and dance floor candid captures." }
    ],
    inclusions: [
      "2 Candid Photographers + 1 Traditional Videographer",
      "1 Premium Glossy Photobook (150 Photos)",
      "Cinematic 3-Minute Highlight Reel",
      "Raw & Edited Soft Copies in High Resolution"
    ],
    exclusions: [
      "Special smoke/pyro effects",
      "Drone indoors"
    ],
    gallery: [
      {
        src: "assets/images/plan-royal-sword-wedding.png",
        caption: "Regal White Sherwani with Royal Wedding Sword",
        eventTag: "Royal Muhurtham",
        outfit: "Pearl White Sherwani & Blush Pink Zardozi Lehenga"
      },
      {
        src: "assets/images/karthik-1-royal.jpg",
        caption: "Royal Fort Courtyard Couple Stance",
        eventTag: "Palace Architecture",
        outfit: "Imperial Gold Sherwani & Pastel Lehengas"
      },
      {
        src: "assets/images/karthik-2-haldi.jpg",
        caption: "Floral Shower Poolside Haldi Festivities",
        eventTag: "Haldi Festivities",
        outfit: "Yellow Silk Kurta & Flowing Lehenga"
      },
      {
        src: "assets/images/karthik-3-sangeet.jpg",
        caption: "Sangeet Dance Flash Mob on Stage",
        eventTag: "Sangeet Gala",
        outfit: "Midnight Blue Sequin Lehengas & Tux"
      },
      {
        src: "assets/images/karthik-4-reception.jpg",
        caption: "Regal Banquet Reception Stroll",
        eventTag: "Grand Reception",
        outfit: "Velvet Black Tuxedo & Designer Gown"
      },
      {
        src: "assets/images/karthik-5-palace.jpg",
        caption: "Palace Balcony Golden Hour Romance",
        eventTag: "Heritage Sunset",
        outfit: "Ivory & Gold Royal Couture"
      },
      {
        src: "assets/images/karthik-6-candid.jpg",
        caption: "Emotional Garland Exchange Laughter",
        eventTag: "Varmala Moment",
        outfit: "Royal Wedding Day Attire"
      },
      {
        src: "assets/images/karthik-7-sunset.jpg",
        caption: "Sunset Heritage Lawn Pre-Wedding Walk",
        eventTag: "Outdoor Pre-Wedding",
        outfit: "Flowing Pastel Evening Wear"
      }
    ]
  },

  // COLUMN 3: Item 5 & Item 6 (Square Arch & South Indian Muhurtham Ceremony)
  {
    id: "pkg-chris-anita",
    coupleName: "Chris & Anita",
    title: "Romantic Church & Western Wedding Film",
    type: "prewedding",
    category: "prewedding",
    badge: "Trending Couple",
    tag: "Best Value",
    duration: "1 Day (10 Hours)",
    location: "Coimbatore, Kochi & Ooty",
    rating: 4.9,
    reviews: 126,
    basePrice: 42000,
    aspectClass: "img-square",
    cardOffsetClass: "",
    image: "assets/images/plan-christian-wedding.png",
    quote: "Chris and Anita share a love that feels warm, effortless, and beautifully natural.",
    description: "A magical Christian wedding ceremony & reception session featuring classic white gown bridal portraits, church aisle moments, and cinematic 4K highlight film.",
    itinerary: [
      { day: 1, title: "Morning: Cathedral Ceremony & Bridal Walk", desc: "Aisle entry, sacred vows, ring exchange, and choir ceremony candid cinematography." },
      { day: 2, title: "Evening: Toast & Ballroom First Dance", desc: "Grand couple entrance, cake cutting, emotional parent toasts, and first dance cinematic sequence." }
    ],
    inclusions: [
      "1 Lead Candid Photographer + 1 Lead Cinematographer",
      "4K Drone Aerial Video Footage Included",
      "3-Minute 4K Wedding Concept Music Video",
      "60 Professionally Retouched High-Res Images",
      "1 Big Frame Canvas Print (24x36 Inches)"
    ],
    exclusions: [
      "Cathedral permission charges",
      "Hair and makeup artist"
    ],
    gallery: [
      {
        src: "assets/images/plan-christian-wedding.png",
        caption: "Cathedral Stone Archway Romantic Frame",
        eventTag: "Church Nuptials",
        outfit: "Classic White Lace Bridal Gown & Black Tuxedo"
      },
      {
        src: "assets/images/chris-1-church.jpg",
        caption: "Cathedral Aisle Procession & Vows",
        eventTag: "Cathedral Vows",
        outfit: "Cathedral Length Lace Veil & Classic Tuxedo"
      },
      {
        src: "assets/images/chris-2-dance.jpg",
        caption: "Romantic Ballroom First Dance",
        eventTag: "Ballroom Gala",
        outfit: "Evening Reception Suit & Sparkle Gown"
      },
      {
        src: "assets/images/chris-3-forest.jpg",
        caption: "Pine Forest & Misty Hilltop Pre-Wedding",
        eventTag: "Ooty Hills Shoot",
        outfit: "Breezy White Gown & Tweed Blazer"
      },
      {
        src: "assets/images/chris-4-toast.jpg",
        caption: "Champagne Toast & Cake Cutting Celebration",
        eventTag: "Reception Toast",
        outfit: "Formal Ballroom Dinner Attire"
      },
      {
        src: "assets/images/chris-5-veil.jpg",
        caption: "Fine Art Bridal Veil & Floral Bouquet",
        eventTag: "Bridal Portrait",
        outfit: "Ivory Lace & Pearl Accents"
      },
      {
        src: "assets/images/chris-6-candid.jpg",
        caption: "Candid Exchange of Wedding Rings",
        eventTag: "Sacred Rings",
        outfit: "Formal Church Wedding Finery"
      },
      {
        src: "assets/images/chris-7-sunset.jpg",
        caption: "Golden Hour Lakeview Promenade",
        eventTag: "Sunset Stroll",
        outfit: "Casual Chic White Dress & Navy Blazer"
      }
    ]
  },
  {
    id: "pkg-ramana-soundharya",
    coupleName: "Ramana & Soundharya",
    title: "Vedic Muhurtham & Sacred Rituals Ceremony",
    type: "wedding",
    category: "traditional",
    badge: "Sacred Rituals",
    tag: "Family Heritage",
    duration: "2 Days Full Coverage",
    location: "Coimbatore, Madurai & Trichy",
    rating: 4.9,
    reviews: 110,
    basePrice: 58000,
    aspectClass: "img-landscape",
    cardOffsetClass: "",
    image: "assets/images/plan-south-indian-muhurtham-ceremony.png",
    quote: "Ramana and Soundharya share a love that radiates warmth, devotion, and elegance.",
    description: "Authentic ceremony coverage capturing sacred oil lamps (kuthuvilakku), jasmine garlands, family blessings, and traditional wedding rituals.",
    itinerary: [
      { day: 1, title: "Sacred Homam & Muhurtham Ceremony", desc: "Vedic rituals, garland exchange, Tali tying moment, family blessing portraits, and feast highlights." }
    ],
    inclusions: [
      "2 Senior Candid Photographers + 2 HD Videographers",
      "1 Canvera Leather Photobook (200 Photos)",
      "Full Muhurtham Traditional Film + 3-Min Cinematic Teaser",
      "High-Resolution Master Photo Files"
    ],
    exclusions: [
      "Custom stage pyrotechnics",
      "Accommodation for outstation crew"
    ],
    gallery: [
      {
        src: "assets/images/plan-south-indian-muhurtham-ceremony.png",
        caption: "Sacred Homam Rituals with Paddy Harvest & Oil Lamps",
        eventTag: "Muhurtham Homam",
        outfit: "Golden Silk Veshti & Bright Coral Silk Saree"
      },
      {
        src: "assets/images/ramana-2-haldi.jpg",
        caption: "Traditional Nalangu Turmeric Rituals",
        eventTag: "Nalangu Pooja",
        outfit: "Yellow Pattu Pavada & Veshti"
      },
      {
        src: "assets/images/ramana-3-garland.jpg",
        caption: "Sacred Homam & Jasmine Garland Exchange",
        eventTag: "Garland Exchange",
        outfit: "Muhurtham Red Silk Saree & Gold Border Veshti"
      },
      {
        src: "assets/images/ramana-4-reception.jpg",
        caption: "Evening Reception Stage Lighting",
        eventTag: "Grand Reception",
        outfit: "Maroon Designer Saree & Bandhgala"
      },
      {
        src: "assets/images/ramana-5-temple.jpg",
        caption: "Temple Corridor Architectural Stroll",
        eventTag: "Temple Shoot",
        outfit: "Traditional Kanchipuram Silks"
      },
      {
        src: "assets/images/ramana-6-candid.jpg",
        caption: "Heartfelt Kanyadaanam & Family Blessings",
        eventTag: "Family Moments",
        outfit: "Ceremonial Silk Finery"
      },
      {
        src: "assets/images/ramana-7-sunset.jpg",
        caption: "Sunset Pre-Wedding by the Lake",
        eventTag: "Pre-Wedding Shoot",
        outfit: "Pastel Ethnic Casuals"
      }
    ]
  },

  // COLUMN 4: Item 7 & Item 8 (Extra Tall Palace Frame with Downward Offset & Temple Pooja)
  {
    id: "pkg-rama-vignesh",
    coupleName: "Rama & Vignesh",
    title: "Royal Heritage Grand Palace Muhurtham",
    type: "luxury",
    category: "luxury",
    badge: "Grand Royal",
    tag: "Premium",
    duration: "3 Days Full Event",
    location: "Coimbatore, Udaipur, Jaipur & South India",
    rating: 5.0,
    reviews: 78,
    basePrice: 165000,
    aspectClass: "img-extra-tall",
    cardOffsetClass: "offset-top-md",
    image: "assets/images/plan-royal-heritage-muhurtham.png",
    quote: "Rama and Vignesh share a love that feels peaceful, honest, and beautifully soulful.",
    description: "End-to-end royal heritage coverage in velvet maroon zardozi lehengas & golden sherwanis for grand palaces, Baraat processions, and same-day 4K reels.",
    itinerary: [
      { day: 1, title: "Day 1: Haldi & Pool Party Festivities", desc: "Vibrant candid splash photos, flower haldi slow-mo cinematic reels, and evening Mehendi acoustic night." },
      { day: 2, title: "Day 2: Sangeet Gala & Flash Mob", desc: "Stage lighting cinematography, candid artist shots, couple performance film, and party after-hours." },
      { day: 3, title: "Day 3: Royal Pheras & Heritage Reception", desc: "Royal Baraat drone aerials, sunset pheras, bridal entry cinematic sequence, and same-day 1-minute reel preview!" }
    ],
    inclusions: [
      "Full 6-Member Crew (Candid, Cinematic, Traditional & Drone Specialists)",
      "4K 60FPS Drone Aerial Video Coverage for all 3 Days",
      "Same-Day Edit 1-Minute Instagram Reel Preview",
      "2 Premium Flush Mount Italian Leather Photo Albums",
      "Cinematic Full Feature Film (45 Mins) + 4K Teaser"
    ],
    exclusions: [
      "Crew flight tickets and resort accommodations",
      "Custom props or special effects"
    ],
    gallery: [
      {
        src: "assets/images/plan-royal-heritage-muhurtham.png",
        caption: "Royal Palace Balcony Heritage Couple Stance",
        eventTag: "Palace Muhurtham",
        outfit: "Golden Raw Silk Sherwani & Velvet Maroon Zardozi Lehenga"
      },
      {
        src: "assets/images/rama-1-palace.jpg",
        caption: "Imperial Palace Archway Heritage Stance",
        eventTag: "Palace Architecture",
        outfit: "Gold Sherwani & Maroon Velvet Lehenga"
      },
      {
        src: "assets/images/rama-2-haldi.jpg",
        caption: "Vibrant Palace Poolside Haldi Splash",
        eventTag: "Haldi Pool Party",
        outfit: "Yellow Kurta & Floral Jewelry Lehenga"
      },
      {
        src: "assets/images/rama-3-sangeet.jpg",
        caption: "Grand Sangeet Stage Fireworks & Dance",
        eventTag: "Sangeet Night",
        outfit: "Navy Sequin Lehengas & Velvet Bandhgala"
      },
      {
        src: "assets/images/rama-4-pheras.jpg",
        caption: "Sacred Sunset Pheras around Holy Fire",
        eventTag: "Sunset Pheras",
        outfit: "Royal Wedding Mandap Couture"
      },
      {
        src: "assets/images/rama-5-reception.jpg",
        caption: "Regal Banquet Dinner & Reception Toast",
        eventTag: "Royal Reception",
        outfit: "Black Tuxedo & Emerald Evening Gown"
      },
      {
        src: "assets/images/rama-6-candid.jpg",
        caption: "Candid Royal Baraat Procession Moments",
        eventTag: "Baraat Procession",
        outfit: "Embroidered Turban & Dupatta"
      },
      {
        src: "assets/images/rama-7-sunset.jpg",
        caption: "Udaipur Palace Lake Sunset Stroll",
        eventTag: "Pre-Wedding Sunset",
        outfit: "Flowing Pastel Chiffon Couture"
      }
    ]
  },
  {
    id: "pkg-arun-divya",
    coupleName: "Arun & Divya",
    title: "Heritage Temple Stone Pillar & Silk Story",
    type: "wedding",
    category: "traditional",
    badge: "Sacred Heritage",
    tag: "Rituals Focus",
    duration: "1 Day (8 Hours)",
    location: "Coimbatore, Madurai & Thanjavur",
    rating: 4.9,
    reviews: 98,
    basePrice: 45000,
    aspectClass: "img-portrait",
    cardOffsetClass: "",
    image: "assets/images/plan-temple-pillar-portrait.png",
    quote: "Arun and Divya share a love that flows freely like ocean tides and endless skies.",
    description: "Capturing auspicious marriage rituals, stone temple pillar portraits, traditional silk attire, and sacred marital vows in authentic clarity.",
    itinerary: [
      { day: 1, title: "Temple Wedding & Family Festivities", desc: "Early morning pooja coverage, mangala vaathiyam musicians, couple blessings, and family lunch." }
    ],
    inclusions: [
      "1 Candid Photographer + 1 Cinema Videographer",
      "1 Teaser Video (60-90 sec for Reels/Stories)",
      "50 Retouched Fine Art Portraits",
      "High-Resolution Digital Gallery Link"
    ],
    exclusions: [
      "Temple trust permission charges",
      "Outstation travel expenses"
    ],
    gallery: [
      {
        src: "assets/images/plan-temple-pillar-portrait.png",
        caption: "Ancient Temple Carved Stone Pillar Couple Portrait",
        eventTag: "Temple Muhurtham",
        outfit: "Traditional Silk Veshti & Emerald Green Silk Saree"
      },
      {
        src: "assets/images/arun-1-temple.jpg",
        caption: "Ancient Stone Carvings & Temple Courtyard",
        eventTag: "Temple Architecture",
        outfit: "Traditional Silk Veshti & Saree"
      },
      {
        src: "assets/images/arun-3-haldi.jpg",
        caption: "Joyous Turmeric Nalangu Blessings",
        eventTag: "Nalangu Pooja",
        outfit: "Yellow Silk Attire & Gold Ornaments"
      },
      {
        src: "assets/images/arun-4-sangeet.jpg",
        caption: "Musical Sangeet Evening & Couple Dance",
        eventTag: "Sangeet Night",
        outfit: "Teal Brocade Kurta & Lehengas"
      },
      {
        src: "assets/images/arun-5-reception.jpg",
        caption: "Grand Stage Reception Gathering",
        eventTag: "Grand Reception",
        outfit: "Formal Navy Suit & Red Silk Saree"
      },
      {
        src: "assets/images/arun-6-candid.jpg",
        caption: "Candid Laughter with Traditional Nadaswaram",
        eventTag: "Temple Musicians & Joy",
        outfit: "Auspicious Festive Silks"
      },
      {
        src: "assets/images/arun-7-sunset.jpg",
        caption: "Riverside Golden Hour Pre-Wedding Walk",
        eventTag: "Outdoor Pre-Wedding",
        outfit: "Pastel Ethnic Casuals"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = packagesData;
}

const mockExperiences = [
  {
    id: 1,
    title: "Super Bowl LVIII in Las Vegas",
    description: "Experience the biggest game in American football at Allegiant Stadium",
    location: "Las Vegas, NV",
    cost: "$5,000-$10,000",
    accommodation: "Bellagio Hotel & Casino",
    recommendations: "Book early, arrive a few days before to enjoy the festivities",
    createdBy: "creator1",
    likes: 245,
    imageUrl: "https://images.unsplash.com/photo-1642024728966-7492bae9bb60?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1608395463944-050fb5c69888?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 1, user: "vegas_local", text: "The atmosphere is electric during Super Bowl week!" }
    ]
  },
  {
    id: 2,
    title: "Kentucky Derby at Churchill Downs",
    description: "Witness the most exciting two minutes in sports",
    location: "Louisville, KY",
    cost: "$2,000-$5,000",
    accommodation: "The Brown Hotel",
    recommendations: "Don't forget to dress up and wear a fancy hat!",
    createdBy: "creator1",
    likes: 189,
    imageUrl: "https://images.unsplash.com/photo-1582546338780-c9c48ab14c54?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1565794492875-a26b9e4d0d7c?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 5, user: "mint_julep", text: "The mint juleps are a must-try!" }
    ]
  },
  {
    id: 3,
    title: "NBA Finals Game",
    description: "Feel the intensity of championship basketball",
    location: "Various Cities",
    cost: "$1,500-$5,000",
    accommodation: "Varies by location",
    recommendations: "Try to get tickets for a potential championship-clinching game",
    createdBy: "creator2",
    likes: 156,
    imageUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1518650810337-7b423ca237d9?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 8, user: "courtside", text: "Nothing beats playoff basketball!" }
    ]
  },
  {
    id: 4,
    title: "World Series Game at Historic Fenway Park",
    description: "Experience baseball history in Boston",
    location: "Boston, MA",
    cost: "$1,000-$2,500",
    accommodation: "Boston Park Plaza",
    recommendations: "Visit during playoff season for best atmosphere",
    createdBy: "creator1",
    likes: 203,
    imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1562212262-8295f9296772?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 10, user: "sox_fan", text: "Nothing beats October baseball at Fenway!" }
    ]
  },
  {
    id: 5,
    title: "Masters Tournament at Augusta",
    description: "Walk the hallowed grounds of Augusta National",
    location: "Augusta, GA",
    cost: "$2,000-$5,000",
    accommodation: "Marriott Augusta",
    recommendations: "Try the famous pimento cheese sandwich",
    createdBy: "creator2",
    likes: 178,
    imageUrl: "https://images.unsplash.com/photo-1587174486073-ae5e3bc08eb9?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 15, user: "par_4", text: "Amen Corner is even more beautiful in person!" }
    ]
  },
  {
    "id": 9,
    "title": "Tour de France Stage Finish",
    "description": "Witness the dramatic sprint finish of a Tour de France stage",
    "location": "Various Locations in France",
    "cost": "$1,000-$3,000",
    "accommodation": "Local Inns and Hotels",
    "recommendations": "Arrive early to secure a good viewing spot along the route.",
    "createdBy": "creator5",
    "likes": 160,
    "imageUrl": "https://images.unsplash.com/photo-1563228965-0219b22e1180?w=800&auto=format&fit=crop",
    "imageFallback": "https://images.unsplash.com/photo-1549723223-1c998f41f631?w=800&auto=format&fit=crop",
    "likedBy": [],
    "comments": [
      { "id": 30, "user": "cycling_fan", "text": "The energy of the peloton is incredible!" }
    ]
  },
  {
    "id": 10,
    "title": "Rugby World Cup Final",
    "description": "Experience the intensity of international rugby at its peak",
    "location": "Various International Locations",
    "cost": "$1,500-$4,000",
    "accommodation": "Varies by Location",
    "recommendations": "Immerse yourself in the friendly rivalry and camaraderie of rugby fans.",
    "createdBy": "creator6",
    "likes": 180,
    "imageUrl": "https://images.unsplash.com/photo-1571497196627-2c972f254530?w=800&auto=format&fit=crop",
    "imageFallback": "https://images.unsplash.com/photo-1575825424773-41c11c59c5d1?w=800&auto=format&fit=crop",
    "likedBy": [],
    "comments": [
      { "id": 35, "user": "rugby_enthusiast", "text": "The passion of rugby fans is unmatched!" }
    ]
  },
  {
    "id": 11,
    "title": "Indian Premier League (IPL) Cricket Match",
    "description": "Witness the excitement of T20 cricket in India",
    "location": "Various Cities in India",
    "cost": "$500-$1,500",
    "accommodation": "Local Hotels and Guesthouses",
    "recommendations": "Experience the electric atmosphere of an IPL match and try local street food.",
    "createdBy": "creator7",
    "likes": 210,
    "imageUrl": "https://images.unsplash.com/photo-1629835848599-4d3f566a011a?w=800&auto=format&fit=crop",
    "imageFallback": "https://images.unsplash.com/photo-1579547621415-a0774a89961f?w=800&auto=format&fit=crop",
    "likedBy": [],
    "comments": [
      { "id": 40, "user": "cricket_lover", "text": "The IPL is a spectacle of cricket and entertainment!" }
    ]
  },
  {
    "id": 12,
    "title": "X Games Event",
    "description": "See the world's best extreme sports athletes compete",
    "location": "Various Locations",
    "cost": "$800-$2,000",
    "accommodation": "Local Hotels",
    "recommendations": "Check out the festival village for interactive experiences and merchandise.",
    "createdBy": "creator8",
    "likes": 190,
    "imageUrl": "https://images.unsplash.com/photo-1596752086399-56365e90d0b8?w=800&auto=format&fit=crop",
    "imageFallback": "https://images.unsplash.com/photo-1559981846-5c5f85023907?w=800&auto=format&fit=crop",
    "likedBy": [],
    "comments": [
      { "id": 45, "user": "extreme_fan", "text": "The X Games is a showcase of incredible talent and daring feats!" }
    ]
  },
  {
    id: 6,
    title: "Tour de France Stage Finish",
    description: "Witness the dramatic sprint finish of a Tour de France stage",
    location: "Various Locations in France",
    cost: "$1,000-$3,000",
    accommodation: "Local Inns and Hotels",
    recommendations: "Arrive early to secure a good viewing spot along the route.",
    createdBy: "creator5",
    likes: 160,
    imageUrl: "https://images.unsplash.com/photo-1563228965-0219b22e1180?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1549723223-1c998f41f631?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 30, user: "cycling_fan", text: "The energy of the peloton is incredible!" }
    ]
  },
  {
    id: 7,
    title: "Rugby World Cup Final",
    description: "Experience the intensity of international rugby at its peak",
    location: "Various International Locations",
    cost: "$1,500-$4,000",
    accommodation: "Varies by Location",
    recommendations: "Immerse yourself in the friendly rivalry and camaraderie of rugby fans.",
    createdBy: "creator6",
    likes: 180,
    imageUrl: "https://images.unsplash.com/photo-1571497196627-2c972f254530?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1575825424773-41c11c59c5d1?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 35, user: "rugby_enthusiast", text: "The passion of rugby fans is unmatched!" }
    ]
  },
  {
    id: 8,
    title: "Indian Premier League (IPL) Cricket Match",
    description: "Witness the excitement of T20 cricket in India",
    location: "Various Cities in India",
    cost: "$500-$1,500",
    accommodation: "Local Hotels and Guesthouses",
    recommendations: "Experience the electric atmosphere of an IPL match and try local street food.",
    createdBy: "creator7",
    likes: 210,
    imageUrl: "https://images.unsplash.com/photo-1629835848599-4d3f566a011a?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1579547621415-a0774a89961f?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 40, user: "cricket_lover", text: "The IPL is a spectacle of cricket and entertainment!" }
    ]
  },
  {
    id: 9,
    title: "X Games Event",
    description: "See the world's best extreme sports athletes compete",
    location: "Various Locations",
    cost: "$800-$2,000",
    accommodation: "Local Hotels",
    recommendations: "Check out the festival village for interactive experiences and merchandise.",
    createdBy: "creator8",
    likes: 190,
    imageUrl: "https://images.unsplash.com/photo-1596752086399-56365e90d0b8?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1559981846-5c5f85023907?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 45, user: "extreme_fan", text: "The X Games is a showcase of incredible talent and daring feats!" }
    ]
  },
  {
    id: 10,
    title: "Australian Open Finals",
    description: "Experience the thrill of grand slam tennis in Melbourne",
    location: "Melbourne, Australia",
    cost: "$1,200-$3,500",
    accommodation: "Crown Towers Melbourne",
    recommendations: "Enjoy the vibrant atmosphere of Melbourne and explore the city's laneway cafes.",
    createdBy: "creator9",
    likes: 175,
    imageUrl: "https://images.unsplash.com/photo-1549806489-3286f05952c4?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1582253686311-570a2a4b5247?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 50, user: "tennis_downunder", text: "The Australian Open is a must-see for tennis fans!" }
    ]
  },
  {
    id: 11,
    title: "NHL Stanley Cup Finals",
    description: "Witness the intensity of playoff hockey for the ultimate prize",
    location: "Various Cities in North America",
    cost: "$1,500-$4,500",
    accommodation: "Varies by Location",
    recommendations: "Experience the electric atmosphere of a packed NHL arena during the playoffs.",
    createdBy: "creator10",
    likes: 200,
    imageUrl: "https://images.unsplash.com/photo-1596752086399-56365e90d0b8?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1560693529-52e079713c72?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 55, user: "hockey_fanatic", text: "Nothing beats playoff hockey!" }
    ]
  },
  {
    id: 12,
    title: "MotoGP Race Day",
    description: "Feel the adrenaline rush of motorcycle racing at its finest",
    location: "Various International Locations",
    cost: "$1,000-$3,000",
    accommodation: "Local Hotels and Resorts",
    recommendations: "Explore the paddock and get up close to the bikes and riders.",
    createdBy: "creator11",
    likes: 185,
    imageUrl: "https://images.unsplash.com/photo-1583216859599-4d6f85966601?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1551833634-118e692c8188?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 60, user: "moto_enthusiast", text: "The speed and skill of MotoGP riders is incredible!" }
    ]
  },
  {
    id: 13,
    title: "College Football National Championship",
    description: "Experience the passion of college football at its highest level",
    location: "Various Locations in the United States",
    cost: "$800-$2,500",
    accommodation: "Local Hotels",
    recommendations: "Immerse yourself in the tailgating culture and the electric atmosphere of the game.",
    createdBy: "creator12",
    likes: 225,
    imageUrl: "https://images.unsplash.com/photo-1610738615462-87588147d10e?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1560184478-f76c3f683e87?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 65, user: "cfb_fan", text: "The college football championship is an unforgettable experience!" }
    ]
  },
  {
    id: 14,
    title: "Olympic Games Event",
    description: "Witness the world's greatest athletes compete on the Olympic stage",
    location: "Various International Host Cities",
    cost: "$1,500-$5,000+",
    accommodation: "Varies by Location",
    recommendations: "Explore the host city and experience the global celebration of sports and culture.",
    createdBy: "creator13",
    likes: 250,
    imageUrl: "https://images.unsplash.com/photo-1596752086399-56365e90d0b8?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1560693529-52e079713c72?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 70, user: "olympic_fan", text: "The Olympics are a once-in-a-lifetime experience!" }
    ]
  },
  JSON

[
  {
    id: 15,
    title: "The Open Championship (British Open)",
    description: "Experience the tradition and challenge of links golf",
    location: "Various Locations in the United Kingdom",
    cost: "$1,200-$3,500",
    accommodation: "Local Hotels and Cottages",
    recommendations: "Prepare for unpredictable weather and enjoy the unique atmosphere of a British Open.",
    createdBy: "creator14",
    likes: 195,
    imageUrl: "https://images.unsplash.com/photo-1628189874558-45371261314d?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1599507941916-24a7e91409f8?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 75, user: "golf_enthusiast", text: "The Open is a true test of golf!" }
    ]
  },
  {
    id: 16,
    title: "Copa Libertadores Final",
    description: "Witness the passion of South American club football",
    location: "Various Locations in South America",
    cost: "$800-$2,500",
    accommodation: "Local Hotels",
    recommendations: "Immerse yourself in the vibrant fan culture and experience the electric atmosphere.",
    createdBy: "creator15",
    likes: 215,
    imageUrl: "https://images.unsplash.com/photo-1601666878342-99042b99214d?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1592671565575-b467659556d6?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 80, user: "soccer_fanatic", text: "The Copa Libertadores final is an unforgettable experience!" }
    ]
  },
  {
    id: 17,
    title: "Paris-Roubaix Cycling Race",
    description: "Experience the legendary 'Hell of the North' cycling race",
    location: "Northern France",
    cost: "$700-$2,000",
    accommodation: "Local Inns and Hotels",
    recommendations: "Witness the riders tackle the iconic cobblestone sectors and experience the race's history.",
    createdBy: "creator16",
    likes: 180,
    imageUrl: "https://images.unsplash.com/photo-1629832791632-6019a5843431?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1549723223-1c998f41f631?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 85, user: "cycling_fan", text: "Paris-Roubaix is a true test of endurance and skill!" }
    ]
  },
  {
    id: 18,
    title: "Daytona 500",
    description: "Experience the excitement of NASCAR's most prestigious race",
    location: "Daytona Beach, Florida",
    cost: "$900-$2,800",
    accommodation: "Local Hotels and Resorts",
    recommendations: "Immerse yourself in the pre-race festivities and experience the thrill of stock car racing.",
    createdBy: "creator17",
    likes: 205,
    imageUrl: "https://images.unsplash.com/photo-1587310574706-e0f31a29938b?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1612053073998-3f5f3752e25d?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 90, user: "racing_fan", text: "The Daytona 500 is a must-see for any racing fan!" }
    ]
  },
    {
    id: 19,
    title: "US Open (Golf)",
    description: "Experience the challenging conditions and prestigious atmosphere of the US Open",
    location: "Various Locations in the United States",
    cost: "$1,100-$3,000",
    accommodation: "Local Hotels",
    recommendations: "Walk the course, witness the difficult pin placements, and enjoy the high level of play.",
    createdBy: "creator18",
    likes: 190,
    imageUrl: "https://images.unsplash.com/photo-1593444641689-d1015f83c078?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1598506509988-51846b025f16?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 95, user: "golf_fan", text: "The US Open is a true test of skill and mental fortitude!" }
    ]
  }
];

const loadExperiences = () => {
  const savedExperiences = localStorage.getItem('experiences');
  return savedExperiences ? JSON.parse(savedExperiences) : mockExperiences;
};

const saveExperiences = (experiences) => {
  localStorage.setItem('experiences', JSON.stringify(experiences));
};

const mockUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User',
    email: 'admin@example.com'
  },
  {
    id: 2,
    username: 'creator1',
    password: 'creator123',
    role: 'creator',
    name: 'John Creator',
    email: 'john@example.com'
  },
  {
    id: 3,
    username: 'creator2',
    password: 'creator123',
    role: 'creator',
    name: 'Jane Creator',
    email: 'jane@example.com'
  }
];

// Initialize mock user data in localStorage if not present
const initializeUserData = () => {
  // Initialize users if not present
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(mockUsers));
  }

  // Initialize stats and settings for each user
  mockUsers.forEach(user => {
    // Initialize user stats if not present
    if (!localStorage.getItem(`userStats_${user.id}`)) {
      const initialStats = {
        experiences: user.role === 'admin' ? 15 : 5,
        likesGiven: user.role === 'admin' ? 25 : 8,
        comments: user.role === 'admin' ? 30 : 10
      };
      localStorage.setItem(`userStats_${user.id}`, JSON.stringify(initialStats));
    }

    // Initialize user settings if not present
    if (!localStorage.getItem(`userSettings_${user.id}`)) {
      const initialSettings = {
        emailNotifications: true,
        darkMode: true,
        publicProfile: user.role === 'admin'
      };
      localStorage.setItem(`userSettings_${user.id}`, JSON.stringify(initialSettings));
    }
  });
};

// Call initialization when the module loads
initializeUserData();

// Export all items
export { mockExperiences, loadExperiences, saveExperiences, mockUsers, initializeUserData };

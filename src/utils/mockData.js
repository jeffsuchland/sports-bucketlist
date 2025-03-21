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
    imageUrl: "https://images.unsplash.com/photo-1484482340112-e1e2682b4856?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1495563125611-fa99f1c6485d?w=800&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1499036197647-0dae3b1b49d3?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=800&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1508163223045-1880bc36e222?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1494809610410-160faaed4de0?w=800&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1587174486073-ae5e3bc08eb9?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 15, user: "par_4", text: "Amen Corner is even more beautiful in person!" }
    ]
  },
  {
    id: 6,
    title: "Monaco Grand Prix",
    description: "Experience the most prestigious Formula 1 race through the streets of Monte Carlo",
    location: "Monte Carlo, Monaco",
    cost: "$2,500-$7,000",
    accommodation: "Hotel Hermitage Monte-Carlo",
    recommendations: "Book well in advance and enjoy the yacht parties and casino culture",
    createdBy: "creator2",
    likes: 230,
    imageUrl: "https://images.unsplash.com/photo-1504817343863-5092a923803e?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1541773367433-99e1a9462549?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 25, user: "f1_fan", text: "The atmosphere in Monaco is unbelievable!" }
    ]
  },
  {
    id: 7,
    title: "UEFA Champions League Final",
    description: "Watch the pinnacle of European club football",
    location: "Various European Cities",
    cost: "$2,000-$5,000",
    accommodation: "Varies by Location",
    recommendations: "Join the fan festivals and pre-match celebrations",
    createdBy: "creator1",
    likes: 275,
    imageUrl: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 20, user: "football_fan", text: "The Champions League final is pure magic!" }
    ]
  },
  {
    id: 8,
    title: "Wimbledon Finals Weekend",
    description: "Experience the tradition and prestige of tennis at the All England Club",
    location: "London, UK",
    cost: "$2,000-$5,000",
    accommodation: "The Petersham Hotel Richmond",
    recommendations: "Try the traditional strawberries and cream, arrive early for good seats",
    createdBy: "creator2",
    likes: 195,
    imageUrl: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 30, user: "tennis_fan", text: "Centre Court has an atmosphere like no other!" }
    ]
  },
  {
    id: 9,
    title: "Tour de France Stage Finish",
    description: "Witness the dramatic sprint finish of a Tour de France stage",
    location: "Various Locations in France",
    cost: "$1,000-$3,000",
    accommodation: "Local Inns and Hotels",
    recommendations: "Arrive early to secure a good viewing spot along the route",
    createdBy: "creator1",
    likes: 160,
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1530143584546-02191bc84eb5?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 35, user: "cycling_fan", text: "The energy of the peloton is incredible!" }
    ]
  },
  {
    id: 10,
    title: "Rugby World Cup Final",
    description: "Experience the intensity of international rugby at its peak",
    location: "Various International Locations",
    cost: "$1,500-$4,000",
    accommodation: "Varies by Location",
    recommendations: "Immerse yourself in the friendly rivalry and camaraderie of rugby fans",
    createdBy: "creator2",
    likes: 180,
    imageUrl: "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 40, user: "rugby_enthusiast", text: "The passion of rugby fans is unmatched!" }
    ]
  },
  {
    id: 11,
    title: "Indian Premier League (IPL) Cricket Match",
    description: "Witness the excitement of T20 cricket in India",
    location: "Various Cities in India",
    cost: "$500-$1,500",
    accommodation: "Local Hotels and Guesthouses",
    recommendations: "Experience the electric atmosphere of an IPL match and try local street food",
    createdBy: "creator1",
    likes: 210,
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 45, user: "cricket_lover", text: "The IPL is a spectacle of cricket and entertainment!" }
    ]
  },
  {
    id: 12,
    title: "X Games Event",
    description: "See the world's best extreme sports athletes compete",
    location: "Various Locations",
    cost: "$800-$2,000",
    accommodation: "Local Hotels",
    recommendations: "Check out the festival village for interactive experiences and merchandise",
    createdBy: "creator2",
    likes: 190,
    imageUrl: "https://images.unsplash.com/photo-1522898467493-49726bf28798?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 50, user: "extreme_fan", text: "The X Games is a showcase of incredible talent and daring feats!" }
    ]
  },
  {
    id: 13,
    title: "Australian Open Finals",
    description: "Experience the thrill of grand slam tennis in Melbourne",
    location: "Melbourne, Australia",
    cost: "$1,200-$3,500",
    accommodation: "Crown Towers Melbourne",
    recommendations: "Enjoy the vibrant atmosphere of Melbourne and explore the city's laneway cafes",
    createdBy: "creator1",
    likes: 175,
    imageUrl: "https://images.unsplash.com/photo-1623094646025-9f980cc4a389?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 55, user: "tennis_downunder", text: "The Australian Open is a must-see for tennis fans!" }
    ]
  },
  {
    id: 14,
    title: "NHL Stanley Cup Finals",
    description: "Witness the intensity of playoff hockey for the ultimate prize",
    location: "Various Cities in North America",
    cost: "$1,500-$4,500",
    accommodation: "Varies by Location",
    recommendations: "Experience the electric atmosphere of a packed NHL arena during the playoffs",
    createdBy: "creator2",
    likes: 200,
    imageUrl: "https://images.unsplash.com/photo-1580992664064-1a4b7aa44dca?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 60, user: "hockey_fanatic", text: "Nothing beats playoff hockey!" }
    ]
  },
  {
    id: 15,
    title: "MotoGP Race Day",
    description: "Feel the adrenaline rush of motorcycle racing at its finest",
    location: "Various International Locations",
    cost: "$1,000-$3,000",
    accommodation: "Local Hotels and Resorts",
    recommendations: "Explore the paddock and get up close to the bikes and riders",
    createdBy: "creator1",
    likes: 185,
    imageUrl: "https://images.unsplash.com/photo-1616939814109-ea80c3fdcc2a?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 65, user: "moto_enthusiast", text: "The speed and skill of MotoGP riders is incredible!" }
    ]
  },
  {
    id: 16,
    title: "College Football National Championship",
    description: "Experience the passion of college football at its highest level",
    location: "Various Locations in the United States",
    cost: "$800-$2,500",
    accommodation: "Local Hotels",
    recommendations: "Immerse yourself in the tailgating culture and the electric atmosphere of the game",
    createdBy: "creator2",
    likes: 225,
    imageUrl: "https://images.unsplash.com/photo-1508163223045-1880bc36e222?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1494809610410-160faaed4de0?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 70, user: "cfb_fan", text: "The college football championship is an unforgettable experience!" }
    ]
  },
  {
    id: 17,
    title: "Olympic Games Opening Ceremony",
    description: "Witness the spectacle of the Olympic Games opening ceremony",
    location: "Various International Host Cities",
    cost: "$2,000-$7,000",
    accommodation: "Varies by Location",
    recommendations: "Book well in advance and plan to stay for multiple Olympic events",
    createdBy: "creator1",
    likes: 250,
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 75, user: "olympic_fan", text: "The opening ceremony is a celebration of sport and culture!" }
    ]
  },
  {
    id: 18,
    title: "Daytona 500",
    description: "Experience the excitement of NASCAR's most prestigious race",
    location: "Daytona Beach, Florida",
    cost: "$900-$2,800",
    accommodation: "Local Hotels and Resorts",
    recommendations: "Immerse yourself in the pre-race festivities and experience the thrill of stock car racing",
    createdBy: "creator2",
    likes: 205,
    imageUrl: "https://images.unsplash.com/photo-1541968047768-5c6942dcc12e?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 80, user: "racing_fan", text: "The Daytona 500 is a must-see for any racing fan!" }
    ]
  },
  {
    id: 19,
    title: "US Open (Golf)",
    description: "Experience the challenging conditions and prestigious atmosphere of the US Open",
    location: "Various Locations in the United States",
    cost: "$1,100-$3,000",
    accommodation: "Local Hotels",
    recommendations: "Walk the course, witness the difficult pin placements, and enjoy the high level of play",
    createdBy: "creator1",
    likes: 190,
    imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1587174486073-ae5e3bc08eb9?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 85, user: "golf_fan", text: "The US Open is a true test of skill and mental fortitude!" }
    ]
  },
  {
    id: 20,
    title: "FIFA World Cup Final",
    description: "Experience the pinnacle of international football",
    location: "Various Host Nations",
    cost: "$3,000-$10,000",
    accommodation: "Luxury Hotels",
    recommendations: "Book well in advance and immerse yourself in the host nation's culture",
    createdBy: "creator2",
    likes: 300,
    imageUrl: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800&auto=format&fit=crop",
    imageFallback: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop",
    likedBy: [],
    comments: [
      { id: 90, user: "football_fanatic", text: "The World Cup final is the ultimate sporting event!" }
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

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

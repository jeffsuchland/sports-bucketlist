# Sports Bucket List

A React-based web application for creating and sharing sports experiences bucket lists. Users can create, view, and interact with sports experiences, add comments, and manage their bucket lists.

## Features

- Create and share sports experiences with details (accommodations, costs, recommendations)
- Comment on experiences
- Like system with sorting by popularity
- Dark mode / light mode support
- User authentication and role-based access
- Responsive design with Material-UI

## Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sports-bucketlist
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will run in development mode at [http://localhost:3000](http://localhost:3000).

## Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. Push your code to a GitHub repository

2. Visit [Vercel](https://vercel.com) and sign in with GitHub

3. Click "Import Project" and select your repository

4. Select "Create React App" as the framework preset

5. Click "Deploy"

### Option 2: Manual Deployment

1. Install the Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

## Environment Setup

The project uses environment variables for configuration. Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3000 # Local development
# REACT_APP_API_URL=https://your-production-url.vercel.app # Production
```

## Tech Stack

- React (JavaScript)
- Material-UI for components
- React Router for navigation
- localStorage for data persistence (future: Supabase)
- Vercel for hosting

## Available Scripts

- `npm start` - Run in development mode
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

## Project Structure

```
sports-bucketlist/
├── public/
├── src/
│   ├── components/     # React components
│   ├── contexts/       # Context providers
│   ├── utils/          # Utility functions
│   ├── App.js          # Main app component
│   └── index.js        # Entry point
├── .env               # Environment variables
├── package.json       # Dependencies and scripts
└── vercel.json        # Vercel configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for your own purposes.

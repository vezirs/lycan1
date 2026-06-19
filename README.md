# Lycan - Link in Bio Platform

A modern React application inspired by creep.gg, providing users with:

- **Profile Pages**: Customizable link-in-bio profiles
- **Real Inbox**: Permanent mailbox system
- **Live Chat**: Global and private messaging
- **User Discovery**: Browse and discover other users
- **Multi-Domain Support**: Claim usernames across multiple domains

## Tech Stack

- **Frontend**: React 18 + React Router 6
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: Zustand
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
lyan1/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   └── Domains.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   ├── Discover.jsx
│   │   ├── Mail.jsx
│   │   ├── Chat.jsx
│   │   └── NotFound.jsx
│   ├── store/            # State management
│   │   └── useStore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Features

### 1. Profile Pages
- Customizable themes and colors
- Link management
- Bio/about section
- Profile badges

### 2. Inbox
- Receive messages
- Temp mail support
- Message history

### 3. Chat
- Real-time messaging
- Private DMs
- Global chat room
- User presence

### 4. Discovery
- Browse user profiles
- Search functionality
- User statistics

## Routing

- `/` - Home page
- `/:username` - User profile
- `/discover` - User discovery
- `/mail` - Mailbox
- `/chat` - Chat interface
- `/*` - 404 Not Found

## Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.example.com
VITE_CDN_URL=https://cdn.example.com
```

## Deployment

### With Cloudflare Pages

```bash
npm run build
# Deploy the dist/ folder to Cloudflare Pages
```

### With jsDelivr CDN

Assets are optimized for CDN delivery via Cloudflare and jsDelivr.

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License

## Support

For issues and feature requests, please use the GitHub issues page.

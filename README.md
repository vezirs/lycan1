# 🐺 Lycan - Link in Bio Platform

> A modern, feature-rich social platform for sharing your profile, inbox, and connecting with others.

![Lycan](https://img.shields.io/badge/React-18.3-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🔐 Authentication & Account Management
- User registration and login
- Secure password management
- Two-factor authentication (2FA)
- Recovery codes for account backup
- Device management
- Session tracking

### 👤 Profile & Customization
- Customizable profile pages with link in bio
- Theme selection (Dark, Purple, Ocean, Forest)
- Custom accent colors
- Profile picture upload
- Bio and location
- Multiple usernames support
- User badges and status indicators

### 💬 Real-Time Chat
- Global and private channels
- User presence/online status
- Message history
- User mentions and tagging
- Badge system (Manager, Verified, Premium, Linked)
- Interactive user profiles from chat

### 📧 Mail System
- Permanent mailbox
- Unread message tracking
- Mail composition
- Message filtering
- Multi-username inbox support

### 🔍 Discovery
- User discovery and search
- Advanced filtering and sorting
- User cards with stats
- Follow system
- Verified user badges

### 🎨 Rich Profile Cards
- Customizable profile modals
- Embedded music player with Spotify integration
- Custom links with icons
- Social media integration
- View counter and follower stats
- Like/dislike reactions

### 📊 Additional Features
- Responsive design (mobile, tablet, desktop)
- Dark mode by default with theme support
- CDN optimization ready
- Open Graph meta tags
- HTTP/3 compatible
- Performance optimized

## 🛠️ Tech Stack

### Frontend
- **React** 18.3 - UI library
- **React Router** 6.20 - Client-side routing
- **Tailwind CSS** 3.4 - Utility-first styling
- **Vite** 5.0 - Build tool & dev server
- **Zustand** 4.4 - State management
- **Axios** 1.6 - HTTP client

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Deployment
- **Cloudflare Pages** - Hosting
- **jsDelivr** - CDN
- **HTTP/3** - Modern protocol support

## 📁 Project Structure

```
lycan1/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   ├── Sidebar.jsx         # Left sidebar (logged in)
│   │   ├── Hero.jsx            # Landing hero section
│   │   ├── Domains.jsx         # Domain showcase
│   │   ├── ProfileModal.jsx    # User profile modal
│   │   └── Account/
│   │       ├── AccountProfile.jsx      # Profile settings
│   │       ├── AccountAppearance.jsx   # Theme & customization
│   │       ├── AccountSecurity.jsx     # Security settings
│   │       └── AccountDevices.jsx      # Device management
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Profile.jsx         # User profile
│   │   ├── Discover.jsx        # User discovery
│   │   ├── Mail.jsx            # Mailbox
│   │   ├── Chat.jsx            # Chat interface
│   │   ├── Account.jsx         # Account settings hub
│   │   └── NotFound.jsx        # 404 page
│   ├── store/
│   │   └── useStore.js         # Zustand state management
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
├── .gitignore                  # Git ignore rules
├── .eslintrc.json              # ESLint config
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vezirs/lycan1.git
cd lycan1
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the project root:

```env
# API Configuration
VITE_API_URL=https://api.lycan.gg
VITE_CDN_URL=https://cdn.lycan.gg

# Feature Flags
VITE_ENABLE_2FA=true
VITE_ENABLE_MARKET=true
VITE_ENABLE_BLOCKCHAIN=false
```

### Customization

#### Colors & Theme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      dark: '#0a0e27',      // Background
      accent: '#ff006e',    // Primary color
      secondary: '#1f2937', // Secondary
    },
  },
}
```

#### Tailwind CSS

Global styles are in `src/index.css` and use Tailwind directives.

## 🔄 Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero & domains |
| `/:username` | Profile | User profile page |
| `/discover` | Discover | Browse & search users |
| `/mail` | Mail | Mailbox & messages |
| `/chat` | Chat | Chat interface with channels |
| `/account` | Account | Account settings hub |
| `/account/appearance` | AccountAppearance | Theme & customization |
| `/account/security` | AccountSecurity | Password & 2FA settings |
| `/account/devices` | AccountDevices | Active devices |
| `/*` | NotFound | 404 page |

## 💾 State Management

Using Zustand for simple, scalable state:

```javascript
import useStore from './store/useStore';

const { user, isLoggedIn, setUser, logout } = useStore();
```

### Store Actions
- `setUser(user)` - Set current user
- `logout()` - Clear user and logout
- `addMessage(msg)` - Add message to store
- `addMail(mail)` - Add mail to store

## 🎨 Design System

### Color Palette
- **Dark**: `#0a0e27` - Background
- **Secondary**: `#1f2937` - Cards/borders
- **Accent**: `#ff006e` - Primary interactive
- **Pink**: `#ff1f7e` - Hover states

### Typography
- **Font**: Inter, system-ui, sans-serif
- **Headings**: Bold (700-900 weight)
- **Body**: Regular (400 weight)

### Spacing
- Base unit: 4px
- Padding: `p-4`, `p-6`, `p-8`
- Margin: `mb-4`, `mt-6`, etc.

## 📱 Responsive Design

Breakpoints (Tailwind default):
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔐 Security Features

✅ Two-factor authentication (2FA)  
✅ Password change support  
✅ Recovery codes for account recovery  
✅ Device management & logout  
✅ Secure password reset  
✅ Session tracking  
✅ Protected sensitive actions  

## 📊 Performance Optimization

- ✨ Code splitting with React Router
- 🖼️ Lazy image loading
- 🎯 Tree-shaking for smaller bundles
- ⚡ CSS purging in production
- 📦 Minified output
- 🚀 Pre-optimized for CDN delivery

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📜 License

MIT License - See LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For issues and support:
- GitHub Issues: [Issue Tracker](https://github.com/vezirs/lycan1/issues)
- Discord: Join our community server
- Email: support@lycan.gg

## 🚀 Deployment

### Cloudflare Pages

1. Connect GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

### Custom Domain

You can claim usernames on multiple domains:
- `lycan.gg`
- `hubber.cc`
- `ageplay.lol`
- `fang.rip`
- `tip.cx`
- `764.lol`

## 📈 Roadmap

- [ ] Backend API integration
- [ ] Real-time WebSocket chat
- [ ] Payment processing (Stripe/PayPal)
- [ ] Media uploads to CDN
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] AI-powered recommendations
- [ ] Video messaging
- [ ] Marketplace integration
- [ ] Blockchain features

## 👥 Credits

Inspired by creep.gg - A minimal social platform for username lovers.

---

**Made with ❤️ by Vezir**  
[GitHub](https://github.com/vezirs) • [Twitter](https://twitter.com/vezirs) • [Discord](https://discord.gg/lycan)

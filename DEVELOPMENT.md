# Lycan - Development Guide

## 🛠️ Development Setup

### Prerequisites
- Node.js 16+ (check with `node --version`)
- npm or yarn
- Git

### First Time Setup

```bash
# Clone repository
git clone https://github.com/vezirs/lycan1.git
cd lycan1

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development
npm run dev
```

## 📝 Code Structure

### Components (`src/components/`)

Reusable UI components:
- **Navbar.jsx** - Navigation with auth modal
- **Sidebar.jsx** - Left navigation (logged in)
- **ProfileModal.jsx** - User profile popup
- **Hero.jsx** - Landing hero section
- **Domains.jsx** - Domain showcase
- **Account/** - Settings subcomponents

### Pages (`src/pages/`)

Full page components (routes):
- **Home.jsx** - Landing page
- **Profile.jsx** - User profile display
- **Discover.jsx** - User discovery
- **Mail.jsx** - Mailbox interface
- **Chat.jsx** - Chat with channels
- **Account.jsx** - Settings hub
- **NotFound.jsx** - 404 page

### State Management (`src/store/`)

Zustand store:
```javascript
const useStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: !!user }),
  logout: () => set({ user: null, isLoggedIn: false }),
}))
```

## 🎨 Styling Guidelines

### Tailwind Classes

```jsx
// Colors
<div className="bg-dark text-accent"> // Dark background, accent text
<div className="bg-secondary border-secondary"> // Secondary theme

// Spacing
<div className="p-6 mb-4"> // Padding 24px, margin-bottom 16px

// Responsive
<div className="grid md:grid-cols-2 lg:grid-cols-3"> // Responsive grid

// Hover States
<button className="hover:bg-accent/20 transition"> // Hover effect
```

### Color Palette

```css
--color-dark: #0a0e27;      /* Background */
--color-secondary: #1f2937; /* Cards/Borders */
--color-accent: #ff006e;    /* Primary */
--color-pink: #ff1f7e;      /* Hover states */
```

## 🔄 Component Patterns

### Functional Component

```jsx
import { useState } from 'react';

export default function MyComponent() {
  const [state, setState] = useState(initialValue);

  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

### Using Store

```jsx
import useStore from '../store/useStore';

export default function MyComponent() {
  const { user, isLoggedIn, setUser } = useStore();

  return (
    // Use store data
  );
}
```

### Router Link

```jsx
import { Link } from 'react-router-dom';

<Link to="/discover" className="hover:text-accent transition">
  Discover
</Link>
```

## 🧪 Testing

### ESLint

```bash
# Check for errors
npm run lint

# Fix auto-fixable errors
npm run lint -- --fix
```

### Build Test

```bash
# Test production build
npm run build
npm run preview
```

## 📚 File Naming Conventions

- **Components**: `PascalCase` (e.g., `Navbar.jsx`)
- **Pages**: `PascalCase` (e.g., `Profile.jsx`)
- **Utilities**: `camelCase` (e.g., `useStore.js`)
- **CSS**: Global in `index.css`, component-scoped via Tailwind

## 🔗 Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/my-feature

# Create Pull Request on GitHub
```

## 🐛 Debugging

### React DevTools

1. Install [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/) extension
2. Inspect components and state
3. Track re-renders

### Console Debugging

```javascript
console.log('Debug:', variable);
console.table(arrayOfObjects);
console.error('Error:', error);
```

### Network Inspector

- Open DevTools → Network tab
- Monitor API calls
- Check response data

## 🚀 Performance Tips

1. **Lazy Load Components**
   ```jsx
   const Chat = React.lazy(() => import('./pages/Chat'));
   ```

2. **Memoize Components**
   ```jsx
   export default memo(MyComponent);
   ```

3. **Use useCallback for Functions**
   ```jsx
   const handleClick = useCallback(() => { /* ... */ }, [dependencies]);
   ```

4. **Optimize Renders**
   - Avoid inline objects in JSX
   - Use keys in lists
   - Split large components

## 📖 Useful Resources

- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Zustand Docs](https://github.com/pmndrs/zustand)
- [Vite Docs](https://vitejs.dev)

## 🤝 Contributing

1. Follow code style guidelines
2. Write meaningful commit messages
3. Test before pushing
4. Update documentation
5. Request code review

## 📞 Support

For development help:
- Check existing issues
- Ask in Discord
- Create detailed bug reports

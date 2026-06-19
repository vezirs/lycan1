# Lycan - Deployment & Hosting Guide

## 🌐 Hosting Options

### Cloudflare Pages (Recommended)

**Advantages:**
- Free tier available
- Global CDN
- Auto-deploy from GitHub
- HTTP/3 support
- Edge Functions available

**Setup:**
1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy!

### Vercel

**Setup:**
```bash
npm i -g vercel
vercel
```

### Netlify

**Setup:**
```bash
npm i -g netlify-cli
netlify deploy
```

## 🔗 Custom Domains

Available domain extensions:
- `lycan.gg`
- `hubber.cc`
- `ageplay.lol`
- `fang.rip`
- `tip.cx`
- `764.lol`

## 🚀 Deployment Checklist

- [ ] Build test: `npm run build`
- [ ] Preview: `npm run preview`
- [ ] ESLint check: `npm run lint`
- [ ] Environment variables set
- [ ] Meta tags updated (Open Graph)
- [ ] Analytics configured
- [ ] SSL certificate active
- [ ] 404 page configured
- [ ] Redirects setup

## 📊 Performance Tips

- Enable gzip compression
- Use jsDelivr for CDN delivery
- Leverage browser caching
- Optimize images with Cloudflare
- Monitor Core Web Vitals
- Set proper cache headers

## 🔐 Security Headers

Add to Cloudflare/server:
```
Content-Security-Policy: default-src 'self' https:;
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## 📈 Analytics Setup

- Google Analytics
- Cloudflare Analytics
- Custom event tracking

## 🆘 Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port already in use
```bash
# Change port in vite.config.js
npm run dev -- --port 3000
```

### CSS not loading
- Check Tailwind config
- Verify postcss setup
- Clear browser cache

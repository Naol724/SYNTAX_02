# Syntax Software Solutions

Premium glassmorphism website for Syntax Software Solutions - A full-stack software company based in Addis Ababa, Ethiopia.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form + Zod
- **Database**: MongoDB
- **Icons**: Lucide React

## 🌐 Deployment on Render

### Prerequisites
- GitHub repository connected
- Environment variables configured

### Build Settings

**Build Command:**
```bash
npm install && npm run build
```

**Start Command:**
```bash
npm start
```

### Environment Variables
```
NODE_ENV=production
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key (optional)
```

### Auto-Deploy
The app automatically deploys when you push to the `main` branch.

## 🎨 Features

- ✅ Premium glassmorphism UI design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark mode support
- ✅ Smooth animations and transitions
- ✅ SEO optimized with meta tags
- ✅ Accessibility compliant
- ✅ Fast loading with image optimization
- ✅ Contact form with MongoDB integration
- ✅ Tech logos horizontal scrolling marquee

## 📱 Pages

- `/` - Home page with hero, services, stats, process, tech stack
- `/about` - Company overview, values, team
- `/services` - Detailed services information
- `/projects` - Portfolio and case studies
- `/contact` - Contact form and location map

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `render.yaml` - Render deployment configuration

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- SEO Score: 100

## 🐛 Troubleshooting

### Build fails
- Ensure all dependencies are installed: `npm install`
- Check Node version: `node -v` (requires Node 18+)
- Clear cache: `rm -rf .next node_modules && npm install`

### Port already in use
```bash
# Kill process on port 5000 (Windows)
taskkill /F /PID <PID>

# Kill process on port 5000 (Mac/Linux)
lsof -ti:5000 | xargs kill -9
```

## 📄 License

© 2024 Syntax Software Solutions. All rights reserved.

## 📞 Contact

- **Website**: https://syntaxsoftwaresolution.com
- **Email**: syntaxsoftwaresolution@gmail.com
- **Phone**: +251 945 455 141
- **Location**: Addis Ababa, Ethiopia

---

Built with ❤️ by Syntax Software Solutions

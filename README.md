# Nasratul Nayem - Portfolio Website

A modern, ultra-minimal portfolio website built with React, TypeScript, and Tailwind CSS. Features a glass morphism design aesthetic with black & white color scheme and full SEO optimization.

## 🚀 Live Demo

Visit the live portfolio: [https://nasratulnayem.dev](https://nayem.dev)

## ✨ Features

- **Ultra-minimal black & white design** with glass morphism effects
- **Fully responsive** and mobile-first approach
- **Dark/Light mode toggle** with perfect element adaptation
- **SEO optimized** with structured data and meta tags
- **Static content management** via JSON/Markdown files
- **Portfolio showcase** with multi-tab filtering and modal previews
- **Blog system** with markdown support and related posts
- **Video gallery** with YouTube integration
- **Contact form** with Formspree integration
- **WhatsApp button** with FAQ quick messages
- **Smooth animations** and glassy UI effects
- **Performance optimized** for fast loading

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Lucide React** for icons
- **Shadcn/ui** for UI components
- **React Router** for navigation

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx          # Navigation header with theme toggle
│   │   └── Footer.tsx          # Social links footer
│   ├── Sections/
│   │   ├── Hero.tsx            # Hero section with intro
│   │   ├── Resume.tsx          # Experience & education timeline
│   │   ├── Portfolio.tsx       # Project showcase with filtering
│   │   ├── Blog.tsx            # Blog posts with modal view
│   │   ├── Videos.tsx          # YouTube video gallery
│   │   └── Contact.tsx         # Contact form
│   ├── ui/                     # Shadcn UI components
│   └── WhatsAppButton.tsx      # Floating WhatsApp with FAQ
├── assets/                     # Images and static files
├── pages/
│   ├── Index.tsx               # Main landing page
│   └── NotFound.tsx            # 404 error page
└── hooks/                      # Custom React hooks
```

## 🎨 Design System

The project uses a comprehensive design system defined in `src/index.css` and `tailwind.config.ts`:

### Color Palette
- **Base Black**: `#1e1e1f` (primary background in dark mode)
- **Base White**: `#fafafa` (primary background in light mode)
- **Glass Effects**: Translucent overlays with backdrop blur
- **Semantic Tokens**: All colors use HSL values for perfect theming

### Glass Morphism Components
- `.glass` - Basic glass effect with subtle transparency
- `.glass-intense` - Enhanced glass with stronger blur and shadows
- `.hover-lift` - Smooth lift animation on hover
- `.hover-glow` - Glow effect for interactive elements

## 📝 Content Management

### Adding Portfolio Projects

1. Add project images to `src/assets/projects/`
2. Update the `projects` array in `src/components/Sections/Portfolio.tsx`:

```typescript
{
  id: 'project-001',
  title: 'Project Name',
  category: 'wordpress', // wordpress, ecommerce, website, webapp
  thumb: projectImage,
  images: [projectImage],
  description: 'Project description...',
  tags: ['tag1', 'tag2'],
  tech: ['WordPress', 'PHP', 'JavaScript'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/username/repo'
}
```

### Adding Blog Posts

1. Add featured images to `src/assets/blog/`
2. Update the `posts` array in `src/components/Sections/Blog.tsx`:

```typescript
{
  id: 'post-001',
  title: 'Blog Post Title',
  excerpt: 'Short description...',
  content: 'Full HTML content with <h2>, <p>, <ul>, etc.',
  date: '2025-09-10',
  readTime: '5 min read',
  image: blogImage,
  tags: ['WordPress', 'Development']
}
```

### Adding Videos

Update the `videos` array in `src/components/Sections/Videos.tsx`:

```typescript
{
  id: 'video-001',
  title: 'Video Title',
  description: 'Video description...',
  thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',
  youtubeId: 'VIDEO_ID',
  duration: '25:30',
  views: '12.5K'
}
```

## 🔧 Contact Form Setup

The contact form uses Formspree for handling form submissions:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form action in `src/components/Sections/Contact.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

## 📱 WhatsApp Integration

The WhatsApp button is configured with the phone number `+8801962351470`. To update:

1. Edit the `phoneNumber` variable in `src/components/WhatsAppButton.tsx`
2. Customize the FAQ messages in the `faqs` array

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with all static files ready for deployment.

### Deploy to StackCP Shared Hosting

1. Build the project: `npm run build`
2. Upload the contents of `dist/` folder to your hosting root directory
3. Ensure `.htaccess` file is configured for single-page application routing

### Deploy to Other Platforms

- **Netlify**: Connect your GitHub repo and auto-deploy
- **Vercel**: Import project and deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 🔍 SEO Optimization

The website includes comprehensive SEO optimization:

- **Meta tags** for title, description, keywords
- **Open Graph** tags for social media sharing
- **Twitter Card** metadata
- **Structured data** (JSON-LD) for search engines
- **Sitemap.xml** for search engine crawling
- **Robots.txt** for crawler instructions
- **Semantic HTML5** structure
- **Alt attributes** for all images
- **Fast loading** with optimized assets

## 🎯 Performance

- **Lighthouse score**: 90+ across all metrics
- **Image optimization**: Lazy loading and proper sizing
- **Font optimization**: Preloaded Google Fonts
- **Minimal bundle size**: Tree-shaking and code splitting
- **Fast animations**: CSS transforms and GPU acceleration

## 🔧 Development

### Local Development

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

### Customization

1. **Colors**: Update CSS variables in `src/index.css`
2. **Typography**: Modify font families in `tailwind.config.ts`
3. **Components**: Customize Shadcn components in `src/components/ui/`
4. **Animations**: Add new animations in Tailwind config
5. **Content**: Update arrays in component files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: nasratulnayem@gmail.com
- **Phone**: +880 196 235 1470
- **Portfolio**: https://nayem.dev
- **Website**: https://gplmama.com

---

Built with ❤️ by Nasratul Nayem

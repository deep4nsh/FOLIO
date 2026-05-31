# Deepansh Gupta - Flutter Developer Portfolio

A modern, production-ready portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Showcasing Flutter and Android development projects with a comprehensive blog and testimonials section.

## 🎨 Features

### Core Features
- ✨ **Modern Design** - Clean, professional, and responsive UI
- 🎬 **Smooth Animations** - Framer Motion for engaging interactions
- 🌓 **Dark/Light Theme** - Theme toggle with next-themes
- 📱 **Mobile First** - Fully responsive design
- 🚀 **Performance Optimized** - Fast loading and excellent SEO
- 📝 **Blog System** - Markdown-based blog with categorization and filtering
- 🎯 **Project Showcase** - Detailed project pages with metrics and learnings
- 💬 **Testimonials** - Carousel of client and colleague reviews
- 📧 **Contact Form** - Integrated contact system
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured data

### Sections
1. **Hero** - Eye-catching introduction with call-to-action
2. **Skills** - Technical expertise with proficiency meters
3. **Featured Projects** - Showcase of top 3 projects
4. **Projects Page** - Full project catalog with filtering
5. **Project Details** - Individual project pages with metrics
6. **Blog** - Technical articles and case studies
7. **Testimonials** - Carousel of feedback
8. **Contact** - Contact form with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: lucide-react
- **Language**: TypeScript
- **Deployment**: Vercel or GitHub Pages

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/deep4nsh/FOLIO.git
   cd FOLIO-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
FOLIO-next/
├── app/
│   ├── page.tsx                 # Home page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [id]/page.tsx       # Blog post detail
│   ├── projects/
│   │   ├── page.tsx            # Projects listing
│   │   └── [id]/page.tsx       # Project detail
│   ├── layout.tsx              # Root layout
│   └── api/                    # API routes (if needed)
├── components/
│   ├── sections/
│   │   ├── navbar.tsx          # Navigation bar
│   │   ├── footer.tsx          # Footer
│   │   ├── hero.tsx            # Hero section
│   │   ├── skills.tsx          # Skills section
│   │   ├── featured-projects.tsx
│   │   ├── testimonials.tsx
│   │   └── contact.tsx
│   └── ui/
│       └── theme-provider.tsx
├── lib/
│   └── data/
│       ├── projects.ts         # Projects data
│       ├── blog.ts             # Blog posts data
│       └── testimonials.ts     # Testimonials data
├── styles/
│   └── globals.css            # Global styles
├── public/                     # Static assets
└── package.json
```

## 🎯 Key Files to Customize

### 1. **lib/data/projects.ts**
Update with your actual projects:
```typescript
export const projects: Project[] = [
  {
    id: 'your-project',
    title: 'Your Project Title',
    description: '...',
    // ... other fields
  }
]
```

### 2. **lib/data/blog.ts**
Add your blog posts:
```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 'post-id',
    title: 'Your Article',
    content: '...',
    // ... other fields
  }
]
```

### 3. **lib/data/testimonials.ts**
Update testimonials:
```typescript
export const testimonials: Testimonial[] = [
  {
    name: 'Client Name',
    content: '...',
    // ... other fields
  }
]
```

### 4. **components/sections/hero.tsx**
Update hero section content with your info

### 5. **components/sections/contact.tsx**
Update email and social links

## 🚀 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Pages
Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/FOLIO',
}
```

Then:
```bash
npm run build
```

Push to GitHub and enable Pages in repository settings.

### Option 3: Other Platforms
Works on any platform that supports Next.js:
- Netlify
- Railway
- Render
- Self-hosted server

## 📝 Content Management

### Adding a New Project
1. Add project to `lib/data/projects.ts`
2. Include all required fields (image, technologies, metrics, etc.)
3. Project will automatically appear on projects page

### Adding a Blog Post
1. Add post to `lib/data/blog.ts`
2. Write content in markdown format
3. Post will automatically appear on blog page with categorization

### Updating Skills
Edit `components/sections/skills.tsx` to update skill categories and proficiency

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change color scheme:
```typescript
colors: {
  primary: { /* Your primary colors */ },
  secondary: { /* Your secondary colors */ },
}
```

### Fonts
Modify `styles/globals.css` to use different font families

### Animations
Adjust animation settings in `tailwind.config.ts` or component-level in Framer Motion props

## 📊 SEO Optimization

- Metadata configured in `app/layout.tsx`
- Open Graph tags for social sharing
- Structured data support
- Dynamic meta tags for blog posts and projects
- Sitemap-ready structure

## ⚡ Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized animations using GPU acceleration
- Minimal JavaScript bundle size
- Fast cold start time

## 🔒 Privacy & Security

- No external analytics by default
- No cookies unless explicitly added
- Clean form submission (customize backend)
- HTTPS recommended for deployment

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio for your own projects!

## 📄 License

MIT License - feel free to use this template for your portfolio

## 🆘 Troubleshooting

### Development server won't start
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Styling issues
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run dev`

### Blog posts not showing
- Check `lib/data/blog.ts` format
- Ensure all required fields are present
- Verify blog page filtering logic

## 📞 Support

For issues or questions:
1. Check the code comments
2. Review Next.js documentation
3. Explore Tailwind CSS docs
4. See Framer Motion examples

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

**Built with ❤️ by Deepansh Gupta**

Last Updated: May 2024

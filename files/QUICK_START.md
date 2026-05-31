# 🚀 Quick Start Guide - FOLIO Portfolio

Get your new portfolio up and running in 5 minutes!

---

## Step 1: Initial Setup (2 min)

### Option A: Using npm
```bash
cd FOLIO-next
npm install
npm run dev
```

### Option B: Using yarn
```bash
cd FOLIO-next
yarn install
yarn dev
```

**✅ Done!** Visit `http://localhost:3000` in your browser.

---

## Step 2: Customize Your Content (5-10 min)

### Update Your Projects
Edit: `lib/data/projects.ts`

```typescript
export const projects: Project[] = [
  {
    id: 'your-project-id',
    title: 'Your Project Name',
    description: 'Brief description',
    longDescription: 'Detailed description',
    image: 'https://image-url.com/image.jpg',
    technologies: ['Flutter', 'Firebase'],
    // ... other fields
  }
]
```

### Update Your Blog Posts
Edit: `lib/data/blog.ts`

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 'your-post-id',
    title: 'Your Article Title',
    excerpt: 'Brief excerpt',
    content: `# Your Article\n\nContent here...`,
    // ... other fields
  }
]
```

### Update Testimonials
Edit: `lib/data/testimonials.ts`

```typescript
export const testimonials: Testimonial[] = [
  {
    name: 'Person Name',
    role: 'Their Role',
    company: 'Company Name',
    content: 'Their feedback about you',
    // ... other fields
  }
]
```

### Update Hero Text
Edit: `components/sections/hero.tsx`

Look for the main heading and description - update with your text.

### Update Contact Info
Edit: `components/sections/contact.tsx`

```typescript
const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:your-email@example.com',
    // ...
  },
  // Update GitHub, LinkedIn, Twitter links
]
```

---

## Step 3: Test Locally

### Check All Pages
- [ ] Homepage `/`
- [ ] Projects page `/projects`
- [ ] Blog page `/blog`
- [ ] Click on individual projects
- [ ] Click on individual blog posts
- [ ] Test contact form
- [ ] Toggle dark/light theme
- [ ] Test mobile view (F12 → responsive)

### Test Functionality
- [ ] Navigation works
- [ ] Links don't return 404
- [ ] Images load
- [ ] Animations smooth
- [ ] Forms working
- [ ] Social links open correctly

---

## Step 4: Deploy (Choose One)

### Option A: Vercel (Easiest - 1 min)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live in seconds!

### Option B: GitHub Pages (3-5 min)
1. Push code to GitHub
2. Update `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/FOLIO',
   }
   ```
3. Run: `npm run build`
4. Go to GitHub → Settings → Pages
5. Select `main` branch and `/root` folder
6. Wait 1-2 minutes for deployment

### Option C: Netlify (2 min)
1. Connect your GitHub
2. Choose `FOLIO-next` folder as publish directory
3. Set build command: `npm run build`
4. Deploy!

---

## Step 5: Share Your Portfolio

### Tell People About It
- Update resume/CV with portfolio link
- Add to LinkedIn profile
- Share on Twitter/X
- Send to recruiters
- Add to GitHub profile

### Example LinkedIn Post
```
Excited to share my updated portfolio! 🎉

Built with Next.js, Tailwind CSS, and Framer Motion.
Featuring my latest projects, technical blog, and more.

Check it out: [your-portfolio-url]
```

---

## ⚡ Common Customizations

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#your-color', // Change the primary color
  }
}
```

### Change Font
Edit `styles/globals.css`:
```css
/* Add your font import */
@import url('https://fonts.googleapis.com/css2?family=Your+Font');

/* Use in body */
body {
  font-family: 'Your Font', sans-serif;
}
```

### Add Navigation Links
Edit `components/sections/navbar.tsx`:
```typescript
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'New Link', href: '/new-page' }, // Add here
  // ...
]
```

### Update Footer
Edit `components/sections/footer.tsx` - update links, add new sections

---

## 🐛 Troubleshooting

### Port 3000 Already in Use?
```bash
npm run dev -- -p 3001
# Use port 3001 instead
```

### Dependencies Not Installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Loading?
```bash
rm -rf .next
npm run dev
```

### Blog Post Not Showing?
- Check `lib/data/blog.ts` format
- Make sure `id` is unique
- Verify all required fields present

### Project Not Showing?
- Check `lib/data/projects.ts` format
- Ensure image URL is valid
- Verify `id` is unique

---

## 📚 File Guide

**Must Edit:**
- `lib/data/projects.ts` - Your projects
- `lib/data/blog.ts` - Your blog posts
- `lib/data/testimonials.ts` - Testimonials
- `components/sections/hero.tsx` - Hero text
- `components/sections/contact.tsx` - Contact info

**Nice to Edit:**
- `tailwind.config.ts` - Colors
- `styles/globals.css` - Fonts
- `components/sections/skills.tsx` - Your skills
- `next.config.js` - Site config

**Don't Touch (Usually):**
- `app/layout.tsx` - Root layout
- `components/ui/*` - Core components
- `tsconfig.json` - TypeScript
- `package.json` - Dependencies

---

## ✅ Deployment Checklist

Before deploying:
- [ ] All projects updated
- [ ] All blog posts added
- [ ] Testimonials updated
- [ ] Contact info correct
- [ ] Social links working
- [ ] No 404s on pages
- [ ] Mobile looks good
- [ ] Images load properly
- [ ] Forms work
- [ ] Tested in multiple browsers

---

## 🎯 What's Next?

### Short Term
1. Customize content
2. Deploy to production
3. Share with recruiters
4. Monitor analytics (optional)

### Medium Term
1. Add more blog posts
2. Add more projects
3. Gather testimonials
4. A/B test design

### Long Term
1. Add comments to blog
2. Add newsletter signup
3. Add guestbook/interactions
4. Monitor with analytics

---

## 💡 Pro Tips

1. **Optimize Images** - Use compressed images for faster loading
2. **Fresh Content** - Update blog regularly for SEO
3. **Project Metrics** - Include real numbers for credibility
4. **Real Testimonials** - Reach out to past clients/colleagues
5. **Mobile First** - Always test on mobile before deploying
6. **SEO** - Update meta descriptions for better rankings
7. **Analytics** - Add Google Analytics to track visitors
8. **Networking** - Share blog posts on social media

---

## 📞 Getting Help

### Check These First
1. README.md in FOLIO-next folder
2. Code comments in files
3. Component documentation

### Online Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/introduction/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🎉 You're Done!

Your professional portfolio is ready! 

**Next:** Customize it, deploy it, and share it with the world. 🚀

Questions? Check the README.md or code comments!

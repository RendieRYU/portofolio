# 🌟 Personal Portfolio Website

A modern, responsive personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This portfolio showcases professional experience, skills, projects, and provides an easy way for potential clients or employers to get in touch.

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional, and visually appealing interface
- Dark/Light mode support with system preference detection
- Smooth animations and transitions
- Mobile-first responsive design

### 📱 **Fully Responsive**
- Optimized for all device sizes (mobile, tablet, desktop)
- Touch-friendly navigation on mobile devices
- Responsive images and typography

### 🚀 **Performance Optimized**
- Built with Next.js 15 for optimal performance
- Server-side rendering (SSR) and static generation
- Optimized images and assets
- Fast loading times

### 🎯 **Interactive Sections**
- **Hero Section**: Dynamic typing animation with role rotation
- **About**: Professional experience timeline and statistics
- **Skills**: Animated progress bars and skill categories
- **Projects**: Filterable project showcase with live demos
- **Contact**: Working contact form with validation

### 🔧 **Technical Features**
- TypeScript for type safety
- Smooth scrolling navigation
- Form validation and submission
- SEO optimized with meta tags
- Accessible design following WCAG guidelines

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Custom SVG icons
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📝 Customization

### Personal Information
Update the following files with your personal information:

1. **Components content**: Edit the content in each component file:
   - `app/components/Hero.tsx` - Name, roles, and introduction
   - `app/components/About.tsx` - About text and experience
   - `app/components/Skills.tsx` - Skills and certifications
   - `app/components/Projects.tsx` - Your projects
   - `app/components/Contact.tsx` - Contact information

2. **Metadata**: Update SEO information in `app/layout.tsx`

3. **Colors**: Customize the color scheme in `app/globals.css` and Tailwind classes

### Adding Projects
Edit `app/components/Projects.tsx` and add your projects to the `projects` array:

```typescript
{
  id: 1,
  title: "Your Project Name",
  category: "Web App", // or "Mobile App", "UI/UX Design"
  description: "Project description",
  technologies: ["React", "Next.js", "TypeScript"],
  liveDemo: "https://your-demo-link.com",
  sourceCode: "https://github.com/your-repo",
  featured: true // or false
}
```

### Updating Skills
Modify the skills in `app/components/Skills.tsx`:

```typescript
{
  title: 'Category Name',
  icon: '🎨',
  skills: [
    { name: 'Skill Name', level: 90 }, // level: 0-100
  ]
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design Features

- **Typography**: Clean, readable fonts with proper hierarchy
- **Color Scheme**: Professional blue and purple gradient theme
- **Animations**: Subtle hover effects and smooth transitions
- **Icons**: Consistent icon style throughout the website
- **Images**: Optimized and responsive image handling

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Fully optimized meta tags and structured data

## 🔧 Build and Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── [static assets]
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for seamless deployment

## 📞 Contact

**John Doe** - [@johndoe](https://twitter.com/johndoe) - hello@johndoe.dev

Project Link: [https://github.com/johndoe/portfolio](https://github.com/johndoe/portfolio)

---

⭐ **Star this repository if you found it helpful!**

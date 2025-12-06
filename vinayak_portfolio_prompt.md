# Portfolio Website Build Prompt for Vinayak Agrawal

## ⚠️ CRITICAL INSTRUCTIONS FOR THE AI AGENT

**READ THIS CAREFULLY BEFORE PROCEEDING:**

1. **Take Your Time**: Do not rush. Think through each decision carefully.
2. **Double-Check Everything**: Before writing any code, verify that it aligns with the specifications below.
3. **Rethink Decisions**: If something feels off or overcomplicated, reconsider your approach.
4. **Write Readable Code**: Code must be clean, well-commented, and easy to maintain.
5. **Keep It Simple**: Use the simplest solution that works. Avoid unnecessary complexity.
6. **Structured Problem-Solving**: Fix issues at their root cause, not with patches or band-aids.
7. **Cohesive Output**: Every component must work together seamlessly. Test integrations.
8. **Smooth & Responsive**: The website must feel fluid on all devices (mobile, tablet, desktop).

---

## Project Overview

Build a **minimalist, bold, editorial-style developer portfolio** for Vinayak Agrawal, a software developer and AI/ML enthusiast. The design is inspired by high-end graphic design portfolios (Namya's work, Behance editorial layouts) but adapted for a technical portfolio. The aesthetic is **grainy, spacious, typographically driven**, with rare pops of orange accent color.

---

## Technical Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS (customized with grainy texture, minimal color palette)
- **Animations**: Framer Motion (subtle, performance-optimized)
- **Icons**: Lucide React
- **Typography**: 
  - **Display/Headings**: Space Grotesk (Bold/ExtraBold) - closest free alternative to Monument Extended
  - **Body Text**: Inter (Regular/Medium) - closest free alternative to PP Neue Montreal
  - Preload critical fonts to avoid layout shifts

### Performance & Best Practices
- Server-side rendering (SSR) where appropriate
- Image optimization with Next.js Image component (lazy loading by default)
- SEO meta tags and Open Graph for all pages
- Lighthouse score target: 90+ on all metrics
- Fast first paint and optimal Core Web Vitals

### Deployment
- Platform: Vercel (optimized for Next.js)
- Domain: Will be configured later

---

## Personal Information

- **Name**: Vinayak Agrawal
- **Title**: Software Developer
- **Tagline**: "I like making things work"
- **Location**: Bangalore, India
- **Status**: Student pursuing B.Tech
- **Email**: vinayakagrawalw@gmail.com
- **X/Twitter**: https://x.com/agrawalvinayak7
- **GitHub Profile**: https://github.com/agrawalvinayak7
- **Resume Filename**: `Vinayak_Agrawal_Resume.pdf`

---

## Design System

### Color Palette (Minimal & Bold)
```
Primary Background: #FFFFFF (White)
Secondary Background: #000000 (Black - for dark mode)
Text Primary: #000000 (Black on light) / #FFFFFF (White on dark)
Text Secondary: #989787 (Gray - subtle)
Accent/Hover: #FF3503 (Orange/Red - use SPARINGLY)
Neutral Dark: #252121 (Charcoal)
```

**Color Usage Rules:**
- The site should be **predominantly black and white**
- Orange (#FF3503) should appear ONLY in:
  - Hover states on project cards
  - Active navigation links
  - Call-to-action button hover states
  - Very subtle accents (small underlines, dots)
- **Do NOT use orange for large elements like backgrounds or full headings**

### Typography Scale
```
Hero Name: 5rem (80px) on desktop, 2.5rem (40px) on mobile - Space Grotesk ExtraBold
Hero Title: 1.5rem (24px) - Inter Regular
Section Headings: 3rem (48px) - Space Grotesk Bold
Project Titles: 2rem (32px) - Space Grotesk Bold
Body Text: 1rem (16px) - Inter Regular
Small Text: 0.875rem (14px) - Inter Regular
```

### Spacing & Layout
- **Desktop**: Max width 1280px, generous whitespace (padding 80-120px vertical sections)
- **Tablet**: Max width 768px, reduce padding to 60px
- **Mobile**: Full width with 24px horizontal padding, 40px vertical sections
- Use **lots of breathing room** - don't cram content
- Sections should feel spacious and editorial

### Visual Effects

#### Grainy Texture (Hero Section Only)
- Apply a **subtle film grain/noise overlay** to the hero section
- Opacity: 3-5% (very subtle, not distracting)
- Implementation: CSS `background-image` with a repeating noise pattern or SVG filter
- Should work in both light and dark modes
- **Do not apply grain to other sections** - keep it exclusive to hero

#### Dark Mode
- Implement a toggle in the navigation (moon/sun icon)
- Persist preference in localStorage
- Smooth color transitions (300ms ease)
- Ensure grain effect works in dark mode (inverted if needed)

---

## Site Structure & Navigation

### Pages
1. **Home** (`/`) - Main landing with all sections
2. **About** - Separate section on homepage (anchor link)
3. **Projects** - Section on homepage with cards
4. **Individual Project Pages**:
   - `/projects/multimodal-sentiment-analysis`
   - `/projects/viral-post`
5. **Contact** - Section on homepage (anchor link)

### Navigation Bar
- **Style**: Simple top navigation bar
- **Behavior**: 
  - Fixed position at top
  - **Disappears on scroll down** (smooth slide-up animation)
  - **Reappears on scroll up** (smooth slide-down animation)
- **Contents** (Left-aligned):
  - Logo/Name: "VA" or "Vinayak Agrawal" (clickable, goes to top)
- **Contents** (Right-aligned):
  - Links: About | Projects | Blog | Contact
  - Dark mode toggle icon
  - Resume button: "View CV" (opens PDF in new tab)
- **Mobile**: Hamburger menu (no full-screen overlay, just a clean slide-in menu)

---

## Homepage Layout & Sections

### 1. Hero Section (Full Viewport - 80vh)

**Layout**: Left-aligned, NOT centered

**Content Structure**:
```
VINAYAK AGRAWAL
    ↓ (slightly smaller)
Software Developer
    ↓ (animated typing effect)
I like making things work
    ↓ (subtle scroll indicator)
[Scroll to explore ↓]
```

**Visual Details**:
- Name: Very large (80px), bold, black text (white in dark mode)
- Title: Medium size (24px), regular weight
- Tagline: Animated typing effect (smooth, not jarring) - fade in character by character over 2 seconds
- Background: **White with grainy texture overlay** (light mode), **Black with grainy texture** (dark mode)
- Minimal animation on load: Fade in from bottom (500ms delay between elements)
- Scroll indicator: Small text with animated down arrow icon (bounces subtly)
- **No background gradients, patterns, or illustrations** - keep it clean

**Technical**:
- Use Framer Motion for typing effect and scroll animations
- Grain texture: CSS `::before` pseudo-element with noise SVG or pattern
- Scroll indicator should use smooth scroll to projects section

---

### 2. Skills Section

**Section Title**: "Skills & Technologies" (left-aligned, 48px, Space Grotesk Bold)

**Layout**: Simple tag cloud / grid layout

**Categories** (each with a subheading):

**Programming Languages**
- TypeScript
- JavaScript  
- Python
- C++

**Frontend & Frameworks**
- React
- Next.js

**Backend & APIs**
- Node.js
- REST APIs
- Python Backend (uvicorn, FastAPI)

**AI/ML & Generative AI**
- AWS (Model hosting & inference)
- Sentiment Analysis Systems
- Large Language Models (LLMs)
- Hugging Face (Flux1, Pixtral)

**Databases**
- PostgreSQL
- SQLite
- Supabase

**Cloud & DevOps**
- Vercel
- AWS
- Git & GitHub
- Turborepo

**Tools & Libraries**
- Tailwind CSS
- Prisma ORM
- Zod (Environment validation)
- FFmpeg & OpenCV

**Display Style**:
- Each skill as a simple rounded tag/pill
- Background: Light gray (#F5F5F5) in light mode, Dark gray (#1A1A1A) in dark mode
- Text: Black/white
- Hover effect: Slight scale (1.05) and orange border
- Grid layout: 3-4 columns on desktop, 2 columns on tablet, 1-2 on mobile
- Organized by category with subtle section dividers

---

### 3. Projects Section

**Section Title**: "Selected Work" or "Projects" (left-aligned, 48px)

**Layout**: Option A - Full-screen scrolling projects (one after another)

Each project should be a **full-width section** that takes up most of the viewport.

**Project Card Structure** (for each):

```
[Left Side - 50%]
    01  ← Project Number (orange, small, top-left)
    Project Name (Large, 32px, Space Grotesk Bold)
    Brief Description (16px, Inter Regular, gray)
    
    Tech Stack Tags (small pills)
    
    [View Project →] button (orange text, hover: orange background)

[Right Side - 50%]
    Project Thumbnail (Square aspect ratio)
    - Initially grayscale
    - On hover: color + scale 1.05 + subtle orange glow/border
    - Smooth transition (400ms ease)
```

**Projects to Include**:

#### **Project 01: Multimodal Sentiment Analysis**

**Short Description**: 
"Built a production-grade AI system from scratch that quantifies emotions from short video content using multimodal analysis."

**Long Description** (for project page):
"An end-to-end sentiment analysis platform that processes video, audio, and text simultaneously. The system breaks videos into utterances, analyzes each with deep learning models, and provides granular emotional insights through a modern dashboard."

**Key Features**:
- Multimodal AI: Analyzes Video, Audio, and Text simultaneously for higher accuracy
- Granular Analysis: Breaks down videos into specific utterances (sentences) and analyzes each one
- 7 Emotion Classes: Detects Anger, Disgust, Fear, Joy, Neutral, Sadness, and Surprise
- Sentiment Detection: Classifies content as Positive, Neutral, or Negative
- Developer API: Provides a secure API with quota management for developers
- Modern Dashboard: A clean Next.js interface to upload videos and view detailed results

**Tech Stack**:
Frontend: Next.js (App Router), Tailwind CSS, NextAuth.js, TypeScript
Backend: PyTorch, OpenAI Whisper, AWS SageMaker, AWS S3
Database: PostgreSQL (via Prisma ORM)
Video Processing: FFmpeg, OpenCV

**Metrics**: Trained on 10k samples

**Links**:
- GitHub: https://github.com/agrawalvinayak7/Multimodel.git
- Demo: Demo video/screenshots available

**Status**: Completed (2025)

---

#### **Project 02: Viral Post**

**Short Description**:
"Schedule your X/LinkedIn posts and let AI grow your account without manual intervention."

**Long Description** (for project page):
"An AI-powered social media automation platform (currently in development) that schedules posts and uses AI to optimize content for engagement. The system analyzes trends, suggests improvements, and manages posting schedules automatically."

**Tech Stack**: 
Next.js, OpenAI API, Python Backend (details TBD as project is ongoing)

**Status**: Ongoing (In Development)

**Links**: Coming soon

**Note**: Keep this project card minimal since it's ongoing. Show "In Development" badge.

---

**Project Interaction**:
- Clicking a project card navigates to its dedicated page (`/projects/[slug]`)
- Hover state: Scale up slightly (1.05), grayscale → color, orange glow border
- Smooth page transition (fade out → fade in, 300ms)

---

### 4. About Section

**Section Title**: "About Me" (left-aligned, 48px)

**Layout**: Two-column on desktop, single column on mobile

**Left Column (40%)**:
- **Profile Illustration**:
  - **IMPORTANT**: I will provide a photo of myself
  - **USE NANO-BANANA PRO to generate an illustration from the photo**
  - The illustration should be **minimalist, abstract, and blend seamlessly with the background**
  - Style: Line art, minimal color, or monochromatic with orange accent
  - Background: Should fade into the page background (no hard borders)
  - Aspect ratio: Square or portrait
  - Size: 300x300px - 400x400px

**Right Column (60%)**:

**Bio Text** (use this exact content):

"I started coding during my B.Tech journey, initially driven by curiosity and a desire to understand how real-world products actually work behind the scenes. What began with basic programming quickly evolved into building full-stack applications, experimenting with AI systems, and thinking deeply about how software decisions translate into real user impact.

I'm currently pursuing **B.Tech**, and alongside my coursework, I spend most of my time building, breaking, and rebuilding systems — web apps, AI pipelines, and backend services — until they make sense not just syntactically, but architecturally.

I'm driven by problems where **logic meets scale**: systems that must be reliable, explainable, and actually useful. I'm especially excited by problems involving **AI integration in real products**, where the challenge isn't just model accuracy, but orchestration, reliability, deployment, and user experience.

Right now, my primary focus is on **AI-powered application development** and **full-stack engineering**. I'm deeply interested in:
- Building end-to-end AI systems (from data ingestion to model inference to frontend delivery)
- Designing scalable, production-ready web applications using modern frameworks

My long-term interests sit at the intersection of **AI/ML, full-stack systems, and applied problem-solving** — where engineering decisions matter more than demos, and clarity matters more than cleverness."

**Target Roles**: Full-Stack Developer, SDE, ML Engineer  
**Interested In**: Startups and AI-focused companies

**Styling**:
- Use Inter Regular, 16px, line-height 1.8 (very readable)
- Bold keywords: B.Tech, logic meets scale, AI integration, AI-powered application development, full-stack engineering
- Paragraph spacing: 24px between paragraphs

---

### 5. Blog Section (Future - Placeholder)

**Section Title**: "Writing" or "Blog" (left-aligned, 48px)

**Content**: 
"Coming soon. I occasionally write about engineering, AI systems, and lessons learned while building."

**Styling**: Minimal placeholder section with subtle gray text

**Future Structure** (for reference):
- 3 latest blog posts in a grid
- Each card: Title, excerpt, date, read time, "Read More →" link

---

### 6. Contact Section

**Section Title**: "Let's Connect" (left-aligned, 48px)

**Content**:
"I'm currently open to full-stack development, SDE, and ML engineering opportunities, especially at startups and AI-focused companies."

**Contact Methods**:
- **Email**: vinayakagrawalw@gmail.com (mailto: link with icon)
- **X/Twitter**: @agrawalvinayak7 (link opens in new tab)
- **GitHub**: github.com/agrawalvinayak7 (link opens in new tab)

**Layout**:
- Simple, clean layout
- Large, clickable email address (primary CTA)
- Social links below with icons (Lucide React icons: Mail, Twitter, Github)
- Hover state on links: orange color transition

**NO contact form** - just direct links

---

### 7. Footer

**Layout**: Full-width, centered

**Content**:
- Left: "© 2024 Vinayak Agrawal"
- Center: Social links (small icons)
- Right: "Back to top ↑" button (smooth scroll to top)

**Styling**:
- Background: Light gray (#F5F5F5) in light mode, Dark gray (#1A1A1A) in dark mode
- Text: Small (14px), Inter Regular
- Padding: 40px vertical
- Border-top: 1px solid light gray

**Back to Top Button**:
- Appears only when user has scrolled past hero section
- Smooth scroll animation (500ms ease)
- Hover: Orange text color

---

## Individual Project Pages

### URL Structure
- `/projects/multimodal-sentiment-analysis`
- `/projects/viral-post`

### Page Layout

**Hero Section** (for each project):
```
← Back to Projects (top-left, breadcrumb)

[Project Number - e.g., "01"]
[Project Name - Large, 48px]
[Status Badge - e.g., "Completed 2025" or "In Development"]

[Brief tagline/description - 24px, centered below]

[Large Project Image/Screenshot - Full-width, high-quality]
```

**Content Sections** (in order):

1. **Overview**
   - What the project does (2-3 paragraphs)
   - Problem statement
   - Solution approach

2. **Key Features**
   - Bullet points or cards
   - Each feature with a brief explanation

3. **Tech Stack**
   - Display as organized tags/pills
   - Grouped by category (Frontend, Backend, AI/ML, etc.)

4. **Metrics & Impact** (if applicable)
   - "Trained on 10k samples"
   - Any performance metrics
   - User count, engagement, etc.

5. **Screenshots/Demo**
   - Gallery of screenshots (grid layout)
   - Or embedded demo video
   - Captions for each image

6. **Challenges & Learnings**
   - What was difficult?
   - What did you learn?
   - Technical decisions made

7. **Links**
   - GitHub repository (if available)
   - Live demo (if available)
   - Large, prominent CTA buttons

**Navigation**:
- At bottom: "← Previous Project" and "Next Project →" buttons
- Or "Back to All Projects" button

---

## Animations & Interactions

### Page Load
- Fade in animation (500ms ease-in)
- Stagger elements slightly (100ms delay between each)

### Page Transitions
- Fade out current page (300ms)
- Fade in new page (300ms)
- Use Framer Motion `AnimatePresence`

### Scroll Animations
- **Parallax scrolling on hero section** (subtle, not distracting)
  - Background moves slower than foreground (0.5x speed)
  - Only on desktop, disable on mobile for performance
- Fade in elements as they enter viewport (Intersection Observer)
- Smooth reveal for project cards

### Hover Effects

**Project Cards**:
- Scale: 1.0 → 1.05 (300ms ease)
- Filter: grayscale(100%) → grayscale(0%)
- Border: 0px → 2px solid #FF3503 (orange glow)
- Cursor: pointer

**Navigation Links**:
- Underline animation (slide in from left, 200ms)
- Color: Black → Orange

**Buttons (CTAs)**:
- Background: transparent → #FF3503
- Text color: Black → White
- Scale: 1.0 → 1.02
- Transition: 300ms ease

**Skill Tags**:
- Scale: 1.0 → 1.05
- Border: 1px gray → 2px orange

### Loading States
- **Initial page load**: Simple loading spinner (centered, black/white)
- **Between page transitions**: Fade transition (no spinner)
- **Project image loading**: Skeleton loader (gray pulse animation)

### Micro-interactions
- Smooth scroll behavior for anchor links (CSS: `scroll-behavior: smooth`)
- Scroll indicator bounce animation in hero (subtle, 2s infinite)
- Dark mode toggle: Smooth color transitions (300ms) for all elements

---

## Responsive Design

### Breakpoints
```
Mobile: 0 - 640px
Tablet: 641px - 1024px
Desktop: 1025px+
```

### Mobile Optimizations (< 640px)
- Hero name: 40px (from 80px)
- Section headings: 32px (from 48px)
- Project cards: Single column, full-width
- Skills: 1-2 columns (from 3-4)
- About section: Single column (image on top, text below)
- Navigation: Hamburger menu
- Reduce padding: 24px horizontal, 40px vertical
- **Disable parallax scrolling** (performance)
- Grainy texture: Lower opacity (2% instead of 5%)

### Tablet Optimizations (641px - 1024px)
- Hero name: 56px
- Section headings: 40px
- Project cards: 2 columns (if grid layout)
- Skills: 2-3 columns
- About section: Can stay two-column or stack depending on width
- Reduce padding: 40px horizontal, 60px vertical

### Touch Interactions (Mobile/Tablet)
- No hover effects (they don't work on touch)
- Increase button/link tap targets to minimum 44x44px
- Add active states (`:active`) instead of hover
- Smooth scrolling momentum

---

## Performance Requirements

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimization Techniques
1. **Images**:
   - Use Next.js `<Image>` component
   - Lazy load all images except hero
   - Serve WebP format with fallbacks
   - Responsive sizes (srcset)
   
2. **Fonts**:
   - Preload Space Grotesk and Inter
   - Use `font-display: swap`
   - Subset fonts (only Latin characters if possible)

3. **Code Splitting**:
   - Dynamic imports for heavy components (if any)
   - Route-based code splitting (automatic with Next.js)

4. **CSS**:
   - Use Tailwind's JIT mode
   - Purge unused styles
   - Critical CSS inlined

5. **JavaScript**:
   - Minimize bundle size
   - Remove unused dependencies
   - Use React Server Components where possible

6. **Animations**:
   - Use CSS transforms and opacity (GPU-accelerated)
   - Avoid animating layout properties (width, height, top, left)
   - Use `will-change` sparingly

---

## Accessibility (WCAG 2.1 AA)

### Requirements
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
  - Check black text on white background: ✓ Pass
  - Check orange (#FF3503) on white: Verify contrast ratio
  - Check white text on orange background: Verify contrast ratio
- **Keyboard Navigation**: 
  - All interactive elements accessible via Tab key
  - Visible focus states (orange outline)
  - Skip to main content link
- **Screen Readers**:
  - Semantic HTML (nav, main, section, article, footer)
  - Alt text for all images (project screenshots, profile photo)
  - ARIA labels for icons (e.g., "Open navigation menu")
- **Heading Hierarchy**: Proper h1 → h6 structure (no skipping levels)
- **Focus Management**: 
  - Focus first heading on page navigation
  - Trap focus in mobile menu when open

---

## SEO & Meta Tags

### Homepage
```html
<title>Vinayak Agrawal - Software Developer & AI/ML Engineer</title>
<meta name="description" content="Full-stack developer and ML engineer specializing in AI-powered applications, building scalable systems with Next.js, Python, and modern cloud technologies." />
<meta property="og:title" content="Vinayak Agrawal - Software Developer" />
<meta property="og:description" content="Full-stack developer and ML engineer specializing in AI-powered applications." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:url" content="https://vinayakagrawal.com" />
<meta name="twitter:card" content="summary_large_image" />
```

### Project Pages
- Dynamic titles: "Multimodal Sentiment Analysis - Vinayak Agrawal"
- Project-specific descriptions
- Project screenshot as OG image

### Sitemap & Robots
- Generate sitemap.xml
- robots.txt with proper directives
- Canonical URLs for all pages

---

## Content Management

### Project Data Structure

Create a `projectsData.ts` file with the following structure:

```typescript
export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  year: string;
  status: 'completed' | 'ongoing' | 'archived';
  techStack: {
    frontend?: string[];
    backend?: string[];
    aiml?: string[];
    database?: string[];
    tools?: string[];
  };
  features: string[];
  metrics?: string[];
  challenges?: string;
  learnings?: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  thumbnail: string; // Path to image
  images?: string[]; // Gallery images for project page
}

export const projects: Project[] = [
  // Project data here
];
```

**Benefits**:
- Add/remove projects by editing one file
- Type-safe with TypeScript
- Easy to maintain and scale
- Can migrate to CMS later without refactoring

---

## Testing Checklist

### Visual Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on devices: iPhone SE, iPhone 14, iPad, Desktop 1920x1080
- [ ] Verify all animations are smooth (60fps)
- [ ] Check dark mode toggle on all pages
- [ ] Verify grainy texture renders correctly

### Functional Testing
- [ ] All navigation links work
- [ ] Resume PDF opens in new tab
- [ ] Email mailto: link works
- [ ] Social links open in new tab
- [ ] Project cards navigate to correct pages
- [ ] Dark mode persists after page reload
- [ ] Mobile menu opens/closes correctly
- [ ] Back to top button appears and functions
- [ ] Smooth scrolling works on anchor links

### Performance Testing
- [ ] Run Lighthouse audit (target: 90+ all metrics)
- [ ] Test on slow 3G network
- [ ] Verify images lazy load
- [ ] Check bundle size (should be < 300KB JS)
- [ ] Test with CPU throttling (6x slowdown)

### Accessibility Testing
- [ ] Run WAVE accessibility checker
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Verify focus states are visible
- [ ] Test with screen reader (NVDA or VoiceOver)
- [ ] Check color contrast ratios

---

## Deliverables

### Code & Structure
1. Complete Next.js project (TypeScript, App Router)
2. All components in `/app/components/` directory
3. Project data in `/data/projectsData.ts`
4. Tailwind config with custom theme
5. Environment variables template (`.env.example`)

### Documentation
1. **README.md** with:
   - Project overview
   - Tech stack
   - Setup instructions (install, run dev, build)
   - Folder structure explanation
   - How to add/edit projects
   - Deployment guide (Vercel)
2. **CONTRIBUTING.md** (if needed)

### Assets
1. Optimized images (WebP format)
2. Favicon (32x32px, SVG preferred)
3. OG image for social sharing (1200x630px)
4. Resume PDF (`Vinayak_Agrawal_Resume.pdf`)
5. Placeholder project screenshots (if final ones not ready)

### Configuration Files
1. `tailwind.config.ts` - Custom theme with colors, fonts, grain texture
2. `next.config.js` - Image domains, redirects, etc.
3. `tsconfig.json` - TypeScript configuration
4. `.eslintrc.json` - Linting rules
5. `.prettierrc` - Code formatting

---

## Deployment Instructions

### Vercel Setup
1. Connect GitHub repository to Vercel
2. Configure environment variables (if any)
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Enable automatic deployments on push to main

### Post-Deployment
1. Verify all pages load correctly
2. Test performance on production build
3. Check SEO meta tags with social preview tools
4. Test on multiple devices and browsers

---

## Future Enhancements (Not in MVP)

These are NOT required now but should be easy to add later:
- [ ] Blog section with MDX support
- [ ] CMS integration (Sanity or Contentful)
- [ ] Analytics (Google Analytics or Plausible)
- [ ] Contact form with email service (Resend or SendGrid)
- [ ] More projects (just add to projectsData.ts)
- [ ] Animated SVG illustrations
- [ ] Code syntax highlighting for technical blog posts
- [ ] RSS feed for blog

---

## Final Reminders

### Code Quality
- Write clean, self-documenting code
- Add comments for complex logic
- Use meaningful variable/function names
- Follow Next.js and React best practices
- Use TypeScript strict mode
- No `any` types unless absolutely necessary

### Problem-Solving Approach
- If something doesn't work, understand WHY before fixing
- Don't patch problems - fix the root cause
- Keep components small and focused (single responsibility)
- Reuse components where possible (DRY principle)
- Test as you build (don't leave testing for the end)

### Performance & UX
- Every animation must serve a purpose (not just decoration)
- Prioritize content visibility (text before images load)
- Optimize for perceived performance (skeleton loaders, instant feedback)
- Mobile users are first-class citizens (not an afterthought)
- Accessibility is non-negotiable

### Design Consistency
- Use the design system tokens (colors, spacing, typography)
- Maintain visual rhythm (consistent spacing between sections)
- Keep interactions predictable (similar elements behave similarly)
- Less is more (remove anything that doesn't add value)

---

## Success Criteria

The portfolio is considered complete and successful when:

✅ All pages render perfectly on mobile, tablet, and desktop  
✅ Lighthouse performance score > 90 on all metrics  
✅ Dark mode toggle functions smoothly with persistence  
✅ All interactive elements work as expected  
✅ Navigation shows/hides on scroll correctly  
✅ Project hover effects are smooth and performant  
✅ Grainy texture effect is subtle and works in both themes  
✅ Typography hierarchy is clear and readable  
✅ Parallax scrolling works smoothly on desktop  
✅ No console errors or warnings  
✅ All images load optimally with lazy loading  
✅ Website passes WAVE accessibility test  
✅ Smooth animations run at 60fps  
✅ Code is clean, commented, and maintainable  
✅ Easy to add/remove projects via projectsData.ts  
✅ Website is deployed and live on Vercel  
✅ Resume PDF opens correctly in new tab  
✅ Social and GitHub links work correctly  

---

## Design References (For Inspiration)

**Visual Style**:
- Namya's portfolio (Twitter: @namyakhann) - minimalist, sophisticated, strong typography
- Behance project: https://www.behance.net/gallery/233347049/Portfolio-2025 - editorial layout, grainy texture, bold type
- Salar's portfolio (from provided image) - blue textured background, large italic "Portfolio" text

**Key Takeaways**:
- Large, confident typography
- Lots of white/negative space
- Minimal color palette with strategic accent use
- Editorial, print-inspired layouts
- Content-first approach (let work speak for itself)

---

## FINAL INSTRUCTION

Build this portfolio website with **precision, care, and attention to detail**. Every decision should be intentional. Every line of code should be purposeful. The result should be a **fast, accessible, beautiful portfolio** that showcases Vinayak's work professionally and effectively.

Take your time. Double-check your work. Build something you'd be proud to show.

**Good luck, and build something great
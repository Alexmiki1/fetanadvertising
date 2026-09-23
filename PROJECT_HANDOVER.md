# Fetan Advertising - Project Handover Document

## Project Overview

**Project Name:** Fetan Advertising Website  
**Type:** Full-service creative agency website  
**Live URL:** https://fetanadvertising.com  
**Location:** Haile Gebre Silase St, Addis Ababa, Ethiopia  
**Last Updated:** September 2026

A modern, responsive Next.js website for Fetan Advertising, a full-service creative agency in Addis Ababa specializing in outdoor media, digital marketing, branding, video production, and live events.

---

## Tech Stack

### Core Framework
- **Next.js 16.2.10** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### Key Dependencies
- **nodemailer 9.0.5** - Email sending for quote forms
- **resend 6.17.2** - Email service integration
- **next/font** - Font optimization (Google Fonts)

### Development Tools
- **ESLint 9** - Code linting with Next.js config
- **PostCSS** - CSS processing
- **Turbopack** - Next.js bundler for faster builds

---

## Project Structure

```
fetanadvertising/
├── app/                      # Next.js App Router
│   ├── api/quote/            # Quote form API endpoint
│   │   └── route.ts          # POST handler for email notifications
│   ├── services/             # Service pages
│   │   └── [id]/             # Dynamic service detail pages
│   ├── work/                 # Portfolio pages
│   │   └── [id]/             # Dynamic work detail pages
│   ├── layout.tsx            # Root layout with GTM and fonts
│   ├── page.tsx              # Homepage
│   ├── globals.css           # Global styles
│   └── favicon.ico           # Site favicon
├── components/               # React components
│   ├── AboutUs.tsx           # About section
│   ├── CTA_Band.tsx          # Call-to-action banner
│   ├── Clients.tsx           # Client logos
│   ├── Footer.tsx            # Site footer
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section with video
│   ├── IntroOverlay.tsx      # Intro animation overlay
│   ├── QuoteContact.tsx      # Quote request form
│   ├── Reveal.tsx            # Scroll reveal animation
│   ├── ServiceGrid.tsx       # Services grid display
│   ├── ServicesTicker.tsx    # Scrolling services ticker
│   ├── ShowreelPlayer.tsx     # Video showreel player
│   ├── SisterCompanies.tsx   # Sister companies section
│   ├── StatsCounters.tsx     # Animated statistics counters
│   ├── Testimonials.tsx      # Client testimonials
│   ├── VideoBanner.tsx       # Video banner section
│   ├── WhatsAppButton.tsx    # Floating WhatsApp button
│   ├── WhyFetan.tsx          # Why Fetan slider
│   └── WorkGrid.tsx          # Portfolio grid
├── hooks/                    # Custom React hooks
│   ├── useInView.ts          # Intersection Observer hook
│   ├── useReducedMotion.ts   # Reduced motion detection
│   └── useScrollProgress.ts  # Scroll progress tracking
├── lib/                      # Utility libraries
│   └── content.ts            # Site content and metadata
├── public/                   # Static assets
│   ├── images/               # Image assets
│   └── videos/               # Video assets
├── .env.example              # Environment variables template
├── .env.local                # Actual environment variables (not in git)
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.mjs         # ESLint configuration
└── package.json              # Dependencies and scripts
```

---

## Key Features

### 1. **Homepage Sections**
- Hero section with video background
- Services ticker animation
- Why Fetan interactive slider
- Services grid with 8 service categories
- Portfolio/work grid with filtering
- Statistics counters with animation
- Client testimonials carousel
- Client logos showcase
- Call-to-action banner
- Quote request form with map integration

### 2. **Dynamic Pages**
- Service detail pages (`/services/[id]`)
- Portfolio case study pages (`/work/[id]`)
- Each with detailed content, images, and galleries

### 3. **Contact Form**
- Quote request form with validation
- Email notifications via Nodemailer
- Auto-confirmation emails to clients
- HTML email templates
- SMTP integration (Hostinger)

### 4. **Integrations**
- **Google Tag Manager (GTM-MNZC2ZQQ)** - Analytics tracking
- **WhatsApp Button** - Floating chat button with custom number
- **Google Maps** - Location embed in contact section

### 5. **Animations & Interactions**
- Scroll reveal animations
- Intersection Observer for lazy loading
- Reduced motion support for accessibility
- Smooth scrolling
- Video backgrounds and showreels

---

## Environment Configuration

### Required Environment Variables

Create `.env.local` file in the project root:

```env
# Contact Email Configuration
NEXT_PUBLIC_CONTACT_EMAIL=contact@fetanadvertising.com
CONTACT_EMAIL=contact@fetanadvertising.com

# Hostinger SMTP Configuration (Nodemailer)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contact@fetanadvertising.com
SMTP_PASS=your_smtp_password
SMTP_FROM_EMAIL="Fetan Advertising <contact@fetanadvertising.com>"
```

### Important Notes
- `.env.local` is NOT committed to git (in .gitignore)
- Copy `.env.example` as a template
- SMTP credentials are required for the quote form to work
- WhatsApp phone number is configured in `lib/content.ts`

---

## Development Setup

### Prerequisites
- Node.js (v20 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fetanadvertising

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your actual values
```

### Running Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## Content Management

### Site Content Location
All site content is managed in `lib/content.ts`:

- **siteMeta** - Site metadata, contact info, phone numbers
- **navLinks** - Navigation menu items
- **heroContent** - Homepage hero section
- **services** - Service items and descriptions
- **workItems** - Portfolio/case study items
- **stats** - Statistics for counters
- **clients** - Client logo information
- **testimonials** - Client testimonials

### Important: WhatsApp Phone Number
The WhatsApp button uses a separate phone number configured in `lib/content.ts`:

```typescript
export const siteMeta = {
  // ... other fields
  whatsappPhone: "+251913001010",  // WhatsApp-specific number
  phone: "+251970757575",          // General contact number
  phoneHref: "tel:+251970757575",
};
```

To change the WhatsApp number, update the `whatsappPhone` field in `siteMeta`.

---

## API Endpoints

### POST `/api/quote`
Handles quote request form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+251911234567",
  "company": "Example Corp",
  "service": "Outdoor Advertising",
  "message": "Project details here..."
}
```

**Response:**
- Success: `{ "ok": true }`
- Error: `{ "error": "Error message" }`

**Functionality:**
1. Validates input fields
2. Sends HTML email to Fetan team
3. Sends auto-confirmation email to client
4. Uses SMTP credentials from environment variables

---

## Deployment

### Recommended Platform: Vercel
The project is optimized for Vercel deployment.

### Deployment Steps

1. **Push to GitHub**
   - Ensure `.env.local` is NOT committed
   - Add environment variables in Vercel dashboard

2. **Configure Environment Variables in Vercel**
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `CONTACT_EMAIL`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM_EMAIL`

3. **Deploy**
   - Connect repository to Vercel
   - Vercel will auto-detect Next.js
   - Click "Deploy"

### Alternative Deployment
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway

---

## Important Considerations

### 1. Email Configuration
- The quote form requires SMTP credentials to work
- Currently configured for Hostinger SMTP
- Update SMTP settings in `.env.local` if changing providers
- Test email functionality after deployment

### 2. Google Tag Manager
- GTM ID: `GTM-MNZC2ZQQ`
- Integrated in `app/layout.tsx`
- Head script loads with `afterInteractive` strategy
- Noscript fallback included for JS-disabled users

### 3. Images and Videos
- Static.assets in `public/` directory
- Images in `public/images/`
- Videos in `public/videos/`
- Optimize images before adding to improve performance

### 4. Fonts
- Google Fonts: League Spartan, Inter, IBM Plex Mono
- Loaded via `next/font/google` for optimization
- Configured with `display: "swap"` for performance

### 5. TypeScript
- Strict mode enabled
- Path alias `@/*` maps to project root
- Type definitions included for dependencies

### 6. Tailwind CSS
- Using Tailwind CSS v4
- Custom styles in `app/globals.css`
- Utility classes used throughout components

---

## Known Issues & Pending Tasks

### Current Status
- WhatsApp button needs `whatsappPhone` field added to `siteMeta` in `lib/content.ts`
- The WhatsAppButton component currently references `siteMeta.whatsappPhone` which doesn't exist yet

### Recommended Fixes
1. Add `whatsappPhone: "+251913001010"` to `siteMeta` in `lib/content.ts`
2. Test WhatsApp button functionality after fix
3. Verify email form functionality in production
4. Test GTM tracking after deployment

---

## Contact Information

### Client Contact
- **Email:** contact@fetanadvertising.com
- **Phone:** +251970757575
- **WhatsApp:** +251913001010
- **Location:** Haile Gebre Silase St, Addis Ababa, Ethiopia

### Technical Support
For technical questions about this project, refer to:
- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- Tailwind CSS Documentation: https://tailwindcss.com/docs

---

## Additional Notes

### Performance Optimization
- Images should be optimized (WebP format recommended)
- Videos should be compressed
- Use Next.js Image component for automatic optimization
- Consider implementing caching strategies

### Accessibility
- Reduced motion support implemented
- Semantic HTML used throughout
- ARIA labels on interactive elements
- Keyboard navigation support

### Security
- Environment variables for sensitive data
- HTML escaping in email templates
- Input validation on API endpoints
- HTTPS recommended for production

---

## Summary

This is a production-ready Next.js website for Fetan Advertising with:
- Modern tech stack (Next.js 16, React 19, TypeScript)
- Responsive design with Tailwind CSS
- Dynamic content management via `lib/content.ts`
- Email functionality for quote requests
- Google Tag Manager integration
- WhatsApp chat integration
- Smooth animations and interactions

The site is ready for deployment to Vercel or any Next.js-compatible platform. Ensure environment variables are properly configured before deploying to production.

# Landing Page Instructions for Pruftnet

## Project Overview

This document provides comprehensive instructions for building the Pruftnet landing page. The AI assistant creating this landing page should follow these guidelines to ensure consistency, proper messaging, and excellent SEO.

---

## Tech Stack

- **Framework:** AdonisJS with InertiaJS
- **Frontend:** React (SSR with selective client-side rendering)
- **UI Components:** Shadcn UI (orange theme)
- **Styling:** Tailwind CSS
- **Language:** English only (all content, code, comments)
- **Responsiveness:** Fully responsive (mobile-first approach)

---

## Brand Identity

### Name & Domain

- **Product Name:** Pruftnet
- **Domain:** prueftnet.app
- **Tagline:** "Visual Network Analyser"

### Visual Identity

- **Primary Color:** Shadcn Orange theme
- **Logo:** Placeholder logo (to be replaced later)
- **Style:** Modern, professional, technical but approachable
- **Tone:** Professional, clear, confident, developer-friendly

---

## Target Audience

Network professionals and anyone working with networks or network equipment:

- Network Administrators
- Network Engineers
- Security Professionals & Penetration Testers
- DevOps Engineers
- IT Support Teams
- System Administrators
- Developers working with network protocols
- Students and researchers in networking

---

## Site Structure

### Pages

1. **Home (Landing Page)** - Main marketing page
2. **Docs** - Documentation (can be placeholder initially)
3. **About** - About the project and team

### Navigation

- Sticky header with logo, navigation links, and CTA button
- Mobile hamburger menu for responsive design
- Footer with links, social media, and legal pages

---

## Landing Page Sections

### 1. Hero Section

**Purpose:** Immediately communicate what Pruftnet is and capture attention.

**Content to include:**

- Tagline: "Visual Network Analyser"
- Headline: Something impactful like "See Your Network Like Never Before" or "Network Analysis, Visualized"
- Subheadline: Brief description (1-2 sentences) explaining Pruftnet captures packets, visualizes network topology, and lets you build custom analysis workflows visually
- **Primary CTA:** "Join the Waitlist" button (prominent, orange)
- **Secondary CTA:** "View on GitHub" link
- Hero image/illustration: Network visualization mockup or abstract network graphic

**Technical notes:**

- SSR for fast initial load
- Subtle animations on scroll (client-side)
- Background can have subtle network-themed pattern

---

### 2. Key Features Section

**Purpose:** Highlight the main capabilities of Pruftnet.

**Features to showcase (with icons):**

1. **Real-Time Packet Capture**
   - High-performance C++ core
   - Live traffic analysis
   - Support for various protocols

2. **Visual Network Graph**
   - See devices and connections in real-time
   - Force-directed graph visualization
   - Device identification with vendor lookup

3. **Visual Workflow Builder**
   - Drag-and-drop interface
   - Create custom analysis routines
   - No coding required

4. **Protocol Analysis**
   - Deep packet inspection
   - Customizable protocol parsers
   - Hex viewer and parsed values

5. **Cross-Platform**
   - Desktop application (Electron)
   - Web application
   - Works on Windows, macOS, Linux

6. **Open Source**
   - Free forever
   - Community-driven development
   - Transparent and extensible

**Design notes:**

- Grid layout (2-3 columns on desktop, 1 column on mobile)
- Each feature has an icon, title, and short description
- Consider subtle hover animations

---

### 3. How It Works Section

**Purpose:** Explain the workflow in simple steps.

**Steps:**

1. **Capture** - Select your network interface and start capturing packets in real-time
2. **Visualize** - Watch your network topology emerge as devices communicate
3. **Analyze** - Build visual workflows to automate network analysis tasks
4. **Export** - Save your findings and share with your team

**Design notes:**

- Horizontal timeline/steps on desktop
- Vertical steps on mobile
- Numbered circles or icons for each step
- Optional: animated illustration showing the flow

---

### 4. Visual Showcase Section

**Purpose:** Show the product in action.

**Content:**

- Screenshots or mockups of:
  - The network graph visualization
  - The workflow builder interface
  - The packet capture view
- Optional: Short demo video or animated GIF

**Design notes:**

- Use device frames (laptop/desktop mockup) for screenshots
- Consider a tabbed interface to show different views
- Lazy-load images for performance

---

### 5. Use Cases Section

**Purpose:** Help visitors identify with specific scenarios.

**Use cases to highlight:**

1. **Network Discovery**
   - "Instantly map all devices on your local network"
2. **Security Assessment**
   - "Identify vulnerabilities and monitor suspicious traffic"
3. **Troubleshooting**
   - "Diagnose connectivity issues with deep packet inspection"
4. **Protocol Development**
   - "Analyze and debug custom network protocols"

5. **Education & Research**
   - "Learn networking concepts with visual feedback"

**Design notes:**

- Cards or accordion layout
- Icon + title + short description for each

---

### 6. Coming Soon Section

**Purpose:** Build excitement for future features.

**Upcoming features:**

1. **Cloud Sync**
   - Sync your workflows and captures across devices
2. **Collaborative Analysis**
   - Share captures and workflows with team members in real-time
3. **Advanced Filtering**
   - Powerful query language for packet filtering
4. **Protocol Templates**
   - Pre-built templates for common protocols (HTTP, DNS, MQTT, etc.)
5. **Automated Reports**
   - Generate PDF/HTML reports from your analysis
6. **Plugin System**
   - Extend Pruftnet with community-built plugins

**Design notes:**

- Subtle styling to differentiate from current features
- "Coming Soon" badges
- Consider a roadmap timeline view

---

### 7. Open Source Section

**Purpose:** Emphasize the open-source nature and build trust.

**Content:**

- "Free & Open Source Forever"
- Brief text about community-driven development
- GitHub stars badge (if available)
- Link to GitHub repository
- Contribution invitation

**Design notes:**

- GitHub logo/icon prominently displayed
- Dark/code-themed background could work well here

---

### 8. Waitlist Section (Primary CTA)

**Purpose:** Capture leads and build an early user base.

**Content:**

- Headline: "Be the First to Know"
- Subheadline: "Join our waitlist and get early access when we launch"
- Email input field
- Submit button: "Join Waitlist"
- Privacy note: "We respect your privacy. No spam, ever."

**Technical notes:**

- Form validation (client-side)
- Success/error states
- Store emails in database
- Optional: Show waitlist count ("Join 1,234 others")

**Design notes:**

- Prominent placement
- Contrasting background to stand out
- Simple, focused design

---

### 9. FAQ Section

**Purpose:** Answer common questions and reduce friction.

**Questions & Answers:**

**Q: What is Pruftnet?**
A: Pruftnet is a visual network analysis tool that combines real-time packet capture with an intuitive visual workflow builder. It helps you understand, analyze, and troubleshoot networks without writing complex scripts.

**Q: Is Pruftnet really free?**
A: Yes! Pruftnet is completely free and open source. You can use it, modify it, and contribute to its development.

**Q: What operating systems are supported?**
A: Pruftnet works on Windows, macOS, and Linux. It's available as both a desktop application and a web application.

**Q: Do I need coding skills to use Pruftnet?**
A: No. The visual workflow builder allows you to create sophisticated network analysis routines using a drag-and-drop interface. No coding required.

**Q: How does Pruftnet compare to Wireshark?**
A: While Wireshark is excellent for packet inspection, Pruftnet adds visual network topology mapping and a unique workflow builder for automated analysis. Think of it as Wireshark meets visual programming.

**Q: Does Pruftnet support IPv6?**
A: Yes! Pruftnet fully supports IPv6, including Neighbor Discovery, Router Solicitation, and ICMPv6 protocols.

**Q: Can I create custom protocol parsers?**
A: Yes. Pruftnet supports JSON-based protocol definitions that you can customize to parse any protocol.

**Q: Is my network data secure?**
A: Absolutely. Pruftnet runs locally on your machine. Your network data never leaves your device unless you explicitly choose to export it.

**Design notes:**

- Accordion-style expandable questions
- Smooth expand/collapse animations
- Search functionality (optional)

---

### 10. Footer

**Content:**

- Logo and tagline
- Navigation links (Home, Docs, About, GitHub)
- Social media links (GitHub, Twitter/X if available)
- Legal links (Privacy Policy, Terms of Service - can be placeholder)
- Copyright notice: "© 2024 Pruftnet. Open source under MIT License."
- "Made with ❤️ by the community" or similar

**Design notes:**

- Dark background
- Multi-column layout on desktop
- Stacked on mobile

---

## SEO Requirements

### Meta Tags (per page)

**Homepage:**

```
Title: Pruftnet - Visual Network Analyser | Open Source Packet Capture Tool
Description: Pruftnet is a free, open-source visual network analyser. Capture packets, visualize network topology, and build custom analysis workflows with drag-and-drop simplicity.
Keywords: network analyzer, packet capture, network visualization, wireshark alternative, network topology, open source network tool, packet sniffer, network monitoring
```

**Docs Page:**

```
Title: Documentation | Pruftnet - Visual Network Analyser
Description: Learn how to use Pruftnet for network analysis. Installation guides, tutorials, and API reference for the visual network analyser.
```

**About Page:**

```
Title: About Pruftnet | Open Source Network Analysis Tool
Description: Learn about Pruftnet, the open-source visual network analyser. Our mission, the team behind the project, and how to contribute.
```

### Technical SEO

1. **Semantic HTML**
   - Use proper heading hierarchy (single H1 per page)
   - Use semantic elements (header, main, section, article, footer)
   - Add alt text to all images

2. **Performance**
   - Optimize images (WebP format, lazy loading)
   - Minimize JavaScript bundles
   - Use SSR for critical content
   - Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

3. **Structured Data**
   - Add JSON-LD schema for:
     - Organization
     - SoftwareApplication
     - FAQPage

4. **Technical Files**
   - robots.txt (allow all, sitemap reference)
   - sitemap.xml (auto-generated)
   - favicon and app icons (various sizes)

5. **Open Graph & Twitter Cards**

   ```
   og:title: Pruftnet - Visual Network Analyser
   og:description: Free, open-source network analysis with visual workflows
   og:image: [Social share image - 1200x630px]
   og:url: https://prueftnet.app
   og:type: website
   twitter:card: summary_large_image
   ```

6. **URL Structure**
   - Clean URLs: /docs, /about
   - Trailing slashes: consistent (either all with or all without)
   - Canonical URLs on all pages

---

## Responsive Design Guidelines

### Breakpoints (Tailwind defaults)

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

### Mobile Considerations

- Touch-friendly tap targets (min 44x44px)
- Readable font sizes (min 16px body text)
- Collapsible navigation (hamburger menu)
- Stack multi-column layouts vertically
- Reduce image sizes for mobile
- Test on real devices

### Desktop Considerations

- Maximum content width (1280px recommended)
- Hover states for interactive elements
- Larger imagery and spacing
- Multi-column layouts where appropriate

---

## Accessibility Requirements

- **Color contrast:** Minimum 4.5:1 for normal text
- **Keyboard navigation:** All interactive elements focusable
- **Screen readers:** Proper ARIA labels and roles
- **Focus states:** Visible focus indicators
- **Alt text:** Descriptive alt text for all images
- **Form labels:** Associated labels for all inputs
- **Skip links:** "Skip to main content" link

---

## Performance Guidelines

1. **Images**
   - Use next-gen formats (WebP, AVIF)
   - Implement lazy loading
   - Provide responsive images (srcset)
   - Optimize file sizes

2. **JavaScript**
   - SSR for initial render
   - Hydrate only interactive components
   - Code split by route
   - Defer non-critical scripts

3. **CSS**
   - Purge unused Tailwind classes
   - Critical CSS inline
   - Minimize CSS bundles

4. **Caching**
   - Cache static assets
   - Use content hashing for cache busting

---

## Content Tone Guidelines

- **Professional** but approachable
- **Technical** but not intimidating
- **Confident** but not arrogant
- **Clear** and concise
- **Developer-friendly** language
- Avoid jargon when simpler words work
- Use active voice
- Keep sentences short

---

## Component Patterns (Shadcn)

Leverage these Shadcn components:

- **Button** - Primary (orange), secondary, ghost variants
- **Card** - For feature boxes, use cases
- **Input** - For email waitlist form
- **Accordion** - For FAQ section
- **Badge** - For "Coming Soon" labels
- **Dialog** - For mobile navigation
- **Separator** - For visual section breaks
- **Tabs** - For showcase section (optional)

---

## Implementation Priorities

### Phase 1 (MVP)

1. Home page with all sections
2. Basic responsive design
3. Waitlist form functionality
4. SEO meta tags
5. Placeholder Docs and About pages

### Phase 2

1. Full Docs page with content
2. Full About page with content
3. Structured data (JSON-LD)
4. Performance optimization
5. Analytics integration

### Phase 3

1. Blog section (optional)
2. Changelog page (optional)
3. Community/Discord integration (optional)
4. Localization (optional)

---

## Additional Notes

- All code should be written in TypeScript
- Follow AdonisJS and InertiaJS best practices
- Use environment variables for sensitive data
- Implement proper error handling
- Add loading states for async operations
- Test all forms and interactive elements
- Validate HTML with W3C validator
- Test with Lighthouse for performance/SEO scores

---

## Resources

- **Shadcn UI:** https://ui.shadcn.com
- **Tailwind CSS:** https://tailwindcss.com
- **AdonisJS:** https://adonisjs.com
- **InertiaJS:** https://inertiajs.com
- **React:** https://react.dev

---

_This document should be used as the primary reference for building the Pruftnet landing page. Follow these guidelines to ensure a consistent, performant, and SEO-optimized result._

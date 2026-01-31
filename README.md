# DevEvent 2026 - Tech Event Landing Page

A modern, high-performance landing page for a technical conference, built with Next.js, Tailwind CSS, and shadcn/ui components. This project features a clean, professional design optimized for conversion and information delivery.

## 🚀 Features

- **Hero Section**: Impactful heading with event details (March 15-17, 2026 • San Francisco) and primary call-to-action.
- **About Section**: Detailed event overview with a statistics grid (Attendees, Speakers, Sessions, Days).
- **Agenda/Expectations**: Feature cards highlighting Keynotes, Technical Workshops, and Networking events, including a day-by-day summary.
- **Registration CTA**: A prominent registration section with a secondary "Download Brochure" option.
- **Responsive Navigation**: Mobile-friendly navigation bar with quick links to About, Agenda, and Registration.
- **Theme Support**: Integrated with `next-themes` and a `ThemeProvider` for consistent styling.
- **Analytics**: Ready for deployment with `@vercel/analytics`.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) (based on Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist & Geist Mono](https://vercel.com/font)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏁 Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GiselleUlloa/v0-tech-event-landing-page.git
   cd v0-tech-event-landing-page
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `pnpm dev`: Runs the app in development mode.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint to check for code quality issues.

## 📁 Project Structure

- `/app`: Contains the Next.js App Router pages and global styles.
- `/components`: Reusable UI components (including shadcn/ui primitives).
- `/lib`: Utility functions and shared logic.
- `/public`: Static assets like icons and images.
- `/styles`: Global CSS and Tailwind configurations.

## 🔄 Automatic Sync

This repository is automatically synced with deployments from [v0.app](https://v0.app). Any changes made through the v0 interface will be reflected here.

---
© 2026 DevEvent.

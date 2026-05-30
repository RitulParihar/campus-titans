#  Campus Titans — College Discovery Platform

A full-stack AI-powered College Discovery Platform that helps students explore, compare, and save colleges across India with real-time filtering, authentication, and modern UI.

---

##  Live Demo
https://campus-titans-gr5n.vercel.app

---

##  Features

-  Real-time college search (URL-based)
-  Advanced filtering (fees, rating, location)
-  College comparison system (side-by-side view)
-  Wishlist / Save colleges (DB-powered)
-  Authentication (Email & Password)
-  Fast, responsive UI
-  Fully deployed on Vercel

---

##  Tech Stack

**Frontend**
- Next.js (App Router)
- React
- TypeScript
- TailwindCSS

**Backend**
- Next.js API Routes
- Prisma ORM

**Database**
- PostgreSQL (Neon)

**Deployment**
- Vercel

---

##  Architecture Decisions

- Used **Server Components** for data fetching
- Prisma used for all DB operations
- URL-driven state for search & filters
- Dynamic rendering (`force-dynamic`) to avoid SSR issues
- Session-based authentication using cookies

---

##  Key Challenges Solved

- Fixed Vercel Prisma deployment issues
- Solved SSR prerender crashes using dynamic rendering
- Built URL-synced filtering system
- Implemented production-safe authentication flow

---

##  Screenshots

(Add screenshots here)

- Homepage
 <img width="1314" height="877" alt="image" src="https://github.com/user-attachments/assets/d3cd3d59-fee5-49fb-8281-bf7d27b0601b" />
- Colleges Page
- Compare Page
  <img width="1008" height="875" alt="image" src="https://github.com/user-attachments/assets/00b769b6-d813-4a79-9363-cdefbda3cfff" />
- Wishlist Page
  <img width="1266" height="871" alt="image" src="https://github.com/user-attachments/assets/40407d17-fdb2-4794-a4bf-357ebe949b7c" />


---

##  Setup Instructions

```bash
git clone https://github.com/yourusername/campus-titans
cd campus-titans
npm install
npm run dev

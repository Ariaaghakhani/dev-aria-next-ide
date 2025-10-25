# DEV Aria Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing front-end development skills with Vue.js and React expertise.

## Features

- Built with Next.js 15 (App Router)
- Styled with Tailwind CSS
- Firebase Firestore integration for contact form
- Responsive grid layout
- SEO optimized with Open Graph and Twitter Card support
- Accessible components with ARIA labels
- Toast notifications for user feedback

## Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Firebase project (for contact form functionality)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ariaaghakhani/dev-aria-next-ide.git
cd dev-aria-next-ide
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Configure environment variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

**Important:** Never commit `.env.local` to version control. It's already included in `.gitignore`.

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── project/[slug]/    # Dynamic project pages
│   └── layout.js          # Root layout with metadata
├── components/            # Reusable React components
│   ├── Main Grid/         # Homepage grid components
│   ├── About Grid/        # About page grid components
│   └── SocialLinks.jsx    # Shared social media links
├── config/                # Configuration files
│   └── site.js           # Site-wide configuration
├── assets/                # Static assets (images, fonts)
└── firebase.js            # Firebase initialization
```

## Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Set up Firestore security rules (recommended):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /forms/{document} {
      allow write: if request.auth == null; // Allow anonymous writes
      allow read: if request.auth != null;   // Only authenticated users can read
    }
  }
}
```

4. Add your Firebase config to `.env.local`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# dev-aria-next-ide

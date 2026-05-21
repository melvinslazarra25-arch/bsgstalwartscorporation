# BSG-Stalwarts Corporation Website

A GitHub-ready React/Vite website for BSG-Stalwarts Corporation, an engineering contracting company based in Dasmariñas City, Cavite, Philippines.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React icons

## Features

- Responsive corporate website
- Home, About, Services, Projects, Industries, Careers, Blog, Contact, Quote, Privacy, Thank You, and 404 pages
- Service detail pages for HVAC/R, MEPF, Operations & Maintenance, Engineering Products, and Project Management
- SEO component with page titles and meta descriptions
- Static data files for navigation, services, projects, industries, and blog posts
- Contact, quote, and careers forms with basic React validation
- Forms redirect to `/thank-you` after successful validation
- Mobile menu and mobile sticky contact bar
- CSS image placeholders instead of copyrighted images
- Vercel-ready `vercel.json`
- Robots and sitemap files

## Folder Structure

```text
bsg-stalwarts-website/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   └── utils/
├── package.json
├── README.md
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── vite.config.js
```

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Upload to GitHub

1. Create a new repository on GitHub.
2. Extract this ZIP file.
3. Open the extracted folder in VS Code.
4. Run:

```bash
git init
git add .
git commit -m "Initial BSG-Stalwarts website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Go to Vercel.
3. Click **Add New Project**.
4. Import the GitHub repository.
5. Use these settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click Deploy.

## Deploy to Netlify

1. Push the project to GitHub.
2. Go to Netlify.
3. Click **Add new site**.
4. Import from GitHub.
5. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add a redirect rule if needed for React Router:

```text
/* /index.html 200
```

## How to Edit Company Info

Edit:

```text
src/utils/siteConfig.js
```

Update:

- Phone number
- Email
- Address
- Facebook link
- Messenger link
- Website URL

## How to Edit Services

Edit:

```text
src/data/services.js
```

## How to Edit Projects

Edit:

```text
src/data/projects.js
```

Replace sample projects with real project names, locations, photos, scope, and results.

## How to Edit Blog Posts

Edit:

```text
src/data/blogPosts.js
```

## How to Replace Placeholder Images

The current project uses CSS gradient placeholders to avoid copyrighted images. Add real images to:

```text
src/assets/
```

Then import them into the page or component where needed.

## How to Connect Real Forms Later

The forms currently validate and redirect to `/thank-you`. To connect real email sending, integrate one of these:

- EmailJS
- Formspree
- Resend
- Netlify Forms
- Custom Express/Node API
- WordPress backend endpoint

Forms to update:

```text
src/components/ContactForm.jsx
src/components/QuoteForm.jsx
src/components/CareerForm.jsx
```

## How to Connect a Custom Domain

### Vercel

1. Open the project in Vercel.
2. Go to **Settings > Domains**.
3. Add your domain, such as `bsgstalwarts.com`.
4. Follow the DNS instructions.
5. Wait for SSL to activate.

### Netlify

1. Open the project in Netlify.
2. Go to **Domain Management**.
3. Add the custom domain.
4. Configure DNS records.
5. Wait for SSL to activate.

## Maintenance Notes

Recommended monthly maintenance:

- Update project portfolio
- Add blog posts
- Check forms
- Update job openings
- Review SEO metadata
- Test mobile layout
- Check broken links
- Review analytics
- Replace placeholder content with verified company information

## Important

Replace placeholder phone, email, project examples, credentials, and images with verified company details before final public launch.


## GitHub Pages / Jekyll Note

This repository includes a root `.nojekyll` file. This tells GitHub Pages not to process the project with Jekyll, which helps prevent issues with Vite/React static assets during deployment.

# DevSphere - Software Engineering Portfolio

A stunning personal portfolio website built with Next.js and Tailwind CSS for software engineers and developers.

## Features

- Modern and professional design with animations
- Fully responsive across all devices
- 3D elements using Three.js
- Smooth transitions with Framer Motion
- Dark theme with professional color palette
- Comprehensive sections: Hero, About, Projects, Services, and Contact

## Tech Stack

- **Next.js** (App Router): For server-side rendering and static site generation
- **TypeScript**: For type safety and improved developer experience
- **Tailwind CSS**: For utility-first styling
- **Framer Motion**: For animations
- **Three.js**: For 3D elements

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/sections/Hero.tsx`: Update main headline and description
- `src/components/sections/About.tsx`: Update your bio, skills, and tech stack
- `src/components/sections/Projects.tsx`: Add your own projects
- `src/components/sections/Services.tsx`: Customize your services
- `src/components/sections/Contact.tsx`: Update your contact information
- `src/components/layout/Footer.tsx`: Update social links

### Adding Icons and Images

Add your images to:

- `/public/images/projects/` for project images
- `/public/images/tech/` for technology icons

### Styling

The main styling is in `src/app/globals.css`. You can modify the color palette and additional styling there.

## Deployment

This portfolio can be easily deployed to Vercel:

```bash
npm run build
```

## License

This project is open source and available under the MIT License.

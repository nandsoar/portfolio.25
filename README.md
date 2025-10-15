# Keven Hernandez - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Fast Performance**: Optimized for speed with Next.js app router
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Type Safe**: Full TypeScript support for better developer experience

## 📦 Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Radix Icons](https://www.radix-ui.com/icons)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd keven-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
keven-portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── header.tsx        # Header component
│   ├── footer.tsx        # Footer component
│   ├── layout.tsx        # Main layout wrapper
│   └── theme-provider.tsx # Theme provider
├── data/                  # Data files
│   └── personal-info.json # Personal information and content
├── lib/                   # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── ...config files
```

## 🎨 Customization

### Updating Personal Information

Edit the `data/personal-info.json` file to update your personal information, experience, projects, and blog posts.

### Styling

- Global styles are in `app/globals.css`
- Theme colors can be customized in `tailwind.config.ts`
- CSS variables for colors are defined in `app/globals.css`

## 🚢 Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, you can build and deploy manually:

```bash
npm run build
npm run start
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

Inspired by [jsantanders.dev](https://github.com/jsantanders/jsantanders.dev) - A clean and modern portfolio design.

## 📧 Contact

Keven Hernandez - [hkeven89@gmail.com](mailto:hkeven89@gmail.com)

- Twitter: [@eskevv](https://twitter.com/eskevv)
- GitHub: [@aerov8](https://github.com/aerov8)
- LinkedIn: [eskevv](https://www.linkedin.com/in/eskevv/)

---

Built with by Keven Hernandez

# Pictionary Word Generator

A modern, responsive web application for generating random words for Pictionary games. Perfect for parties, family game nights, and drawing challenges!

## Features

- **Random Word Generation**: Generate words instantly with a single click
- **Three Difficulty Levels**: 
  - Easy (200 words): Simple, everyday objects and concepts
  - Medium (200 words): More complex items and scenarios
  - Hard (100 words): Abstract concepts and challenging terms
- **Built-in Timer**: 30s, 60s, or 90s countdown timer with visual alerts
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Local Storage**: Remembers your difficulty preference
- **Smooth Animations**: Fade transitions when generating new words
- **Category Tags**: Each word includes relevant category tags
- **Word Statistics**: Track total words available per difficulty

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Architecture**: Static Site Generation (SSG)

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Play

1. **Generate**: Click the "Generate New Word" button to get a random word
2. **Draw**: Sketch the word without using letters or numbers
3. **Guess**: Other players try to guess what you're drawing
4. **Timer**: Use the built-in timer to add excitement to the game

## Project Structure

\`\`\`
app/
├── components/          # React components
│   ├── WordDisplay.tsx      # Main word display
│   ├── DifficultySelector.tsx  # Difficulty selection
│   ├── Timer.tsx           # Countdown timer
│   └── GenerateButton.tsx  # Generate button
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.ts  # Local storage hook
│   └── useTimer.ts        # Timer functionality
├── lib/                # Utility functions and data
│   ├── types.ts          # TypeScript definitions
│   ├── words.ts          # Word database (500+ words)
│   └── generator.ts      # Word generation logic
├── layout.tsx          # Root layout with SEO
└── page.tsx           # Main page component
\`\`\`

## Word Database

The application includes a comprehensive database of 500+ carefully curated words:

- **Easy Level (200 words)**: Animals, basic objects, simple actions
- **Medium Level (200 words)**: Complex objects, scenarios, activities  
- **Hard Level (100 words)**: Abstract concepts, scientific terms, philosophical ideas

Each word includes:
- Unique ID
- Word text
- Difficulty level
- Category tags

## Features in Detail

### Responsive Design
- Mobile-first approach
- Touch-friendly buttons (44px minimum)
- Optimized for all screen sizes
- Works in both portrait and landscape modes

### Performance Optimized
- Static site generation for fast loading
- Optimized bundle size
- Efficient re-rendering with React.memo
- Local word database (no API calls required)

### SEO Optimized
- Complete meta tags
- Open Graph protocol support
- Twitter Card support
- Semantic HTML structure
- JSON-LD structured data ready

## Build and Deploy

To build the application for production:

\`\`\`bash
npm run build
\`\`\`

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This project is perfect for contributing! Areas for improvement:

- Add more words to the database
- Implement sound effects
- Add multiplayer features
- Create custom word lists
- Add more languages

## License

MIT License - feel free to use this project for any purpose.

## Acknowledgments

- Built with Next.js and Tailwind CSS
- Designed for drawing enthusiasts everywhere
- Perfect for bringing people together through games

---

**Have fun drawing! 🎨**
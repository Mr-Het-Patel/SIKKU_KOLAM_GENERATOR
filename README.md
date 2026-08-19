# Sikku Kolam - Traditional Pattern Generator

A modern Next.js application for generating, displaying, and exporting traditional South Indian sikku kolam patterns. Create beautiful geometric patterns with dots and lines, animate them, and export as SVG or PNG.

## Features

- 🎨 **Advanced Kolam Generation**: Create authentic kolam patterns using algorithms with 16 curve types
- 🔬 **Mathematical Precision**: Connectivity rules ensure proper pattern flow and traditional aesthetics  
- 🔄 **Symmetry Control**: Generate symmetrical patterns with automatic mirroring
- 📐 **Smooth Curves**: Vector-based curved lines using SVG paths for authentic traditional appearance
- ✨ **Smooth Animations**: Watch patterns come to life with progressive drawing animations
- 📤 **Multiple Export Formats**: Download your creations as SVG or PNG
- 🔗 **Easy Embedding**: Get embed codes to use kolams on other websites
- 📱 **Responsive Design**: Works beautifully on desktop and mobile devices
- ⚡ **Fast Performance**: SVG-based rendering for optimal performance

## Technologies Used

- **Next.js 15+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **SVG** for 2D drawing and animations
- **html2canvas** for SVG to canvas conversion

## Getting Started

First, install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Usage

1. **Generate Patterns**: Click the "Generate Kolam" button to create a new sikku kolam pattern
2. **Adjust Size**: Use the grid size slider to create patterns from 3x3 to 15x15
3. **Animate**: Click "Play Animation" to watch the pattern draw itself
4. **Export**: Download your creations as SVG or PNG
5. **Embed**: Copy the embed code to use the kolam on other websites

## Kolam Patterns

### Advanced Generation Algorithm
Based on academic research algorithms, our kolam generator uses:
- **16 Curve Patterns**: Each grid cell can contain one of 16 mathematically defined curve patterns
- **Connectivity Rules**: Sophisticated rules ensure patterns connect properly with neighboring cells
- **Symmetry Generation**: Automatic 1D and 2D symmetrical pattern generation
- **Smooth Curves**: Vector-based curved lines for authentic kolam aesthetics

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- This project draws inspiration from [Kolam Generator](https://www.mathworks.com/matlabcentral/fileexchange/36451-kolam-generator)

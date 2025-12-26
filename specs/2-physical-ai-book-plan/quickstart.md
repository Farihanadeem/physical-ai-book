# Quickstart: Physical AI Book Development

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager
- Git for version control
- GitHub account for deployment

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. **Install dependencies**
   ```bash
   cd website
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```
   This will start the development server at `http://localhost:3000`

4. **Create your first chapter and lessons**
   - Navigate to `website/docs/`
   - Create a new folder for your chapter: `chapter-1/`
   - Add lesson files: `lesson-1.md`, `lesson-2.md`, `lesson-3.md`, `lesson-4.md`

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## Directory Structure

```
website/
├── docusaurus.config.js    # Main Docusaurus configuration
├── package.json           # Dependencies and scripts
├── docs/                  # All book content
│   └── chapter-1/         # Chapter folder
│       ├── lesson-1.md    # Individual lessons
│       ├── lesson-2.md
│       ├── lesson-3.md
│       └── lesson-4.md
├── src/                   # Custom components and pages
└── static/                # Static assets
```

## Configuration

The Docusaurus configuration includes:
- GitHub Pages deployment settings
- Search functionality
- Navigation structure
- Custom styling

## Deployment

The site is configured for GitHub Pages deployment via GitHub Actions. When you push to the main branch, the site will be automatically built and deployed.

## Content Creation

Each lesson should follow the standard Markdown format with Docusaurus-specific features:
- Frontmatter with title and other metadata
- Standard Markdown syntax for content
- Docusaurus components for special features
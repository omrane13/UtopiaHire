# Utopia Craft Frontend

A modern React application built with TypeScript, Vite, and Tailwind CSS for career development and job management.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Setup](#project-setup)
- [Development](#development)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (version 18.0.0 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Or install using Node Version Manager (recommended):
   
   ```bash
   # Install nvm (Node Version Manager)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   
   # Restart your terminal or run:
   source ~/.bashrc
   
   # Install and use the latest LTS version of Node.js
   nvm install --lts
   nvm use --lts
   ```

2. **npm** (comes with Node.js) or **Bun** (alternative package manager)
   - npm is included with Node.js
   - For Bun (optional, faster alternative):
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Git**
   ```bash
   # Ubuntu/Debian
   sudo apt update && sudo apt install git
   
   # CentOS/RHEL/Fedora
   sudo yum install git  # or sudo dnf install git
   
   # macOS
   brew install git
   ```

### Verify Installation

Check that everything is installed correctly:

```bash
node --version    # Should show v18.0.0 or higher
npm --version     # Should show 8.0.0 or higher
git --version     # Should show git version
```

## Installation

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the frontend directory
cd CSTYP-FRONTEND/utopia-craft
```

### Step 2: Choose Your Package Manager

You can use either npm or Bun (Bun is faster but npm is more widely supported):

#### Option A: Using npm (Recommended)

```bash
# Install all dependencies
npm install
```

#### Option B: Using Bun (Faster Alternative)

```bash
# Install all dependencies with Bun
bun install
```

### Step 3: Verify Installation

After installation, verify that all packages were installed correctly:

```bash
# Check if node_modules directory was created
ls -la node_modules

# Verify main dependencies
npm list react react-dom typescript vite
```

## Project Setup

### Environment Configuration

1. **Create environment file (if needed):**
   ```bash
   # Copy environment template (if it exists)
   cp .env.example .env.local
   ```

2. **Configure development settings:**
   The project is pre-configured to run on `http://localhost:8080`

### Initial Build Test

Test that everything is set up correctly:

```bash
# Test build process
npm run build

# If successful, you should see a 'dist' folder created
ls -la dist/
```

## Development

### Starting the Development Server

#### Using npm:
```bash
npm run dev
```

#### Using Bun:
```bash
bun run dev
```

### Accessing the Application

Once the server starts, you'll see output similar to:

```
  VITE v5.4.19  ready in 1200 ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.1.100:8080/
  ➜  press h to show help
```

Open your browser and navigate to:
- **Local access:** http://localhost:8080
- **Network access:** Use the network URL shown in your terminal to access from other devices

### Development Features

- **Hot Module Replacement (HMR):** Changes are instantly reflected in the browser
- **TypeScript Support:** Full type checking and IntelliSense
- **ESLint Integration:** Code quality checks on save
- **Tailwind CSS:** Utility-first styling with JIT compilation

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

### Detailed Script Explanations

#### Development Server
```bash
npm run dev
```
- Starts Vite development server
- Enables hot module replacement
- Runs on `http://localhost:8080`
- Automatically opens in browser (optional)

#### Production Build
```bash
npm run build
```
- Creates optimized production build
- Output goes to `dist/` directory
- Minifies and optimizes all assets
- Performs type checking

#### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally
- Useful for testing before deployment
- Runs on a different port than dev server

#### Linting
```bash
npm run lint
```
- Runs ESLint on all TypeScript/JavaScript files
- Checks for code quality issues
- Enforces coding standards

## Project Structure

```
utopia-craft/
├── public/                 # Static assets
│   ├── placeholder.svg    # Placeholder images
│   └── robots.txt         # SEO robots file
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── AuthLayout.tsx
│   │   ├── DarkModeToggle.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Profile.tsx
│   │   ├── Jobs.tsx
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── App.css           # Global styles
│   ├── App.tsx           # Main app component
│   ├── index.css         # Tailwind CSS imports
│   ├── main.tsx          # React entry point
│   └── vite-env.d.ts     # Vite type definitions
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── eslint.config.js      # ESLint configuration
└── README.md            # This file
```

## Technologies Used

### Core Framework
- **React 18.3.1** - UI library with hooks and concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Fast build tool and dev server

### UI Components & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Headless, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon library

### State Management & Data Fetching
- **TanStack Query 5.83.0** - Powerful data synchronization
- **React Hook Form 7.61.1** - Performant forms with easy validation
- **Zod 3.25.76** - TypeScript-first schema validation

### Routing & Navigation
- **React Router DOM 6.30.1** - Declarative routing for React

### Development Tools
- **ESLint** - Code linting and quality checks
- **React DevTools** - Browser extension for debugging
- **PostCSS** - CSS processing and optimization

### Additional Libraries
- **Axios 1.12.2** - HTTP client for API requests
- **date-fns 3.6.0** - Modern JavaScript date utility library
- **Recharts 2.15.4** - Composable charting library

## Configuration

### Vite Configuration

The project uses a custom Vite configuration (`vite.config.ts`):

```typescript
export default defineConfig({
  server: {
    host: "::",      // Listen on all network interfaces
    port: 8080,      # Development server port
  },
  plugins: [react()],  // React plugin with SWC
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Path alias
    },
  },
});
```

### Path Aliases

The project uses `@` as an alias for the `src/` directory:

```typescript
// Instead of: import { Button } from '../../../components/ui/button'
import { Button } from '@/components/ui/button'
```

### TypeScript Configuration

- **Strict mode enabled** for better type safety
- **Path mapping** configured for cleaner imports
- **React JSX** support enabled

## Troubleshooting

### Common Issues and Solutions

#### Port 8080 Already in Use
```bash
# Kill process using port 8080
sudo lsof -ti:8080 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

#### Node Version Issues
```bash
# Check Node version
node --version

# If version is too old, update Node.js
nvm install --lts
nvm use --lts
```

#### Permission Errors (Linux/macOS)
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

#### Clear Cache Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for ESLint errors
npm run lint

# Clean build
rm -rf dist && npm run build
```

### Development Tips

1. **Use TypeScript:** Take advantage of type checking for better development experience
2. **Follow ESLint rules:** Run `npm run lint` before committing
3. **Use the path alias:** Import from `@/` instead of relative paths
4. **Test builds:** Regularly run `npm run build` to catch production issues early
5. **Check browser console:** Look for any runtime errors or warnings

## Contributing

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Run linting:** `npm run lint`
5. **Test build:** `npm run build`
6. **Commit changes:** `git commit -m 'Add amazing feature'`
7. **Push to branch:** `git push origin feature/amazing-feature`
8. **Open a Pull Request`

### Development Workflow

```bash
# 1. Start development server
npm run dev

# 2. Make changes to your code
# 3. Check for linting errors
npm run lint

# 4. Test production build
npm run build

# 5. Preview production build
npm run preview

# 6. Commit and push changes
git add .
git commit -m "Your commit message"
git push
```

---

## Support

If you encounter any issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Ensure all prerequisites are properly installed
3. Verify your Node.js version is 18.0.0 or higher
4. Try clearing cache and reinstalling dependencies

For additional help, please refer to the official documentation:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

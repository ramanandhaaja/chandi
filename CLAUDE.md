# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application 
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 conference website for CHANDI 2025, built with the App Router pattern and TypeScript.

### Key Technologies
- Next.js 15 with App Router
- React 19
- TypeScript 5
- Tailwind CSS 4
- Mux for video streaming
- Axios for API calls

### Project Structure

**Pages (App Router)**:
- `/` - Homepage with hero, about, speakers sections
- `/news_updates` - Photo galleries and press releases
- `/speakers` - Speaker profiles grid
- `/register` - Registration forms with different user types
- `/maps` - Google Maps integration with hotel locations
- `/resources` - Document downloads
- `/stream/[playbackId]` - Mux video streaming
- `/showcase` - Gallery showcase

**Components Architecture**:
- Page-level components in `src/components/` (e.g., `HeroSection.tsx`, `AboutSection.tsx`)
- Feature-specific components in subdirectories (e.g., `maps/`, `news_updates/`, `register/`)
- Common reusable components in `common/`

### Internationalization
The app supports bilingual content (English/Indonesian) through a custom language context system:
- `LanguageContext.tsx` provides language state management with localStorage persistence
- `TranslatedText.tsx` component handles translation lookups from data structures
- Language switching persists across sessions

### API Integration
- Custom API routes for Mux video streaming (`/api/create-stream`)
- Google Drive integration for image galleries (`/api/drive-images`)
- External CMS integration with Directus at `directus.codefoundry.online`

### Media Handling
- Extensive use of Next.js Image component with remote pattern allowlisting
- Video content served via Mux with React player integration
- Rich media assets organized in `/public/images/` by section

### Important Configuration
- TypeScript and ESLint build errors are ignored in production (`next.config.ts`)
- Custom font loading with Geist fonts and local fonts (Bella-Queta, Kunire-Grotesk)
- Tailwind configured for design system consistency
- Path aliases: `@/*` maps to `src/*`

### Content Management
- Translation data structures follow `{languages_code, ...fields}` pattern
- Heavy use of TypeScript interfaces for type safety
- Registration forms with multiple user categories (delegates, media, public, etc.)
# Smart Team Chat UI

A modern React-based team chat application prototype that demonstrates AI-enhanced communication features. Built with Next.js, TypeScript, and Tailwind CSS with a sophisticated purple/gray design theme.

## 🚀 Features

### Core Functionality
- **Chat List**: Browse and search through team conversations with elegant animations
- **Real-time Messaging**: Send and receive messages in conversation threads
- **New Chat Creation**: Start new conversations with team members and AI-generated icebreakers

### AI-Powered Features
- **Thread Summarization**: AI-generated summaries of conversation threads
- **Smart Reply Suggestions**: Context-aware reply recommendations
- **Icebreaker Generation**: AI-powered conversation starters for new chats

### Design Highlights
- **Modern Purple Theme**: Sophisticated purple and gray color palette with gradient accents
- **Smooth Animations**: Fade-in effects, slide transitions, and hover animations
- **Glass Morphism**: Backdrop blur effects and translucent elements
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: WCAG AA compliant with proper contrast ratios
- **Type Safety**: Full TypeScript implementation for robust development

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens and animations
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useEffect)
- **Animations**: Custom CSS animations and Tailwind transitions

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles, design tokens, and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main application page with enhanced UI
├── components/
│   ├── chat/
│   │   ├── ai-features.tsx      # AI functionality components
│   │   ├── chat-header.tsx      # Chat window header
│   │   ├── chat-list.tsx        # Enhanced conversation list with animations
│   │   ├── chat-list-item.tsx   # Individual chat item
│   │   ├── chat-window.tsx      # Main chat interface with gradients
│   │   ├── message-bubble.tsx   # Enhanced message display with shadows
│   │   ├── message-input.tsx    # Message composition
│   │   └── new-chat-form.tsx    # New conversation form
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── mock-data.ts         # Sample data for development
│   └── utils.ts             # Utility functions
└── types/
    └── chat.ts              # TypeScript type definitions
\`\`\`

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm package manager

### Quick Setup

1. **Install using v0's recommended method**
   \`\`\`bash
   # Use the shadcn CLI for easy setup
   npx shadcn@latest init
   \`\`\`

2. **Or download and install manually**
   \`\`\`bash
   # Download the ZIP from v0
   # Extract to your desired directory
   cd smart-team-chat-ui
   
   # Install dependencies
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Alternative Setup Methods

**GitHub Integration:**
- Click the GitHub button in v0 to push directly to your repository
- Clone from GitHub and follow standard Next.js setup

**Vercel Deployment:**
- Click "Publish" in v0 for instant deployment
- Or connect your GitHub repo to Vercel for continuous deployment


## Deployment Options

### Vercel (Recommended - One Click)
1. Click "Publish" in the v0 interface
2. Your app will be deployed instantly with a live URL

### GitHub + Vercel
1. Click the GitHub button in v0 to push to repository
2. Connect repository to Vercel for automatic deployments

### Manual Deployment
1. Download ZIP from v0
2. Extract and push to your preferred Git hosting
3. Deploy to Vercel, Netlify, or other Next.js-compatible platforms

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS v4, and modern design principles.**

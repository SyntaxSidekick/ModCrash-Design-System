
# ModCrash Design System

An enterprise-grade design system for the ModCrash creator-tech ecosystem. Built with React, TypeScript, and Tailwind CSS, featuring a comprehensive component library, design tokens, motion system, and accessibility guidelines.

## 🎮 About ModCrash

ModCrash is a modern creator-tech ecosystem focused on:
- Gaming culture and streaming
- AI tools for creators
- PC builds and setups
- UX/UI design for games and apps
- Developer and creator workflows

This design system reflects a high-end tech brand with gaming energy, professional polish, and a creator-focused approach.

## ✨ Features

- **Complete Component Library** - 40+ production-ready React components built with Radix UI and shadcn/ui
- **Design Tokens** - Scalable system for colors, typography, spacing, shadows, and motion
- **Dark Mode First** - Beautiful dark theme with light mode support
- **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Responsive Design** - Mobile-first approach with fluid layouts
- **Motion System** - Smooth animations and micro-interactions using Framer Motion
- **TypeScript** - Fully typed components for better developer experience
- **Documentation** - Interactive showcase with real-world examples and use cases

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The design system will be available at `http://localhost:5173`

### Build for Production

Generate a static build for deployment:

```bash
npm run build
```

The production files will be output to the `dist/` directory.

## 📦 Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── modcrash/         # Custom ModCrash components
│   │   │   ├── pages/             # Design system documentation pages
│   │   │   ├── ui/                # Core component library (shadcn/ui)
│   │   │   └── Navigation.tsx     # Main navigation component
│   │   └── App.tsx                # Root application component
│   ├── styles/
│   │   ├── globals.css            # Global styles and resets
│   │   ├── theme.css              # Design tokens and CSS variables
│   │   └── fonts.css              # Font definitions
│   └── main.tsx                   # Application entry point
├── guidelines/                    # Design guidelines documentation
└── dist/                          # Production build output
```

## 🎨 Design System Pages

The design system includes comprehensive documentation across multiple pages:

1. **Cover** - Brand identity and introduction
2. **Colors** - Color palette, tokens, and usage guidelines
3. **Typography** - Type scale, font system, and text styles
4. **Spacing** - Spacing scale and layout principles
5. **Components** - Interactive component showcase
6. **Patterns** - Common UI patterns and compositions
7. **Motion** - Animation guidelines and examples
8. **Dark Mode** - Theme switching and dark mode implementation
9. **Accessibility** - Accessibility standards and best practices
10. **Use Cases** - Real-world application examples

## 🛠️ Technology Stack

- **React 18** - Component framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Component collection
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Material-UI** - Additional components and icons

## 🎯 Component Library

The design system includes a comprehensive set of components:

### Core Components
- Buttons, Inputs, Checkboxes, Switches, Radio Groups
- Select Menus, Dropdowns, Combobox
- Sliders, Progress Bars, Tabs
- Tooltips, Popovers, Dialogs, Sheets

### Layout Components
- Navigation, Sidebar, Breadcrumbs
- Cards, Accordions, Collapsible
- Separators, Scroll Areas, Resizable Panels

### Content Components
- Tables, Badges, Avatars
- Alerts, Toasts (Sonner)
- Calendars, Date Pickers
- Charts and Data Visualization

### Advanced Components
- Command Palette (⌘K)
- Context Menus, Dropdown Menus
- Hover Cards, Carousels
- Form Components with Validation

## 🎨 Design Tokens

The design system uses CSS variables for consistent theming:

- **Colors** - Primary, secondary, accent, functional colors
- **Typography** - Font families, sizes, weights, line heights
- **Spacing** - 4pt grid system (2, 4, 8, 12, 16, 24, 32, 48, 64, 96)
- **Shadows** - Elevation system for depth
- **Radius** - Border radius scale
- **Motion** - Animation timing and easing curves

## 🌙 Dark Mode

Dark mode is the primary theme, with full support for:
- Automatic theme detection
- Manual theme switching
- Persistent theme preference
- Optimized contrast ratios

## ♿ Accessibility

All components follow accessibility best practices:
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Focus management and visible focus states
- ARIA labels and semantic HTML
- Screen reader compatibility
- Color-blind safe palettes

## 📄 License

Copyright © 2026 ModCrash LLC. All rights reserved.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This design system includes components from [shadcn/ui](https://ui.shadcn.com/) used under the [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for full third-party attribution details.

## 🚀 Deployment

This design system is optimized for static hosting on platforms like:
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

The `dist/` folder contains all necessary files for deployment.

## 🤝 Contributing

This is a design system for the ModCrash ecosystem. For questions or contributions, please refer to the project guidelines.

---

Built with ❤️ for creators by ModCrash
  
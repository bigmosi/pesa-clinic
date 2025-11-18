# clinicPesa Dashboard

A modern, mobile-first React dashboard implementation for clinicPesa, built with TypeScript, Tailwind CSS, and reusable component architecture.

## Features

- **Top Bar**: Dark blue header with app name, navigation icons, and time-based personalized greeting
- **Savings Card**: Displays balance with toggle visibility, frequency, autosave amount, and action buttons
- **Navigation Tabs**: Account Options, Invest, and Transactions with visual indicators and yellow active indicator
- **Action Cards**: Four main actions - Pay Medical Bill, Get Loan, Join MaMas, and My Approvals
- **Responsive Design**: Mobile-first approach with smooth transitions and interactions
- **Reusable Components**: Modular component architecture for easy maintenance and extension

## Tech Stack

- **React 19** with **TypeScript**
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **shadcn/ui** utilities (class-variance-authority, clsx, tailwind-merge)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bigmosi/pesa-clinic.git
cd clinicPesa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
clinicPesa/
├── src/
│   ├── components/
│   │   ├── TopBar.tsx          # Header with navigation
│   │   ├── SavingsCard.tsx     # Balance and savings information
│   │   ├── Tabs.tsx            # Navigation tabs container
│   │   ├── TabButton.tsx       # Reusable tab button component
│   │   ├── ActionCards.tsx     # Action cards container
│   │   ├── ActionCard.tsx      # Reusable action card component
│   │   ├── ActionButton.tsx    # Reusable action button component
│   │   ├── Badge.tsx           # Reusable badge component
│   │   └── Footer.tsx          # Footer with T&Cs
│   ├── pages/
│   │   └── dashboard.page.tsx   # Main dashboard page
│   ├── types/
│   │   └── interfaces.type.ts  # TypeScript interfaces and types
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn helper)
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles and Tailwind directives
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies and scripts
```

## Component Architecture

### Reusable Components

The project follows a modular architecture with reusable components:

- **ActionCard**: Reusable card component for action items with icon and label
- **ActionButton**: Reusable button component with icon and label, supports rounded corners
- **Badge**: Reusable badge component for labels (e.g., "Savings")
- **TabButton**: Reusable tab button with active state and yellow indicator

### Page Components

- **DashboardPage**: Main dashboard page (`dashboard.page.tsx`) containing all dashboard sections

### Type Definitions

All TypeScript interfaces are centralized in `src/types/interfaces.type.ts`:
- `ActionCardProps`
- `ActionButtonProps`
- `BadgeProps`
- `TabButtonProps`
- `ActionItem`

## Component Details

### TopBar
- Displays clinicPesa branding
- Navigation icons (back chevron and close X) in yellow
- Time-based personalized greeting (Good Morning/Afternoon/Evening/Night)
- Dark blue background with rounded bottom corners

### SavingsCard
- Balance display with toggle visibility (eye icon)
- Savings badge positioned at top-left corner
- Frequency and AutoSave information with semibold values
- Deposit and Share Medical action buttons with icons

### Tabs
- Three main navigation tabs (ACCOUNT OPTIONS, INVEST, TRANSACTIONS)
- Visual indicators (dots) above tabs showing active state
- Active tab highlighting with yellow rounded indicator bar
- Uses ARIA roles for accessibility (`role="tablist"` and `role="tab"`)

### ActionCards
- Grid layout (2x2 on mobile, 4 columns on larger screens)
- Four main actions with blue icons
- Hover and active states for better UX
- No background circles on icons

### Footer
- Terms and Conditions link
- Centered at the bottom of the page

## Design System

### Colors
- **Primary Blue**: `#1e3a5f` - Used for text, icons, and primary elements
- **Yellow Accent**: `yellow-400` - Used for active states and navigation icons
- **Background**: White for main content, light gray (`gray-50`) for sections below tabs

### Typography
- Tab labels: `text-sm` with semibold weight
- Balance: Large, bold text in primary blue
- Action labels: Small to medium text with semibold weight

### Icons
- All icons use `strokeWidth={1.5}` for consistent thin appearance
- Icons are colored in primary blue (`#1e3a5f`)
- Navigation icons in TopBar are yellow for visibility on dark background

## Styling

The project uses Tailwind CSS with custom color variables for theming. The main brand color is `#1e3a5f` (dark blue), used throughout the interface.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Live Demo

🌐 **Live Application**: [https://pesaclinic.netlify.app/](https://pesaclinic.netlify.app/)

## Repository

GitHub: https://github.com/bigmosi/pesa-clinic.git

## License

This project is part of a technical assignment.

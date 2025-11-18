# clinicPesa Dashboard

A modern, mobile-first React dashboard implementation for clinicPesa, built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Top Bar**: Dark blue header with app name, navigation icons, and personalized greeting
- **Savings Card**: Displays balance with toggle visibility, frequency, autosave amount, and action buttons
- **Navigation Tabs**: Account Options, Invest, and Transactions with visual indicators
- **Action Cards**: Four main actions - Pay Medical Bill, Get Loan, Join MaMas, and My Approvals
- **Responsive Design**: Mobile-first approach with smooth transitions and interactions

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
git clone <repository-url>
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
│   │   ├── Tabs.tsx            # Navigation tabs
│   │   ├── ActionCards.tsx     # Four action buttons
│   │   └── Footer.tsx          # Footer with T&Cs
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

## Component Details

### TopBar
- Displays clinicPesa branding
- Navigation icons (back arrow and close)
- Personalized greeting message

### SavingsCard
- Balance display with toggle visibility (eye icon)
- Savings badge
- Frequency and AutoSave information
- Deposit and Share Medical action buttons

### Tabs
- Three main navigation tabs
- Visual indicators (dots) above tabs
- Active tab highlighting with yellow underline

### ActionCards
- Grid layout (2x2) for four main actions
- Each card has an icon, colored background, and label
- Hover and active states for better UX

### Footer
- Terms and Conditions link
- Centered at the bottom of the page

## Styling

The project uses Tailwind CSS with custom color variables for theming. The main brand color is `#1e3a5f` (dark blue), used throughout the interface.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of a technical assignment.

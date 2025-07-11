# Technology Stack & Architecture

## Frontend
- **React**: Component-based UI
- **Tailwind CSS**: Utility-first styling, glassmorphism, dark mode, teal/dark grey palette

## Backend
- **Node.js/Express** (suggested): API server
- **MongoDB**: NoSQL database for tickets, users, assets, etc.
- **Resend**: Service for sending HTML emails
- **Snipe-IT API**: Integration for asset management, user/department data, and automation

## Authentication
- Mirror Snipe-IT roles: agents, admins, owners, customers
- Role-based access control

## Integrations
- Snipe-IT: Asset lookup, user/asset automation, dropdown population
- Email: Resend for notifications

## Scalability
- Modular, API-driven design
- Designed to replace Microsoft Planner/Power Automate flows 
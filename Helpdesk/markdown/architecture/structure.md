# Project Structure & Recent Changes (SageDesk)

## Directory Overview

```
helpdesk-v1/
  src/
    app/
      (admin)/
        layout.tsx         # Admin layout with sidebar/nav
        page.tsx           # Dashboard page
        tickets/           # Tickets UI (list, details, etc.)
        assets/            # Asset management UI
        users/             # User management UI
        knowledge-base/    # Knowledge base UI
        settings/          # Settings UI
      (full-width-pages)/
        (auth)/
          signin/          # Sign-in page (Snipe-IT only)
          layout.tsx       # Auth layout
      layout.tsx           # Root layout
    components/
      layout/              # AppSidebar, AppHeader, etc.
      auth/                # SignInForm, etc.
      ...
    icons/                 # All SVG icon components
  public/
    logo.svg               # Teal SageDesk logo
  tailwind.config.js       # Tailwind config (teal/dark grey, dark mode)

Helpdesk/markdown/
  architecture/
    structure.md           # (This file)
    stack.md               # Tech stack
    integration-snipeit.md # Snipe-IT integration
  roadmap/
    phased-ui-revamp.md    # UI revamp plan
    features.md            # Core features
    migration.md           # Migration plan

```

## Recent Changes
- Full UI rebrand: teal/dark grey palette, new logo, dark mode
- Sidebar and header refactored for SageDesk branding
- Navigation: Only Dashboard, Tickets, Assets, Users, Knowledge Base, Settings
- Sidebar 'Others' section and demo pages removed
- All main pages moved under (admin) for layout inheritance
- Duplicate pages outside (admin) deleted to fix routing
- Chart/dashboard demo pages removed (to be added later)
- Sign up, Google, and Twitter auth removed; Snipe-IT auth only
- Settings nav item now uses a gear/plug icon

## Teams & Ticket Segmentation

- Different teams (e.g., Employee Life Cycle team) will exist within SageDesk.
- Each team will have access only to specific ticket types/categories (e.g., job change, joiner, leaver).
- The UI will provide clear, differentiated sections and navigation for these ticket categories, ensuring teams only see/manage relevant tickets.
- This supports both access control and workflow clarity, and allows for future expansion to additional teams and categories.

## Notes
- All new UI pages are scaffolded and ready for feature buildout
- See phased-ui-revamp.md for the current plan and next steps 
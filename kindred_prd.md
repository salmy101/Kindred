src/
├── components/
│   ├── ui/                    # Shared/reusable components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── index.ts       # Export barrel
│   │   └── Modal/
│   │       ├── Modal.tsx
│   │       ├── Modal.module.css
│   │       └── index.ts
│   │
│   ├── layout/                # Layout components
│   │   ├── NavBar/
│   │   │   ├── NavBar.tsx
│   │   │   ├── NavBar.module.css
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   │   └── index.ts
│   │   └── Layout/
│   │       ├── Layout.tsx
│   │       ├── Layout.module.css
│   │       └── index.ts
│   │
│   └── common/                # Other shared components
│
├── pages/                     # Page components (route components)
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.module.css
│   │   └── index.ts
│   ├── Login/
│   │   ├── Login.tsx
│   │   ├── Login.module.css
│   │   └── index.ts
│   ├── Dashboard/
│   │   ├── Dashboard.tsx
│   │   ├── Dashboard.module.css
│   │   └── index.ts
│   └── Profile/
│       ├── Profile.tsx
│       ├── Profile.module.css
│       └── index.ts
│
├── hooks/                     # Custom React hooks
├── utils/                     # Helper functions
├── types/                     # TypeScript type definitions
├── services/                  # API calls, external services
├── assets/                    # Images, fonts, etc.
├── styles/                    # Global styles
│   ├── globals.css
│   └── variables.css
├── App.tsx
├── App.module.css
├── main.tsx
└── index.css
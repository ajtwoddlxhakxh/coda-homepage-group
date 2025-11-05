# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working Guidelines

**IMPORTANT:** Only implement changes that are explicitly requested by the user. Do not proactively modify code or add features. Provide suggestions and advice when asked, but wait for explicit confirmation before making any changes.

## Project Overview

This is the CODA homepage project - a React-based website for a university club/organization with both a public-facing homepage and an admin portal for managing recruitment applications.

## Repository Structure

The project uses a monorepo structure with frontend and backend combined:

```
my-app/
├── src/                    # React frontend source
├── public/                 # Static assets
├── backend/                # Express backend
│   ├── src/
│   │   ├── server.js       # Entry point
│   │   ├── routes/         # API routes (auth, public)
│   │   ├── models/         # Mongoose models
│   │   ├── middleware/     # Auth middleware
│   │   ├── utils/          # Helper functions
│   │   └── config/         # Swagger config
│   ├── scripts/            # Seed scripts
│   ├── .env.example        # Environment template
│   └── package.json        # Backend dependencies
└── package.json            # Frontend dependencies
```

## Development Commands

All development commands must be run from the `my-app/` directory:

**Frontend + Backend (recommended):**
```bash
cd my-app
npm run dev              # Start both frontend (port 3000) and backend (port 4001) concurrently
```

**Frontend only:**
```bash
cd my-app
npm start                # Start React dev server (port 3000)
npm run build            # Create production build
npm test                 # Run Jest test suite in watch mode
```

**Backend only:**
```bash
cd my-app/backend
npm run dev              # Start Express server (port 4001)
npm run start            # Production mode
npm run seed             # Seed admin pool data
npm run seed:admin       # Seed admin accounts
```

**Environment Setup:**
1. Copy `my-app/backend/.env.example` to `my-app/backend/.env`
2. Configure MongoDB URI and JWT secret
3. Install dependencies: `npm install` (in both `my-app/` and `my-app/backend/`)

## Architecture

### Routing Structure

The application uses React Router for client-side routing with two main areas:

1. **Public Pages** (defined in App.js:38-44):
   - `/` or index - Homepage (combines Sub_main + Sub_project + Sub_createby)
   - `/about` - About section
   - `/projects` - Projects showcase
   - `/recruitment` - Public recruitment information
   - `/contact` - Contact information

2. **Admin Portal** (defined in App.js:47-48):
   - `/admin/login` - Admin authentication
   - `/admin/recruit` - Recruitment management dashboard

### Component Organization

The codebase uses a flat component structure in `my-app/src/`:

**Public Components:**
- `Sub_main.js` - Main landing section with CODA acronym (CREATE, OBSERVE, DEVELOP, ACHIEVE) and floating images
- `Sub_project.js` - Projects display section
- `Sub_createby.js` - Team/developer credits section
- `Sub_recruitment.js` - Public recruitment information
- `Navbar.js` - Navigation bar (currently commented out in App.js:51)

**Admin Components:**
- `manage_login.js` - Admin login form with axios authentication
- `manage_recruit.js` - Admin dashboard for managing applications

Each component has a corresponding CSS file with the same base name.

### Backend API Structure

**Technology Stack:**
- Express.js server with ES modules (type: "module")
- MongoDB with Mongoose ODM
- JWT authentication (bcryptjs + jsonwebtoken)
- CORS enabled for cross-origin requests
- File upload handling (multer)
- Validation (Zod)
- Swagger UI API documentation at `/docs`

**API Routes:**
1. **Auth Routes** (`/auth/*`):
   - `POST /auth/login` - Admin login with JWT token generation
   - Protected with JWT verification middleware

2. **User Auth Routes** (`/user-auth/*`):
   - User authentication endpoints (separate from admin)

3. **Public Routes** (`/public/*`):
   - `GET /` - API status check
   - `GET /health` - Health check endpoint
   - `POST /applications` - Job application submission (email, name, purpose required)

4. **Admin Routes** (`/admin/*`):
   - Protected routes for managing applications
   - Requires Bearer token authorization

5. **Projects Routes** (`/projects/*`):
   - Project management endpoints

6. **Posts Routes** (`/posts/*`):
   - Content management for posts

7. **Members Routes** (`/members/*`):
   - Member management endpoints

8. **Club Info Routes** (`/club-info/*`):
   - Club information management

9. **Inquiries Routes** (`/inquiries/*`):
   - Inquiry and complaint handling

10. **Export Routes** (`/export/*`):
    - Data export functionality (Excel/Power Query integration)

**Database Models:**
- `Admin` - Admin user accounts
- `AdminPool` - Admin pool management
- `JobApplication` - Recruitment applications (status: pending/approved/rejected)
- `User` - Regular user accounts
- `AuditLog` - System audit trail for tracking changes
- `ClubInfo` - Club information and settings
- `Complaint` - User complaints and feedback
- `Member` - Club member profiles
- `Position` - Member positions/roles
- `Post` - Content posts and announcements
- `Project` - Project information and details
- `Recruit` - Recruitment campaign management

**Environment Variables** (see `backend/.env`):
- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 4001)
- `JWT_SECRET` - Secret key for JWT signing
- `JWT_EXPIRES_IN` - Token expiration time (default: 7d)
- `POWER_QUERY_API_KEY` - API key for Excel/Power Query integration

**Note:** Backend now includes an `uploads/` directory for file storage. Both `.env` and `uploads/` are in `.gitignore`.

### Frontend-Backend Integration

**Current State:** The application is hardcoded to render the Login component in index.js:14 instead of the App router. This suggests the project is in development/testing phase for the admin portal.

**API Integration:**
- Uses axios for HTTP requests
- Backend URL configured via `process.env.REACT_APP_API_URL`
- API specification documented in `admin-login-api.yaml` (OpenAPI 3.1.0)
- Login endpoint: `POST ${baseURL}/admin/login`
- Token stored in localStorage as 'authToken' (manage_recruit.js:17)
- API endpoints protected with Bearer token authorization headers

**Error Handling:**
- 401: Invalid credentials
- 404: Endpoint not found
- 429: Rate limit exceeded

### Key Technical Details

1. **State Management:** Uses React hooks (useState, useEffect) - no global state library
2. **HTTP Client:** axios configured in manage_login.js and manage_recruit.js
3. **Testing:** React Testing Library + Jest configured (setupTests.js imports @testing-library/jest-dom)
4. **Environment Variables:** Requires `REACT_APP_API_URL` for backend integration

### Known TODOs in Code

- App.js:14 - Make navbar conditionally visible for specific routes
- manage_login.js:7 - Implement withRouter and navigation after successful login
- manage_login.js:33 - Pass authentication data to other components

### Development Workflow

When switching between admin portal testing and full app:
- **Admin Only:** Keep `index.js:14` rendering `<Login />`
- **Full App:** Change `index.js:13-14` to render `<App />` instead

The Navbar component exists but is commented out in App.js:51, suggesting it should be conditionally rendered based on route.
# Copilot Instructions for E-Commerce Project

## Overview
- This is a full-stack e-commerce application with a clear separation between backend (Node.js/Express) and frontend (React/Vite).
- Backend handles API, authentication, admin, and data models. Frontend manages UI, routing, state, and API calls.

## Architecture & Key Patterns
- **Backend** (`backend/`):
  - Entry: `index.js` sets up Express, routes, and middleware.
  - API routes in `routes/`, controllers in `controllers/`, models in `models/`.
  - User authentication via JWT; see `userController.js` and `User.js`.
  - Environment config via `.env` (not committed).
- **Frontend** (`frontend/`):
  - Entry: `src/main.jsx` bootstraps React app.
  - Routing and page logic in `src/components/` (organized by feature: `auth/`, `cart/`, `admin/`, etc).
  - State management in `src/store/` (Redux-style reducers/actions).
  - API calls abstracted in `src/api/api.js`.
  - UI components are feature-scoped; shared components in `src/components/shared/`.

## Developer Workflows
- **Backend**:
  - Install: `cd backend && npm install`
  - Start: `npm run dev` (nodemon, see `package.json`)
  - Environment: copy `.env.example` to `.env` and fill in secrets.
- **Frontend**:
  - Install: `cd frontend && npm install`
  - Start: `npm start` (Vite dev server)
  - Main entry: `src/main.jsx`, main app: `src/App.jsx`

## Conventions & Practices
- Use feature-based folder structure for React components.
- Use Redux-style reducers/actions for state in `src/store/`.
- API endpoints are prefixed (e.g., `/api/users`, `/api/products`).
- Use `api.js` for all HTTP requests; do not call Axios directly in components.
- Admin features are under `components/admin/` and require authentication.
- Shared modals, loaders, and UI primitives are in `components/shared/`.
- Use `formatPrice.js` and `truncateText.js` for formatting in UI.

## Integration Points
- Frontend talks to backend via REST API (see `api.js` for base URL/config).
- JWT tokens are stored client-side (localStorage or cookies, see auth logic).
- Payment handled via `StripePayment.jsx` and `PaypalPayment.jsx`.

## Examples
- To add a new product: backend (`models/Product.js`, `controllers/productController.js`, `routes/productRoutes.js`), frontend (`components/admin/products/`).
- To add a new admin feature: place UI in `components/admin/`, backend logic in `controllers/` and `routes/`.

## References
- See `README.md` in root, `backend/`, and `frontend/` for more details.
- For new patterns, follow the structure of existing feature folders.

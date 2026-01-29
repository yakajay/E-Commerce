# E-Commerce

A full-stack E-Commerce web application with separate backend and frontend codebases.

## Project Structure

```
E-Commerce/
├── backend/    # Node.js/Express API, database models, authentication, etc.
├── frontend/   # React app, UI components, routing, state management, etc.
└── README.md
```

---

## Backend

- **Tech Stack:** Node.js, Express, MongoDB (or your DB), JWT Authentication
- **Features:**
  - User authentication (register, login, protected routes)
  - Product management (CRUD)
  - Order processing
  - Admin dashboard (manage products, orders, users)
- **Setup:**
  1. Navigate to the backend folder:
     ```sh
     cd backend
     ```
  2. Install dependencies:
     ```sh
     npm install
     ```
  3. Configure environment variables in `.env`
  4. Start the server:
     ```sh
     npm run dev
     ```

---

## Frontend

- **Tech Stack:** React, React Router, Context API/Redux, Axios
- **Features:**
  - Product listing and details
  - Shopping cart and checkout
  - User authentication (login/register)
  - Admin panel (for admins only)
- **Setup:**
  1. Navigate to the frontend folder:
     ```sh
     cd frontend
     ```
  2. Install dependencies:
     ```sh
     npm install
     ```
  3. Start the development server:
     ```sh
     npm start
     ```

---

## Usage

1. Start the backend server.
2. Start the frontend development server.
3. Visit `http://localhost:5103` in your browser.

---

## Folder Details

- **backend/**: All server-side code, API endpoints, models, controllers, and middleware.
- **frontend/**: All client-side code, React components, pages, and assets.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)
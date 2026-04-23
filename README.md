# Vendor-Web Application

**Project Title:** Design of Digital Empowerment System for Small Scale Vendor

Vendor-Web is a scalable website builder platform that empowers small business owners—like bakery shops, salons, catering services, restaurants, gyms, service centers, retail shops, and freelancers—to generate their own professional website simply by filling out a form and selecting from 20 beautifully crafted reusable template components.

## Tech Stack
- **Frontend:** React + Vite, Tailwind CSS, React Router, Framer Motion, Lucide React
- **Backend:** Node.js + Express, JSON File Storage
- **Architecture:** Modular, Component-based, REST API

## Core Features
1. **Clean SaaS Landing Page:** Modern hero section with smooth animations.
2. **Dynamic Vendor Form:** Collects shop details, contact info, category, and template preference.
3. **20 Unique Templates:** A rich selection of layouts including Minimal, Modern Card, Dark Theme, Sidebar, Mobile First, and Offer Highlights.
4. **WhatsApp Integration:** Built-in WhatsApp "Chat with us" redirect functionality for instant customer communication.
5. **Fully Responsive:** Mobile-responsive design applied across all generated templates.
6. **Deployment Ready:** Easily deployable to Vercel (Frontend) and Render (Backend).

## Folder Structure
```
vendor-web/
  ├── frontend/
  │   ├── src/
  │   │   ├── components/templates/ # 20 Dynamic Templates
  │   │   ├── pages/                # Home, VendorForm, VendorSite
  │   │   ├── App.jsx
  │   │   └── main.jsx
  │   └── tailwind.config.js
  ├── backend/
  │   ├── controllers/              # vendorController.js
  │   ├── data/                     # vendors.json
  │   ├── routes/                   # vendorRoutes.js
  │   └── server.js
```

## How to Run Locally

### 1. Start the Backend Server
Open a terminal and run the following:
```bash
cd backend
npm install
npm start
```
The Express server will be up and running on `http://localhost:5000`.

### 2. Start the Frontend App
Open a *new* terminal window:
```bash
cd frontend
npm install
npm run dev
```
The Vite development server will start (usually on `http://localhost:5173`).

### 3. Usage Guide
1. Open the frontend URL in your browser.
2. Click **Create Your Website**.
3. Fill out your business details and select your favorite template from the dropdown (1 to 20).
4. Click **Generate Website**. You will be instantly redirected to your dynamic, responsive business website!

## Deployment Notes
- **Frontend (Vercel):** Connect the repository to Vercel, set the Root Directory to `frontend`, and the Build Command to `npm run build`.
- **Backend (Render):** Deploy as a Web Service on Render. Set the Root Directory to `backend`, Build Command to `npm install`, and Start Command to `node server.js`.
*(Note: If deploying the backend to a read-only filesystem container, you may safely migrate the JSON storage logic to a MongoDB database in the future, as the controller pattern makes it easily swappable).*

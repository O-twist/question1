🛍️ Online Store – React.js Frontend

This project is a React.js web front-end for an online store. It uses the FakeStore API
 to fetch product data and display a product list with detail views.

🚀 Tech Stack

React.js with Vite (for fast development server + build tool)

React Router for navigation (list view → product detail view)

CSS / Flexbox for styling

Fetch API for retrieving data

📦 Installation & Setup

Clone or unzip the project folder

cd question1


Install dependencies

npm install


Start development server

npm run dev


Open the URL shown in the terminal (usually http://localhost:5173/).

🗂️ Project Structure
src/
 ├─ components/
 │   ├─ ProductList.jsx
 │   ├─ ProductCard.jsx
 │   └─ ProductDetail.jsx
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css


App.jsx → Main entry with routing setup

ProductList.jsx → Fetches & displays all products

ProductCard.jsx → Reusable UI card showing product image, title & price

ProductDetail.jsx → Displays details for a single product when clicked

🔄 Data Flow

App.jsx holds the routing logic.

ProductList fetches all products and stores state using useState.

Each ProductCard receives props (image, name, price).

Clicking a product navigates to ProductDetail, which fetches product info by ID.

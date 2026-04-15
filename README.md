# 📝 MERN ToDo App

A full-stack ToDo application built using the MERN stack (MongoDB, Express, React, Node.js).
It allows users to manage daily tasks with authentication and CRUD functionality.

---

## 🚀 Features

* User Authentication (JWT based)
* Create new tasks
* View all tasks
* Update task status (Completed / Pending)
* Delete tasks
* Filter tasks:

  * All
  * Completed
  * Pending

---

## 🛠️ Tech Stack

**Frontend**

* React
* CSS

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Authentication**

* JSON Web Token (JWT)

---

## 📂 Project Structure

ToDo-app/
├── client/ # React frontend
├── config/ # Database config
├── controllers/ # Business logic
├── middleware/ # Auth middleware
├── models/ # Mongoose models
├── routes/ # API routes
├── server.js # Entry point
└── .env # Environment variables (not included)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

git clone https://github.com/sankalp-02/ToDo-App.git
cd ToDo-App

---

### 2️⃣ Install backend dependencies

npm install

---

### 3️⃣ Setup environment variables

Create a `.env` file in root folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

### 4️⃣ Run backend

node server.js

---

### 5️⃣ Run frontend

cd client
npm install
npm start

---

## 🌐 API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Tasks

* GET /api/tasks
* POST /api/tasks
* PUT /api/tasks/:id
* DELETE /api/tasks/:id

---

## ⚠️ Important Notes

* Update `BASE_URL` in frontend before deployment
* Token is currently handled manually for testing
* `.env` file is not included for security reasons

---

## 📸 Screenshots

<img width="2877" height="1561" alt="image" src="https://github.com/user-attachments/assets/a20681dd-1917-4894-acb9-7c3ad8177d1b" />
<img width="2870" height="1564" alt="image" src="https://github.com/user-attachments/assets/5736692c-b858-4c50-9b41-d62140ae677e" />



---

## 📌 Future Improvements

* Add proper login/signup UI
* Store token securely (localStorage / cookies)
* Deploy frontend and backend
* Improve UI/UX

---

## 👨‍💻 Author

**Sankalp**


---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!

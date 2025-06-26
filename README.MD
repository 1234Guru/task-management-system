# 🚀 Task Management System

A modern full-stack task/job tracking application featuring user registration, authentication, job CRUD, and dashboard statistics. Built with **Angular 19.2 (stand-alone)** + **Node.js**, **Express**, **MySQL**, and **Docker**, ready for deployment.

---

## 🔍 What & Why

This project demonstrates a complete, real-world task management system:

- ✅ Secure user authentication with JWT
- ✅ Job/task CRUD with state-managed UI
- ✅ Responsive UI using Angular Material
- ✅ Containerized architecture with Docker
- ✅ Built for interviews & real-world scenarios

---

## 📁 Project Structure


task-management-system/
├── backend/ # Express API + JWT auth + MySQL
│ ├── src/
│ │ ├── controllers/ # Route handlers
│ │ ├── middleware/ # Auth & error handling
│ │ ├── models/ # MySQL queries
│ │ ├── routes/ # API routes
│ ├── app.js # Express app
│ └── Dockerfile
├── frontend/ # Angular 19 standalone app
│ ├── src/
│ │ ├── core/ # Auth, guards, layout
│ │ ├── features/ # Job components & stats
│ │ ├── shared/ # Services, interceptors
│ │ ├── environments/ # Dev + prod configs
│ └── Dockerfile
├── docker-compose.yml # Orchestrates backend, frontend, MySQL
└── README.md # You’re reading it 👇


---

---

## ⚙️ Local Setup with Docker

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Create `.env` in root:
   ```env
   JWT_SECRET=supersecret
   DB_HOST=mysql
   DB_USER=root
   DB_PASSWORD=root
   DB_NAME=jobtracker

3. Run the stack:
   docker-compose up --build

4. Endpoints:
   Frontend 👉 http://localhost:4200
   API 👉 http://localhost:3000/api
   MySQL UI 👉 http://localhost:8081 (root / root)

🧪 Run Tests:-
  Frontend (Karma + Jasmine):-
  cd frontend
  ng test
   Backend (Jest + Supertest):
  /////////
   cd backend
   npm test
  /////////


🗂 API Overview
| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| POST   | /api/auth/register | Register a new user       |
| POST   | /api/auth/login    | Login user, returns token |
| GET    | /api/jobs          | Get all jobs (auth)       |
| POST   | /api/jobs          | Create new job (auth)     |
| PUT    | /api/jobs/\:id     | Update job (auth)         |
| DELETE | /api/jobs/\:id     | Delete job (auth)         |



🎨 Features & Highlights
   🔒 JWT authentication with secure token handling

🧩 Angular Signals for reactive global state

   📦 HttpInterceptor to attach tokens to every request

   📊 Job CRUD with stat tracking

   📱 Responsive UI layout (70% job list, 30% job form)

   🚀 Angular Material UI

   🔐 Route guards (AuthGuard)

   🐳 One-command full Docker setup

   🧪 Complete backend & frontend testing

   🌐 Ready for CI/CD, Render deployment, GitHub versioning


📝 Scripts
| Component | Command               | Description                         |
| --------- | --------------------- | ----------------------------------- |
| Backend   | `npm run dev`         | Starts Node.js server in dev mode   |
|           | `npm test`            | Runs backend unit/integration tests |
| Frontend  | `ng serve`            | Runs Angular app locally            |
|           | `ng test`             | Runs frontend test suite            |
| Docker    | `docker-compose up`   | Build and start entire stack        |
|           | `docker-compose down` | Stop and remove containers          |

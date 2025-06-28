# 📚 Angular + Express Posts Viewer

A full-stack web app that fetches blog-style posts from the public [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API using a Node.js + Express backend and displays them with Angular Material UI.

---

## 🛠️ Tech Stack

- **Frontend**: Angular 17+, Angular Material, SCSS
- **Backend**: Node.js, Express
- **API**: [jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

---

## 🚀 Features

- ✅ Responsive layout (Header, Main Table, Footer)
- 🔍 API-based global search (via header input)
- 📄 Local client-side table filtering
- 📦 CORS-safe backend proxy
- 🛡️ Input validation on both client and server
- ✨ Clean and modern Material UI design

---

## 📁 Folder Structure

```
posts-app/
├── backend/         # Express API server
│   ├── app.js
│   ├── routes/posts.js
│   └── controllers/postsController.js
└── frontend/        # Angular app (ng new)
    └── src/app/
        ├── components/
        │   ├── header/
        │   ├── main/
        │   └── footer/
        ├── services/posts.service.ts
        └── app.component.ts/html
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/posts-app.git
cd posts-app
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev         # Starts Express on http://localhost:3000
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
ng serve            # Starts Angular on http://localhost:4200
```

---

## 🔄 API Proxy Logic

Frontend calls `http://localhost:3000/api/posts`, which internally fetches from:

```
GET https://jsonplaceholder.typicode.com/posts
```

Supports optional search via:

```
GET /api/posts?q=searchTerm
```

---

## 🧪 Example Usage

- Visit `http://localhost:4200/` to view all posts
- Type a phrase in the header (e.g. "sunt") → triggers API search
- Use the in-table search input → filters loaded data locally

---

## 📦 Prerequisites

- Node.js v18+
- Angular CLI → `npm install -g @angular/cli`
- (Optional) `nodemon` for backend development

---

## 💡 Development Tips

- 💥 To avoid double API calls on dev reload, use `ngOnInit()` or guard with a flag
- 🧪 Use `console.log()` to debug `ViewChild` availability in `AppComponent`
- 🖌️ Customize Material theme via `angular.json` and SCSS

---

## 📄 License

MIT – Free to use, modify, and learn from.

---

## ✍️ Author

**Your Name** — [@yourgithub](https://github.com/yourgithub)


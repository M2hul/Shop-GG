---

## ✅ Setup Progress

### 1. Monorepo Initialization

- [x] Initialized `package.json` in root
- [x] Enabled `npm workspaces`
- [x] Created `apps/` and `libs/` folders

### 2. Backend Setup (Node.js + Express)

- [x] Created backend app in `apps/backend`
- [x] Installed `express`
- [x] Basic server running on port `3000`
- [x] Sample route: `GET /api/hello`

### 3. Frontend Setup (Angular)

- [x] Angular CLI used to generate app in `apps/frontend`
- [x] Routing enabled
- [x] Style: SCSS
- [x] App served via `ng serve`

### 4. API Proxy Setup

- [x] Created `proxy.conf.json` in `apps/frontend`
- [x] Updated Angular `start` script to use proxy
- [x] Calls to `/api/*` are forwarded to backend

### 5. Dev Workflow

- [x] Installed `concurrently` at root
- [x] Root `npm run dev` starts both frontend and backend

---

## 🚀 Next Goals

| Priority | Task                          | Status |
| -------- | ----------------------------- | ------ |
| 🔜       | Convert backend to TypeScript | ☐      |
| 🔜       | Create shared `libs/` folder  | ☐      |
| 🔜       | Add basic CRUD endpoints      | ☐      |
| 🔜       | Create services on Angular    | ☐      |
| 🔜       | Add unit tests (Jest/Karma)   | ☐      |
| 🔜       | Dockerize both apps           | ☐      |
| 🔜       | Add CI/CD workflow            | ☐      |

---

## 📦 Tech Stack

- **Frontend**: Angular 17+
- **Backend**: Node.js + Express
- **Monorepo Tools**: npm workspaces, concurrently
- **Planned**: TypeScript backend, shared interfaces, Docker, CI/CD

---

## 🗒 Notes

- All commands are run from the root unless otherwise specified.
- Frontend runs on `http://localhost:4200`
- Backend runs on `http://localhost:3000`
- API route example: `http://localhost:4200/api/hello` (proxied)

---

## 👨‍💻 Author & Repo

- Created by: _Your Name_
- GitHub Repo: [your-repo-link]

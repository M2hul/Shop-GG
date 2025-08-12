---

# Shop-GG

## Overview
**Shop-GG** is an online marketplace dedicated to handmade and artisanal products.  
It provides a platform for creators, artists, and craftsmen to showcase and sell their unique, handcrafted items to a wider audience.  
Whether it’s wood carvings, hand-drawn artwork, pottery, jewelry, or other creative works, Shop-GG empowers individuals to turn their passion into a business.

## Key Features
- **Seller Registration & Storefront:** Creators can easily sign up, create their personal storefront, and list their products.  
- **Product Listings:** Upload product images, descriptions, prices, and availability.  
- **Category Browsing:** Buyers can browse products by categories such as woodwork, paintings, home décor, and more.  
- **Secure Transactions:** Integrated payment gateway for smooth and safe purchases.  
- **Search & Filters:** Powerful search and filtering to help buyers find exactly what they want.  
- **Reviews & Ratings:** Customers can leave feedback to help build trust for sellers.  
- **Responsive Design:** Fully optimized for both desktop and mobile devices.

## Technology Stack
- **Frontend:** Angular for a responsive, dynamic, and user-friendly interface.  
- **Backend:** Node.js with Express for robust API services and business logic.  
- **Database:** MongoDB / PostgreSQL for scalable data management.  
- **Hosting:** Deployed on a secure cloud environment for high availability and performance.

## Target Audience
- Independent artists and creators who want to sell their work online.  
- Customers seeking unique, handmade, and custom products.

## Goal
To build a trusted, user-friendly platform that bridges the gap between creators and customers, fostering a vibrant community for handmade goods.

---

## Concise Version

**Shop-GG** is an online marketplace for handmade and artisanal products, connecting creators with customers worldwide. From wood carvings and hand-drawn artwork to pottery, jewelry, and home décor, the platform empowers artisans to showcase their craftsmanship and sell directly to buyers. Built with **Angular** for a responsive frontend and **Node.js** for a scalable backend, Shop-GG offers secure transactions, easy product listing, category browsing, and mobile-friendly design — making it simple for creators to turn their passion into profit.

## ✅ Setup Progress

### 1. Monorepo Initialization ✅

- [x] Initialized `package.json` in root with npm workspaces
- [x] Enabled `npm workspaces` for `apps/*` and `libs/*`
- [x] Created `apps/` and `libs/` folder structure
- [x] Added `concurrently` for parallel development workflow
- [x] Configured development scripts for frontend and backend

**Commands used:**
```bash
# Root package.json setup with workspaces
npm init -y
# Updated package.json with workspaces configuration
npm install concurrently
```

### 2. Backend Setup (TypeScript + Express) ✅

- [x] Created backend app in `apps/backend`
- [x] Converted from JavaScript to TypeScript
- [x] Installed Express 4.18.2 with security middleware
- [x] Added dependencies: cors, helmet, dotenv, mongoose, bcryptjs, jsonwebtoken
- [x] TypeScript configuration with strict mode
- [x] Environment configuration with `.env` files
- [x] MongoDB database connection setup
- [x] User model with authentication (bcrypt password hashing)
- [x] Server running on port `3000` with health check endpoint

**Commands used:**
```bash
npx @angular/cli@17 new frontend --directory apps/frontend --routing --style=scss --skip-git --package-manager=npm
```

**Issues encountered & solutions:**
- ❌ **Express 5 + path-to-regexp conflict**: Newer Express versions had compatibility issues
  - 🔧 **Solution**: Downgraded to Express 4.18.2 and pinned path-to-regexp@6.2.1
- ❌ **TypeScript compilation errors**: Delete operator on non-optional properties
  - 🔧 **Solution**: Added proper type annotations in User model transform function

### 3. Frontend Setup (Angular 17) ✅

- [x] Angular 17 application generated in `apps/frontend`
- [x] Routing enabled with Angular Router
- [x] SCSS styling configured
- [x] Proxy configuration for API calls to backend
- [x] Development server integration with monorepo

**Commands used:**
```bash
npx @angular/cli@17 new frontend --directory apps/frontend --routing --style=scss --skip-git --package-manager=npm
```

**Issues encountered & solutions:**
- ❌ **Node.js version compatibility**: Angular 20 required Node.js 20+
  - 🔧 **Solution**: Used Angular 17 which is compatible with Node.js 18

### 4. Shared Types Library ✅

- [x] Created `libs/shared` package with TypeScript
- [x] Comprehensive type definitions for:
  - User interfaces (User, UserProfile, AuthResponse)
  - Product interfaces (Product, Category, ProductFilters)
  - Order interfaces (Order, OrderProduct, Address)
  - Review interfaces (Review)
  - API response types (ApiResponse, SearchRequest)
  - Authentication types (LoginRequest, RegisterRequest)
- [x] Shared across frontend and backend applications

### 5. Database Layer (MongoDB + Mongoose) ✅

- [x] MongoDB connection configuration
- [x] User model with schema validation
- [x] Password hashing with bcryptjs (salt rounds: 12)
- [x] Email and username uniqueness constraints
- [x] Schema indexes for performance
- [x] Environment variables for database URI
- [x] Connection error handling and graceful shutdown

### 6. Development Workflow ✅

- [x] Root `npm run dev` starts both frontend and backend concurrently
- [x] Frontend serves on `http://localhost:4200`
- [x] Backend API serves on `http://localhost:3000`
- [x] API proxy setup: `/api/*` routes forwarded from frontend to backend
- [x] TypeScript compilation and nodemon setup for backend hot reload

**Commands to run:**
```bash
# Start both applications
npm run dev

# Individual applications
npm run dev:frontend  # Angular on :4200
npm run dev:backend   # Express API on :3000
```

---

## 🚀 Next Development Steps

| Priority | Task                                        | Status | Description |
| -------- | ------------------------------------------- | ------ | ----------- |
| 🔥       | Core API Endpoints                          | ☐      | Authentication, Products, Users CRUD |
| 🔥       | Angular Services & HTTP Client             | ☐      | API integration services |
| 🔥       | Authentication System                       | ☐      | JWT tokens, login/register flow |
| 🔜       | Product Management UI                       | ☐      | Create, edit, list products |
| 🔜       | User Profile & Dashboard                    | ☐      | User management interface |
| 🔜       | Shopping Cart & Checkout                    | ☐      | Cart functionality |
| 🔜       | Payment Integration                         | ☐      | Stripe/PayPal integration |
| 🔜       | Image Upload & File Management              | ☐      | Product image handling |
| 🔜       | Search & Filtering                          | ☐      | Advanced product search |
| 🔜       | Testing Infrastructure                      | ☐      | Unit & integration tests |
| 🔜       | Dockerization                               | ☐      | Docker containers |
| 🔜       | CI/CD Pipeline                              | ☐      | GitHub Actions |
| 🔜       | Production Deployment                       | ☐      | Cloud hosting setup |

### Immediate Next Steps (Phase 1):

1. **Authentication API** (`/api/auth`)
   - `POST /api/auth/register` - User registration
   - `POST /api/auth/login` - User login
   - `POST /api/auth/refresh` - Token refresh
   - `GET /api/auth/me` - Get current user
   
2. **Products API** (`/api/products`)
   - `GET /api/products` - List products with pagination/filtering
   - `POST /api/products` - Create product (authenticated sellers)
   - `GET /api/products/:id` - Get single product
   - `PUT /api/products/:id` - Update product
   - `DELETE /api/products/:id` - Delete product

3. **Users API** (`/api/users`)
   - `GET /api/users/profile` - Get user profile
   - `PUT /api/users/profile` - Update user profile
   - `GET /api/users/:id/products` - Get user's products

4. **Angular Services**
   - AuthService with JWT handling
   - ProductService for CRUD operations
   - UserService for profile management
   - HTTP interceptors for authentication

---

## 📦 Current Tech Stack

### ✅ Implemented
- **Frontend**: Angular 17 with TypeScript, SCSS, Angular Router
- **Backend**: Node.js + Express 4.18.2 with TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: bcryptjs for password hashing, JWT tokens
- **Security**: Helmet, CORS middleware
- **Development**: npm workspaces, concurrently, nodemon
- **Types**: Shared TypeScript interfaces library

### 🔧 Development Tools
- **Package Manager**: npm with workspaces
- **Build Tools**: TypeScript compiler, Angular CLI
- **Code Style**: TypeScript strict mode
- **Environment**: dotenv for configuration
- **API Testing**: Express health check endpoints

### 🎯 Planned Integrations
- **Testing**: Jest (backend), Jasmine/Karma (frontend)
- **File Uploads**: Multer for image handling
- **Payments**: Stripe or PayPal integration
- **Email**: SMTP for notifications
- **Containerization**: Docker for deployment
- **CI/CD**: GitHub Actions
- **Hosting**: Cloud deployment (AWS/Vercel/Railway)

---

## 🗒 Development Notes

### 🚀 Getting Started
```bash
# Clone the repository
git clone <your-repo-url>
cd Shop-GG

# Install dependencies
npm install

# Start development servers (both frontend and backend)
npm run dev
```

### 🌐 Local Development URLs
- **Frontend**: `http://localhost:4200` (Angular dev server)
- **Backend API**: `http://localhost:3000` (Express server)
- **API via Proxy**: `http://localhost:4200/api/*` (proxied to backend)
- **Health Check**: `http://localhost:3000/api/health`

### 📁 Project Structure
```
Shop-GG/
├── apps/
│   ├── backend/              # Express TypeScript API
│   │   ├── src/
│   │   │   ├── config/       # Database connection
│   │   │   ├── models/       # Mongoose schemas
│   │   │   ├── index.ts      # Main server file
│   │   │   └── simple-index.ts # Simplified server
│   │   ├── dist/             # Compiled JavaScript
│   │   ├── .env              # Environment variables
│   │   └── package.json      # Backend dependencies
│   └── frontend/             # Angular 17 application
│       ├── src/app/          # Angular components
│       ├── proxy.conf.json   # API proxy configuration
│       └── package.json      # Frontend dependencies
├── libs/
│   └── shared/               # Shared TypeScript types
│       └── src/types.ts      # Interface definitions
├── package.json              # Root workspace config
└── PROJECT_DOC.md           # This documentation
```

### 🔧 Troubleshooting
- **Express path-to-regexp errors**: Use Express 4.18.2, avoid Express 5
- **Node.js compatibility**: Use Node.js 18+ for Angular 17 compatibility
- **MongoDB connection**: Ensure MongoDB is running or update connection string
- **Port conflicts**: Check if ports 3000 or 4200 are already in use

### 💡 Development Tips
- Run `npm run build` in backend to compile TypeScript
- Use `npm run dev:backend` or `npm run dev:frontend` to run individually
- Environment variables are loaded from `apps/backend/.env`
- All commands should be run from the root directory unless specified

---

## 🎯 Project Goals & Roadmap

### Phase 1: Core Foundation ✅ (Completed)
- [x] Monorepo setup with TypeScript
- [x] Angular frontend with routing
- [x] Express backend with security
- [x] MongoDB database integration
- [x] User authentication system
- [x] Shared type definitions

### Phase 2: Core Features (Next - 4-6 weeks)
- [ ] Authentication API endpoints
- [ ] Product CRUD operations
- [ ] User profile management
- [ ] Angular services and components
- [ ] Basic UI for login/register/products

### Phase 3: Advanced Features (6-10 weeks)
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] Image upload system
- [ ] Search and filtering
- [ ] Order management
- [ ] Reviews and ratings

### Phase 4: Production Ready (10-14 weeks)
- [ ] Comprehensive testing
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Cloud deployment

## 🎓 Learning Objectives

This project is designed to strengthen skills in:
- **Full-stack TypeScript development**
- **Modern Angular patterns and best practices**
- **RESTful API design with Express**
- **MongoDB database modeling**
- **Authentication and authorization**
- **Monorepo management**
- **Production deployment and DevOps**

## 👨‍💻 Author & Repository

- **Project**: Shop-GG Marketplace
- **Created by**: Mehul
- **Purpose**: Learning Angular and Node.js through building a real marketplace
- **Target**: Production-ready deployment for portfolio
- **GitHub**: [Add repository link when available]

---

**Last Updated**: August 2025  
**Current Status**: Foundation Complete ✅ - Ready for Core Feature Development 🚀

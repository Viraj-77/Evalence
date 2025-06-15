# Phase 1: Project Setup & Core Infrastructure

## Tasks
- [x] Confirm project structure (monorepo vs. separate repos)
- [x] Confirm tech stack for frontend (React + MUI?) and backend (NestJS + Prisma)
- [x] Confirm naming conventions for repos, folders, and services
- [x] Set up Git repository and `.gitignore`
- [x] Create `.env.example` for backend and frontend
- [x] Configure environment variable management (dotenv)
- [x] Set up Prettier and ESLint for both backend and frontend
- [x] Set up commit linting and pre-commit hooks
- [x] Add basic `README.md` with setup instructions
- [x] Set up Render PostgreSQL instance (get connection string)
- [x] Configure backend to connect to Render PostgreSQL
- [x] Set up Render Node.js backend service
- [x] Set up Render frontend service (React + MUI)
- [x] Configure CI/CD for both frontend and backend (Render deploy hooks)
- [x] Add codeowners and contribution guidelines

## Test Cases
- [x] Verify monorepo or repo structure matches agreed approach
- [x] Confirm `.env` files are loaded in both backend and frontend
- [x] Linting and formatting work for all code
- [x] Render PostgreSQL is accessible from backend
- [x] Both backend and frontend deploy successfully to Render
- [x] CI/CD pipeline triggers on push and deploys latest code

---

## Decision Log

### Decision: Project Structure, ORM, and Naming
**Date:** [Fill in date]
**Context:** Initial setup for Evalence platform
**Options Considered:**
1. Monorepo vs. separate repos
2. Prisma vs. TypeORM
3. Custom naming conventions vs. none

**Decision:**
- Use a monorepo for both frontend and backend
- Use Prisma as the ORM for the backend
- No specific naming conventions required

**Reasoning:**
- Monorepo simplifies code sharing and project management, and is well-supported by Render
- Prisma offers better type-safety, developer experience, and maintainability
- No naming conventions simplifies setup and onboarding

**Trade-offs:**
- Monorepo requires slightly more initial deployment configuration
- Prisma requires a code generation step and learning its schema language 

# Next Phases

Phase 2: Authentication & User Management
Backend
[x] Set up NestJS project structure
[x] Install and configure TypeORM/Prisma for PostgreSQL
[x] Create User entity/model
[x] Create migration for users table
[x] Implement password hashing (bcrypt)
[x] Create user registration endpoint
[x] Validate email format and uniqueness
[x] Validate password strength
[x] Store hashed password in DB
[x] Create login endpoint
[x] Implement JWT token generation
[x] Implement JWT refresh token logic
[x] Create logout endpoint (invalidate refresh token)
[x] Create password reset request endpoint
[x] Generate and store password reset token
[x] Send password reset email (ask for email provider/API key)
[x] Create password reset confirmation endpoint
[x] Implement token expiry logic
[x] Create user profile endpoint (GET/PUT)
[x] Implement role-based access middleware
[x] Create endpoints for role assignment (Admin only)
[x] Write unit tests for all endpoints
[x] Write integration tests for auth flows
[x] Add error handling for all endpoints
[x] Document all endpoints in Swagger
Frontend
[x] Set up React project structure
[x] Install MUI and configure theme
[x] Create login page UI
[x] Create registration page UI
[x] Create password reset request page UI
[x] Create password reset confirmation page UI
[x] Create user profile page UI
[x] Add form validation for all auth forms
[x] Connect forms to backend endpoints
[x] Store JWT in secure storage (httpOnly cookie/localStorage)
[x] Implement auth context/provider
[x] Implement protected routes (role-based)
[x] Show error messages for failed logins/invalid tokens
[x] Show success messages for registration/reset
[x] Add loading states to all forms
[x] Write unit tests for all components
[x] Write e2e tests for auth flows
DevOps/Config
[ ] Add .env.example for backend and frontend
[ ] Configure Render environment variables
[ ] Set up Render deploy hooks for backend
[ ] Set up Render deploy hooks for frontend
[ ] Add health check endpoint for backend
[ ] Add README instructions for auth setup
Test Cases
[ ] Register user and verify in DB
[ ] Login with valid/invalid credentials
[ ] JWT and refresh token flow works
[ ] Password reset flow works (email sent, token expires)
[ ] Role-based access control enforced
[ ] All auth pages render and validate correctly
[ ] All endpoints covered by unit/integration tests
Phase 3: Organization Structure & Team Management
Backend
[ ] Create Department entity/model
[ ] Create Team entity/model
[ ] Create migrations for departments and teams
[ ] Department CRUD endpoints (Admin only)
[ ] Team CRUD endpoints (Admin/HR)
[ ] Assign users to departments/teams endpoints
[ ] Implement manager-report chain (manager_id field)
[ ] Department head assignment logic
[ ] Org chart API endpoint
[ ] Add error handling for all endpoints
[ ] Write unit/integration tests for org structure endpoints
[ ] Document endpoints in Swagger
Frontend
[ ] Create department management UI (Admin)
[ ] Create team management UI (Admin/HR)
[ ] UI for assigning users to departments/teams
[ ] UI for manager-report chain
[ ] Org chart UI (Admin/HR/Manager)
[ ] Department head assignment UI
[ ] Add loading, error, and empty states
[ ] Write unit/e2e tests for org management
Test Cases
[ ] Create, update, delete departments/teams
[ ] Assign users to teams/departments
[ ] Assign and change department head
[ ] Org chart displays correct hierarchy
[ ] All endpoints and UI covered by tests
Phase 4: Goal/OKR Management
Backend
[ ] Create Goal entity/model
[ ] Create migration for goals table
[ ] Goal CRUD endpoints (team, individual)
[ ] Assign goals to teams/users endpoints
[ ] Tagging system (predefined, department-specific)
[ ] Progress tracking endpoints (comments, updates)
[ ] Goal filtering/search endpoints
[ ] Add error handling for all endpoints
[ ] Write unit/integration tests for goal endpoints
[ ] Document endpoints in Swagger
Frontend
[ ] Create goal management UI (Manager/Employee)
[ ] UI for assigning goals to teams/users
[ ] Tagging/filtering UI
[ ] Progress update/comment UI
[ ] Goal search/filter UI
[ ] Add loading, error, and empty states
[ ] Write unit/e2e tests for goal management
Test Cases
[ ] Create, update, delete goals
[ ] Assign goals to teams/users
[ ] Tag and filter goals
[ ] Progress updates/comments work
[ ] All endpoints and UI covered by tests
Phase 5: Continuous Feedback
Backend
[ ] Create Feedback entity/model
[ ] Create migration for feedback table
[ ] Feedback CRUD endpoints (text-only, single-message)
[ ] Feedback visibility logic (private/public)
[ ] Tagging system for feedback
[ ] File upload endpoint (Firebase Storage integration)
[ ] Real-time notifications (Socket.IO)
[ ] Add error handling for all endpoints
[ ] Write unit/integration tests for feedback endpoints
[ ] Document endpoints in Swagger
Frontend
[ ] Create feedback UI (give, view, filter feedback)
[ ] UI for feedback visibility (private/public)
[ ] Tagging/filtering UI
[ ] File upload UI (Firebase)
[ ] Real-time notification UI
[ ] Add loading, error, and empty states
[ ] Write unit/e2e tests for feedback
Test Cases
[ ] Give, view, and filter feedbac
[ ] File upload and retrieval works
[ ] Real-time notifications received
[ ] All endpoints and UI covered by tests
Phase 6: Performance Reviews (360°)
Backend
[ ] Create ReviewCycle, ReviewTemplate, ReviewAssignment, ReviewResponse entities/models
[ ] Create migrations for review tables
[ ] Review cycle CRUD endpoints (Admin only)
[ ] Review assignment logic (self, peer, manager, upward)
[ ] Review templates endpoints (configurable, reusable)
[ ] Review response endpoints
[ ] Anonymity rules for peer reviews
[ ] Reviewer workload dashboard endpoint
[ ] Add error handling for all endpoints
[ ] Write unit/integration tests for review endpoints
[ ] Document endpoints in Swagger
Frontend
[ ] Create review cycle management UI (Admin)
[ ] Review participation UI (all roles)
[ ] Review results/status UI
[ ] Reviewer workload dashboard UI (Manager/HR)
[ ] Add loading, error, and empty states
[ ] Write unit/e2e tests for reviews
Test Cases
[ ] Create, update, delete review cycles/templates
[ ] Assign and complete reviews (all types)
[ ] Anonymity rules enforced
[ ] Reviewer workload dashboard accurate
[ ] All endpoints and UI covered by tests
Phase 7: Analytics & Dashboards
Backend
[ ] Create analytics endpoints (team, department, employee)
[ ] Filtering endpoints (department, team, role, tag)
[ ] Export endpoints (CSV/PDF)
[ ] Add error handling for all endpoints
[ ] Write unit/integration tests for analytics endpoints
[ ] Document endpoints in Swagger
Frontend
[ ] Create dashboard UI (role-based views)
[ ] Filtering UI
[ ] Export UI (CSV/PDF)
[ ] Add loading, error, and empty states
[ ] Write unit/e2e tests for dashboards
Test Cases
[ ] Analytics endpoints return correct data
[ ] Filtering and export work as expected
[ ] Dashboards display correct data for each role
[ ] All endpoints and UI covered by tests
Phase 8: AI-Powered Features
Backend
[ ] Integrate Gemini API for peer review draft generator (ask for key)
[ ] Integrate Gemini API for self-assessment summarizer
[ ] Integrate Cohere API for smart search (ask for key)
[ ] AI-powered feedback sentiment scoring
[ ] Add error handling for all endpoints
[ ] Write unit/integration tests for AI features
[ ] Document endpoints in Swagger
Frontend
[ ] UI for AI-powered draft suggestions
[ ] UI for self-assessment summaries
[ ] UI for smart search
[ ] Add loading, error, and empty states
[ ] Write unit/e2e tests for AI features
Test Cases
[ ] AI draft suggestions work (with valid key)
[ ] Self-assessment summaries generated
[ ] Smart search returns relevant results
[ ] All endpoints and UI covered by tests
Phase 9: Branding, UI/UX, and Theming
Frontend
[ ] Use MUI (Material UI) for theming
[ ] Typography-based logo ("Evalence")
[ ] Color palette, spacing, and style inspired by Lattice.com
[ ] Responsive, accessible design
[ ] Custom icon set
[ ] Dark mode
[ ] Theme customization by Admin (optional)
[ ] Add loading, error, and empty states
[ ] Write unit/e2e tests for theming
Test Cases
[ ] All pages use correct theme/colors
[ ] Logo displays as typography
[ ] Responsive and accessible on all devices
[ ] Dark mode works
[ ] All UI covered by tests
Phase 10: Deployment, Monitoring, and Documentation
DevOps/Config
[ ] Backend deployment on Render (Node.js, PostgreSQL)
[ ] Frontend deployment on Render (or Vercel/Netlify if preferred)
[ ] Environment variable setup for all services
[ ] API documentation (Swagger/OpenAPI)
[ ] User/admin documentation (basic usage guides)
[ ] Monitoring and error alerting (Render, Sentry, or similar)
[ ] Automated backups for PostgreSQL
[ ] Health check endpoints
[ ] Blue/green deployment setup (optional)
[ ] Add README instructions for deployment/monitoring
Test Cases
[ ] Backend and frontend deploy successfully
[ ] All environment variables loaded correctly
[ ] API docs accessible and up to date
[ ] Monitoring/alerts trigger on error
[ ] Backups and health checks work 
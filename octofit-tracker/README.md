# OctoFit Tracker - Modern Multi-Tier Application

A comprehensive fitness tracking application built with modern web technologies.

## Architecture

This is a multi-tier application with the following structure:

```
octofit-tracker/
├── frontend/          # React 19 + Vite (Port 5173)
└── backend/           # Node.js + Express + TypeScript (Port 8000)
```

## Technology Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and development server
- **Port**: 5173

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Mongoose** - MongoDB object modeling
- **Port**: 8000

### Database
- **MongoDB** - NoSQL database
- **Port**: 27017

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB running on localhost:27017

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Access the application at `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend server will start on `http://localhost:8000`

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

**Backend:**
```bash
cd backend
npm run build
npm start
```

## API Endpoints

- `GET /api/health` - Health check endpoint

## Project Structure

### Frontend (`frontend/`)
- Standard Vite + React project structure
- Proxy configuration to backend API at `/api`

### Backend (`backend/`)
```
src/
├── index.ts          # Main application entry point
└── ...               # Additional modules to be added
```

## Development

Both frontend and backend support hot module reloading during development:

```bash
# Terminal 1: Frontend
cd frontend && npm run dev

# Terminal 2: Backend
cd backend && npm run dev
```

## Environment Variables

Create `.env` files as needed in frontend and backend directories.

### Backend `.env` example:
```
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
PORT=8000
```

## Next Steps

1. Set up MongoDB instance
2. Define data models and schemas
3. Create API routes for fitness tracking
4. Build frontend components
5. Implement user authentication


# Fullstack Chat – React + Node + MongoDB (Dockerized)

## Quick Start

```bash
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
docker compose up --build
```

- Frontend: http://localhost:3000  
- Backend:  http://localhost:5000/api/chat  
- MongoDB:  localhost:27017

## Dev Mode

```bash
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev
```

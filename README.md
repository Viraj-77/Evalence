# Evalence – AI-Driven Performance Review Platform

## Project Overview
Evalence is a modern, enterprise-ready platform for performance reviews, continuous feedback, and goal/OKR management. It leverages AI to streamline review cycles, provide actionable insights, and enhance employee engagement.

## AI Feature Highlights and Usage
- **Review Suggestions & Summaries:** Automated review text generation and sentiment analysis using Gemini API.
- **Smart Search:** Semantic search and recommendations powered by Cohere API.
- **Real-time Feedback:** Live notifications and feedback analysis.

## Setup Instructions
### Local Development
- See `backend/.env.example` and `frontend/.env.example` for required environment variables.
- Standard Node.js/NPM workflow for both frontend and backend.
- **Database:** Use a managed PostgreSQL instance from Render (or similar cloud provider). No local Postgres installation required. Set the `DATABASE_URL` in your `.env` file using the connection string from Render's dashboard.

### Production Deployment
- Railway.com setup for backend (Node.js)
- Vercel frontend (React + MUI).
- PostgreSQL instance on Render.

## Live Demo
- https://v0-evalence.vercel.app/

## Backend 
-https://railway.com/project/af9d4ec2-50e9-41f4-84d7-517bb0b04b57/service/e8650cca-aba3-42aa-891a-f0296b531061?environmentId=6d374118-d3f6-401a-86c2-733b90733f62

## Tech Stack & AI Integrations
- **Frontend:** React, Material UI, Lucide Icons
- **Backend:** NestJS, Prisma, PostgreSQL
- **AI/ML:** Gemini API, Cohere API

## Environment Setup
- See `.env.example` files in both `backend/` and `frontend/`.

Project remains heavily incomplete as I ran out of credits for 5 different AI's :(

---
_

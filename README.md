# AI Event Concierge Platform

A full-stack web application that allows users to describe an event in natural language and receive a structured event plan with venue, location, estimated cost, and reasoning.

---

## Features

- AI-generated event planning from natural language input
- Structured responses (venue, location, cost, justification)
- Persistent history of previous searches
- Clean and responsive UI with loading states

---

## Tech Stack

- Next.js (App Router), React, Tailwind CSS, ShadCN
- Next.js API routes
- Gemini / OpenAI API
- Prisma ORM with PostgreSQL / Supabase / Neon
- Zod for validation

---

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/veeral1603/louder_assignment
cd <louder_assignment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file:

```env
DATABASE_URL="your_database_url"
GEMINI_API_KEY="your_api_key"
```

### 4. Setup database

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run the app

```bash
npm run dev
```

Open http://localhost:3000

---

## Notes

- Ensure Prisma client is generated during deployment:

```json
"postinstall": "prisma generate"
```

---

## Objective

This project demonstrates full-stack integration of AI, including prompt design, structured output handling, persistence, and UI/UX.

---

## Author

Veeral Narang

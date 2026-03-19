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

## Prompt Design

The application uses a structured system prompt to ensure consistent and parseable AI responses. The model is instructed to return strict JSON without any additional text.

```
You are an AI Event Concierge.

Your job is to convert a user's natural language request into a structured event plan.

Return ONLY valid JSON. Do NOT include any explanation, markdown, no escape characters, or extra text.

The JSON format must be strictly as follows:

{
  "venue_name": string,
  "location": string,
  "estimated_cost": string,
  "why_it_fits": string,
  "success": boolean
}

Guidelines:
- Suggest realistic venues and locations
- Estimated cost currency must depend on input currency
- Keep cost within or close to the user's budget if mentioned
- Be concise but helpful
- "why_it_fits" should be 2 sentences max
- If some details are missing, make reasonable assumptions
- "success" = false if a valid plan cannot be generated

User request:
{{USER_INPUT}}

```

This prompt ensures:

- Predictable and structured output
- Minimal post-processing on the backend
- Reliable integration with the UI layer

---

## Objective

This project demonstrates full-stack integration of AI, including prompt design, structured output handling, persistence, and UI/UX.

---

## Author

Veeral Narang

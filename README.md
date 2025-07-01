# Université de Montréal Admin Dashboard

A modern full-stack admin dashboard for visualizing university ranking data, built with Next.js, TypeScript, tRPC, Tailwind CSS, Flowbite, and SQLite.

---

## 🚀 Overview

This dashboard displays the QS World University Rankings for Université de Montréal over the past 5 years, along with university profile information. It features a clean, responsive UI and leverages a modern tech stack for both frontend and backend.

---

## ✨ Features

- **Next.js App Router** for fast, scalable routing
- **TypeScript** for type safety across the stack
- **tRPC** for end-to-end typesafe API endpoints
- **Prisma + SQLite** for robust, local data storage
- **Tailwind CSS** for rapid, utility-first styling
- **Flowbite** for beautiful, pre-built UI components
- **Chart.js** (via `react-chartjs-2`) for interactive ranking charts
- **Fully responsive** and accessible design

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/arpittyagi102/task-for-qs
cd task-for-qs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the database

Generate the Prisma client and migrate the database:

```bash
npx prisma generate
npx prisma migrate deploy
```

### 4. Seed the database

Populate the database with university and ranking data:

```bash
npx tsx prisma/seed.ts
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

---

## 🧩 Key Implementation Details

## 📋 Assessment Requirements Checklist

- [X] Next.js (App Router)
- [x] TypeScript
- [x] tRPC API endpoints
- [x] Tailwind CSS
- [x] Flowbite UI components
- [x] SQLite (Prisma)
- [x] Chart for last 5 years' rankings
- [x] University profile info
- [x] Code quality & documentation
- [x] README with setup instructions

---

> _This project was developed as part of a technical assessment for QS._


### tRPC Endpoints

- `/api/trpc/getUniversityProfile` — Fetches university profile info
- `/api/trpc/getUniversityRankings` — Fetches last 5 years of ranking data

### Database Schema (Prisma)

```
model University {
  id          Int       @id @default(autoincrement())
  name        String
  country     String
  logoUrl     String
  description String
  rankings    Ranking[]
}

model Ranking {
  id           Int         @id @default(autoincrement())
  university   University  @relation(fields: [universityId], references: [id])
  universityId Int
  year         Int
  rank         Int

  @@unique([universityId, year])
}
```

### Flowbite & Tailwind

- Flowbite components (Button, Card, Alert) are used for a modern, consistent UI.
- Tailwind utility classes provide rapid, responsive styling.

### Chart Integration

- Ranking data is visualized using Chart.js, styled to match the dashboard theme.
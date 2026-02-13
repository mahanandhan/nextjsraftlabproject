# nextjsraftlabproject

🏏 Elite Player Analytics – Cricket SSR SEO Platform

A modern Server-Side Rendered (SSR) cricket analytics platform built with Next.js (App Router) that generates programmatic, SEO-optimized player profile pages using structured JSON data.

This project demonstrates:

Dynamic route generation

Server-side rendering (SSR)

Programmatic SEO pages

Structured data (JSON-LD)

OpenGraph metadata

Interactive performance analytics charts

Clean UI built with Tailwind CSS

🚀 Live Demo

👉 Deployed on Vercel
    https://cricketanalysis-sigma.vercel.app/

🛠 Tech Stack

Next.js 14 (App Router)

React

TypeScript

Tailwind CSS

Recharts (Performance visualization)

Lucide Icons

JSON-LD Structured Data

Vercel Deployment

📁 Project Structure
src/
 ├── app/
 │   ├── components/
 │   │   ├── PlayerCard.tsx
 │   │   └── PlayerStatsChart.tsx
 │   ├── players/
 │   │   └── [id]/
 │   │       └── page.tsx
 │   ├── layout.tsx
 │   ├── page.tsx
 │   └── globals.css
 │
 └── data/
     └── players.json

📊 Dataset

The project uses a structured JSON dataset located at:

src/data/players.json


Each player contains:

id

name

team

role

matches

runs

average

strikeRate

image

This data is used to dynamically generate SEO-friendly profile pages.

🧠 Architecture Overview
1️⃣ Homepage (app/page.tsx)

Client-side search and filtering

Player grid layout

Dynamic filtering by:

Name

Team

Role

Interactive UI with Tailwind styling

2️⃣ Dynamic Player Pages (app/players/[id]/page.tsx)

Each player page is:

Server-rendered

SEO-optimized

Metadata-driven

Structured-data enabled

Route example:

/players/1
/players/2

🔍 SEO Implementation

This project focuses heavily on SEO best practices.

✅ Dynamic Metadata

Implemented using:

export async function generateMetadata()


Each player page dynamically generates:

Unique <title>

Unique <meta description>

OpenGraph metadata

Dynamic social preview image

Example:

Virat Kohli - Stats & Profile

✅ JSON-LD Structured Data

Each player page includes Schema.org structured data:

{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Player Name",
  "jobTitle": "Role",
  "affiliation": "Team"
}


This improves search engine understanding and indexing.

✅ Clean Semantic HTML

Proper heading hierarchy (h1, h2)

Strong tags for statistical emphasis

Accessible layout structure

📈 Performance & Lighthouse

The application was tested using Lighthouse.

Key focus areas:

Reduced unnecessary client-side JavaScript

Server-rendered dynamic routes

Optimized component structure

Controlled animation usage

Optimized chart rendering

📊 Performance Analytics Chart

The PlayerStatsChart.tsx component:

Uses Recharts

Dynamically scales based on highest metric

Displays:

Total Runs

Batting Average

Strike Rate

Matches Played

Animated bars

Color-coded performance metrics

🔎 Filtering System

Homepage includes:

Live search

Role filtering dropdown

Memoized filtering logic using useMemo

Efficient state management

♿ Accessibility

Semantic labels

Focusable interactive elements

Accessible form inputs

Proper alt text for images

Structured heading hierarchy

🧪 Running Locally

Clone the repository:

git clone https://github.com/mahanandhan/nextjsraftlabproject

Install dependencies:

npm install


Run development server:

npm run dev


Visit:

http://localhost:3000

🚀 Deployment

Deployed using:

Vercel

To deploy:

vercel

🎥 Loom Walkthrough

In the Loom video, I explain:

Dataset selection reasoning

SSR architecture

Programmatic page generation

SEO metadata strategy

JSON-LD implementation

Performance optimizations

UI and design decisions

💡 Key Learnings

Building scalable programmatic SEO pages

Leveraging Next.js App Router for SSR

Dynamic metadata generation

Structured data implementation

Balancing UI richness with performance

👨‍💻 Author

Mahanandhan
GitHub: https://github.com/mahanandhan

LinkedIn: https://linkedin.com/in/mahanandhan
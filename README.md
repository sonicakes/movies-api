# 🎥 Movies API

This is a simple REST API built with **Node.js** and **Express**. It serves data for a list of movies containing title, year of production, director name, whether I watched it previously, am I likely to re-watch it, availability (Tubi, Mubi, Shudder, YouTube, Cinema or on local PC) and thematic royalty-free image made from AI-suggested prompts.

The idea is to create a db of all movies that I want to watch/have watched previously, as well as the ability to put movies in the queue a la Spotify queue. This is just for GET all movies request (no read/write) so I can practice DnD (Drag-and-drop) functionality with [React Dnd Kit](https://dndkit.com/). The playground is [here](https://github.com/sonicakes/movies-queue).

## 🛠 Features
- **Fast & Lightweight:** Built with Express.js.
- **Categorized Endpoints:** Access specific data for movies.
- **CORS Enabled:** Ready to be consumed by frontend frameworks like React, Vue, or Next.js.

---

## 💻 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Installation
Clone this repository and install the dependencies:
```bash
git clone [https://github.com/your-username/movies-api.git](https://github.com/your-username/movies-api.git)
cd movies-api
npm install
```

### 3. Running API locally
Run this in your terminal:
```bash
node index.js
```
# 🧠 SkillPath AI — Personalized Skill Assessment & Course Recommendation Platform

> An AI-powered web application that assesses your current skills and recommends the most relevant courses and learning paths tailored to your goals.

![JavaScript](https://img.shields.io/badge/JavaScript-47.2%25-F7DF1E?style=flat&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-32.8%25-1572B6?style=flat&logo=css3)
![TypeScript](https://img.shields.io/badge/TypeScript-17.7%25-3178C6?style=flat&logo=typescript)
![HTML](https://img.shields.io/badge/HTML-2.3%25-E34F26?style=flat&logo=html5)
![React](https://img.shields.io/badge/React-Vite-61DAFB?style=flat&logo=react)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat)

---

## 🔗 Live Demo

> 🌐 **[Add your deployed link here]** 

---

## 📸 Screenshots

> _(Screenshots yahan add karo — Home, Skill Assessment, Course Results page)_

| Home Page | Skill Assessment | Course Recommendations |
|-----------|-----------------|----------------------|
| ![Home](screenshots/home.png) | ![Assessment](screenshots/assessment.png) | ![Results](screenshots/results.png) |

---

## 📋 About The Project

**SkillPath AI** is a modern, AI-powered skill assessment and course recommendation platform built with React and Vite. Users answer a quick skill assessment, and the platform intelligently recommends the most relevant courses and learning paths based on their current skill level and career goals.

**Inspired by:** Platforms like Coursera, Udemy, and LinkedIn Learning — but smarter, with personalized AI-driven recommendations.

**Key Highlights:**
- Interactive skill assessment quiz covering multiple domains
- AI-based course recommendation engine matching skills to courses
- Clean, responsive UI built with React + Vite for blazing fast performance
- Real-time results — no page reload needed
- Mobile-first design working across all screen sizes

---

## ✨ Features

- ✅ **Skill Assessment** — Interactive quiz to evaluate current skill level across domains
- ✅ **AI Course Recommendations** — Suggests best-fit courses based on assessment results
- ✅ **Personalized Learning Path** — Step-by-step roadmap from current level to goal
- ✅ **Multiple Domains** — Web Development, AI/ML, Data Science, Cybersecurity, and more
- ✅ **Fast Performance** — Vite-powered build for instant loading
- ✅ **Responsive Design** — Seamless experience on mobile, tablet, and desktop
- ✅ **No Login Required** — Start assessment immediately, no signup needed

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend Framework | React 18 |
| Build Tool | Vite |
| Language | JavaScript + TypeScript |
| Styling | CSS3 (Custom + Responsive) |
| UI Components | Custom React Components |
| State Management | React Hooks (useState, useEffect) |
| Deployment | Vercel / Netlify _(add your link)_ |
| Version Control | Git & GitHub |

---

## 📁 Project Structure

```
SkillPath-AI/
│
└── Frontent/
    └── vite-project/
        ├── public/
        │   └── index.html
        │
        ├── src/
        │   ├── components/
        │   │   ├── Hero.jsx              # Landing page hero section
        │   │   ├── SkillAssessment.jsx   # Assessment quiz component
        │   │   ├── CourseCard.jsx        # Individual course card
        │   │   ├── Recommendations.jsx   # Results & recommendations
        │   │   └── Navbar.jsx            # Navigation bar
        │   │
        │   ├── data/
        │   │   ├── questions.js          # Assessment questions database
        │   │   └── courses.js            # Course database
        │   │
        │   ├── utils/
        │   │   └── recommendationEngine.js  # AI scoring & matching logic
        │   │
        │   ├── App.jsx                   # Main app component
        │   ├── main.jsx                  # Entry point
        │   └── index.css                 # Global styles
        │
        ├── package.json
        ├── vite.config.js
        └── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/tomerarvind195-byte/SkillPath-AI.git
cd SkillPath-AI/Frontent/vite-project

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🧠 How the Recommendation Engine Works

```
User starts Skill Assessment
          │
          ▼
Answers domain-specific questions
(Web Dev / AI / Data Science / etc.)
          │
          ▼
Scoring Engine calculates
skill level per domain (0–100%)
          │
          ▼
Matching Algorithm compares
skill score vs course requirements
          │
          ▼
Top courses ranked by:
  • Skill gap coverage
  • Relevance to user goal
  • Difficulty progression
          │
          ▼
Personalized learning path displayed
with recommended courses in order
```

---

## 🎯 Domains Covered

| Domain | Example Courses Recommended |
|--------|---------------------------|
| 🌐 Web Development | HTML/CSS Basics → Django → React → Full Stack |
| 🤖 AI / ML | Python → NumPy → ML Algorithms → Deep Learning |
| 📊 Data Science | Excel → SQL → Python → Data Visualization |
| 🔐 Cybersecurity | Networking → IAM → Ethical Hacking → SIEM |
| ☕ Programming | C → C++ → Java → Python → DSA |

---

## 🔮 Future Improvements ----

- [ ] **User Profiles** — Save assessment history and track progress
- [ ] **Django Backend** — Add Python/Django API for persistent data storage
- [ ] **MySQL Database** — Stor8e user assessments and course data
- [ ] **More Domains** — Add Cloud Computing, DevOps, Mobile Development
- [ ] **Progress Tracker** — Mark courses as completed and track learning journey
- [ ] **Dark Mode** — Toggle between light and dark themes

---

## 🚀 Deploy Your Own (Free)

### Deploy on Vercel (Recommended — 1 minute)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project folder
cd Frontent/vite-project
vercel

# Follow the prompts — your site will be live instantly!
```

### Deploy on Netlify

```bash
# Build the project
npm run build

# Drag & drop the 'dist' folder to netlify.com/drop
# Done! Your site is live.
```

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-domain`).
3. Add your changes.
4. Commit (`git commit -m 'Add Data Science domain questions'`).
5. Push and open a Pull Request and add the new changes.

---

## 👨‍💻 Author

**Arvind Kumar**
3rd Year B.Tech IT Student | Aspiring Software Engineer

- 🌐 [LinkedIn](https://www.linkedin.com/in/arvind-kumar-399a60338)
- 💻 [GitHub](https://github.com/tomerarvind195-byte)
- 📧 tomerarvind195@gmail.com
- 📧 arvind.it.24023@recb.ac.in

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⭐ Agar SkillPath AI helpful laga toh **star** zaroor karo — ek star bahut motivation deta hai! 🙏

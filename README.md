# Raghvendra Shah — Developer Portfolio

A modern, dark-themed developer portfolio built to showcase my projects, technical skills, achievements, and journey as a software developer.

## Live Demo

[Add your deployed portfolio URL here]

---

## About

I'm an Information Technology undergraduate passionate about building scalable software and solving real-world problems through technology. This portfolio serves as a central hub for my work, experience, achievements, and technical interests.

The website features a custom dark aesthetic inspired by modern developer portfolios, smooth animations, responsive design, project showcases, and a fully functional contact form powered by EmailJS.

---

## Features

* Responsive design for desktop, tablet, and mobile
* Smooth page transitions and animations using Framer Motion
* Project showcase with technology stacks and repository links
* Skills section with animated proficiency indicators
* Education, achievements, and extracurricular activities timeline
* Functional contact form with EmailJS integration
* Custom UI components and reusable architecture
* Dark-themed modern design system

---

## Tech Stack

| Technology      | Purpose            |
| --------------- | ------------------ |
| React           | Frontend Framework |
| Vite            | Build Tool         |
| Tailwind CSS v4 | Styling            |
| Framer Motion   | Animations         |
| EmailJS         | Contact Form       |
| React Scroll    | Smooth Navigation  |
| React Icons     | Icons              |

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Required EmailJS variables:

* from_name
* from_email
* subject
* message

Never commit your `.env` file to version control.

---

## Project Structure

```text
src/
├── components/
├── shared/
├── hooks/
├── data/
│   └── portfolioData.js
├── styles/
│   └── globals.css
└── App.jsx
```

---

## Customization

All portfolio content is centralized inside:

```text
src/data/portfolioData.js
```

Update this file to modify:

* Personal Information
* Projects
* Skills
* Achievements
* Activities
* Social Links
* Contact Details

---

## Deployment

### Vercel

1. Push repository to GitHub
2. Import project into Vercel
3. Add environment variables
4. Deploy

### Netlify

1. Connect repository
2. Configure environment variables
3. Build command:

```bash
npm run build
```

4. Publish directory:

```text
dist
```

---

## Contact

Email: [raghvendrashah21@gmail.com](mailto:raghvendrashah21@gmail.com)

LinkedIn: https://www.linkedin.com/in/raghvendra-shah

GitHub: https://github.com/raghav2556

LeetCode: https://leetcode.com/u/raghav2105/

---

Built with React, curiosity, and a commitment to continuous learning.

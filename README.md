# PhysioTrack - Physiotherapy Self-Assessment Platform

![Project Status](https://img.shields.io/badge/Status-MVP%20Delivered-success)
![Deployment](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)
![Stack](https://img.shields.io/badge/Tech-React%20%7C%20Redux%20%7C%20SPA-blue)

**Live Demo:** [Insert your Vercel Link Here]

## 📖 Overview
**PhysioTrack** is a Single Page Application (SPA) designed to digitize the physiotherapy assessment process. This project was built as a **technical prototype (MVP)** for a client to demonstrate a business concept for remote patient diagnosis.

The application guides patients through a structured self-assessment questionnaire, calculates health scores dynamically, and provides preliminary recommendations without requiring immediate doctor intervention.

## ⚡ Key Engineering Features
* **Complex State Management:** Utilized **Redux Toolkit** to manage multi-step form data, preserving patient inputs across different routes without a database.
* **Dynamic Scoring Algorithm:** Implemented client-side logic to process user answers in real-time and generate a specific "Health Score" and risk category.
* **Responsive UI:** Fully responsive layout built with **CSS Modules** ensuring accessibility across mobile and desktop devices.
* **SPA Navigation:** Seamless page transitions using **React Router v6**.

## 🛠️ Tech Stack
* **Frontend:** React.js (Vite)
* **State Management:** Redux Toolkit (RTK)
* **Routing:** React Router DOM
* **Styling:** CSS Modules / Vanilla CSS
* **Deployment:** Vercel

## 🏗️ Architecture Decision: Why no Backend?
As this is the **Minimum Viable Product (MVP)** designed for a stakeholder pitch, the architecture focuses on **frontend logic and user flow**.
* **Session Persistence:** Redux state is persisted during the session to simulate a live database experience.
* **Scalability:** The code is structured to easily integrate with a REST API (Node/Express) in the next development phase.

## 📸 Screenshots
*(Add screenshots of your app here to make the repo look professional)*

| Landing Page | Assessment Flow |
|:---:|:---:|
| ![Landing Page](path/to/screenshot1.png) | ![Assessment](path/to/screenshot2.png) |

| Score Dashboard |
|:---:|
| ![Dashboard](path/to/screenshot3.png) |

## 🚀 How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/](https://github.com/)[your-username]/[repo-name].git
    ```

2.  **Navigate to project directory**
    ```bash
    cd [repo-name]
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Start the development server**
    ```bash
    npm run dev
    ```

## 👤 Author
**[Your Name]**
* **Role:** Lead Frontend Engineer (Freelance)
* **Portfolio:** [Link to your Portfolio Website]
* **LinkedIn:** [Link to your LinkedIn]

---
*Note: This repository serves as a showcase of the frontend architecture delivered to the client.*
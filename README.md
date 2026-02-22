# 🩺 PulseNote – Digital Medical Record System

**PulseNote** is a clean, structured Digital Medical Record Management System built using React and Vite. It is designed to simulate how medical reports can be uploaded, processed, structured, and displayed in role-based dashboards for doctors and patients.

🔗 **Live Demo:**
https://YOUR_VERCEL_LINK_HERE

---

## 📌 Overview

PulseNote focuses on transforming unstructured medical report data into structured, readable summaries. The system is designed with a scalable architecture in mind, simulating real-world integration with OCR services and AI-based summarization.

This project currently implements the frontend with a production-ready architecture design for backend and AI services.

---

## ✨ Features

### 🏠 Landing Page

* Minimal and clean UI
* Navigation for Doctor and Patient views
* Clear system overview

### 👨‍⚕️ Doctor Dashboard

* View list of patients
* Access structured summaries
* Aggregated patient insights

### 🧑‍⚕️ Patient Dashboard

* View personal medical summary
* Organized health records
* Clean vitals and medication display

### 📊 Structured Summary View

* Diseases
* Medications with dosage and frequency
* Key vitals
* Precautions and follow-up actions

---

## 🏗 Architecture Overview

### High-Level System Design (Target Architecture)

User
↓
React Frontend (Vite)
↓ (HTTP + file upload)
Node.js / Express Backend (Planned)
↓
OCR Service (e.g., Tesseract / Cloud OCR)
↓
AI Summarization API (LLM)
↓
MongoDB (Medical Records Store)
↓
Doctor / Patient Dashboards

---

## 🤖 AI Output Design

Instead of returning unstructured text, the AI layer is designed to return structured JSON that maps directly to UI components.

Example structured output:

```json
{
  "diseases": ["Hypertension", "Type 2 Diabetes"],
  "medications": [
    "Metformin 500mg (twice daily)",
    "Lisinopril 10mg (once daily)"
  ],
  "vitals": {
    "bloodPressure": "130/85",
    "heartRate": "72 bpm",
    "temperature": "98.6°F",
    "weight": "180 lbs",
    "height": "5'10\""
  },
  "precautions": [
    "Monitor blood sugar daily",
    "Low sodium diet",
    "Regular exercise"
  ]
}
```

This structure powers the summary components in the dashboard.

---

## 🛡 Error Handling & Resilience (Planned Backend Behavior)

The system design includes:

* AI API failure handling with fallback responses
* OCR confidence validation and reliability checks
* File upload size restrictions
* Friendly error messages in UI
* Loading states during processing
* Preservation of last successful summary

---

## 🔐 Role-Based Access (Design)

The system separates views for:

* **Doctor:** Aggregated patient data
* **Patient:** Personalized medical records

In a production deployment:

* RBAC would be enforced at backend level
* Authentication could use JWT or session-based security

---

## 🧰 Tech Stack

**Frontend**

* React
* Vite
* JavaScript (ES6+)
* CSS

**Planned Backend**

* Node.js
* Express
* MongoDB

**Planned Integrations**

* OCR service (Tesseract / Cloud OCR)
* AI summarization API

---

## 🚀 Deployment

The project is deployed on **Vercel**.

Live Application:
https://YOUR_VERCEL_LINK_HERE

---

## 📂 Project Structure

```
PulseNote/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   └── App.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎯 Future Improvements

* Real backend implementation
* Secure authentication system
* Real OCR + AI integration
* Persistent database storage
* Medical history timeline view
* Analytics dashboard for doctors

---

## 📌 Author

**Suryanshi Singh**
B.Tech – Computer Science & Engineering

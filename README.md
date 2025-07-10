# 📰 News App

A simple and responsive News App built with **React**, **TypeScript**, and **Ant Design** using **Clean Architecture**. It fetches news articles from [NewsAPI.org](https://newsapi.org).

---

## 📸 Preview

> Light & responsive UI for browsing news with detail view
> 📱 Optimized for **mobile**, **tablet**, and **desktop**

---

## 🧱 Tech Stack

* ⚛️ React + TypeScript
* 🧼 Clean Architecture
* 💄 Ant Design
* 🌐 NewsAPI
* 🧪 Tested with Jest
* 📦 Vite or CRA (React Scripts)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rafliadipratama/news-app.git
cd news-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup API Key

1. Daftar dan dapatkan API key dari: [https://newsapi.org](https://newsapi.org)
2. Buat file `.env` di root direktori:

```env
REACT_APP_NEWS_API_KEY=your_api_key_here
```

> ✅ Pastikan variabel dimulai dengan `REACT_APP_` agar bisa digunakan oleh React.

### 4. Jalankan aplikasi

```bash
npm start
```

Aplikasi akan berjalan di:

```
http://localhost:3000
```

---

## 📁 Folder Structure

```
news-app/
├── domain/             # Entities & interfaces
├── application/        # Use cases
├── infrastructure/     # API & data layer
├── presentation/       # UI components & pages
├── tests/              # Unit tests
├── .env                # API Key config
├── App.tsx             # Route setup
└── ...
```

---

## 🧪 Testing

Untuk menjalankan unit test (misal pada komponen):

```bash
npm test
```

---

## ✅ Features

* ✅ Article List with thumbnail, title & description
* ✅ Responsive design for mobile/tablet/desktop
* ✅ Detail view with full article content
* ✅ Clean Architecture structure
* ✅ Jest unit tests for logic & components

---

## 📦 Deployment

Build app for production:

```bash
npm run build
```

---

## 🧑‍💻 Author

Made with 💙 by [Mohamad Rafli Adipratama](https://github.com/rafliadipratama)

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
* 🧪 Jest & React Testing Library
* 📦 React Scripts (`npm start`)

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

## 🧪 Testing

Proyek ini menggunakan **Jest** dan **React Testing Library**.

### Menjalankan semua test

```bash
npm test
```

### Contoh Unit Test: `reverseString.test.ts`

```ts
import { reverseString } from '../utils/reverseString';

test('should reverse alphabet and keep number at end', () => {
  expect(reverseString("NEGIE1")).toBe("EIGEN1");
});
```

### Contoh Unit Test: `longestWord.test.ts`

```ts
import { longestWord } from '../utils/longestWord';

test('should return the longest word from sentence', () => {
  const sentence = "Saya sangat senang mengerjakan soal algoritma";
  expect(longestWord(sentence)).toBe("mengerjakan");
});
```

### Struktur folder test

```
tests/
├── reverseString.test.ts
├── longestWord.test.ts
├── findQueryCount.test.ts
├── diagonalDifference.test.ts
```

---

## 📁 Folder Structure

```
news-app/
├── domain/             # Entities & interfaces
├── application/        # Use cases
├── infrastructure/     # API & data layer
├── presentation/       # UI components & pages
├── algorithms/         # Logic helper functions
├── .env                # API Key config
├── App.tsx             # Route setup
└── ...
```

---

## ✅ Features

* ✅ Article List with thumbnail, title & description
* ✅ Responsive design for mobile/tablet/desktop
* ✅ Detail view with full article content
* ✅ Clean Architecture structure
* ✅ Unit tests with Jest
* ✅ Environment variable setup

---

## 📦 Deployment

Build app for production:

```bash
npm run build
```

---

## 🧑‍💻 Author

Made with 💙 by [Mohamad Rafli Adipratama](https://github.com/rafliadipratama)

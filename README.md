# 🗞️ News & Algorithm Challenge App

A simple and responsive News App built with **React**, **TypeScript**, and **Ant Design**, designed with **Clean Architecture** principles. Includes algorithmic problem-solving implementations tested with **Jest**.

---

## 📸 Preview

* Responsive news reader interface
* Detail view for each article
* Clean and minimal UI (mobile-friendly)

---

## ⚙️ Tech Stack

* ⚛️ React + TypeScript
* 🎨 Ant Design (customized)
* 🌐 NewsAPI integration
* 🧼 Clean Architecture pattern
* 🧪 Jest for unit testing
* 📦 Create React App (CRA)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rafliadipratama/news-app.git
cd news-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup News API Key

1. Daftar dan dapatkan API key dari [NewsAPI.org](https://newsapi.org)
2. Buat file `.env` di root project dan isi:

```env
REACT_APP_NEWS_API_KEY=your_api_key_here
```

> Pastikan nama variabel diawali `REACT_APP_` agar bisa digunakan di React.

### 4. Start the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 Algorithm Challenges

Berada di folder `src/algorithms/`:

| File                    | Fungsi                                                             |
| ----------------------- | ------------------------------------------------------------------ |
| `reverseAlpha.ts`       | Membalikkan huruf dari string tanpa mengubah posisi angka          |
| `longestWord.ts`        | Mencari kata terpanjang dari sebuah kalimat                        |
| `countWords.ts`         | Menghitung jumlah kemunculan kata dari `QUERY` dalam `INPUT` array |
| `diagonalDifference.ts` | Menghitung selisih diagonal utama dan sekunder dari matriks NxN    |

### 🔬 Sample Usage

```ts
import { reverseAlpha } from './reverseAlpha';
import { longestWord } from './longestWord';
import { countWords } from './countWords';
import { diagonalDifference } from './diagonalDifference';

console.log(reverseAlpha("NEGIE1")); // "EIGEN1"
console.log(longestWord("Saya sangat senang mengerjakan soal algoritma")); // "mengerjakan"
console.log(countWords(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz'])); // [1, 0, 2]
console.log(diagonalDifference([[1,2,0],[4,5,6],[7,8,9]])); // 3
```

---

## 🧪 Testing

Unit test ditulis menggunakan **Jest**. Semua algoritma sudah diuji.

### Menjalankan Test:

```bash
npm test
```

### Contoh Output:

```
Test Suites: 5 passed, 5 total
Tests:       6 passed, 6 total
```

---

## 📁 Folder Structure

```
src/
├── algorithms/          # Algoritma tantangan & logika
│   ├── reverseAlpha.ts
│   ├── longestWord.ts
│   ├── countWords.ts
│   └── diagonalDifference.ts
├── domain/              # Entities & interfaces
├── application/         # Use cases & logic
├── infrastructure/      # API & data services
├── presentation/        # UI components & pages
├── App.tsx              # Main routing file
└── ...
```

---

## 🧑‍💻 Author

Made with ❤️ by [Mohamad Rafli Adipratama](https://github.com/rafliadipratama)

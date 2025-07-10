import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleList from './presentation/pages/ArticleList';
import ArticleDetail from './presentation/pages/ArticleDetail'; // kita buat ini nanti
import 'antd/dist/reset.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/detail/:index" element={<ArticleDetail />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

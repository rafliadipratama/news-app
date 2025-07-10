import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleList from './presentation/pages/ArticleList';
import ArticleDetail from './presentation/pages/ArticleDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/detail/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

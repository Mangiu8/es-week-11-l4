import React from "react";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import ArticlesPage from "./ArticlesPage";
import ArticleDetailPage from "./ArticleDetailPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/article/:id" element={<ArticleDetailPage />} />
          <Route path="/" element={<ArticlesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

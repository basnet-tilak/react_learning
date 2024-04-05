import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import NavBar from './NavBar';
import RegistrationPage from './pages/RegistrationPage';
import ArticlePage from './pages/ArticlesPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/article/" element={<ArticlePage/>} />
          <Route path="/article/:id" element={<ArticlePage/>} />
          <Route path="/notfoundpage" element={<NotFoundPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;

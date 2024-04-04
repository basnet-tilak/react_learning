import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticalPage from './pages/ArticalPage';
import ArticalListPage from './pages/ArticalListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import NavBar from './NavBar';
import './styles/App.css'
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articals" element={<ArticalPage />} />
          <Route path="/articallist" element={<ArticalListPage />} />
          <Route path="/notfoundpage" element={<NotFoundPage />} />
          <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;

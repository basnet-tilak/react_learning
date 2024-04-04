import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import ArticalPage from './pages/ArticalPage';
import ArticalListPage from './pages/ArticalListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/about" element = {<AboutPage/>} />
        <Route path="/artical" element = {<ArticalPage/>} />
        <Route path="/articallist" element = {<ArticalListPage/>} />
        <Route path="/notfoundpage" element = {<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

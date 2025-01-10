import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';
import Market from './pages/market';
import Account from './pages/account';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Render Header on all pages */}
        <Header />

        {/* Set up Routes to render components based on the URL path */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/market" element={<Market />} />
          <Route path="/account" element={<Account />} />
        </Routes>

        {/* Render Footer on all pages */}
        {<Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;

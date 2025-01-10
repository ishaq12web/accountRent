import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import SearchPage from './pages/search';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/notfound';
import Login from './pages/login';
import Card from './pages/card';
import Signup from './pages/signup';
import Market from './pages/market';
import Account from './pages/account';
import Header from './components/header';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import LeaserForm from './pages/lease';
import PaymentPage from './pages/payment';

export default function App() {
  return (
  
    <BrowserRouter>
     <Header />
      <Routes>
        {/* Define route for home page */}
        <Route path="/" element={<Home />} />
        {/* Define routes for other pages */}
        <Route path="about" element={<About />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="lease" element={<LeaserForm />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="card" element={<Card />} />
        <Route path="signup" element={<Signup />} />
        <Route path="market" element={<Market />} />
        <Route path="account" element={<Account />} />
        {/* Catch-all route for 404 not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>  
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

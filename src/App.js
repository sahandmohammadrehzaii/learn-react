//فراخوانی فسمت ها
import Home from './components/index/Home/Home';
import About from './components/index/About/About';
import Center from './components/index/center/center';
import Footer from './components/index/footer/footer';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';

//کد های سی اس اس
import './components/index/css/1.css';
import './components/index/css/2.css';
import './components/index/css/3.css';
import './components/index/css/4.css';
import './components/index/css/5.css';
import './components/index/css/7.css';
import './components/index/css/8.css';
import './components/index/css/9.css';
import './components/index/css/10.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

      <Route path="/" exact element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/center" element={<Center/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
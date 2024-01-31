import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About'
import Contact from './pages/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Service' element={<Service />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Contact' element={<Contact />}/>
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Student from './component/Student';
import Products from './component/Products';
import Footer from './component/Footer';

function App() {
  return (
    <div className='bg-slate-950'>
    <Router>
      <Navbar/>
      <Home/>
      <Student/>
      <Products/>
      <Routes>
        <Route path="/home" element={<Home name="Nitin Rajput"/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;

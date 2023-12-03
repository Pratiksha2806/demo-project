import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    
       <Router>
      <Sidebar>
      <Routes>
        <Route path="/pateients" element={<h1>Patient</h1>} />
        <Route path="/" element={<h1>Dashboard</h1>} />
        <Route path="/records" element={<Navbar/>} />
        <Route path="/investigation" element={<h1>Investigation</h1>}/> 
        <Route path="/contact" element={<h1>Contact Us</h1>}/>
      </Routes>
      </Sidebar>
    </Router>
   
    
  );
}

export default App;

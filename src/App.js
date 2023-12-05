import Services from "./Services";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar";
// import Write from "./Write";
import './App.css';
import Footer from "./Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Services />} />
        {/* <Route path="/Write" element={<Write/>}/> */}

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

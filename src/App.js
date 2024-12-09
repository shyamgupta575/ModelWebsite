
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Modelingbank from './pages/Modelingbank';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Kidmodel from './pages/Kidmodel';
import MaleModel from './pages/MaleModel';
import FemaleModel from './pages/FemaleModel';
import Apply from './pages/Apply';
import Api from './pages/Api';





function App() {
  return (
  
    <BrowserRouter>
       <Navbar></Navbar>
     <Routes>

      <Route index element={<Home />} />
      <Route path="Services" element={<Services />} />
      <Route path="Modelingbank" element={<Modelingbank />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Aboutus" element={<Aboutus />} />
      <Route path="Apply" element={<Apply />} />
      <Route path="Kidmodel" element={<Kidmodel />} />
      <Route path="MaleModel" element={<MaleModel />} />
      <Route path="FemaleModel" element={<FemaleModel />} />
      <Route path="Api" element={<Api />} />
     </Routes>
     
     
     <Footer></Footer>
     
   </BrowserRouter>
 
  );
}

export default App;

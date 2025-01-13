import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import Navbar from './components/navbar.jsx'; 
import Aboutme from './page/About.jsx';
import Credit from './page/credit.jsx';


function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme/>}/>
        <Route path="/credit" element={<Credit/>}/>
      </Routes>
    </>
  );
}

export default App;
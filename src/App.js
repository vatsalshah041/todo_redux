import './App.css';
import Home from './components/Home';
import Trial from './components/Trial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/trial' element={<Trial/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
   </Router>
   {/* <Trial></Trial> */}
   </>
  );
}

export default App;

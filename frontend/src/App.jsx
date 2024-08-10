import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home/Home';
// import Studyrooms from './Pages/StudyRooms/Studyrooms';

const App = () => {

  const [sidebar, setSidebar] = useState(true);

  return (
    <Router>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        {/* <Route path="/Study:categroyId/:studyId" element={<Studyrooms />} />
        <Route path="/" element={<Recent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;


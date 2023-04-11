import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/projects' exact Component={Projects}></Route>
          <Route path='/experience' exact Component={Experience}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

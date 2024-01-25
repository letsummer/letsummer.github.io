import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import styles from './App.css';
import Home from './component/Home';
import Profile from './component/Profile';
import Projects from './component/Projects';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>LETSUMMER</li>
            <li>_</li>
            <li>□</li>
            <li><Link to={"/"}>Ⅹ</Link></li>
          </ul>
          <ul>
            <li><Link to={"/projects"}><u>F</u>ile</Link></li>
            <li><u>E</u>dit</li>
            <li><u>V</u>iew</li>
            <li><u>I</u>mage</li>
            <li><u>C</u>olors</li>
            <li><Link to={"/profile"}><u>H</u>elp</Link></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

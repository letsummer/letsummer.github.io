import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import './App.css';
import styles from './css/layout.module.css';
import Home from './component/Home';
import Profile from './component/Profile';
import Projects from './component/Projects';

function App() {
  return (
    <div>
      <Router>
        <nav className={styles.navigation}>
          <ul>
            <li><Link to={"/"}>홈</Link></li>
            <li><Link to={"/profile"}>프로필</Link></li>
            <li><Link to={"/projects"}>프로젝트</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          {/* <Route path="/projects/:id" element={<Detail/>}></Route> */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;

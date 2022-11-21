
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'
// import { Router, Link } from "@reach/router";
// import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/news'}>News 1</Link>
          </li>
          <li>
            <Link to={'/news2'}>News 2</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news2' element={<ContactPage />} />
      </Routes>

    </div>
  );
}

export default App;

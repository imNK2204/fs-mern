import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import AddPost from './components/AddPost';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/" element={<Login/>}
          />
          <Route 
            path='/register' element={<Register/>}
          />
          <Route 
            path='/addpost' element={<AddPost/>}
          />
          <Route 
            path='/home' element={<Home/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

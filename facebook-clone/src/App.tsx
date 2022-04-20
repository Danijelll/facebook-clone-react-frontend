import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import ConfirmEmail from './pages/ConfirmEmail/ConfirmEmail';

function App() {
  return (
    <div className='root'>
      
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/confirmEmail' element={<ConfirmEmail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

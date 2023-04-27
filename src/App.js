import './App.css';
import NavScrollExample from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home-page';
import Register from './pages/register';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
function App() {
  return (
    <>

      <NavScrollExample />

        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
        </Routes>
    
    </>

  );
}

export default App;

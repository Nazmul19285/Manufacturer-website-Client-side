import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/common/Navbar';
import Home from './pages/home/Home';
import Store from './pages/store/Store';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/store' element={<Store></Store>}></Route>
      </Routes>
    </div>
  );
}

export default App;

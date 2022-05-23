import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/blogs/Blogs';
import Footer from './pages/common/Footer';
import Navbar from './pages/common/Navbar';
import Home from './pages/home/Home';
import Purchase from './pages/purchase/Purchase';
import AllProducts from './pages/store/AllProducts';
import Brakes from './pages/store/Brakes';
import Frame from './pages/store/Frame';
import FrontSet from './pages/store/FrontSet';
import Store from './pages/store/Store';
import Wheel from './pages/store/Wheel';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/store' element={<Store></Store>}>
          <Route path='allproducts' element={<AllProducts></AllProducts>}></Route>
          <Route path='frame' element={<Frame></Frame>}></Route>
          <Route path='wheel' element={<Wheel></Wheel>}></Route>
          <Route path='frontset' element={<FrontSet></FrontSet>}></Route>
          <Route path='brakes' element={<Brakes></Brakes>}></Route>
        </Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

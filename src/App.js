import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/blogs/Blogs';
import Footer from './pages/common/Footer';
import Navbar from './pages/common/Navbar';
import RequireAuth from './pages/common/RequireAuth';
import AddReview from './pages/dashboard/AddReview';
import Dashboard from './pages/dashboard/Dashboard';
import MyOrders from './pages/dashboard/MyOrders';
import MyProfile from './pages/dashboard/MyProfile';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Payment from './pages/payment/Payment';
import Register from './pages/login/Register';
import Purchase from './pages/purchase/Purchase';
import AllProducts from './pages/store/AllProducts';
import Brakes from './pages/store/Brakes';
import Frame from './pages/store/Frame';
import FrontSet from './pages/store/FrontSet';
import Store from './pages/store/Store';
import Wheel from './pages/store/Wheel';
import ManageOrders from './pages/dashboard/ManageOrders';
import ManageStore from './pages/dashboard/ManageStore';
import ManageUser from './pages/dashboard/ManageUser';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import AddAProduct from './pages/dashboard/AddAProduct';
import Portfolio from './pages/common/Portfolio';
import UpdateProduct from './pages/dashboard/UpdateProduct';
import ProtectedRoute from './pages/pageNotFound/ProtectedRoute';
import RequireAdmin from './pages/common/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:_id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/payment/:id' element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
        <Route path='/addproduct' element={<RequireAdmin><AddAProduct></AddAProduct></RequireAdmin>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/products/:id' element={<RequireAdmin><UpdateProduct></UpdateProduct></RequireAdmin>}></Route>
        <Route path='/reserve' element={<ProtectedRoute></ProtectedRoute>}></Route>
        

        <Route path='/store' element={<Store></Store>}>
          <Route path='allproducts' element={<AllProducts></AllProducts>}></Route>
          <Route path='frame' element={<Frame></Frame>}></Route>
          <Route path='wheel' element={<Wheel></Wheel>}></Route>
          <Route path='frontset' element={<FrontSet></FrontSet>}></Route>
          <Route path='brakes' element={<Brakes></Brakes>}></Route>
        </Route>
        
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='manageorders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='managestore' element={<RequireAdmin><ManageStore></ManageStore></RequireAdmin>}></Route>
          <Route path='manageuser' element={<RequireAdmin><ManageUser></ManageUser></RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

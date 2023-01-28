import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/home/Home";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import Cart from "./Components/cart/Cart";
import Checkout from "./Components/checkout/Checkout";
import Create from "./Components/create/Create";
import Final from "./Components/final/Final";
import AddressPage from "./Components/AddressPages/AddressPage";
import ProductDetails from "./Components/productDetails/ProductDetails";
import Footer from "./Components/footer/Footer"

import { Routes, Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div
      // className='App'
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/create' element={<Create />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/final' element={<Final />} />
        <Route path='/addressDetails' element={<AddressPage />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

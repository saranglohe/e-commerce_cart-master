import "./App.css";
import Home from "./component/Home/Home";
import { Routes } from "react-router-dom";
import Product from "./component/Product/Product";
import SingleProduct from "./component/SingleProduct/SingleProduct";
import { Route } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/contact/Contact";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Createaccount from "./Createaccount";
import CheckOut from "./component/Checkout/CheckOut";
import Cart from "./component/Cart/Cart";
import Homee from "./Homee";

const ErrorComponent = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <img
          src="./assets/error.jpg"
          alt="error"
          height={"500px"}
          width={"700px"}
        />
      </div>
    </>
  );
};

function App() {
  return (
    <>
     
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Homee/>}/>
        <Route path="/header" element={<Header/>}/>        
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="*" element={<ErrorComponent/>}/>
        
      </Routes>
      

    </>
  );
}

export default App;

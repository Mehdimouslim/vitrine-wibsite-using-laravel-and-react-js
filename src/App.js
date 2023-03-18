import './bootstrap.min.css';
import React, { useState} from "react";
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserNavbar from './components/UserNavbar';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import AdminLoginPage from './components/AdminLoginPage';
import EditProduct from "./components/edit.component";
import CreateProduct from "./components/create.component";
import ProductList from "./components/list.component";
import ContactPage from './components/ContactPage';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
    <div className="App">
     <UserNavbar />
     <Routes>
     <Route path='/'element={<HomePage/>} exact/>
     <Route path='/HomePage'element={<HomePage/>}/>
     <Route path='/ProductsPage'element={<ProductsPage/>}/>
     <Route path="/ContactPage" element={<ContactPage />}></Route>
     <Route path='/AdminLoginPage'element={<AdminLoginPage/>}/>

     <Route path="/product/create" element={<CreateProduct />}></Route>
        <Route path="/product/edit/:id" element={<EditProduct />}></Route>
        <Route path="/list.component" isLoggedIn={true} setIsLoggedIn={setIsLoggedIn} logout={logout} element={<ProductList />}></Route>


        <Route path="/AdminLoginPage" isLoggedIn={true} setIsLoggedIn={setIsLoggedIn}  element={
          <AdminLoginPage  />}> 
         </Route>
     </Routes>
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

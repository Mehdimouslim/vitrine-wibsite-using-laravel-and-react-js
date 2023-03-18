import React,{useState} from 'react';
import '../style.css'
import { Link } from 'react-router-dom';
function UserNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const logout = () => {
  //   setIsLoggedIn(false);
  // };
  return (
<>{!isLoggedIn?(
    <div>
    <div className="container">
  <div className="navbar-top">
            <div className="social-link">
                <i><img src="./image/twitter.png" alt="" width='30px' /></i>
                <i><img src="./image/facebook.png" alt="" width="30px"/></i>
                <i><img src="./image/google-plus.png" alt="" width="30px"/></i>
            </div>
            <div className="logo">
                <h3>Green Doum</h3>
            </div>
            <div className="icons">
                <Link className="btn btn-success" onClick={setIsLoggedIn} to='/AdminLoginPage'>login</Link>
            </div>
        </div>
    </div>

    
        <nav className="navbar navbar-expand-md" id="navbar-color">
           <div className="container">
          
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span><i><img src="./image/menu.png" alt="" width="30px"/></i></span>
            </button>
          
           
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/HomePage">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ProductsPage">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContactPage">Contact</Link>
                </li>
              </ul>
            </div>
           </div> 
          </nav>
        
  
   </div>):<>
   <div><p></p></div>
   </>}
   </>
  )
}

export default UserNavbar





















// import React, { useState } from 'react';
// import '../style.css';
// import { Link } from 'react-router-dom';
// import Login from './Login'; // import the login component
// import AdminLoginPage from './AdminLoginPage';

// function UserNavbar() {
//   // function ParentComponent() {
//   const [showLogin, setShowLogin] = useState(false);

//   const handleLoginClick = () => {
//     setShowLogin(true);
//   };

//   return (
//     <>
//     {!showLogin && <UserNavbar />}
//        {/*show the UserNavbar if showLogin is false*/}
//       {showLogin && <AdminLoginPage />} 
//       <div>
//         <div className="container">
//           <div className="navbar-top">
//             <div className="social-link">
//               <i>
//                 <img src="./image/twitter.png" alt="" width="30px" />
//               </i>
//               <i>
//                 <img src="./image/facebook.png" alt="" width="30px" />
//               </i>
//               <i>
//                 <img src="./image/google-plus.png" alt="" width="30px" />
//               </i>
//             </div>
//             <div className="logo">
//               <h3>Green Doum</h3>
//             </div>
//             <div className="icons">
//               <Link className="btn btn-success" onClick={handleLoginClick} to="/AdminLoginPage">
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>

//         <nav className="navbar navbar-expand-md" id="navbar-color">
//           <div className="container">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#collapsibleNavbar"
//             >
//               <span>
//                 <i>
//                   <img src="./image/menu.png" alt="" width="30px" />
//                 </i>
//               </span>
//             </button>

//             <div className="collapse navbar-collapse" id="collapsibleNavbar">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/HomePage">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/ProductsPage">
//                     Products
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="#">
//                     Top Chair
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="#">
//                     Chair
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="#">
//                     Brands
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="#">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }
// }
// function ParentComponent() {
//   const [showLogin, setShowLogin] = useState(false);

//   const handleLoginClick = () => {
//     setShowLogin(true);
//   };

//   return (
//     <>
      {/* {!showLogin && <UserNavbar />} */}
       {/*show the UserNavbar if showLogin is false*/}
      {/* {showLogin && <AdminLoginPage />}  */}
      {/* show the Login component if showLogin is true */}
      {/* <button onClick={handleLoginClick}>Login</button>  */}
      {/* bind handleLoginClick to a button */}
//     </>
//   );
// }

// export default UserNavbar;

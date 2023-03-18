import React from 'react'

function Footer() {
  return (
    <div>
         <footer id="footer">
        <h1 className="text-center">Green Doum</h1>
        <p className="text-center">Your Best place for best Hand product made</p>
        <div className="icons text-center">
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-google"></i>
            <i className="bx bxl-skype"></i>
            <i className="bx bxl-instagram"></i>
        </div>
        <div className="copyright text-center">
            &copy; Copyright <strong><span>Green Doum</span></strong>. All Rights Reserved
        </div>
        <div className="credite text-center">
            Designed By <a href="#">Mehdi Coding</a>
        </div>
    </footer>
    </div>
  )
}

export default Footer
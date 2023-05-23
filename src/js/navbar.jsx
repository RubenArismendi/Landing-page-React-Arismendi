 import React from "react"

 export const Navbar=()=>{
    return(
        <>    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ">
    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
  
      <ul className="navbar-nav  ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
    )
}
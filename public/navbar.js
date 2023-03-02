//Bootstrap navigation bar


function NavBar(){
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand text-info" href="#">
            <img src="./Yourbank.png" 
                 width="100" 
                 height="100" 
                 alt="Bank_image">
            </img>
          </a>
            <button className="navbar-toggler ml-auto" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" 
                 aria-current="page" 
                 href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" 
                 href="#/login/">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" 
                 href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" 
                 href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" 
                 href="#/balance/">Balance</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" 
               href="#/alldata/">All Data</a>
            </li>        
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


import React from 'react'
import { Link,   useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    let navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem('token'); 
        // navigate("/login");
    }

    const handleDetails = async()=>{
    //   const ud= true;
    console.log("clicked")
    }

    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
                        </li>

                    </ul>
                    {/* {!localStorage.getItem('token')?<form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>:<button onClick={handleLogout} className="btn btn-primary mx-2"> Log Out </button>
                    } */}
                    {!localStorage.getItem('token')?<form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>:
                     <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link onClick={handleDetails} className="btn btn-primary mx-2" to="/userdeatils"> User Details </Link>
                    </li>
                    <li className="nav-item">
                    <Link onClick={handleLogout} className="btn btn-primary mx-2" to="/Login"> Log Out </Link>
                    </li>
                    </ul>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
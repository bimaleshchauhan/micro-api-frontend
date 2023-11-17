import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Action } from '../store/actions'

const Header = () => {
  
    const { user, profile, cart, token } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const cartCount  = () => {
        if(Array.isArray(cart)){
            return cart.length;
        }
        return 0;
    };

    const loginProfile = () => {

        if(token){
            return (
                <ul class="navbar-nav">
                    <li class="nav-item pt-1.5 bg-indigo-300" style={{ width: 90, borderRadius: 50, textAlign:'center'}}>
                        <Link to="/profile" href="#" className="text-white">
                        <i class="fas fa-shopping-cart"></i>
                        <span className="ml-3 m" style={{ fontSize: '1.1rem', fontWeight: 'bold'}}>{cartCount()}</span>
                        </Link>
                    </li> 
                    <li class="nav-item">
                        {/* <Link to="/login" className="btn-lg nav-link text-white"> */}
                            {/* <i class="fas fa-user"></i> */}
                            <span className="ml-1"></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-user"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    
                                   {/* <Link to="/profile" href="/profile" className="btn-lg nav-link"></Link> */}
                                    <button class="dropdown-item" type="button"><a href='/profile'>Profile</a></button>
                                    <button class="dropdown-item" onClick={()=> {dispatch({ type:  Action.LOGIN, payload: "" });localStorage.clear();}}>Log Out</button>
                                </div>
                            </div>
                        {/* </Link> */}
                    </li>
                </ul>
            );

        }else{

            return (
                <ul class="navbar-nav">
                     <li class="nav-item">
                        <a href="#" className="btn-lg nav-link text-warning">
                        <i class="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" className="btn-lg nav-link text-white">
                            <i class="fas fa-user"></i>
                            <span className="ml-1">Login</span>
                        </Link>
                    </li>   
            </ul>
            );

        }
       

    }
    

   return ( <nav class="navbar navbar-expand-sm navbar-light border-bottom bg-indigo-500" >
            <div class="container-fluid">
                <a href="#"><Link class="navbar-brand text-white" to="/">The Retailer</Link></a>
                <button class="navbar-toggler btn-lg" data-toggle="collapse" data-target="#navbarNav">
                    <i class="fa fa-bars" aria-hidden="true" style={{ backgroundColor: '#4DA052', color: '#FFF'}}></i>
                </button>
                <div class="navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav m-auto">
                    </ul>
                    {loginProfile()}
                </div>
            </div>
        </nav>);
}

export default Header;
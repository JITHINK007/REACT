import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

export function Navbar() {
    const [menu,setmenu] = useState(false);
    
    function menuClick(){
        if(menu){
            document.querySelector(".nav-menu").style.display="block";
        }
        else{
            document.querySelector(".nav-menu").style.display="none";
        }
        setmenu(!menu);
    }

  return (
    <>
        <nav>
            <NavLink className="nav-logo" to="/">
                <h1>HealthAssistant</h1>
            </NavLink>
            { !menu ? <FaBars className="fa-bars" onClick={()=> menuClick()} /> : <FaTimes className="fa-bars" onClick={()=> menuClick()} /> }
            <div className="nav-menu">
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-link" to="/monitor">
                    Monitor
                </NavLink>
                <NavLink className="nav-link" to="/chat">
                    Chat
                </NavLink>
                <NavLink className="nav-link" to="/profile">
                    Profile
                </NavLink>
            </div>
        </nav>
    </>
  )
}
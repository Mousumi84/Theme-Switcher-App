import { useContext } from "react";
import {ThemeContext} from "./App";
import 'material-icons/iconfont/material-icons.css';

function NavBar() {
const {theme,toggleTheme,colors}=useContext(ThemeContext);

    return <>
       <div id="NavBar">
           <div id="menu"><span className="material-icons">menu</span>  </div>
           <img className="logo" src="logo192.png" />
           <div id="version">v18.3.1</div>
           <input id="search" type="search" placeholder="Search" />
           <button id="theme-btn" onClick={toggleTheme}><span id="btn-icn" className="material-icons">{theme === "dark" ? "light_mode" : "nightlight"}</span></button>
           <i id="git" class="fa-brands fa-github fa-xl"></i>
       </div>
    </>
}

export default NavBar;
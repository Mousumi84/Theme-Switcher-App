import { useState,useEffect,createContext } from "react";
import NavBar from "./Nav";
import ContentBox from "./Content";

export const ThemeContext=createContext();

const colors={
  light: {
    color: "#23272f",
    background: "white",

  },

  dark: {
    color: "white",
    background: "#23272f",

  }
}

function App() {
  const [theme,setTheme]=useState("dark");

  useEffect(() => {
    Object.assign(document.body.style,colors[theme]);
  },[theme]);

  function toggleTheme(){
    setTheme(theme==="light" ? "dark" : "light")
  }

  return ( <>
    <ThemeContext.Provider value={{theme,toggleTheme,colors}}>
      <NavBar />
      <ContentBox />
    </ThemeContext.Provider>
    
    </>)
}


export default App;
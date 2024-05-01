import { useContext } from "react";
import {ThemeContext} from "./App";

function ContentBox() {
    const {theme,toggleTheme,colors}=useContext(ThemeContext);


    return <>
        <div id="react-box">
            <img className="logo" src="/logo512.png" />
            <div id="react">
                <div id="nm">React</div>
                <div id="lb">The library for web and native user interfaces</div>
            </div>
            <div id="button">
                <button id="left" className="btn">Learn React</button>
                <button id="right" className="btn" style={colors[theme]}>API Reference</button>
            </div>
        </div>
    </>
}

export default ContentBox;


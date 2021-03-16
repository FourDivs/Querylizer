import React, { useState } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import CodeEditor from "./CodeEditor";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


const CodeEditor2 = (props) => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const handleClick = () => setIsMenuOpened((prevToogle) => (!prevToogle));
    
    return (
        <OffCanvas
        width={600}
        transitionDuration={300}
        effect={"parallax"}
        isMenuOpened={isMenuOpened}
        position={"left"}
    >
        <OffCanvasBody width = {900} style={{ fontSize: "30px", position: "absolute", left: "0",top: "0" }}  >
            <button style={{ border: "none", borderRadius: "0 20px 20px 0", backgroundColor: "#000", position: "absolute", top: "-230px", left: "10px", height: "200px", width: "50px" }} onClick={handleClick}> 
                <DoubleArrowIcon style = {{color: "white", marginLeft: "9px"}} /> &nbsp;
                <span style = {{fontSize: "23px", color: "white", writingMode: "vertical-rl"}}>Code Editor</span>
            </button>
        </OffCanvasBody>
        <OffCanvasMenu width = {600} style={{ fontSize: "10px", color: "red", position: "absolute", top: "-230px" ,zIndex:"100"}}>
            <CodeEditor value = {props.value}/>
            <button style={{ border: "none", borderRadius: "0 20px 20px 0", backgroundColor: "#000", position: "absolute", top: "0", left: "600px", height: "200px", width: "50px" }} onClick={handleClick}> 
                <DoubleArrowIcon style = {{color: "white", transform: "rotate(180deg)"}} /> &nbsp;
                <span style = {{fontSize: "23px", color: "white", writingMode: "vertical-rl"}}>Code Editor</span>
            </button>
        </OffCanvasMenu>
    </OffCanvas>
    );
}

export default CodeEditor2;
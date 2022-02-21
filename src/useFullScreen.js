import React, {useEffect, useRef, useState} from "react";

const useFullScreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen()
            if(callback && typeof callback === "function"){
                callback()
            }
        }
    }
    const exitFull = () => {
        document.exitFullscreen();
        if(callback && typeof callback === "function"){
            callback(false)
        }
    }
    return {element, triggerFull, exitFull};
}

function App() {
    const onFulls = (isFull) => {
        console.log(isFull ? "full" : "small");
    }
    const {element, triggerFull, exitFull} = useFullScreen();
    return (
        <div className="App" style={{height: "1000vh"}}>
            <div ref={element}>
                <button onClick={exitFull}>exit full screen</button>
                <img src="https://ssl.pstatic.net/imgshopping/cnsv/iu/cnts_prod/20/0625/b3k9rv5g21x.jpg" alt=""/>
                <button onClick={triggerFull}>make full screen</button>
            </div>

        </div>
    );
}

export default App;


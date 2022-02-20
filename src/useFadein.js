import React, {useEffect, useRef} from "react";
import {logDOM} from "@testing-library/react";

const useFadeIn = (duration = 1) => {
    const element = useRef();


    useEffect(()=>{
        if(element.current){
            const {current} = element;
            current.style.transition = `opacity ${duration}s`;
            current.style.opacity = 1;
        }
    },[])
    return {ref:element, style:{opacity:0}};
}

function App() {
    const fadeInH1 = useFadeIn(2);
    const fadeInP = useFadeIn(7);
    return (
        <>
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>asdlfkjls</p>
        </>
    );
}

export default App;

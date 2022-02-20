import React, {useEffect, useRef, useState} from "react";

const useNetWork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onChange === "function"){
            onChange(navigator.offline)
        }
        setStatus(navigator.offline)
    }
    useEffect(()=>{
        window.addEventListener("online",handleChange);
        window.addEventListener("offline",handleChange);
        return ()=>{
            window.removeEventListener("online",handleChange);
            window.removeEventListener("offline",handleChange);
        }
    },[])
    return status;
}

function App() {
    const onLIne = useNetWork();
    return (
        <>
            <h1>{onLIne ? "Online" : "Offline"}</h1>
        </>
    );
}

export default App;

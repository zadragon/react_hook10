import React, {useEffect, useRef, useState} from "react";

const useNotification = (title, options) => {
    if (!"Notification" in window) {
        return;
    }
    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission =>{
                if(permission === "granted"){
                    new Notification(title, options)
                }
            })
        }else{
            new Notification(title, options)
        }
    };
    return fireNotif;
}

function App() {
    const triggerNotif = useNotification("kimchi",{body : "나와라좀 "});
    return (
        <div className="App" style={{height: "1000vh"}}>
            <button onClick={triggerNotif}>Hello</button>

        </div>
    );
}

export default App;


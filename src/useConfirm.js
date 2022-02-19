import React from "react";
import {logDOM} from "@testing-library/react";

const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfirm && typeof onConfirm !== "function"){
        return;
    }
    if(onCancel && typeof onCancel !== "function"){
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)){
            callback();
        }else{
            rejection();
        }

    }
    return confirmAction;
}

function App() {
    const deleteWorld = () => console.log("delete the world");
    const abort = () => console.log("abort");
    const confirmDelete = useConfirm("are you sure?", deleteWorld, abort)
    return (
        <button onClick={confirmDelete}>delete the world</button>
    );
}

export default App;

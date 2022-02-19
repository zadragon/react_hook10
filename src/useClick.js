import React from "react";
import {useEffect, useState} from "react";

const useTitle = (initialValue) => {
    const [title, setTitle] = useState(initialValue);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}

function App() {
    const titleUpdater = useTitle('...loading')
    setTimeout(()=>titleUpdater("Home"), 1000)
    return (
        <div className="App">
            <h1>Hook</h1>

        </div>
    );
}

export default App;

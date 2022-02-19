import logo from './logo.svg';
import './App.css';
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

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return value;
}

function App() {
    const name = useInput("Mr.")
    return (
        <div className="App">
            <input type="text" {...name} />
        </div>
    );
}

export default App;

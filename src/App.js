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


function App() {
    const titleUpdater = useTitle("Loading...");
    const [item, setItem] = useState('');

    const onClickGo = () => {
        setItem('false');
    }
    return (
        <div className="App">
            <h1>start</h1>
        </div>
    );
}

export default App;

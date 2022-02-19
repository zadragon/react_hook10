import React from "react";
import {useEffect, useState} from "react";

const content = [
    {
        tab:"Section1",
        content:"i'm the content of tht section1"
    },
    {
        tab:"Section2",
        content:"i'm the content of tht section2"
    },
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    return{
        currentItem:allTabs[currentIndex],
        changeItem:setCurrentIndex
    }
}

function App() {
    const {currentItem, changeItem} = useTabs(0,content);
    return (
        <div className="App">
            <h1>Hook</h1>
            {content.map((section, index) => {
                return <button onClick={()=>changeItem(index)}>section.tab</button>
            })}
            <div>{currentItem.content }</div>
        </div>
    );
}

export default App;

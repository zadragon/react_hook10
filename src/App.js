import React, {useEffect, useRef, useState} from "react";
import useAxios from "./useAxios";




function App() {
    const {loading, data, error, refetch} = useAxios({
        url:"yts.am/api/v2/list_movies.json"
    });
    console.log(loading, data, error);
    return (
        <div className="App" style={{height: "1000vh"}}>
            <h1>blar</h1>
            <h1>{loading && "loading"}</h1>
            <button onClick={refetch}>refetch</button>
            {data}
        </div>
    );
}

export default App;


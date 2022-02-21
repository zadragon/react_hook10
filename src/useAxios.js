import axios from "axios";
import defaultAxios from "axios";
import {useEffect, useState} from "react";


const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading:true,
        error:null,
        data:null
    })
    const [trigger, setTrigger]  = useState(0)

    useEffect(()=>{
        axiosInstance(opts).then(data=>{
            setState({
                ...state,
                loading:true,
                data
            })
        }).catch(error=>{
            setState({...state, loading: false, error})
        })
    },[trigger]);

    const refetch = () => {
        setState({
            ...state,
            loading:true
        });
        setTrigger(new Date.now())
    }

    if(!opts.url){
        return;
    }

    return {...state, refetch};
}

export default useAxios;
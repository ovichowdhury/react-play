import React, { useState, useEffect } from 'react';


function useMax(value, limit, message) {
    const [occured, setOccured] = useState(false);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        console.log("checking..")
        if(value > limit) {
            setOccured(true);
            setMsg(message)
        }
        else {
            setOccured(false);
            setMsg("")
        }
    }, [value])

    return {occured, msg};
}


function useMin(value, limit, message) {
    const [occured, setOccured] = useState(false);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        console.log("checking2..")
        if(value < limit) {
            setOccured(true);
            setMsg(message)
        }
        else {
            setOccured(false);
            setMsg("")
        }
    }, [value])

    return {occured, msg};
}

export default function ValidationHooks(props) {
    const [value, setValue] = useState(5);
    const [text, setText] = useState("");


    const {occured, msg} = useMax(value, 15, "Counter should be less than 15");
    const {occured: minOccured, msg: minMsg} = useMin(value, 2, "Counter should be greater than 2");


    return (
        <>
            <h4>Testing Realtime Validation Hooks</h4>
            <br/>
            <h4>{value}</h4>
            <br/>
            <h4>{occured && msg}</h4>
            <h4>{minOccured && minMsg}</h4>
            <br/><br/>
            <button onClick={(e) => setValue(value + 1)}>Increment Value</button>
            <br/> <br/>
            <button onClick={(e) => setValue(value - 1)}>Decrement Value</button>
            <br/> <br/>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
            <div>{text}</div>
        </>
    )
}
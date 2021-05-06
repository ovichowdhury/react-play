import React, { useState, useEffect } from 'react';


function maxLength(value, options) {
    const { limit = 10, message = `Length should be less than or equals to ${limit}` } = options;

    let occured = false;
    let msg = "";

    if (value.length > limit) {
        occured = true;
        msg = message;
    }

    return { occured, msg }
}

function isCapital(value, options) {
    const { message = `Capital letter found` } = options;

    let occured = false;
    let msg = "";

    const result = /[A-Z\s]+/.test(value);
    console.log(result)

    if(result) {
        occured = true;
        msg = message
    }

    return { occured, msg }
}

function useValidation(value, validations) {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        for (let i = 0; i < validations.length; i++) {
            const validator = validations[i].func;
            const options = validations[i].options;
            const result = validator(value, options);

            if(result.occured) {
                setError(true);
                setErrorMessage(result.msg);
                break;
            }
            else {
                setError(false);
                setErrorMessage(result.msg);
            }

        }
    }, [value]);


    return { error, errorMessage }
}

export default function ValidationLibrary(props) {

    const [text, setText] = useState("");

    const {error, errorMessage} = useValidation(text, [
        {func: maxLength, options: {limit: 15}},
        {func: isCapital, options: {message: "Capital letter not allowed"}}
    ])



    return (
        <>
            <h4>Testing Realtime Validation Hooks</h4>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <div>{errorMessage}</div>
        </>
    )
}
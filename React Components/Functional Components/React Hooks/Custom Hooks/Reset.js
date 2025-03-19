import React, { useEffect } from "react";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function Reset() {
    // const [email, setEmail] = React.useState('');

    // useEffect(() => {
    //     let email = localStorage.getItem('email');
    //     if(email) {
    //         setEmail(email);
    //     }
    // }, []) ;

    // useEffect(() => {
    //         localStorage.setItem('email', email);
    //     }, [email]) ;

    //Custom Hooks
    const {email, setEmail} = useLocalStorage();

    return (
        <>
            <h1>Reset Password</h1>

            <input placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <button>Reset</button>
            <br/>
        </>
    )
}
import React, { useEffect } from 'react';
import {useState} from 'react';
import useLocalStorage from './useLocalStorage';

export default function LoginPage() {
    // const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    //Here ordering of Hooks is important
    // useEffect(() => {
    //         let email = localStorage.getItem('email');
    //         if(email) {
    //             setEmail(email);
    //         }
    // }, []) ;

    // useEffect(() => {
    //     localStorage.setItem('email', email);
    // }, [email]) ;


    //Custom Hooks :
    //It follows all the rules of a normal hooks
    //Always start with use followed by the name of the hook with captial letter
    const {email, setEmail} = useLocalStorage();

    return(
        <>
            <h1>Login to the Portal</h1>

            <input placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <input placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <button>Login</button>
            <br/>
        </>
    )
}
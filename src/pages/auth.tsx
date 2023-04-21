import { useState, useRef } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { AuthCard } from "../components/auth/authCard";
import { AuthHead } from "../components/auth/authHead";
import { AuthWrapper } from "../components/auth/authWrapper";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import firebaseApp from '../config/firebaseApp';

const auth = getAuth(firebaseApp);

export function AuthPage() {
    const [user] = useAuthState(auth);
    const [isLogin, setIsLogin] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();

    console.log(user);

    function onSubmitHandler(event) {
        event.preventDefault();
        if (isLogin) {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(() => {
                window.location.assign('/');
            })
        } else {
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(() => {
                window.location.assign('/');
            });
        }
    }
    return (
        <AuthWrapper>
            <AuthCard>
                <AuthHead caption={isLogin ? 'Login' : 'Create account'} />
                <form onSubmit={onSubmitHandler}>
                    {!isLogin && <Input forwardedRef={nameRef} placeholder='Name' />}
                    <Input forwardedRef={emailRef} placeholder='E-mail address' />
                    <Input forwardedRef={passwordRef} type='password' placeholder='**********' />
                    <div style={{ textAlign: 'center', padding: '10px 0' }}>
                        <Button type='submit'>Submit</Button>
                        <div style={{ padding: '5px 0' }}></div>
                        <Button onClick={() => setIsLogin(val => !val)} varient='flat'>Switch to {isLogin ? 'sign up' : 'sign in'}</Button>
                    </div>
                </form>
            </AuthCard>
        </AuthWrapper>
    );
}
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Link, useNavigate} from 'react-router-dom';
import '../styles/SigInStyle.css'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                setEmail('')
                setPass('')
                setError('')
                navigate('/mainPage');
            })
            .catch((error) => {
                setError('неправильный логин или пароль')
            });
    }

    return (
        <div className="form-container">
            <h1>Войти в систему</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input-field"
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
                className="input-field"
            />

            <button onClick={() => handleLogin(email, pass)} className="submit-button">
                Log in
            </button>
            <Link to="/auth/register" style={{color: 'yellow'}}>Нет аккаунта?/Зарегистрироваться</Link>
            {
                error &&
                <p style={{color: 'red'}}>{error}</p>
            }
        </div>
    );
};

export default SignIn;

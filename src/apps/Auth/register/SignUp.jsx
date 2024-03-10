import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setUser } from '../../../store/userSlice';
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [passwords, setPasswords] = useState({ password: '', repeatPassword: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleRegister = () => {
        const auth = getAuth();
        const { password, repeatPassword } = passwords;

        if (password !== repeatPassword) {
            setError('Passwords do not match');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid
                }));
                setPasswords({ password: '', repeatPassword: '' });
                setError(null);
                alert('Вы успешно зарегистрировались');
                navigate('/auth/login');
            })
            .catch(error => {
                setError(error.message);
            });

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setError(null);
        setPasswords(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="form-container">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input-field"
            />
            <input
                type="password"
                value={passwords.password}
                onChange={handleInputChange}
                name="password"
                placeholder="Password"
                className="input-field"
            />
            <input
                type="password"
                value={passwords.repeatPassword}
                onChange={handleInputChange}
                name="repeatPassword"
                placeholder="Repeat Password"
                className="input-field"
            />
            <button onClick={handleRegister} className="submit-button">
                Create account
            </button>
            <Link to="/auth/login" style={{color: 'yellow'}}>есть аккаунт? / войти</Link>
            {error && <p style={{ color: 'red' }}>Ошибка</p>}
        </div>
    );
};

export default SignUp;

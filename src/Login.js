import React, { useState } from 'react';
import './Login.css';

const Login = ({onLogin}) => {
    const[loginForm, setLoginForm]= useState({
        userName: '',
        password: ''
    })

    const [error, setError] = useState('');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        const { userName, password } = loginForm;


        if (userName !== 'admin' || password !== '12345678') {
            setError('Invalid username or password.');
            return;
        }

        setError('');
        onLogin();
    }

    const {userName,password} = loginForm;
    const isButtonDisabled = !userName || !password;
    return (
        
        <div className='login'>
            <form className='form' onSubmit={handleSubmit} >
                <h2>Login Form</h2>
                {error && <p className='error'>{error}</p>}
                <div className='input-field'>          
                    <input type='text' name='userName' value={userName} onChange={handleChange}>
                    </input>
                    <label >UserName:</label>
                </div>
                <div className='input-field'>            
                    <input type='password' name='password' value={password} onChange={handleChange}></input>
                    <label >Password:</label>
                </div>
                <button type='submit' disabled={isButtonDisabled}>Login</button>
            </form>
        </div>
    );
}

export default Login;

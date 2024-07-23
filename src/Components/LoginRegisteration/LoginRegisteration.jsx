
import './LoginRegisteration.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { useState } from 'react';


const LoginRegisteration = () => {
    const [action, setAction] = useState('');

    const registerLink = () =>{
        setAction(' active ');
    };
    const loginLink = () =>{
        setAction('');
    };
    
    return (
        <div className={`wrapper${action}`}>

            <div className="form-box login">
    
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text"
                            placeholder='Username' required />
                            <FaUserAlt className='icon' />

                        </div>
                        <div className="input-box">
                            <input type="password"
                            placeholder='Password' required />
                            <RiLockPasswordFill className='icon' />

                        </div>
                        <div className="forgot-remember">
                            <label>
                                <input type="checkbox" required/>
                                Remember Me
                            </label>
                            <a href="https://youtube.com/shorts/SXHMnicI6Pg?si=GhRIbpoOliPe55ng.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop">Forgot Password ?</a>
        
                        </div>

                        <button type='submit'>Login</button>

                        <div className="register-l">
                        <p>Don't have an account? <a href="#" onClick={registerLink}> Register </a></p>
                        </div>
                        
                    </form>
               
            </div>
            
            <div className="form-box register">
    
                    <form action="">
                        <h1>Register</h1>
                        <div className="input-box">
                            <input type="text"
                            placeholder='Username' required />
                            <FaUserAlt className='icon' />

                        </div>
                        <div className="input-box">
                            <input type="email"
                            placeholder='Email' required />
                            <IoIosContact className='icon' />

                        </div>
                        <div className="input-box">
                            <input type="password"
                            placeholder='Password' required />
                            <RiLockPasswordFill className='icon' />

                        </div>
                        <div className="forgot-remember">
                            <label>
                                <input type="checkbox" />
                                I agree to the terms and conditions
                            </label>
                            
        
                        </div>

                        <button type='submit'>Register</button>

                        <div className="register-l">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                        </div>
                        
                    </form>
               
            </div>
        </div>

    );
};

export default LoginRegisteration;


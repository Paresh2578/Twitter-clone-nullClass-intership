import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useSignInWithEmailAndPassword , useSignInWithGoogle } from 'react-firebase-hooks/auth';

//auth
import { auth } from "../../context/firebase";

//img
import twitterimg from '../../imgs/logo.webp'

//css
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();

    const [data , setData] = useState({email : "", password : ""});

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
       

        if(!error){
            signInWithEmailAndPassword(data.email , data.password);
            navigate('/');
        }

    };

    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithGoogle();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };




    return (
        <>
            <div className="login-container">
                <div className="image-container">
                    <img className=" image" src={twitterimg} alt="twitterImage" />
                </div>

                <div className="form-container ">
                    <div className="form-box" >
                        {/* <TwitterIcon style={{ color: "skyblue" }} /> */}
                        <h2 className="heading text-white pb-4">Happening now</h2>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="email" className="email"
                                placeholder="Email address"
                                onChange={(e) => setData({...data , email : e.target.value})}
                            />

                            <input className="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setData({...data , password : e.target.value})}
                            />


                            <div className="btn-login">
                                <button type="submit" className="btn" >Log In</button>
                            </div>
                        </form>
                        <hr />
                        <div>
                            <GoogleButton
                                className="g-btn"
                                type="light"

                                onClick={handleGoogleSignIn}
                            />


                        </div>
                    </div>
                    <div>
                        <spna className="text-light">Don't have an account?</spna>
                        <Link
                            to="/signup"
                            style={{
                                textDecoration: 'none',
                                color: 'var(--twitter-color)',
                                fontWeight: '600',
                                marginLeft: '5px'
                            }}
                        >
                            Sign up
                        </Link>
                    </div>

                </div>


            </div>


        </>
    );
};

export default Login;
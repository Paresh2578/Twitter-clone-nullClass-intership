import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleButton from "react-google-button";
import { useCreateUserWithEmailAndPassword  , useSignInWithGoogle} from 'react-firebase-hooks/auth';


//img
import twitterimg from '../../imgs/logo.webp'

//auth
import { auth } from "../../context/firebase";

//css
import "./Login.css"


const Signup = () => {
    let navigate = useNavigate();
    
    const [data , setData] = useState({userName :"" ,fullName : "" , email : "", password : "" });

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(data.email , data.password);
            navigate('/Home');

    };

    
    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithGoogle(data.email , data.password);
            navigate("/Home");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (

        <div style={{height : 'auto' , overflowX:'hidden'}}>
            <div className="login-container">

                <div className="image-container">
                    <img className="image" src={twitterimg} alt="twitterImage" />
                </div>


                <div className="form-container">
                    <div className="">
                        <h2 className="heading text-light">Happening now</h2>

                        <div class="d-flex align-items-sm-center">
                            <h3 className="heading1 text-light"> Join X today </h3>
                        </div>


                        <form onSubmit={handleSubmit}>

                            <input className="display-name" style={{ backgroudColor: "red" }}
                                type="username"
                                placeholder="@username "
                               onChange={(e)=>setData({...data , userName : e.target.value})}
                            />

                            <input className="display-name" style={{ backgroudColor: "red" }}
                                type="name"
                                placeholder="Enter Full Name"
                                onChange={(e) => setData({...data , fullName : e.target.value})}
                            />

                            <input className="email"
                                type="email"
                                placeholder="Email address"
                                onChange={(e) => setData({...data , email : e.target.value})}
                            />



                            <input className="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setData({...data , password : e.target.value})}
                            />


                            <div className="btn-login">
                                <button type="submit" className="btn">Sign Up</button>
                            </div>
                        </form>
                        <hr />
                        <div className="google-button">
                            <GoogleButton

                                className="g-btn"
                                type="light"

                                onClick={handleGoogleSignIn}
                            />
                        </div>
                        <div>
                            <span className="text-light">Already have an account?</span>
                            <Link
                                to="/login"
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--twitter-color)',
                                    fontWeight: '600',
                                    marginLeft: '5px'
                                }}
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;
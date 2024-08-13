import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import axios from "axios";

const Signup = () => {
    const [data, setData] = useState(
        {
            email: "",
            InspectionEmail: "",
            password: ""
        }
    )
    console.log(data);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const userData = {
          email: data.email,
          InspectionEmail: data.InspectionEmail,
          password: data.password
      };
  
      try {
          const response = await axios.post("http://localhost:3030/register", userData);
          console.log(response.data);
          navigate("/inspection");
      } catch (error) {
          console.error("There was an error registering the user!", error);
      }
  };
    return (
        <div className="login-main">
            <div className="login-left">
                <img src={Image} alt="" />
            </div>
            <div className="login-right">
                <div className="login-right-container">
                    <div className="login-logo">
                        <img src={Logo} alt="" style={{ width: "150px", height: "auto" }} />
                    </div>
                    <div className="login-center">
                        <h2>Create Account!</h2>
                        <p>Please enter your details</p>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                            <input 
                                type="email" 
                                name="InspectionEmail"
                                placeholder="Inspection ID" 
                                onChange={handleChange}
                            />
                            <div className="pass-input-div">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                                {showPassword ? (
                                    <FaEyeSlash
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}
                                    />
                                ) : (
                                    <FaEye
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}
                                    />
                                )}
                            </div>

                            <div className="login-center-options">
                                <a href="#" className="forgot-pass-link">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="login-center-buttons">
                                <button type="button" onClick={() => navigate("/inspection")}>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="login-bottom-p">
                        Already have an account? <a href="/">Log In</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
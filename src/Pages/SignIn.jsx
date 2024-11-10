import React, { useState } from "react";
import './SignIn.css';


const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", formData);
    };
    return (
        <>
            <section className="yoyo">
               
                <div className="signin">
                    <div className="content">
                        <h2>Sign In</h2>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="inputBx">
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                                <i>Email</i>
                            </div>
                            <div className="inputBx">
                                <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                                <i>Password</i>
                            </div>
                            <div className="links">
                                <a href="#">Forgot Password</a>
                              
                            </div>
                            <div className="inputBx">
                                <input type="submit" defaultValue="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
};
export default SignIn;
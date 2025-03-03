import React, { useState } from "react";
import "./Signin.css"; // Import the CSS file

const Signin= () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    const authenticate = async () => {
        const url = isSignIn ? "/signin" : "/register";

        const response = await fetch(`http://localhost:5000${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        alert(result.message);

        if (response.ok) {
            if (isSignIn) {
                window.location.href = "/"; // Redirect to home page on successful sign-in
            } else {
                setIsSignIn(true); // Switch to sign-in form after registration
                setUsername(""); // Clear input fields
                setPassword("");
            }
        }
    };

    return (
        <div className="auth-background">
            <div className="auth-container">
                <h2 className="auth-title">{isSignIn ? "Sign In" : "Register"}</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="auth-input" 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="auth-input" 
                />
                <button onClick={authenticate} className="auth-button">Submit</button>
                <p onClick={toggleForm} className="auth-toggle-text">
                    {isSignIn ? "Don't have an account? Register" : "Already have an account? Sign In"}
                </p>
            </div>
        </div>
    );
};

export default Signin;

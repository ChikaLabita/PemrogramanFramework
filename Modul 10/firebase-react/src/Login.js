import React, { useState, useContext } from "react";
import { AuthContext } from ".";
import firebase from "firebase/compat/app";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        /*e.preventDefault();
        console.log(Auth);
        Auth.setLoggedIn(true);*/
        e.preventDefault();
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            if (res.user) Auth.setLoggedIn(true);
          })
          .catch((e) => {
            setErrors(e.message);
          });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="email"
                />
                <input
                onChange={e => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                placeholder="password"
                />
                <hr />
                <button class="googleBtn" type="button">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="logo"
                    />
                    Login with Google
                </button>
                <button type="submit">Login</button>
                <span>{error}</span>
            </form>
        </div>
    );
};

export default Login;
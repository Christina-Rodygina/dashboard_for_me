import "./view"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {URL} from "../../App";

const AuthorizationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const login = async (event) => {
        event.preventDefault();
        if (email && password) {
            try {
                const response = await axios.post(`${URL}/user/login`, {
                    "email": email,
                    "password": password
                }, {withCredentials: true})
                if (response.status === 200) {
                    console.log(response.status)
                    setError('')
                    window.location.href = "/"
                }
            } catch (error) {
                setError(error.response.data.detail)
            }
        }
    }

    return (
        <>
            <div className="authorization">
                <div className="container authorization-container">
                    <div className="authorization__white-container">
                        <h3>Authorization</h3>
                        <h4 className="error">{error}</h4>
                        <form>
                            <input
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="KreigMenson@mail.ru"
                                value={email}
                                required
                                type="email"
                                name="email"
                                autoComplete="email"/>
                            <input
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Password"
                                value={password}
                                type="password"
                                name="password"
                                required
                                autoComplete="new-password"/>
                            <button onClick={(event) => login(event)}>Login</button>
                        </form>
                        <span>No account?
                            <span onClick={() => window.location.href = "/registration"}>Create</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorizationPage
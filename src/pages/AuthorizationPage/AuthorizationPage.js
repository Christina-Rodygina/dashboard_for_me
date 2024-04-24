import "./view"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {URL} from "../../App";

const AuthorizationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const response = await axios.post(`${URL}/user/login`, {
            "email": email,
            "password": password
        }, {withCredentials: true})
        if (response.status === 200) {
            // window.location.href = "/"
            console.log(response.status)
        } else {
            const error = document.querySelector(".error")
            error.innerText = 'Ошибка авторизации'
            console.log(response.status)
        }
    }
    return (
        <>
            <div className="authorization">
                <div className="container authorization-container">
                    <div className="authorization__white-container">
                        <h3>Authorization</h3>
                        <h4 className="error"></h4>
                        <form>
                            <input
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="KreigMenson@mail.ru"
                                value={email}
                                type="email"
                                autoComplete="email"/>
                            <input
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Password"
                                value={password}
                                type="password"
                                autoComplete="new-password"/>
                            <button onClick={() => login()}>Login</button>
                        </form>
                        <span>No account?
                            <span>Create</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorizationPage
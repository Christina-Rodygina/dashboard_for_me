import "./view"
import React, {useState} from "react";
import axios from "axios";
import {URL} from "../../App";

const AuthorizationPage = () => {
    const sidebar = document.querySelector(".sidebar");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    sidebar?.classList.add("none")

    const login = async () => {
        const authorization = document.querySelector(".authorization");
        try {
            const response = await axios.post(`${URL}/user/login`, {
                "email": email,
                "password": password
            }, {withCredentials: true});
            if (response.status === 200) {
                sidebar.classList.remove("none")
                authorization.classList.add("none")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="authorization">
                <div className="container authorization-container">
                    <div className="authorization__white-container">
                        <h3>Authorization</h3>
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
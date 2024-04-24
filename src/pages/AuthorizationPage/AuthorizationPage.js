import "./view"
import React, {useEffect, useState} from "react";

const AuthorizationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                            <button>Login</button>
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
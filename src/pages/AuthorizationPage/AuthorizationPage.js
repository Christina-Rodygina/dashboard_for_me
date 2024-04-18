import "./AuthorizationPage.css"
import React from "react";

const AuthorizationPage = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("none")
    return (
        <>
            <div className="authorization">
                <div className="container authorization-container">
                    <div className="authorization__white-container">
                        <h3>Authorization</h3>
                        <form>
                            <input placeholder="kreigmenson@mail.ru" type="email" autoComplete="email"/>
                            <input placeholder="password" type="password" autoComplete="new-password"/>
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorizationPage
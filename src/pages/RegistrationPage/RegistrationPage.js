import React from "react";
import "./RegistrationPage.css"

const RegistrationPage = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar?.classList.add("none")

    return (
        <>
            <div className="authorization">
                <div className="container authorization-container">
                    <div className="authorization__white-container">
                        <h3>Authorization</h3>
                        <form>
                            <input placeholder="KreigMenson@mail.ru" type="email" autoComplete="email"/>
                            <input placeholder="Password" type="password" autoComplete="new-password"/>
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

export default RegistrationPage
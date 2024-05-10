import React from "react";
import "./RegistrationPage.css"

const RegistrationPage = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar?.classList.add("none")

    return (
        <>
            <div className="registration">
                <div className="container registration-container">
                    <div className="registration__white-container">
                        <h3>Registration</h3>
                        <form>
                            <div className="email-reg-input">
                                <label className="email-reg-input__label" htmlFor="email">Email</label>
                                <input type="email" autoComplete="email" required/>
                            </div>
                            <div className="email-reg-input">
                                <label className="email-reg-input__label" htmlFor="password">Password</label>
                                <input type="password" autoComplete="new-password" required/>
                            </div>
                            <div className="email-reg-input">
                                <label className="email-reg-input__label" htmlFor="password">Repeat the password</label>
                                <input type="password" autoComplete="new-password" required/>
                            </div>
                            <div className="email-reg-input">
                                <label className="email-reg-input__label" htmlFor="password">Telegram Username (not required)</label>
                                <input placeholder="@Sergey_Zakhar0v" type="text" autoComplete="off"/>
                            </div>
                            <button type="submit">Register</button>
                        </form>
                        <span>Already have an account?
                            <span onClick={() => window.location.href = "/authorization"}>Login</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationPage
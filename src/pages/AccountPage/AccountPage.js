import "../../styles/CocktailTheme/common.css"
import "./view"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {URL} from "../../App";

const AccountPage = () => {
    const [email, setEmail] = useState(String)
    const [telegram, setTelegram] = useState(String)
    const [dateReg, setDateReg] = useState(String)
    const [username, setUsername] = useState(String)
    const [notifications, setNotifications] = useState(Boolean)
    const [password, setPassword] = useState("·········")
    const [edit, setEdit] = useState(false)
    const [error, setError] = useState(String)
    const forbiddenChars = /[^a-zA-Z0-9@_-]/;

    const me = async () => {
        try {
            const response = await axios.get(`${URL}/user/me`, {withCredentials: true})
            if (response.status === 200) {
                const data = response.data;
                setEmail(data["email"]);
                setDateReg(date_constructor(data['register_at']));
                setUsername(data.username);
            }
        } catch (error) {
            window.location.href = '/authorization'
        }
    }

    const user_update = async () => {
        try {
            const response = await axios.get(`${URL}/user/update`, {withCredentials: true}, {
                "username": username,
                "email": email,
                "telegram_id": telegram,
                "notifications": notifications,
            })
            if (response.status === 200) {
                setEdit(false)
                await me()
            }
        } catch (error) {

        }
    }

    const date_constructor = (timeString) => {
        const date = new Date(timeString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    const open_error = (type) => {
        const emailError = document.querySelector(".account__error-email-container")
        const emailInput = document.querySelector(".account__email input")
        const passError = document.querySelector(".account__error-pass-container")
        const passInput = document.querySelector(".account__pass input")
        const tgError = document.querySelector(".account__error-tg-container")
        const tgInput = document.querySelector(".account__telegram input")
        const unError = document.querySelector(".account__error-un-container")
        const unInput = document.querySelector(".username-edit-input input")
        switch (type) {
            case "email":
                if (email === "") {
                    emailError.classList.add("open")
                    emailInput.classList.add("invalid")
                    setError("You missed this field")
                } else if (forbiddenChars.test(email)) {
                    emailError.classList.add("open")
                    emailInput.classList.add("invalid")
                    setError("Email cannot contain forbidden characters")
                } else if (!email.includes("@")) {
                    emailError.classList.add("open")
                    emailInput.classList.add("invalid")
                    setError("Incorrect Email format")
                }
                break;
            case "password":
                if (password === "") {
                    passError.classList.add("open")
                    passInput.classList.add("invalid")
                    setError("You missed this field")
                } else if (forbiddenChars.test(password)) {
                    passError.classList.add("open")
                    passInput.classList.add("invalid")
                    setError("Password cannot contain forbidden characters")
                }
                break;
            case "telegram":
                if (forbiddenChars.test(telegram)) {
                    tgError.classList.add("open")
                    tgInput.classList.add("invalid")
                    setError("The field cannot contain special characters")
                }
                break;
            case "username":
                if (username === "") {
                    unError.classList.add("open")
                    unInput.classList.add("invalid")
                    setError("You missed this field")
                } else if (forbiddenChars.test(username)) {
                    unError.classList.add("open")
                    unInput.classList.add("invalid")
                    setError("Username cannot contain forbidden characters")
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        me()
        const intervalId = setInterval(me, 5 * 60 * 1000);
        // Очистка интервала при размонтировании компонента
        return () => clearInterval(intervalId);
    }, [])


    return (
        <>
            <div className="servers">
                <div className="container account__container">
                    <div className="account__block">
                        <div className="account__row">
                            <div className="account__column left">
                                <img src="/account-logo.png" alt="Account Logo"
                                     className="account__logo"/>
                                {edit ? (
                                    <div className="username-edit-input">
                                        <span>User Name</span>
                                        <input type="text" autoComplete="off" value={username} onChange={(event) => {
                                            setUsername(event.target.value)
                                            open_error()
                                        }
                                        }/>
                                        <div className="account__error-un-container">
                                            <span>{error}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <span>{username}</span>
                                )}
                                <div className="account__notification">
                                    <span className="account__ntf-text">Notification</span>
                                    <div className="">
                                        <label className="toggler-wrapper style-1">
                                            <input type="checkbox" checked={telegram ? notifications : false} onChange={(event) => setNotifications(event.target.checked)}/>
                                            <div className="toggler-slider">
                                                <div className="toggler-knob"></div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <button onClick={() => setEdit(!edit)} className="account__edit-btn">
                                    <img src="/edit-svgrepo-com.svg" alt="Edit"/>
                                </button>
                            </div>
                            <div className="account__column right">
                                <h3>Information</h3>
                                <div className="account__info">
                                    {edit ? (
                                        <>
                                            <div className="account__email">
                                                <h4>Email</h4>
                                                <input type="email" autoComplete="email" value={email} onChange={(event) => {
                                                    setEmail(event.target.value)
                                                    open_error()
                                                }}/>
                                                <div className="account__error-email-container">
                                                    <span>{error}</span>
                                                </div>
                                            </div>
                                            <div className="account__pass">
                                                <h4>Password</h4>
                                                <input type="password" autoComplete="off" value={password} onChange={(event) => {
                                                    setPassword(event.target.value)
                                                    open_error()
                                                }}/>
                                                <div className="account__error-pass-container">
                                                    <span>{error}</span>
                                                </div>
                                            </div>
                                            <div className="account__telegram">
                                                <h4>Telegram Account</h4>
                                                {/*<span>{telegram ? telegram : "unspecified"}</span>*/}
                                                <input type="text" autoComplete="off" value={telegram} onChange={(event) => {
                                                    setTelegram(event.target.value)
                                                    open_error()
                                                }}/>
                                                <div className="account__error-tg-container">
                                                    <span>{error}</span>
                                                </div>
                                            </div>
                                            <button onClick={user_update} className="edit-save-input">Save</button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="account__email">
                                                <h4>Email</h4>
                                                <span>{email}</span>
                                            </div>
                                            <div className="account__pass">
                                                <h4>Password</h4>
                                                <span style={{fontSize: "20px"}}>{password}</span>
                                            </div>
                                            <div className="account__telegram">
                                                <h4>Telegram Account</h4>
                                                <span>{telegram ? telegram : "unspecified"}</span>
                                            </div>
                                            <div className="account__date-reg">
                                                <h4>Date of registration</h4>
                                                <span>{dateReg}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountPage
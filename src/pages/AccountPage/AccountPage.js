import "./AccountPage.css"
import "../../styles/CocktailTheme/common.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {URL} from "../../App";

const AccountPage = () => {
    const [email, setEmail] = useState(String)
    const [telegram, setTelegram] = useState(String)
    const [dateReg, setDateReg] = useState(String)
    const [username, setUsername] = useState(String)
    const [edit, setEdit] = useState(false)

    const me = async () => {
        try {
            const response = await axios.get(`${URL}/user/me`, {withCredentials: true})
            if (response.status === 200) {
                const data = response.data;
                setEmail(data.email);
                setDateReg(date_constructor(data['register_at']));
                setUsername(data.username);
            }
        } catch (error) {
            window.location.href = '/authorization'
        }
    }

    const date_constructor = (timeString) => {
        const date = new Date(timeString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
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
                                        <input type="text" autoComplete="off" value={username}/>
                                    </div>
                                ) : (
                                    <span>{username}</span>
                                )}
                                <div className="account__notification">
                                    <span className="account__ntf-text">Notification</span>
                                    <div className="">
                                        <label className="toggler-wrapper style-1">
                                            <input type="checkbox"/>
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
                                                <input type="email" autoComplete="email" value={email}/>
                                            </div>
                                            <div className="account__pass">
                                                <h4>Password</h4>
                                                <input type="password" autoComplete="off" value="·········"/>
                                            </div>
                                            <div className="account__telegram">
                                                <h4>Telegram Account</h4>
                                                {/*<span>{telegram ? telegram : "unspecified"}</span>*/}
                                                <input type="text" autoComplete="off" value={telegram}/>
                                            </div>
                                            <button className="edit-save-input">Save</button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="account__email">
                                                <h4>Email</h4>
                                                <span>{email}</span>
                                            </div>
                                            <div className="account__pass">
                                                <h4>Password</h4>
                                                <span style={{fontSize: "20px"}}>·········</span>
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
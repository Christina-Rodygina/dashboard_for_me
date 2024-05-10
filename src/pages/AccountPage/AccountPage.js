import "./AccountPage.css"
import React from "react";

const AccountPage = () => {



    return (
        <>
            <div className="servers">
                <div className="container account__container">
                    <div className="account__block">
                        <div className="account__row">
                            <div className="account__column left">
                                <img src="/account-logo.png" alt="Account Logo"
                                     className="account__logo"/>
                                <span>Sergey Zakharov</span>
                                <button className="account__edit-btn">
                                    <img src="/edit-svgrepo-com.svg" alt="Edit"/>
                                </button>
                            </div>
                            <div className="account__column right">
                                <h3>Information</h3>
                                <div className="account__info">
                                    <div className="account__email">
                                        <h4>Email</h4>
                                        <span>kristinarodygina@mail.ru</span>
                                    </div>
                                    <div className="account__pass">
                                        <h4>Password</h4>
                                        <span style={{fontSize: "20px"}}>·········</span>
                                    </div>
                                    <div className="account__telegram">
                                        <h4>Telegram Account</h4>
                                        <span>@Sergey_Zakhar0v</span>
                                    </div>
                                    <div className="account__date-reg">
                                        <h4>Date of registration</h4>
                                        <span>14.05.2023</span>
                                    </div>
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
import React from "react";
import "./ServerInfoPage.css"

const ServerInfoPage = ({ onCancel }) => {
    return (
        <>
            <div className="server-info">
                <div className="container server-info__container">
                    <div className="server-info__column">
                        <h2 className="server-info__title">Servers</h2>
                        <div className="server-info__white-container">
                            <div className="server-info__title2-and-btns">
                                <h3 className="server-info__title2">{'#' + 1}</h3>
                                <div className="server-info__btns">
                                    <button className="server-info__btn-edit">
                                        <img src="/edit-svgrepo-com.svg" alt="Edit"/>
                                        Edit
                                    </button>
                                    <button className="server-info__btn-delete">
                                        <img src="/delete-2-svgrepo-com.svg" alt="Delete"/>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div className="server-info__search">
                                <input type="search" placeholder="Search..." className="server-info__search-input"/>
                            </div>
                            <div className="server-info__table-container">
                                <table className="info-table">
                                    <thead>
                                    <tr>
                                        <th>attribute</th>
                                        <th>value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th><b>ID</b></th>
                                        <th>1</th>
                                    </tr>
                                    <tr>
                                        <th><b>Server name</b></th>
                                        <th>VinylDiscount</th>
                                    </tr>
                                    <tr>
                                        <th><b>IP</b></th>
                                        <th>79.137.197.104</th>
                                    </tr>
                                    <tr>
                                        <th><b>Port</b></th>
                                        <th>3000</th>
                                    </tr>
                                    <tr>
                                        <th><b>User</b></th>
                                        <th>Sergey Zakharov</th>
                                    </tr>
                                    <tr>
                                        <th><b>Password</b></th>
                                        <th>121120</th>
                                    </tr>
                                    <tr>
                                        <th><b>Date</b></th>
                                        <th>13.04.2003</th>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="server-edit__btns">
                                <button onClick={onCancel} style={{backgroundColor: "transparent"}} className="server-edit__cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServerInfoPage
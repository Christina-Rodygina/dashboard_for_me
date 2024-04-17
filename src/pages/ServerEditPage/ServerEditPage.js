import "./ServerEditPage.css"
import React from "react";

const ServerEditPage = ( {id} ) => {
    return (
        <>
            <div className="server-info">
                <div className="container server-info__container">
                    <div className="server-info__column">
                        <h2 className="server-info__title">Servers</h2>
                        <div className="server-info__white-container">
                            <div className="server-info__title2-and-btns">
                                <h3 className="server-info__title2">Edit Server</h3>
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
                                        <th>
                                            <input type="text" placeholder="ID"/>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th><b>Server name</b></th>
                                        <th>
                                            <input type="text" placeholder="Server name"/>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th><b>IP</b></th>
                                        <th>
                                        <input type="text" placeholder="IP"/>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th><b>Port</b></th>
                                        <th>
                                        <input type="text" placeholder="Port"/>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th><b>User</b></th>
                                        <th>
                                        <input type="text" placeholder="User"/>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th><b>Password</b></th>
                                        <th>
                                        <input type="text" placeholder="Password"/>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th><b>Date</b></th>
                                        <th>
                                            <input type="text" placeholder="Date"/>
                                        </th>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="server-edit__btns">
                                <button className="server-edit__cancel">Cancel</button>
                                <button className="server-edit__save-and-add">Save and add another</button>
                                <button className="server-edit__save-and-next">Save and continue editing</button>
                                <button className="server-edit__save">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServerEditPage
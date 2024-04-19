import "./Sidebar.css"
import {useEffect, useState} from "react";


const Sidebar = ({updateSidebarData, meta}) => {
    const handleClick = (event, data) => {
        // Вызываем функцию обновления состояния с данными
        updateSidebarData(data);
        const buttons = document.querySelectorAll(".sidebar__list li button");
        buttons.forEach(button => {
            button.classList.remove("active");
        });
        event.target.classList.add("active");
    };

    return (
        <>
            {meta ? (
                <div className="sidebar">
                    <div className="container">
                        <div className="sidebar__column">
                            <h2 className="sidebar__title">User Panel</h2>
                            <ul className="sidebar__list">
                                <li>
                                    <button className="active" onClick={(event) => handleClick(event, "Dashboard")}>
                                        <img src="/Dashboard.svg" alt="Dashboard"/>
                                        <span>Dashboard</span>
                                    </button>
                                </li>
                                {meta.map((item, index) => (
                                    <li key={index}>
                                        <button onClick={(event) => handleClick(event, item["table_name"])}>
                                            {item["table_name"] === 'server' ? (
                                                <>
                                                    <img style={{maxWidth: "20px", marginLeft: "-1px"}}
                                                         src="/server-free-material-svgrepo-com.svg" alt="Servers"/>
                                                    <span>Servers</span>
                                                </>
                                            ) : item["table_name"] === 'log' ? (
                                                <>
                                                    <img src="/log-svgrepo-com.svg" alt="Log"/>
                                                    <span>{item["table_name"][0].toUpperCase() + item["table_name"].slice(1).replace(/_/g, " ")}</span>
                                                </>
                                            ) : item["table_name"] === "alembic_version" ? (
                                                <>
                                                    <img src="/table-list-svgrepo-com.svg" alt="alembic_version"/>
                                                    <span>{item["table_name"][0].toUpperCase() + item["table_name"].slice(1).replace(/_/g, " ")}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <img src="/table-list-svgrepo-com.svg" alt="alembic_version"/>
                                                    <span>{item["table_name"][0].toUpperCase() + item["table_name"].slice(1).replace(/_/g, " ")}</span>
                                                </>
                                            )}
                                        </button>
                                    </li>
                                ))}
                                {/*<li>*/}
                                {/*    <button onClick={(event) => handleClick(event,"Servers")}>*/}
                                {/*        <img style={{maxWidth: "20px", marginLeft: "-1px"}} src="/server-free-material-svgrepo-com.svg" alt="Servers"/>*/}
                                {/*        <span>Servers</span>*/}
                                {/*    </button>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <button onClick={(event) => handleClick(event,"Services")}>*/}
                                {/*        <img style={{marginLeft: "-3px"}} src="/services-20px-svgrepo-com.svg" alt="Services"/>*/}
                                {/*        <span>Services</span>*/}
                                {/*    </button>*/}
                                {/*</li>*/}
                            </ul>
                            <div className="sidebar__info">
                                <img src="/Group%201223.svg" alt="Thoughts Time"/>
                            </div>
                            <button onClick={(event) => handleClick(event, "Logout")} className="sidebar__logout">
                                <img src="/Frame%201274.svg" alt="Logout"/>
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Sidebar
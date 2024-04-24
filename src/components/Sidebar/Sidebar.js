import "./view"
import {useEffect, useState} from "react";
import axios from "axios";
// import {URL} from "../../App";


const Sidebar = ({meta}) => {
    const windowWidth = window.innerWidth;
    const [sideBar, setSideBar] = useState(windowWidth > 500)

    const open_sidebar = () => {
        const section = document.querySelector(".sidebar")
        const servers = document.querySelector(".servers")
        const dashboard = document.querySelector(".homepage")

        if (section.classList.contains("open")) {
            section.classList.remove("open")
            setSideBar(false)
            servers?.classList.add("max")
            dashboard?.classList.add("max")
        } else {
            section.classList.add("open")
            setSideBar(true)
            if (servers?.classList.contains("max") || dashboard?.classList.contains("max")) {
                servers?.classList.remove("max")
                dashboard?.classList.remove("max")
            }
        }
    }


    return (
        <>
            {meta ? (
                <div className={windowWidth > 500 ? "sidebar open" : "sidebar"}>
                    <div className="container">
                        <div className="sidebar__column">
                            <div className="sidebar__title-and-btn"
                                 style={sideBar ? {justifyContent: 'space-between'} : {justifyContent: 'center'}}>
                                <h2 className="sidebar__title"
                                    style={sideBar ? {maxWidth: '100%', marginLeft: "20px"} : {
                                        maxWidth: 0,
                                        marginLeft: 0
                                    }}>User
                                    Panel</h2>
                                <button onClick={open_sidebar}
                                        className="sidebar__title-btn">{sideBar ? '<' : '>'}</button>
                            </div>
                            <ul className="sidebar__list">
                                <li>
                                    <button
                                        className={window.location.pathname === '/' ? 'active' : null}
                                        onClick={() => window.location.href = '/'}
                                        style={sideBar ? {
                                            padding: '24px 10px',
                                            justifyContent: 'start'
                                        } : {padding: '15px 10px', justifyContent: 'center'}}>
                                        <img style={sideBar ? {
                                            maxWidth: "20px",
                                            marginLeft: "-1px",
                                            marginRight: '10px'
                                        } : {maxWidth: "20px", marginLeft: "-1px", marginRight: 0}} src="/Dashboard.svg"
                                             alt="Dashboard"/>
                                        <span style={sideBar ? {maxWidth: '100%'} : {maxWidth: 0}}>Dashboard</span>
                                    </button>
                                </li>
                                {meta.map((item, index) => (
                                    <li key={index}>
                                        <button className={window.location.pathname === `/${item["table_name"]}` ? 'active' : null}
                                                onClick={() => window.location.href = `/${item["table_name"]}`}
                                                style={sideBar ? {
                                                    padding: '24px 10px',
                                                    justifyContent: 'start'
                                                } : {padding: '15px 10px', justifyContent: 'center'}}>
                                            {item["table_name"] === 'server' ? (
                                                <>
                                                    <img style={sideBar ? {
                                                        maxWidth: "20px",
                                                        marginLeft: "-1px",
                                                        marginRight: '10px'
                                                    } : {maxWidth: "20px", marginLeft: "-1px", marginRight: 0}}
                                                         src="/server-free-material-svgrepo-com.svg" alt="Servers"/>
                                                    <span
                                                        style={sideBar ? {maxWidth: '100%'} : {maxWidth: 0}}>Servers</span>
                                                </>
                                            ) : item["table_name"] === 'log' ? (
                                                <>
                                                    <img src="/log-svgrepo-com.svg" alt="Log"
                                                         style={sideBar ? {marginRight: '10px'} : {marginRight: 0}}/>
                                                    <span
                                                        style={sideBar ? {maxWidth: '100%'} : {maxWidth: 0}}>{item["table_name"][0].toUpperCase() + item["table_name"].slice(1).replace(/_/g, " ")}</span>
                                                </>
                                            ) : item["table_name"] === "alembic_version" ? (
                                                <>
                                                    <img src="/table-list-svgrepo-com.svg" alt="alembic_version"
                                                         style={sideBar ? {marginRight: '10px'} : {marginRight: 0}}/>
                                                    <span
                                                        style={sideBar ? {maxWidth: '100%'} : {maxWidth: 0}}>{item["table_name"][0].toUpperCase() + item["table_name"].slice(1).replace(/_/g, " ")}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <img src="/table-list-svgrepo-com.svg" alt="alembic_version"
                                                         style={sideBar ? {marginRight: '10px'} : {marginRight: 0}}/>
                                                    <span
                                                        style={sideBar ? {maxWidth: '100%'} : {maxWidth: 0}}>{item["table_name"][0].toUpperCase() + item["table_name"].slice(1).replace(/_/g, " ")}</span>
                                                </>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="sidebar__info">
                                <img style={sideBar ? {maxWidth: '100%'} : {maxWidth: 0}} src="/Group%201223.svg"
                                     alt="Thoughts Time"/>
                            </div>
                            <button
                                onClick={() => window.location.href = '/authorization'}
                                className="sidebar__logout">
                                <img src="/Frame%201274.svg" alt="Logout"
                                     style={sideBar ? {marginRight: '10px'} : {marginRight: 0}}/>
                                <span style={sideBar ? {maxWidth: '100%'} : {maxWidth: 0}}>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Sidebar
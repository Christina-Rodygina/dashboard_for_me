import "./styles/reset.css"
import "./styles/common.css"
import "./styles/CocktailTheme/view"
import "./styles/animations.css"

import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ServerEditPage from "./pages/ServerEditPage/ServerEditPage";
import ServerInfoPage from "./pages/ServerInfoPage/ServerInfoPage";
import ServersPage from "./pages/ServersPage/ServersPage";


export const URL = 'https://krianse.ru/api'

function App() {
    const [meta, setMeta] = useState([
        {
            "table_name": "log",
            "columns": [
                {
                    "name": "id",
                    "type": "BIGINT",
                    "nullable": "False",
                    "default": "nextval('log_id_seq'::regclass)"
                },
                {
                    "name": "filename",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "line",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "level",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "message",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "date",
                    "type": "TIMESTAMP",
                    "nullable": "False",
                    "default": "None"
                }
            ],
            "functions": [
                "add",
                "delete",
                "watch",
                "edit",
                "clear"
            ]
        },
        {
            "table_name": "workload",
            "columns": [
                {
                    "name": "id",
                    "type": "BIGINT",
                    "nullable": "False",
                    "default": "nextval('workload_id_seq'::regclass)"
                },
                {
                    "name": "server_id",
                    "type": "BIGINT",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "cpu",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "ram",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "disk",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "date",
                    "type": "TIMESTAMP",
                    "nullable": "False",
                    "default": "None"
                }
            ],
            "functions": [
                "add",
                "delete",
                "watch",
                "edit"
            ]
        },
        {
            "table_name": "server",
            "columns": [
                {
                    "name": "id",
                    "type": "BIGINT",
                    "nullable": "False",
                    "default": "nextval('server_id_seq'::regclass)"
                },
                {
                    "name": "name",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "ip",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "port",
                    "type": "INTEGER",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "password",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "status",
                    "type": "VARCHAR",
                    "nullable": "True",
                    "default": "None"
                },
                {
                    "name": "date",
                    "type": "TIMESTAMP",
                    "nullable": "False",
                    "default": "None"
                },
                {
                    "name": "user_id",
                    "type": "BIGINT",
                    "nullable": "True",
                    "default": "None"
                },
                {
                    "name": "user_name",
                    "type": "VARCHAR",
                    "nullable": "False",
                    "default": "None"
                }
            ],
            "functions": [
                "add",
                "delete",
                "watch",
                "edit"
            ]
        }
    ]);
    const [login, setLogin] = useState(true)

    useEffect(() => {
        if (window.location.pathname === '/authorization') {
            setLogin(false)
        } else {
            setLogin(true)
        }
    }, [window.location.pathname])

    const tabs_meta = () => {
        if (meta) {
            return meta.map((item, index) => (
                <Route key={index} path={`/${item['table_name']}`} element={
                    <ServersPage
                        title={item['table_name']}
                        functions={item.functions}
                        dataColumn={item.columns}
                    />
                }/>
            ))
        }
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                {login ? (
                    <Sidebar meta={meta}/>
                ) : null}
                <Routes>
                    <Route path="/" element={<DashboardPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/edit" element={<ServerEditPage/>}/>
                    <Route path="/whatch" element={<ServerInfoPage/>}/>
                    <Route path="/authorization" element={<AuthorizationPage/>}/>
                    {tabs_meta()}
                    <Route path="*" element={<div>Error page</div>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
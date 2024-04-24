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
import axios from "axios";


export const URL = 'https://krianse.ru/api'

function App() {
    const [meta, setMeta] = useState([]);
    const [login, setLogin] = useState(true)

    const get_meta = async () => {
        try {
            const response = await axios.get(`${URL}/server/get-meta`)
            if (response.status === 200) {
                setMeta(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const tabs_meta = () => {
        if (meta) {
            return meta.map((item, index) => (
                <Route key={index} path={`/${item['table_name']}`} element={
                    <ServersPage
                        title={item['table_name']}
                        functions={item.functions}
                        dataColumn={item.columns}
                    />
                }
                />
            ))
        }
    }

    useEffect(() => {
        get_meta()
    },[])

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                {window.location.pathname !== '/authorization' ? (
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
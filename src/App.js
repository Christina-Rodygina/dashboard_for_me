import "./styles/reset.css"
import "./styles/common.css"
import "./styles/CocktailTheme/view"
import "./styles/animations.css"

import axios from "axios";
import Header from "./components/Header/Header";
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import Sidebar from "./components/Sidebar/Sidebar";
import {useEffect, useState} from "react";
import ServersPage from "./pages/ServersPage/ServersPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


export const URL = 'https://krianse.ru/api'

function App() {
    const [sidebarData, setSidebarData] = useState("Logout");
    const [meta, setMeta] = useState(null)

    const handleSidebarUpdate = (data) => {
        setSidebarData(data);
    };

    const get_meta = async () => {
        try {
            const response = await axios.get(`${URL}/server/get-meta`, {withCredentials: true});
            if (response.status === 200) {
                setMeta(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const me = async () => {
        const authorization = document.querySelector(".authorization");
        try {
            const response = await axios.get(`${URL}/user/me`, {withCredentials: true});
            if (response.status === 200) {
                authorization?.classList.add("none")
                get_meta()
                setSidebarData("Dashboard")
                // renderPage()
            } else {
                setSidebarData('Logout')
                // renderPage()
            }
        } catch (error) {
        }
    }


    const renderPage = () => {
        switch (sidebarData) {
            case "Dashboard":
                window.location.replace("/dashboard")
            case "Logout":
                return <AuthorizationPage/>;
            case "Registration":
                return <RegistrationPage/>;
            default:
                const serversData = meta.find(item => item["table_name"] === sidebarData);
                // Отображаем ServersPage с найденными данными
                return <ServersPage onSidebarUpdate={handleSidebarUpdate} dataColumn={serversData.columns}
                                    title={serversData["table_name"]} functions={serversData.functions}/>;
        }
    };

    useEffect(() => {
        me()
    }, [])

    // useEffect(() => {
    //     renderPage()
    // }, [sidebarData])

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar updateSidebarData={handleSidebarUpdate} meta={meta}/>
                <Routes>
                    {/*{renderPage()}*/}
                    <Route path="/" element={<AuthorizationPage/>} />
                    <Route path="/dashboard" element={<DashboardPage/>} />
                    <Route path="/servers" element={<ServersPage/>} />
                    <Route path="/registration" element={<RegistrationPage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

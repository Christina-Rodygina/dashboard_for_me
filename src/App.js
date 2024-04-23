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


export const URL = 'https://krianse.ru/api'

function App() {
    const [sidebarData, setSidebarData] = useState("Dashboard");
    const [meta, setMeta] = useState(null)
    const [login, setLogin] = useState(false);

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
        try {
            const response = await axios.get(`${URL}/user/me`, {withCredentials: true});
            if (response.status === 200) {
                setLogin(login)
            } else {
                setLogin(false)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const renderPage = () => {
        switch (sidebarData) {
            case "Dashboard":
                return <DashboardPage/>;
            case "Logout":
                return <AuthorizationPage/>;
            case "Registration":
                return <RegistrationPage/>
            default:
                const serversData = meta.find(item => item["table_name"] === sidebarData);
                // Отображаем ServersPage с найденными данными
                return <ServersPage onSidebarUpdate={handleSidebarUpdate} dataColumn={serversData.columns}
                                    title={serversData["table_name"]} functions={serversData.functions}/>;
        }
    };

    useEffect(() => {
        me()
        if (login) {
            get_meta()
        } else {
            setSidebarData('Logout')
        }
    }, [login])

    useEffect(() => {
        renderPage()
    }, [sidebarData])

    return (
        <div className="App">
            <Header/>
            <Sidebar updateSidebarData={handleSidebarUpdate} meta={meta}/>
            {renderPage()}
        </div>
    );
}

export default App;

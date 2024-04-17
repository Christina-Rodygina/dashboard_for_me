import "./styles/reset.css"
import "./styles/common.css"

import Header from "./components/Header/Header";
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import Sidebar from "./components/Sidebar/Sidebar";
import {useState} from "react";
import ServersPage from "./pages/ServersPage/ServersPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import ServerInfoPage from "./pages/ServerInfoPage/ServerInfoPage";
import ServerEditPage from "./pages/ServerEditPage/ServerEditPage";


function App() {
    const [sidebarData, setSidebarData] = useState("Dashboard");
    const data = [
        {
            "table_name": "alembic_version",
            "columns": [
                {
                    "name": "version_num",
                    "type": "VARCHAR(32)",
                    "nullable": "False",
                    "default": "None"
                }
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
                    "name": "user",
                    "type": "VARCHAR",
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
                    "name": "date",
                    "type": "DATE",
                    "nullable": "False",
                    "default": "None"
                }
            ]
        }
    ];

    const handleSidebarUpdate = (data) => {
        setSidebarData(data);
    };

    const renderPage = () => {
        switch (sidebarData) {
            case "Dashboard":
                return <DashboardPage />;
            case "Servers":
                return <ServersPage onSidebarUpdate={handleSidebarUpdate} dataColumn={data.find(item => item.table_name === "server")} />;
            case "Services":
                return <ServicesPage />;
            case "Logout":
                return <AuthorizationPage />;
            case "watchServer":
                return <ServerInfoPage onCancel={() => handleSidebarUpdate("Servers", true)}/>
            case "editServer":
                return <ServerEditPage />;
            default:
                return null;
        }
    };

    return (
        <div className="App">
            <Header />
            <Sidebar updateSidebarData={handleSidebarUpdate} />
            {renderPage()}
        </div>
    );
}

export default App;

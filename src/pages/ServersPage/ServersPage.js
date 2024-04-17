import React, {useState} from "react";
import "./ServersPage.css"

const ServersPage = ({dataColumn, onSidebarUpdate}) => {
    const [passwordVisibility, setPasswordVisibility] = useState({});
    const dataRows = [{
        "id": 123,
        "name": "VinylDiscount",
        "ip": "79.137.197.104",
        "port": 3000,
        "user": "Sergey Zakharov",
        "password": "121120",
        "date": "13.04.2003"
    }, {
        "id": 154,
        "name": "MetricaFX",
        "ip": "92.112.452.245",
        "port": 6380,
        "user": "Sergey Zakharov",
        "password": "121120",
        "date": "13.04.2003"
    }]

    const togglePasswordVisibility = (index) => {
        setPasswordVisibility(prevState => ({
            ...prevState, [index]: !prevState[index] // инвертируем значение видимости пароля
        }));
    };

    const openDeletion = (itemId, bool) => {
        const section = document.getElementById(`confirmation-deletion-${itemId}`);
        if (section.classList.contains("open")) {
            section.classList.remove("open");
        } else {
            section.classList.add("open");
        }

        if (bool) {
            console.log(`Удален сервер ${itemId}`)
        }
    }

    const openInfoOrEdit = (id, action) => {
        if (action === 'watch') {
            onSidebarUpdate('watchServer');
        } else if (action === 'edit') {
            onSidebarUpdate('editServer');
        }
    };


    return (
        <>
        {onSidebarUpdate !== undefined ? (
            <div className="servers">
            <div className="container servers__container">
                <h2> </h2>
                <div className="servers__column">
                    <table className="servers__table">
                        <thead>
                        <tr>
                            <th>
                                <div className="random-blob number">
                                    <span>BTN</span>
                                </div>
                            </th>
                            {dataColumn.columns.map((item, index) => (
                                <th tabIndex={index}>
                                <div className="random-blob number">
                                    <span>
                                        {item.name.length > 3 ? (item.name[0].toUpperCase() + item.name.slice(1)) : (item.name.toUpperCase())}
                                    </span>
                                </div>
                            </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {dataRows.map((item, index) => (
                            <tr>
                                <td>
                                    <span className="span__buttons">
                                        <button onClick={() => openInfoOrEdit(item.id, "watch")}>
                                            <img src="/view-svgrepo-com.svg" alt="Watch"/>
                                        </button>
                                        <button onClick={() => openInfoOrEdit(item.id, "edit")}>
                                            <img src="/edit-svgrepo-com.svg" alt="Edit"/>
                                        </button>
                                        <button onClick={() => openDeletion(item.id)}>
                                            <img src="/delete-2-svgrepo-com.svg" alt="Delete"/>
                                        </button>
                                        <div id={`confirmation-deletion-${item.id}`} className="confirmation-deletion">
                                            <span>Are you sure you want to delete this server<b
                                                style={{marginLeft: "4px"}}>{item.name}</b>?</span>
                                            <div className="confirmation-deletion__btns">
                                                <button onClick={() => openDeletion(item.id, true)}>Ok</button>
                                                <button onClick={() => openDeletion(item.id)}>Cancel</button>
                                            </div>
                                        </div>
                                    </span>
                                </td>
                                <td><span>{item.id}</span></td>
                                <td>{item.name}</td>
                                <td>{item.ip}</td>
                                <td>{item.port}</td>
                                <td>{item.user}</td>
                                <td className="password">
                                    <span>{passwordVisibility[index] ? item.password : "******"}</span>
                                    {!passwordVisibility[index] ? (<img onClick={() => togglePasswordVisibility(index)}
                                                                        src="/hide-svgrepo-com.svg"
                                                                        alt="Hidden"/>) : (
                                        <img onClick={() => togglePasswordVisibility(index)}
                                             src="/view-svgrepo-com.svg"
                                             alt="Opened"/>)}
                                </td>
                                <td>{item.date}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>) : null}
    </>)
}

export default ServersPage
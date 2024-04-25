import React, {useEffect, useState} from "react";
import "./view"
import axios from "axios";
import {URL} from "../../App";

const ServersPage = ({dataColumn, title, functions}) => {
    // const [passwordVisibility, setPasswordVisibility] = useState({});
    const [data, setData] = useState([]);
    const tableWidth = document.querySelector(".servers__table")?.offsetWidth;
    const headerHeight = document.querySelector(".header__container")?.offsetHeight;
    const tableHeaderHeight = document.querySelector(".servers__table")?.offsetHeight;
    const windowHeight = window.innerHeight;

    // const togglePasswordVisibility = (index) => {
    //     setPasswordVisibility(prevState => ({
    //         ...prevState, [index]: !prevState[index] // инвертируем значение видимости пароля
    //     }));
    // };

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

    // const openInfoOrEdit = (id, action) => {
    //     if (action === 'watch') {
    //         onSidebarUpdate('watchServer');
    //     } else if (action === 'edit') {
    //         onSidebarUpdate('editServer');
    //     }
    // };

    const get_request = async (title) => {
        console.log(title)
        console.log(`${URL}/${title}/get-${title}`)
        try {
            const response = await axios.get(title !== 'log' ?
                `${URL}/${title}/get-${title}` :
                `${URL}/${title}/get-${title}?reverse=true`);
            if (response.status === 200) {
                if (title === "log") {
                    setData(response.data[0])
                } else if (title === "workload") {
                    setData(transformData(response.data))
                    console.log(transformData(response.data))
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const transformData = (responseData) => {
        const transformedData = [];
        responseData.forEach(server => {
            server.data.forEach(dataItem => {
                const transformedItem = {
                    name: server.name,
                    cpu: dataItem.cpu,
                    disk: dataItem.disk,
                    ram: dataItem.ram,
                    id: dataItem.id,
                    server_id: dataItem.server_id,
                    date: dataItem.date
                };
                transformedData.push(transformedItem);
            });
        });
        return transformedData;
    };


    const date_constructor = (timeString) => {
        const date = new Date(timeString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    }

    const functions_buttons = async (functions) => {
        if (functions === 'clear') {
            try {
                const response = await axios.delete(`${URL}/${title}/clear-${title}`)
                if (response.status === 200) {
                    await get_request(title)
                } else {
                    console.log("An error occurred while clearing the data")
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        setData(null)
        get_request(title)
    }, [title])


    return (
        <>
            <div className="servers">
                <div className="container servers__container">
                    <h2>{''}</h2>
                    <div className="servers__column">

                        <div className="server-btns">
                            {functions?.includes('clear') ? (
                                <div className="log-btn">
                                    <button>Clear</button>
                                </div>
                            ) : functions?.includes('add') ? (
                                <div className="add-btn">
                                    <button>+</button>
                                </div>
                            ) : null}
                        </div>
                        <table className="servers__table">
                            <thead>
                            <tr>
                                <th>
                                    <div className="random-blob number">
                                        <span>BTN</span>
                                    </div>
                                </th>
                                {dataColumn.map((item, index) => (
                                    <th key={index} tabIndex={index}>
                                        <div className="random-blob number">
                                                <span>
                                                    {item.name.length > 3 ?
                                                        (item.name[0].toUpperCase() + item.name.slice(1)) :
                                                        (item.name.toUpperCase())}
                                                </span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {data && data.length > 0 ? (
                                data.map((rowData, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td>
                                                <span className="span__buttons">
                                                    {title !== 'log' ? (
                                                        <>
                                                            <button>
                                                                <img src="/view-svgrepo-com.svg" alt="Watch"/>
                                                            </button>
                                                            <button>
                                                                <img src="/edit-svgrepo-com.svg" alt="Edit"/>
                                                            </button>
                                                        </>
                                                    ) : null}
                                                    <button onClick={() => openDeletion(rowData.id)}>
                                                        <img src="/delete-2-svgrepo-com.svg" alt="Delete"/>
                                                    </button>
                                                    <div id={`confirmation-deletion-${rowData.id}`}
                                                         className="confirmation-deletion">
                                                        <span>Are you sure you want to delete this {title}<b
                                                            style={{marginLeft: "4px"}}>{title !== 'log' ? rowData.name : rowData.id}</b>?</span>
                                                        <div className="confirmation-deletion__btns">
                                                            <button
                                                                onClick={() => openDeletion(rowData.id, true)}>Ok</button>
                                                            <button
                                                                onClick={() => openDeletion(rowData.id)}>Cancel</button>
                                                        </div>
                                                    </div>
                                                </span>
                                        </td>
                                        {dataColumn.map((column, columnIndex) => (

                                            <td key={columnIndex}>
                                                {column.name !== 'date' ? (
                                                    <span>{rowData[column.name]}</span>
                                                ) : (
                                                    <span>{date_constructor(rowData[column.name])}</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : null}
                            </tbody>
                        </table>
                        {!data || data.length === 0 ? (
                            <div className="box" style={
                                {
                                    width: tableWidth,
                                    height: windowHeight - headerHeight - tableHeaderHeight - 50,
                                }
                            }><b></b></div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>)
}

export default ServersPage
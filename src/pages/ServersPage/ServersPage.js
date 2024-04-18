import React, {useEffect, useState} from "react";
import "./ServersPage.css"
import axios from "axios";
import {URL} from "../../App";

const ServersPage = ({dataColumn, onSidebarUpdate, title, functions}) => {
    const [passwordVisibility, setPasswordVisibility] = useState({});
    const [data, setData] = useState(null)
    const tableWidth = document.querySelector(".servers__table")?.offsetWidth;
    const headerHeight = document.querySelector(".header__container")?.offsetHeight;
    const tableHeaderHeight = document.querySelector(".servers__table")?.offsetHeight;
    const windowHeight = window.innerHeight;
    console.log(windowHeight)

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

    const get_request = async (title) => {
        try {
            const response = await axios.get(title !== 'log' ?
                `${URL}/${title}/get-${title}` :
                `${URL}/${title}/get-${title}?reverse=true`);
            if (response.status === 200) {
                setData(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

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

    const rollBall = () => {
        const ball = document.querySelector('.ball');
        // Генерируем случайное положение в пределах контейнера
        const containerWidth = document.querySelector('.no-data').offsetWidth;
        const containerHeight = document.querySelector('.no-data').offsetHeight;
        const ballWidth = ball.offsetWidth;
        const ballHeight = ball.offsetHeight;
        const maxX = containerWidth - ballWidth;
        const maxY = containerHeight - ballHeight;
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        // Применяем новое положение к перекатиполе
        ball.style.left = `${newX}px`;
        ball.style.top = `${newY}px`;
    }


    useEffect(() => {
        get_request(title)
    }, [title])


    return (
        <>
            {onSidebarUpdate !== undefined ? (
                <div className="servers">
                    <div className="container servers__container">
                        <h2></h2>
                        <div className="servers__column">
                            {functions?.includes('clear') ? (
                                <div className="log-btn">
                                    <button onClick={() => functions_buttons('clear')}>Clear</button>
                                </div>
                            ) : null}
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
                                    {data && data[0].length > 0 ? (
                                        data[0].map((rowData, rowIndex) => (
                                            <tr key={rowIndex}>
                                                <td>
                                                <span className="span__buttons">
                                                    <button onClick={() => openInfoOrEdit(rowData.id, "watch")}>
                                                        <img src="/view-svgrepo-com.svg" alt="Watch"/>
                                                    </button>
                                                    <button onClick={() => openInfoOrEdit(rowData.id, "edit")}>
                                                        <img src="/edit-svgrepo-com.svg" alt="Edit"/>
                                                    </button>
                                                    <button onClick={() => openDeletion(rowData.id)}>
                                                        <img src="/delete-2-svgrepo-com.svg" alt="Delete"/>
                                                    </button>
                                                    <div id={`confirmation-deletion-${rowData.id}`}
                                                         className="confirmation-deletion">
                                                        <span>Are you sure you want to delete this server<b
                                                            style={{marginLeft: "4px"}}>{rowData.name}</b>?</span>
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
                            {data && data[0].length === 0 ? (
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
            ) : null}
        </>)
}

export default ServersPage
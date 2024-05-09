import "./view"
import React, {useEffect, useState} from "react";
import InfoLine from "./InfoLine/InfoLine";
import axios from "axios";
import {URL} from "../../App";

const DashboardPage = () => {
    const [dataWorkload, setDataWorkload] = useState(Array)

    const workload_day = async () => {
        try {
            const response = await axios.get(`${URL}/workload/get-workload?days=1`)
            if (response.status === 200) {
                setDataWorkload(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const me = async () => {
        try {
            const response = await axios.get(`${URL}/user/me`, {withCredentials: true})
            if (response.status === 200) {
            }
        } catch (error) {
            window.location.href = '/authorization'
        }
    }



    useEffect(() => {
        me()
        workload_day()
        // Установка интервала для выполнения запроса каждые 5 минут
        const intervalId = setInterval(workload_day, 60 * 1000);

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(intervalId);
    }, [])


    return (
        <>
            <div className="homepage">
                {dataWorkload ? (
                <div className="container homepage__container">
                    <h2>{''}</h2>
                    <span>60 seconds before data update</span>
                    <div className="homepage__row">
                        <ul className="servers__list">
                            {dataWorkload.map((item, index) => (
                            <li key={index} className="servers__list-item">
                                <InfoLine title={item.name} id={index+1} dataWorkload={item.data}/>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                ) : null}
            </div>
        </>
    )
}

export default DashboardPage
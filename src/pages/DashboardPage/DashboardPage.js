import "./view"
import React, {useEffect, useState} from "react";
import InfoLine from "./InfoLine/InfoLine";
import axios from "axios";
import {URL} from "../../App";

const DashboardPage = () => {
    const [dataWorkload, setDataWorkload] = useState(Array)
    const [timer, setTimer] = useState(60);

    const workload_day = async () => {
        try {
            const response = await axios.get(`${URL}/workload/get-workload?days=1`)
            if (response.status === 200) {
                setDataWorkload(response.data)
                setTimer(60);
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
        const intervalId = setInterval(workload_day, 60 * 1000);
        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        const intervalId = setInterval(me, 5 * 60 * 1000);
        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        // Очистка таймера при размонтировании компонента
        return () => clearInterval(timerId);
    }, []);


    return (
        <>
            <div className="homepage">
                {dataWorkload ? (
                    <div className="container homepage__container">
                        <h2>{''}</h2>
                        <span>{timer > 0 ? `${timer} seconds before data update` : "Updating data..."}</span>
                        <div className="homepage__row">
                            <ul className="servers__list">
                                {dataWorkload.map((item, index) => (
                                    <li key={index} className="servers__list-item">
                                        <InfoLine title={item.name} id={index + 1} dataWorkload={item.data}/>
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
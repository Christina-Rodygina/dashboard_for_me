import "./view"
import React, {useEffect, useState} from "react";
import InfoLine from "./InfoLine/InfoLine";
import axios from "axios";
// import URL from "../../App"
import {URL} from "../../App";

const DashboardPage = () => {
    const [dataWorkload, setDataWorkload] = useState([])
    const [dataCharts, setDataCharts] = useState([])
    const uniqueLabelsCPU = [...new Set(dataCharts[0].map(item => item.x))];
    const uniqueLabelsRAM = [...new Set(dataCharts[1].map(item => item.x))];
    const uniqueLabelsDISC = [...new Set(dataCharts[2].map(item => item.x))];

    const me = async () => {
        try {
            const response = await axios.get(`${URL}/user/me`, {withCredentials: true})
            if (response.status === 200) {
                setDataWorkload(response.data)
            }
        } catch (error) {
            window.location.href = '/authorization'
        }
    }

    const changeCharts = () => {
        let cpuData = [];
        let ramData = [];
        let discData = [];

        dataWorkload[0].forEach(item => {
            cpuData.push(parseFloat(item.cpu));
            ramData.push(parseFloat(item['ram']));
            discData.push(item['disc']);
        });

        console.log("CPU Data:", cpuData);
        console.log("RAM Data:", ramData);
        console.log("Disk Data:", discData);

        setDataCharts([cpuData, ramData, discData])
    }

    useEffect(() => {
        changeCharts()
    }, [dataWorkload])

    const workload = async () => {
        try {
            const response = await axios.get(`${URL}/workload/get-workload`)
            if (response.status === 200) {
                setDataWorkload(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        me()
        workload()
    }, [])


    return (
        <>
            <div className="homepage">
                <div className="container homepage__container">
                    <h2>{''}</h2>
                    <div className="homepage__row">
                        {dataWorkload ? (
                        <ul className="servers__list">
                            {dataWorkload[0].map((item, index) => (
                            <li key={index} className="servers__list-item">
                                <InfoLine data={item} uniqueLabelsCPU={uniqueLabelsCPU} uniqueLabelsRAM={uniqueLabelsRAM} uniqueLabelsDisc={uniqueLabelsDISC} title={item.server.name} id={item['server_id']}/>
                            </li>
                            ))}
                        </ul>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage
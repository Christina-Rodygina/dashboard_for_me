import "./view"
import React, {useEffect} from "react";
import InfoLine from "./InfoLine/InfoLine";
import axios from "axios";
// import URL from "../../App"
import {URL} from "../../App";

const DashboardPage = ({data}) => {

    const uniqueLabels = [...new Set(data.map(item => item.x))];

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
    }, [])


    return (
        <>
            <div className="homepage">
                <div className="container homepage__container">
                    <h2>{''}</h2>
                    <div className="homepage__row">
                        <ul className="servers__list">
                            <li className="servers__list-item">
                                <InfoLine data={data} uniqueLabels={uniqueLabels} title={"VinylDiscount"} id={1}/>
                            </li>
                            <li className="servers__list-item">
                                <InfoLine data={data} uniqueLabels={uniqueLabels} title={"MetricaFX"} id={2}/>
                            </li>
                            <li className="servers__list-item">
                                <InfoLine data={data} uniqueLabels={uniqueLabels} title={"Neurology"} id={3}/>
                            </li>
                            <li className="servers__list-item">
                                <InfoLine data={data} uniqueLabels={uniqueLabels} title={"VictoryaBonya"} id={4}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage

//cpu, оперативная память, диск
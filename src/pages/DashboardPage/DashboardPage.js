import "./DashboardPage.css"
import React from "react";
import InfoLine from "./InfoLine/InfoLine";

const DashboardPage = () => {
    const data = [
        {x: '1', y: 2, label: "(1, 2)"},
        {x: '2', y: 3, label: "(2, 3)"},
        {x: '3', y: 13, label: "(3, 13)"},
        {x: '4', y: 4, label: "(4, 14)"},
        {x: '5', y: 42, label: "(5, 42)"},
        {x: '6', y: 45, label: "(6, 45)"},
        {x: '7', y: 56, label: "(7, 56)"},
        {x: '8', y: 55, label: "(8, 55)"},
        {x: '9', y: 58, label: "(9, 58)"},
        {x: '10', y: 70, label: "(10, 70)"},
        {x: '11', y: 41, label: "(11, 41)"},
        {x: '12', y: 71, label: "(12, 71)"},
        {x: '13', y: 77, label: "(13, 77)"},
        {x: '14', y: 80, label: "(14, 80)"},
        {x: '15', y: 89, label: "(15, 89)"},
        {x: '16', y: 90, label: "(16, 90)"},
        {x: '17', y: 92, label: "(17, 92)"},
        {x: '18', y: 94, label: "(18, 94)"},
        {x: '19', y: 86, label: "(19, 86)"},
        {x: '20', y: 81, label: "(20, 81)"},
        {x: '21', y: 90, label: "(21, 90)"},
        {x: '22', y: 75, label: "(22, 75)"},
        {x: '23', y: 43, label: "(23, 43)"},
        {x: '24', y: 12, label: "(24, 12)"},
    ];

    const uniqueLabels = [...new Set(data.map(item => item.x))];



    return (
        <>
            <div className="homepage">
                <div className="container homepage__container">
                    <h2></h2>
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
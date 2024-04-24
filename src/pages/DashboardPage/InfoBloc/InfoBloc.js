import {VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip} from "victory";
import React from "react";
import "./view"

const InfoBloc = ({ data, uniqueLabels, type, id }) => {
    console.log(data)
    console.log(uniqueLabels)
    console.log(id)
    const intervalBtn = (index, container) => {
        const buttons = container.querySelectorAll('.interval__btn');
        buttons.forEach((button, i) => {
            if (i === index) {
                if (!button.classList.contains('active')) {
                    button.classList.add('active');
                }
            } else {
                button.classList.remove('active');
            }
        });
    }

    const handleIntervalBtnClick = (index) => {
        const container = document.getElementById(id); // получаем контейнер блока
        intervalBtn(index, container); // вызываем функцию intervalBtn с передачей контейнера
    }

    const open_info = () => {
        const section = document.getElementById(id);
        if (section.classList.contains("open")) {
            section.classList.remove("open");
        } else {
            section.classList.add("open");
        }
    };

    return (
        <>
            <div className={`servers__list-item__${type}`}>
                <button onClick={() => open_info()} className="servers__list-item__cpu-info">
                    <div className="list-item">
                        <div className="item__logo">
                            {type === 'cpu' ? (
                            <img src="/cpu-free-4-svgrepo-com.svg" alt="CPULogo"/>
                            ) : type === 'op' ? (
                                <img src="/ram-memory-svgrepo-com.svg" alt="RUMLogo"/>
                            ) : type === 'disc' ? (
                                <img src="/disc-svgrepo-com.svg" alt="DiscLogo"/>
                            ) : (
                                console.log("не указан тип блока")
                            )}
                        </div>
                        <div className="item__info">
                            <h4>{type === "cpu" ? ('CPU') : type === "op" ? ('RAM') : type === "disc" ? ('DISC') : console.log("не указан тип блока")}</h4>
                            <span className="item__info-percent norm">80%</span>
                        </div>
                    </div>
                    <div className="item__info-date-time">
                        <span className="item__info-date">Update date:</span>
                        <span className="item__info-time">24.06.23 18:00</span>
                    </div>
                    <div className="item__info-status-container">
                        <span>Status:</span>
                        <span className="item__info-status offline">Offline</span>
                    </div>
                </button>
                <div className={`cpu__statistics ${type}`} id={id}>
                    <div className="interval__btns">
                        <button onClick={() => handleIntervalBtnClick(0)} className="interval__btn">Month</button>
                        <button onClick={() => handleIntervalBtnClick(1)} className="interval__btn">Week</button>
                        <button onClick={() => handleIntervalBtnClick(2)} className="interval__btn active">Day</button>
                    </div>
                    <VictoryChart
                        width={500}
                        height={300}
                        theme={VictoryTheme.material}
                    >
                        <VictoryAxis tickValues={uniqueLabels}/>
                        <VictoryAxis dependentAxis/>
                        <VictoryLine
                            data={data}
                            x="x" y="y"
                            style={{
                                data: {stroke: "#FF7800"}, // Цвет линии
                                parent: {border: "1px solid #ccc"} // Стиль родительского элемента
                            }}
                            labels={({datum}) => datum.label}
                            labelComponent={<VictoryTooltip/>}
                        />
                    </VictoryChart>
                </div>
            </div>
        </>
    )
}

export default InfoBloc
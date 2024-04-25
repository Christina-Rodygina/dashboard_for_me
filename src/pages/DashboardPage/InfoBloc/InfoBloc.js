import {VictoryAxis, VictoryChart, VictoryLine, VictoryTheme} from "victory";
import React, {useEffect, useState} from "react";
import "./view"
import axios from "axios";
import {URL} from "../../../App";

const InfoBloc = ({type, id, dataWorkload}) => {
    const [dataCPU, setDataCPU] = useState()
    const [dataRAM, setDataRAM] = useState()
    const [dataDISC, setDataDISC] = useState()

    const [dataDay, setDataDay] = useState()
    const [dataCPUDay, setDataCPUDay] = useState()
    const [dataRAMDay, setDataRAMDay] = useState()
    const [dataDISCDay, setDataDISCDay] = useState()

    const [dataWeek, setDataWeek] = useState()
    const [dataCPUWeek, setDataCPUWeek] = useState()
    const [dataRAMWeek, setDataRAMWeek] = useState()
    const [dataDISCWeek, setDataDISCWeek] = useState()

    const [dataMonth, setDataMonth] = useState()
    const [dataCPUMonth, setDataCPUMonth] = useState()
    const [dataRAMMonth, setDataRAMMonth] = useState()
    const [dataDISCMonth, setDataDISCMonth] = useState()

    const [data, setData] = useState(null);
    const [xTickValues, setXTickValues] = useState([]);

    const workload_day = async (period, serverType) => {
        try {
            const response = await axios.get(`${URL}/workload/get-workload?days=${period}&type=${serverType}`);
            if (response.status === 200) {
                switch (period) {
                    case 1:
                        switch (serverType) {
                            case 'cpu':
                                setDataCPUDay(response.data);
                                break;
                            case 'ram':
                                setDataRAMDay(response.data);
                                break;
                            case 'disc':
                                setDataDISCDay(response.data);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 7:
                        switch (serverType) {
                            case 'cpu':
                                setDataCPUWeek(response.data);
                                break;
                            case 'ram':
                                setDataRAMWeek(response.data);
                                break;
                            case 'disc':
                                setDataDISCWeek(response.data);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 30:
                        switch (serverType) {
                            case 'cpu':
                                setDataCPUMonth(response.data);
                                break;
                            case 'ram':
                                setDataRAMMonth(response.data);
                                break;
                            case 'disc':
                                setDataDISCMonth(response.data);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
            }
        } catch (error) {
            console.log(error);
        }
    };


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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    };


    useEffect(() => {
        if (dataWorkload) {
            // Фильтруем данные по типу сервера (CPU, RAM, DISC)
            const filteredData = dataWorkload.map(item => ({
                date: new Date(item.date),
                value: parseFloat(item[type])
            }));

            // Находим минимальное и максимальное время в данных
            const minDate = new Date(Math.min(...filteredData.map(item => item.date)));
            const maxDate = new Date(Math.max(...filteredData.map(item => item.date)));

            // Устанавливаем минимальное значение оси X на минимальный час, но не менее 0
            const minHour = Math.max(0, minDate.getHours());

            // Генерируем значения для оси X от минимального часа до 24 часов
            const tickValues = [];
            for (let i = minHour; i <= 24; i++) {
                tickValues.push(i);
            }
            setXTickValues(tickValues);

            setData(filteredData);
        }
    }, [dataWorkload, type]);

    return (
        <>
            {dataWorkload && dataCPU && dataRAM && dataDISC ? (
                <div className={`servers__list-item__${type}`}>
                    <button onClick={() => open_info()} className="servers__list-item__cpu-info">
                        <div className="list-item">
                            <div className="item__logo">
                                {type === 'cpu' ? (
                                    <img src="/cpu-free-4-svgrepo-com.svg" alt="CPULogo"/>
                                ) : type === 'ram' ? (
                                    <img src="/ram-memory-svgrepo-com.svg" alt="RUMLogo"/>
                                ) : type === 'disc' ? (
                                    <img src="/disc-svgrepo-com.svg" alt="DiscLogo"/>
                                ) : (
                                    console.log("не указан тип блока")
                                )}
                            </div>
                            {dataCPU && dataRAM && dataDISC ? (
                                <div className="item__info">
                                    <h4>{type === "cpu" ? ('CPU') :
                                        type === "ram" ? ('RAM')
                                            : type === "disc" ? ('DISC')
                                                : console.log("не указан тип блока")}</h4>
                                    <span className="item__info-percent norm">
                                {type === "cpu" ? dataCPU[0]?.cpu :
                                    type === "ram" ? dataRAM[0]?.ram
                                        : type === "disc" ? dataDISC[0]?.disc
                                            : console.log("не указан тип блока")}%
                                </span>
                                </div>
                            ) : null}
                        </div>
                        <div className="item__info-date-time">
                            <span className="item__info-date">Update date:</span>
                            {dataCPU && dataRAM && dataDISC ? (
                                <span className="item__info-time">{
                                    type === "cpu" ? formatDate(dataCPU[0]?.date) :
                                        type === "ram" ? formatDate(dataRAM[0]?.date)
                                            : type === "disc" ? formatDate(dataDISC[0]?.date)
                                                : console.log("не указан тип блока")}
                        </span>
                            ) : null}
                        </div>
                        <div className="item__info-status-container">
                            <span>Status:</span>
                            <span
                                className={`item__info-status ${dataWorkload[0]?.server.status === 'online' ? 'online' : 'offline'}`}>{dataWorkload[0].server.status[0].toUpperCase() + dataWorkload[0].server.status.slice(1)}</span>
                        </div>
                    </button>
                    <div className={`cpu__statistics ${type}`} id={id}>
                        <div className="interval__btns">
                            <button onClick={() => handleIntervalBtnClick(0)} className="interval__btn">Month</button>
                            <button onClick={() => handleIntervalBtnClick(1)} className="interval__btn">Week</button>
                            <button onClick={() => handleIntervalBtnClick(2)} className="interval__btn active">Day
                            </button>
                        </div>
                        <VictoryChart
                            width={500}
                            height={300}
                            theme={VictoryTheme.material}
                        >
                            <VictoryAxis
                                dependentAxis
                                tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} // Определите значения для оси Y
                            />
                            <VictoryAxis
                                tickValues={xTickValues}
                            />
                            {data && (
                                <VictoryLine
                                    data={data}
                                    x="date"
                                    y="value"
                                    style={{
                                        data: { stroke: "#FF7800" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                />
                            )}
                        </VictoryChart>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default InfoBloc
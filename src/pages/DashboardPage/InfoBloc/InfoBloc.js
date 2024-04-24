import {VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip} from "victory";
import React, {useEffect, useState} from "react";
import "./view"

const InfoBloc = ({ data, uniqueLabels, type, id, dataWorkload }) => {
    const [dataCPU, setDataCPU] = useState([])
    const [dataRAM, setDataRAM] = useState([])
    const [dataDISC, setDataDISC] = useState([])
    console.log(dataWorkload)
    console.log(dataCPU)
    console.log(dataRAM)
    console.log(dataDISC)

    // const dataRAM = [
    //     {date: "2024-04-24T17:15:57.837849+00:00", ram: "34.37"},
    //     {date: "2024-04-24T17:20:58.497717+00:00", ram: "36.05"},
    //     {date: "2024-04-24T17:25:59.165751+00:00", ram: "36.56"},
    //     {date: "2024-04-24T17:36:00.534653+00:00", ram: "36.91"},
    //     {date: "2024-04-24T17:41:01.216959+00:00", ram: "37.07"},
    // ]
    //
    // const dataDisc = [
    //     {date: "2024-04-24T17:20:58.497717+00:00", disc: "28"},
    //     {date: "2024-04-24T17:15:57.837849+00:00", disc: "28"},
    //     {date: "2024-04-24T17:25:59.165751+00:00", disc: "28"},
    //     {date: "2024-04-24T17:36:00.534653+00:00", disc: "28"},
    //     {date: "2024-04-24T17:41:01.216959+00:00", disc: "28"},
    // ]

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

    useEffect(() => {
        const dataCpu = dataWorkload ? dataWorkload[0].map(item => ({
            date: item.date,
            cpu: parseFloat(item.cpu)
        })) : null;
        const dataRam = dataWorkload ? dataWorkload[0].map(item => ({
            date: item.date,
            cpu: parseFloat(item['ram'])
        })) : null;
        const dataDisc = dataWorkload ? dataWorkload[0].map(item => ({
            date: item.date,
            cpu: parseFloat(item['disc'])
        })) : null;
        setDataCPU(dataCpu);
        setDataRAM(dataRam);
        setDataDISC(dataDisc);
    }, [dataWorkload])

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
                    {/*<VictoryChart*/}
                    {/*    width={500}*/}
                    {/*    height={300}*/}
                    {/*    theme={VictoryTheme.material}*/}
                    {/*>*/}
                    {/*    <VictoryAxis tickValues={uniqueLabels}/>*/}
                    {/*    <VictoryAxis dependentAxis/>*/}
                    {/*    <VictoryLine*/}
                    {/*        data={data}*/}
                    {/*        x="x" y="y"*/}
                    {/*        style={{*/}
                    {/*            data: {stroke: "#FF7800"}, // Цвет линии*/}
                    {/*            parent: {border: "1px solid #ccc"} // Стиль родительского элемента*/}
                    {/*        }}*/}
                    {/*        labels={({datum}) => datum.label}*/}
                    {/*        labelComponent={<VictoryTooltip/>}*/}
                    {/*    />*/}
                    {/*</VictoryChart>*/}
                </div>
            </div>
        </>
    )
}

export default InfoBloc
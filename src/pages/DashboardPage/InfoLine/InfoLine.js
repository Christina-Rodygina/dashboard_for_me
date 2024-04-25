import InfoBloc from "../InfoBloc/InfoBloc";
import React from "react";
import "./view"

const InfoLine = ({ title, id, dataWorkload }) => {
    return (
        <>
            <h3 className="servers__list-item__title">{title}</h3>
            <div className="servers__list-item__row">
                <InfoBloc type={"cpu"} id={id + "_cpu"} dataWorkload={dataWorkload}/>
                <InfoBloc type={"ram"} id={id + "_ram"} dataWorkload={dataWorkload}/>
                <InfoBloc type={"disc"} id={id + "_disc"} dataWorkload={dataWorkload} />
            </div>
        </>
    );
};
export default InfoLine
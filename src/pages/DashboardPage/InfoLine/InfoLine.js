import InfoBloc from "../InfoBloc/InfoBloc";
import React from "react";
import "./view"

const InfoLine = ({ data, uniqueLabelsCPU, uniqueLabelsRAM, uniqueLabelsDisc, title, id }) => {
    return (
        <>
            <h3 className="servers__list-item__title">{title}</h3>
            <div className="servers__list-item__row">
                <InfoBloc data={data} uniqueLabels={uniqueLabelsCPU} type={"cpu"} id={id + "_cpu"} />
                <InfoBloc data={data} uniqueLabels={uniqueLabelsRAM} type={"op"} id={id + "_op"} />
                <InfoBloc data={data} uniqueLabels={uniqueLabelsDisc} type={"disc"} id={id + "_disc"} />
            </div>
        </>
    );
};
export default InfoLine
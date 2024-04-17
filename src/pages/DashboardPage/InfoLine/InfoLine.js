import InfoBloc from "../InfoBloc/InfoBloc";
import React from "react";
import "./InfoLine.css"

const InfoLine = ({ data, uniqueLabels, title, id }) => {
    return (
        <>
            <h3 className="servers__list-item__title">{title}</h3>
            <div className="servers__list-item__row">
                <InfoBloc data={data} uniqueLabels={uniqueLabels} type={"cpu"} id={id + "_cpu"} />
                <InfoBloc data={data} uniqueLabels={uniqueLabels} type={"op"} id={id + "_op"} />
                <InfoBloc data={data} uniqueLabels={uniqueLabels} type={"disc"} id={id + "_disc"} />
            </div>
        </>
    );
};
export default InfoLine
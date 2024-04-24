import InfoBloc from "../InfoBloc/InfoBloc";
import React from "react";
import "./view"

const InfoLine = ({ data, uniqueLabels, title, id, dataWorkload }) => {
    return (
        <>
            <h3 className="servers__list-item__title">{title}</h3>
            <div className="servers__list-item__row">
                <InfoBloc data={data} uniqueLabels={uniqueLabels} type={"cpu"} id={id + "_cpu"} dataWorkload={dataWorkload}/>
                {/*<InfoBloc data={data} uniqueLabels={uniqueLabels} type={"ram"} id={id + "_ram"} dataWorkload={dataWorkload}/>*/}
                {/*<InfoBloc data={data} uniqueLabels={uniqueLabels} type={"disc"} id={id + "_disc"} dataWorkload={dataWorkload} />*/}
            </div>
        </>
    );
};
export default InfoLine
import React from "react";
import "./ServicesPage.css"

const ServicesPage = () => {
    return (
        <>
            <div className="servers">
                <div className="container servers__container">
                    <h2> </h2>
                    <div className="servers__column">
                        <table className="servers__table">
                            <thead>
                            <tr>
                                <th>
                                    <div className="random-blob number">
                                        <span>№</span>
                                    </div>
                                </th>
                                <th>
                                    <div className="random-blob id">
                                        <span>ID</span>
                                    </div>
                                </th>
                                <th>
                                    <div className="random-blob serv">
                                        <span>Server</span>
                                    </div>
                                </th>
                                <th>
                                    <div className="random-blob name">
                                        <span>Name</span>
                                    </div>
                                </th>
                                <th>
                                    <div className="random-blob url">
                                        <span>URL</span>
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><span>1</span></td>
                                <td><span>1234</span></td>
                                <td>79.137.197.104</td>
                                <td>VinylDiscount</td>
                                <td>https://vinyldiscount.ru/</td>
                            </tr>
                            <tr>
                                <td><span>2</span></td>
                                <td><span>1235</span></td>
                                <td>10.021.352.139</td>
                                <td>MetricaFX</td>
                                <td>https://metricafx.ru/</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesPage
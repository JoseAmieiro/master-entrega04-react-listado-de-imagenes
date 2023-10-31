import React from "react";
import { Link } from "react-router-dom";

import {   } from "../../core";

export const ListCatsContainer = () => {
    const [ catList, setCatlist] = React.useState([cats]);

    return (
        <>
            {/* <link to="/listCatsContainer">Gatos</link>
            <link to="/listDogsContainer">Perros</link> */}

            {catList.map((cat) => (
                <div key={cat.id}>
                    <img src ={cat.picUrl} alt={cat.title} />
                    <h3>{cat.title}</h3>
                    <input type="checkbox" checked={cat.selected} readOnly />
                </div>
            ))}
        </>
    )
}
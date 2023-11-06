import React from "react";
import { Link } from "react-router-dom";

import { dogs } from "@/core";
import { ListDogs } from "./list-dogs.component";
import { Header } from "@/common-app"



export const ListDogsContainer = () => {
    const [ dogList, setDoglist] = React.useState([dogs]);

    return (
        <>
            <Header/>
            <ListDogs/>
        </>
    )
}
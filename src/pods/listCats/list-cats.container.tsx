import React from "react";
import { Link } from "react-router-dom";
import { cats } from "@/core";
import { ListCats } from "./list-cats.component";
import { Header } from "@/common-app"

export const ListCatsContainer = () => {
   
    return (
        <>
            <Header />
            <ListCats/>
        </>
    )
}
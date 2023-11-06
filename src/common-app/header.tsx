import React from "react";
import { Link } from "react-router-dom";
import {SwitchRoutes} from "@/core";

export const Header: React.FC = () => {
    return(
        <div className="header">
            <Link to={SwitchRoutes.cats}>Kitties</Link>
            <Link to={SwitchRoutes.dogs}>Puppies</Link>
        </div>
    )
}
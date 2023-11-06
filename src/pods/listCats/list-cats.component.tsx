import React from "react";

import { cats } from "@/core";
import { PictureInfo} from "./list-cats.vm";

interface Props {
    cat: PictureInfo;
}

export const ListCats: React.FC = () => {
    const [cat, setCat] = React.useState([]);

    React.useEffect(() => {
         setCat(cats)
    }, [])
    
    return (
        <div className="list-cats-component">
                {cat.map((item) => (
                    <span className="list-cats-picture" key={item.id}>
                        <img src={item.picUrl}/>
                        <span>{item.title}</span>
                        <input type="checkbox" ></input>
                    </span>
                ))

                }
        </div>
    )
}
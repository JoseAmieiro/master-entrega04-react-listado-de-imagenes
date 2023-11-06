import React from "react";

import { dogs } from "@/core";
import { PictureInfo} from "./list-dogs.vm";

interface Props {
    dog: PictureInfo;
}

export const ListDogs: React.FC = () => {
    const [dog, setDog] = React.useState([]);

    React.useEffect(() => {
        setDog(dogs)
    }, [])
    
    return (
        <div className="list-dogs-component">
                {dog.map((item) => (
                    <span className="list-dogs-picture" key={item.id}>
                        <img src={item.picUrl}/>
                        <span>{item.title}</span>
                        <input type="checkbox" checked={item.selected}></input>
                    </span>
                ))

                }
        </div>
    )
}
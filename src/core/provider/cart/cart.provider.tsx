import { cats } from "@/core";
import React from "react";

interface CartContext {
    selectedImages: string[];
    setSelectedImages: (value: string) => void;
}

export const CartContext = React.createContext({
    selectedImages: "",
    setSelectedImages: (value: string) => {},
});
  
interface Props {
    children?: React.ReactNode;
}

export const CartContextProvider: React.FC <Props> = (props) => {
    const [ selectedImages, setSelectedImages ] = React.useState([]);

    const addToCart = (imageId) => {
        if(!selectedImages.some((image) => image.id === imageId)) {
            const imageToAdd = cats.find((image) => image.id === imageId);
            setSelectedImages([...selectedImages, imageToAdd]);
        }
    }
    return (
        <CartContext.Provider value={{ selectedImages, addToCart }}>
            {props.children}
        </CartContext.Provider>
        
    )
}


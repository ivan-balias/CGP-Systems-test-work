import React from 'react';
import {CompleteComponentType, CustomComponentType, IconVariants} from "../../types/ComponentType";
import {useDispatch, useSelector} from "react-redux";
import uuid from "react-uuid";
import {addComponent} from "../../store/slices/componentSlice";
import {getIcon} from "../icons";
import {RootState} from "../../store";
import MenuItem from "./MenuItem";

const availableComponents: CustomComponentType[] = [
    {
        name: "Headline",
        icon: IconVariants.headline,
        tag: "h3",
    },
    {
        name: "Paragraph",
        icon: IconVariants.paragraph,
        tag: "p",
    },
    {
        name: "Image",
        icon: IconVariants.image,
        tag: "image",
    },
    {
        name: "Button",
        icon: IconVariants.image,
        tag: "button",
    }
]

const Menu = () => {

    return (
        <div className="basis-1/5 ">
            <div className="flex flex-wrap justify-center h-auto p-8 gap-2.5 " >
                {availableComponents.map((component: CustomComponentType, i: number) => (
                    <MenuItem component={component} key={i}/>
                ))}
            </div>
        </div>
    );
};

export default Menu;
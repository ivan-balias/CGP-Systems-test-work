import React from 'react';
import {getIcon} from "../icons";
import {CompleteComponentType, CustomComponentType} from "../../types/ComponentType";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import uuid from "react-uuid";
import {addComponent} from "../../store/slices/componentSlice";
import {useDrag} from "react-dnd";

type MenuIconType = {
    component: CustomComponentType
}

const MenuItem = ({component}: MenuIconType) => {
    const dispatch = useDispatch()
    const addNewComponent = (component: CustomComponentType) => {
        dispatch(addComponent(component))
    }

    const [{opacity}, dragRef] = useDrag(() => ({
        type: "MenuItem",
        item: component,
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    }), [])

    const Icon = getIcon(component.icon)

    return (
        <div className="text-center basis-1/3 bg-blue-100 rounded-md px-2.5 py-3.5 cursor-pointer"
             onClick={() => addNewComponent(component)}
             style={{opacity: opacity}}
             ref={dragRef}
        >
            <Icon className="w-6 h-6 mx-auto text-[#97AACD]"/>
            <span className="text-xs font-normal">{component.name}</span>
        </div>
    )
};

export default MenuItem;
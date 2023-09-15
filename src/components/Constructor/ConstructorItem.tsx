import React from 'react';
import {getIcon} from "../icons";
import {
    copyComponent,
    lowerComponentOrder,
    raiseComponentOrder,
    removeComponent,
    setActiveComponent
} from "../../store/slices/componentSlice";
import {BsArrowDown, BsArrowUp, BsSubtract, BsTrash3Fill} from "react-icons/bs";
import {CompleteComponentType} from "../../types/ComponentType";
import {useDispatch} from "react-redux";

type ConstructorItemProps = {
    component: CompleteComponentType,
    inputChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    componentsLength: number
}

const ConstructorItem = ({component, inputChange, inputValue, componentsLength}: ConstructorItemProps) => {
    const dispatch = useDispatch()

    const Icon = getIcon(component.icon)
    return (
        <div key={component.id}
             className={`text-center w-full ${component.active ? "bg-[#D9E7FF]" : "bg-white"} rounded-md px-2.5 py-3.5 cursor-pointer relative flex flex-col gap-2.5`}
             onClick={() => dispatch(setActiveComponent(component.id as string))}
        >
            {
                component.active && (
                    <div className="absolute -top-7 right-0 flex gap-1.5">
                        <div className="flex gap-2 bg-[#449CF4] p-1.5  rounded-t">
                            <button
                                onClick={() => dispatch(raiseComponentOrder(component.order))}
                                disabled={component.order === 0}>
                                <BsArrowUp className={`${component.order < 1 ? "text-gray-400" : "text-white"}`}/>
                            </button>
                            <button
                                onClick={() => dispatch(lowerComponentOrder(component.order))}
                                disabled={component.order === componentsLength -1}>
                                <BsArrowDown className={`${component.order === componentsLength -1 ? "text-gray-400" : "text-white"}`}/>
                            </button>
                        </div>
                        <div className='flex gap-2 bg-[#4B97B8] p-1.5 text-white rounded-t'>
                            <button onClick={() => dispatch(copyComponent(component))}>
                                <BsSubtract/>
                            </button>
                            <button onClick={() => dispatch(removeComponent(component.id))}>
                                <BsTrash3Fill/>
                            </button>
                        </div>
                    </div>
                )
            }
            <Icon className="w-6 h-6 mx-auto text-[#97AACD]"/>
            <div className="text-xs font-normal">{component.name}</div>
            {
                component.active && (
                    <div className="w-full p-1.5 rounded bg-white">
                        <input type="text" className="w-full border rounded border-gray-300 p-1.5 text-sm" value={inputValue}
                               onChange={inputChange}/>
                    </div>
                )
            }
        </div>
    )
};

export default ConstructorItem;
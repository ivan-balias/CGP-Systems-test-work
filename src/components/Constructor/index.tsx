import React, {useEffect, useMemo, useState} from 'react';
import {CompleteComponentType, CustomComponentType} from "../../types/ComponentType";
import {addComponent, updateContentActiveComponent} from "../../store/slices/componentSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useDebounce} from "../../hooks/useDebounce";
import ConstructorItem from "./ConstructorItem";
import {useDrop} from "react-dnd";

const Constructor = () => {
    const components = useSelector((state: RootState) => state.components)
    const dispatch = useDispatch()

    const [value, setValue] = useState<string>("");
    const debounceValue = useDebounce(value, 300);

    const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const active = components.filter((component) => {
            return component.active
        }).at(0)
        if (active)
            setValue(active?.content || "")
    }, [components])

    useEffect(() => {
        dispatch(updateContentActiveComponent(debounceValue))
    }, [debounceValue])

    const orderedComponents = useMemo(() =>
            [...components].sort((a, b) => b.order < a.order ? 1 : -1)
        , [components])


    const handleDrop = (component: CustomComponentType) => {
        dispatch(addComponent(component))
    }
    const [{isOver, canDrop}, drop] = useDrop({
        accept: "MenuItem",
        drop: handleDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    })

    const isActive = isOver && canDrop
    return (
        <div ref={drop}
             className={`basis-1/2 px-8 py-7 ${isActive ? "bg-green-300" : "bg-gray-100"} h-full overflow-y-auto transition-all duration-500`}>
            <div className="flex flex-col gap-3.5">
                {orderedComponents.map((component: CompleteComponentType) => (
                    <ConstructorItem component={component} key={component.id} inputChange={HandleInputChange}
                                     inputValue={value} componentsLength={components.length}/>
                ))}
            </div>
        </div>
    );
};

export default Constructor;
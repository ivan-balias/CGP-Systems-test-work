import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {componentFromTag} from "./componentFromTag";

const Render = () => {
    const components = useSelector((state: RootState) => state.components)
    const orderedComponents = useMemo(() =>
            [...components].sort((a, b) => b.order < a.order ? 1 : -1)
        , [components])

    const renderedComponents = useMemo(() => {
        return [...orderedComponents].map((component) => {
            return componentFromTag(component)
        })
    }, [orderedComponents])

    return (
        <main className="basis-1/2 p-8 flex flex-col gap-7 items-center overflow-y-auto">
            {
                renderedComponents.map((Component) => Component)
            }
        </main>
    );
};

export default Render;
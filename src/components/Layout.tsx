import React from 'react';
import Menu from "./Menu";
import Constructor from "./Constructor";
import Render from "./Render";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function Layout() {
    return (
        <div className="flex flex-col w-full h-screen">
            <div className="text-[#252A32] font-sans font-medium text-lg py-5 px-8 border-b border-gray-300">
                REACT EDITOR Test
            </div>
            <div className="flex h-[calc(100%-70px)] w-full">
                <DndProvider backend={HTML5Backend}>
                    <Menu/>
                    <Constructor/>
                    <Render/>
                </DndProvider>
            </div>
        </div>
    );
}

export default Layout;

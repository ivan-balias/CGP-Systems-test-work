import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CompleteComponentType, CustomComponentType} from "../../types/ComponentType";
import uuid from "react-uuid";

const initialState: CompleteComponentType[] = []

export const componentsSlice = createSlice({
    name: "components",
    initialState,
    reducers: {
        addComponent: (state, action: PayloadAction<CustomComponentType>) => {
            const newComponent: CompleteComponentType = {
                ...action.payload,
                id: uuid(),
                content: "",
                active: false,
                order: state.length,
            }

            state.push(newComponent)
        },
        setActiveComponent: (state, action: PayloadAction<string>) => {
            return state.map((component) => {
                return {
                    ...component,
                    active: component.id === action.payload
                }
            })
        },
        updateContentActiveComponent: (state, action: PayloadAction<string>) => {
            return state.map((component) => {
                if (component.active)
                    return {
                        ...component,
                        content: action.payload
                    }

                return component
            })
        },
        raiseComponentOrder: (state, action: PayloadAction<number>) => {
            state.map((component) => {
                if (action.payload - 1 === component.order && !component.active) {
                    component.order++
                    return component
                }

                if (action.payload === component.order && component.active) {
                    component.order--
                    return component
                }

                return component
            })
        },
        lowerComponentOrder: (state, action: PayloadAction<number>) => {
            state.map((component) => {
                if (action.payload + 1 === component.order && !component.active) {
                    component.order--
                    return component
                }

                if (action.payload === component.order && component.active) {
                    component.order++
                    return component
                }

                return component
            })
        },
        copyComponent: (state, action: PayloadAction<CompleteComponentType>) => {
            const component: CompleteComponentType = JSON.parse(JSON.stringify(action.payload));
            component.id = uuid();
            component.order = state.length
            state.push(component)
        },
        removeComponent: (state, action: PayloadAction<string>) => {
            return state.filter((component) => {
                return component.id !== action.payload
            })

        }
    }
});

export const {
    addComponent,
    setActiveComponent,
    updateContentActiveComponent,
    raiseComponentOrder,
    lowerComponentOrder,
    copyComponent,
    removeComponent
} = componentsSlice.actions
export default componentsSlice.reducer
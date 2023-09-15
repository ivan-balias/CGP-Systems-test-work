import {CompleteComponentType} from "../../types/ComponentType";
import CustomButton from "../UI/CustomButton";
import CustomHeadline from "../UI/CustomHeadline";
import CustomImage from "../UI/CustomImage";
import CustomParagraph from "../UI/CustomParagraph";
import uuid from "react-uuid";

export const componentFromTag = (component: CompleteComponentType) => {
    if(component.tag === 'button')
        return <CustomButton content={component.content} key={uuid()}/>

    if(component.tag === "h3")
        return <CustomHeadline content={component.content} key={uuid()}/>

    if(component.tag === 'image')
        return <CustomImage content={component.content} key={uuid()}/>

    if(component.tag === "p")
        return <CustomParagraph content={component.content} key={uuid()}/>
}
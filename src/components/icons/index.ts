import {ReactComponent as Headline} from "./headline.svg"
import {ReactComponent as Image} from "./image.svg";
import {ReactComponent as Paragraph} from "./paragraph.svg";
import {IconVariants} from "../../types/ComponentType";


export const getIcon = (icon: IconVariants) => {
    const icons = [Image, Paragraph, Headline]
    return icons[icon]
}


export {
    Headline,
    Image,
    Paragraph
}
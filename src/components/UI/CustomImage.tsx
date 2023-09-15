import React from 'react';


type CustomImageProps = {
    content: string
}
const CustomImage = ({content}: CustomImageProps) => {
    return (
        <img className="w-full" src={content} alt={content}/>
    );
};

export default CustomImage;
import React from 'react';

type CustomButtonProps = {
    content: string | ""
}

const CustomButton = ({content} : CustomButtonProps) => {
    return (
        <button className="px-7 py-2.5 bg-[#4368E0] text-white rounded text-xs mx-auto">
            {content}
        </button>
    );
};

export default CustomButton;
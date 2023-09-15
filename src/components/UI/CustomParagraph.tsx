import React from 'react';

type CustomParagraphProps = {
    content: string | ""
}
const CustomParagraph = ({content} : CustomParagraphProps) => {
    return (
        <p className="text-sm text-[#97AACD] text-center">
            {content}
        </p>
    );
};

export default CustomParagraph;
import React from 'react';

type CustomHeadlineProps = {
    content: string | ""
}

const CustomHeadline = ({content}: CustomHeadlineProps) => {
    return (
        <h2 className="text-xl font-bold">
            {content}
        </h2>
    );
};

export default CustomHeadline;
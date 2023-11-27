import React from 'react';

const HeaderItem = ({Icon, title}) => {
    return (
        <div className={"flex flex-col group items-center hover:animate-bounce cursor-pointer w-12 sm:w-20 hover:text-white"}>
            <Icon className="h-8 mb-1"/>
            <p className={"tracking-widest opacity-0 group-hover:opacity-100 "}>{title}</p>
        </div>
    );
};

export default HeaderItem;
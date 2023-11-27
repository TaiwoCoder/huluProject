import React from 'react';
import requests from "../../helpers/request";
import {useRouter} from "next/router";

const moviesArray = Object.entries(requests);

const Nav = () => {
    const router = useRouter();


    return (
        <nav className={"relative"}>
            <div className={"scrollbar-hide last:pr-24 px-10 sm:px-20 flex whitespace-nowrap space-x-10 text-2xl sm:space-x-20 overflow-x-scroll"}>
                {moviesArray.map(([key, {title, url}]) => {
                    return <h2 onClick={() => router.push(`/?genre=${key}`)} className={"cursor-pointer active:text-red-500 transition transform duration-100 hover:text-white hover:scale-125 "} key={key}>
                        {title}
                    </h2>
                })}
            </div>

            <div className={"top-0 right-0 absolute bg-gradient-to-l from-[#06262A] h-10 w-1/12 "}/>
        </nav>
    );
};

export default Nav;
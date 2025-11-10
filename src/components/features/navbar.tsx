"use client";

import Link from "next/link"
import { useState } from "react";

const ITEMS = [
    {
        title: "Blog",
        path: "blog"
    },
    {
        title: "Experiences",
        path: "experience"
    },
    {
        title: "About Me",
        path: "about-me"
    },
    {
        title: "Connect",
        path: "connect"
    },
]

const Navbar = () => {
    const [currentPathHash, setCurrentPathHash] = useState(() => typeof window !== "undefined" ? window.location.hash.slice(1) : "")

    return (
        <nav className='w-full h-20 fixed top-0 left-0 z-50 backdrop-blur-xs bg-linear-to-b from-white to-transparent'>
            <div className="w-fit flex items-center gap-x-6 bg-[#000000bf] p-3 mt-5 ml-5 rounded-full px-5">
                <Link href='/' >
                    <svg className="size-7 fill-neutral-200 transition hover:fill-primary" xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm3.222,7H8.778A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7Zm.8,2a10.211,10.211,0,0,1,.476,3,10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2,12a9.986,9.986,0,0,1,.461-3H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461A9.986,9.986,0,0,1,2,12Zm1.353,5H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm5.425,0h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm5.827,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM22,12a9.986,9.986,0,0,1-.461,3H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437A9.986,9.986,0,0,1,22,12ZM17.426,7a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7Z" /></svg>
                </Link>
                {
                    ITEMS.map((item, i) => (
                        <Link href={`#${item.path}`} onClick={() => setCurrentPathHash(item.path)} key={i}>
                            <span className={`text-xl transition hover:text-white ${currentPathHash ? currentPathHash === item.path ? "text-white" : "text-neutral-400" : "text-neutral-100"}`}>{item.title}</span>
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar

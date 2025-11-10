"use client";

import Image from "next/image";
import { ReactNode } from "react"

const HeroSection = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-end items-start p-3 relative'>

            <div id="circularEffect" className="absolute left-1/2 -top-[700px] -translate-x-1/2 pointer-events-none h-[77vw] w-[90vw] rounded-full blur-3xl" />

            <h2 className='text-3xl text-gray-500 w-2/5'>Howdy! Meet your trusted developer partner,crafting strong brands for SaaS.</h2>
            <h1 className='flex flex-wrap leading-none font-bold w-full text-[26rem] tracking-wide'>
                <p className="flex">
                    <HoverBox badge={
                        <div className="flex relative w-full h-full">
                            <Image className="absolute left-1/2 -translate-x-1/2 -top-14 drop-shadow-[0px_0px_30px_#000] rotate-[35deg]" src="/objects/helmet.webp" width={200} height={200} alt="helmet" />
                            <Image className="absolute left-1/2 -translate-x-1/2 bottom-0 drop-shadow-[0px_0px_30px_#000] -rotate-[25deg]" src="/objects/moto.webp" width={200} height={200} alt="motorcycle" />
                        </div>
                    }>A</HoverBox>
                    <HoverBox badge={
                        <Image className="drop-shadow-[0px_0px_30px_#000 rotate-90" src="/objects/keyboard.png" width={400} height={400} alt="keyboard" />
                    }>l</HoverBox>
                    <HoverBox badge={<Image className="drop-shadow-[0px_0px_30px_#000]" src="/objects/i-letter.png" width={200} height={200} alt="i-letter" />}
                    >i</HoverBox>
                </p>
                <p className="flex md:ml-10 ml-0">
                    <HoverBox badge={<div>
                        <Image className="drop-shadow-[0px_0px_30px_#000] -rotate-30" src="/objects/j-letter.png" width={200} height={200} alt="hat" />
                    </div>}>J</HoverBox>
                    <HoverBox badge={<Image className="drop-shadow-[0px_0px_30px_#000] -rotate-30" src="/objects/cup.webp" width={200} height={200} alt="hat" />}>a</HoverBox>
                    <HoverBox badge={<div className="flex relative w-fit">
                        <Image className="drop-shadow-[0px_0px_30px_#000] rotate-25" src="/objects/hat.webp" width={200} height={200} alt="hat" />
                        <Image className="absolute -top-10 drop-shadow-[0px_0px_30px_#000] rotate-10" src="/objects/symbol-2.png" width={50} height={50} alt="shirt" />
                    </div>}>h</HoverBox>
                    <HoverBox badge={<div>
                        <Image className="drop-shadow-[0px_0px_30px_#000] rotate-25" src="/objects/a-letter.png" width={200} height={200} alt="hat" />
                    </div>}>a</HoverBox>
                    <HoverBox badge={
                        <div className="flex relative w-fit">
                            <Image className="drop-shadow-[0px_0px_30px_#000] rotate-10" src="/objects/shirt.webp" width={200} height={200} alt="shirt" />
                            <Image className="absolute -top-10 drop-shadow-[0px_0px_30px_#000] rotate-10" src="/objects/symbol-1.png" width={50} height={50} alt="symbol-1" />
                        </div>
                    }>n</HoverBox>
                </p>
            </h1>
        </div>
    )
}


interface Props {
    children: ReactNode
    badge: ReactNode
}

const HoverBox = ({ children, badge }: Props) => {
    const animationClassNames = "transition duration-100 delay-75 group-hover:translate-y-0 group-hover:scale-105 group-hover:opacity-100"
    return <div className="flex items-center justify-center h-[340px] cursor-pointer relative group">
        <div className="max-h-full flex items-center justify-center overflow-hidden">
            {children}
        </div>
        <div className={`badge-container w-full h-full flex items-center justify-center absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-10 opacity-0 border-white bg-transparent z-50 ${animationClassNames}`}>
            {badge}
        </div>
    </div >
}


export default HeroSection

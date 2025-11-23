import Image from 'next/image';
import HoverBox from './hoverBox';

const HeroSection = () => (
  <div id="hero" className="w-full h-screen flex flex-col justify-end items-start p-3 relative">
    <div
      id="circularEffect"
      className="absolute left-1/2 -top-[700px] -translate-x-1/2 pointer-events-none h-[77vw] w-[90vw] rounded-full blur-3xl"
    />

    <h2 className="text-3xl text-gray-500 w-2/5">
      Engineer obsessed with well-structured code, fast interfaces, and shipping reliable front-end systems.
    </h2>
    <h1 className="flex flex-nowrap leading-none font-bold w-full text-[clamp(8rem,20vw,26rem)] tracking-wide whitespace-nowrap min-w-0">
      <div className="flex">
        <HoverBox
          badge={
            <div className="flex relative w-full h-full">
              <Image
                className="absolute left-1/2 -translate-x-1/2 -top-14 drop-shadow-[0px_0px_30px_#000] rotate-35"
                src="/objects/helmet.webp"
                width={200}
                height={200}
                alt="helmet"
              />
              <Image
                className="absolute left-1/2 -translate-x-1/2 bottom-0 drop-shadow-[0px_0px_30px_#000] -rotate-25"
                src="/objects/moto.webp"
                width={200}
                height={200}
                alt="motorcycle"
              />
            </div>
          }
        >
          A
        </HoverBox>
        <HoverBox
          badge={
            <div>
              <Image
                className="drop-shadow-[0px_0px_30px_#000 rotate-100 scale-200"
                src="/objects/keyboard-full.png"
                width={200}
                height={200}
                alt="keyboard"
              />
              <Image
                className="drop-shadow-[0px_0px_30px_#000 absolute top-10 z-10 -left-10 -rotate-30"
                src="/objects/mouse.webp"
                width={200}
                height={200}
                alt="mouse"
              />
            </div>
          }
        >
          l
        </HoverBox>
        <HoverBox
          badge={
            <Image
              className="drop-shadow-[0px_0px_30px_#000] scale-150"
              src="/objects/i-letter.png"
              width={200}
              height={200}
              alt="i-letter"
            />
          }
        >
          i
        </HoverBox>
      </div>
      <div className="flex md:ml-10 ml-0">
        <HoverBox
          badge={
            <div>
              <Image
                className="drop-shadow-[0px_0px_30px_#000] -rotate-30"
                src="/objects/j-letter.png"
                width={200}
                height={200}
                alt="hat"
              />
            </div>
          }
        >
          J
        </HoverBox>
        <HoverBox
          badge={
            <Image
              className="drop-shadow-[0px_0px_30px_#000] -rotate-30"
              src="/objects/cup.webp"
              width={200}
              height={200}
              alt="hat"
            />
          }
        >
          a
        </HoverBox>
        <HoverBox
          badge={
            <div className="flex relative w-fit">
              <Image
                className="drop-shadow-[0px_0px_30px_#000] rotate-25"
                src="/objects/hat.webp"
                width={200}
                height={200}
                alt="hat"
              />
              <Image
                className="absolute -top-10 drop-shadow-[0px_0px_30px_#000] rotate-10"
                src="/objects/symbol-2.png"
                width={50}
                height={50}
                alt="shirt"
              />
            </div>
          }
        >
          h
        </HoverBox>
        <HoverBox
          badge={
            <div>
              <Image
                className="drop-shadow-[0px_0px_30px_#000] rotate-25"
                src="/objects/a-letter.png"
                width={200}
                height={200}
                alt="hat"
              />
            </div>
          }
        >
          a
        </HoverBox>
        <HoverBox
          badge={
            <div className="flex relative w-fit">
              <Image
                className="drop-shadow-[0px_0px_30px_#000] rotate-10"
                src="/objects/shirt.webp"
                width={200}
                height={200}
                alt="shirt"
              />
              <Image
                className="absolute -top-10 drop-shadow-[0px_0px_30px_#000] rotate-10"
                src="/objects/symbol-1.png"
                width={50}
                height={50}
                alt="symbol-1"
              />
            </div>
          }
        >
          n
        </HoverBox>
      </div>
    </h1>
  </div>
);

export default HeroSection;

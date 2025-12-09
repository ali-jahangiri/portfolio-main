import React, { useEffect, useState } from "react";

export type PureSliderProps = {
    slides: React.ReactNode[];
    speed?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    infinite?: boolean;
    className?: string;
    height?: string | number;
};

const PureSlider: React.FC<PureSliderProps> = ({
    slides,
    speed = 500,
    autoplay = false,
    autoplayDelay = 3000,
    infinite = true,
    className = "",
    height = "16rem",
}) => {
    const count = slides.length;

    const extendedSlides: React.ReactNode[] = infinite
        ? [slides[count - 1], ...slides, slides[0]]
        : slides;

    const [index, setIndex] = useState<number>(infinite ? 1 : 0);
    const [enableTransition, setEnableTransition] = useState<boolean>(true);


    useEffect(() => {
        if (!autoplay || count <= 1) return;

        const timer = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, autoplayDelay);

        return () => clearInterval(timer);
    }, [autoplay, autoplayDelay, count]);

    const handleTransitionEnd = () => {
        if (!infinite) return;

        if (index === 0) {
            setEnableTransition(false);
            setIndex(count);
        }

        if (index === count + 1) {
            setEnableTransition(false);
            setIndex(1);
        }
    };

    useEffect(() => {
        if (!enableTransition) {
            const id = requestAnimationFrame(() => {
                setEnableTransition(true);
            });
            return () => cancelAnimationFrame(id);
        }
    }, [enableTransition]);

    const total = extendedSlides.length;
    const slideWidth = 100 / total;

    return (
        <div
            className={`overflow-hidden w-full ${className}`}
            style={{ height }}
        >
            <div
                className="flex h-full"
                onTransitionEnd={handleTransitionEnd}
                style={{
                    width: `${total * 100}%`,
                    transform: `translateX(${-index * slideWidth}%)`,
                    transition: enableTransition
                        ? `transform ${speed}ms ease`
                        : "none",
                }}
            >
                {extendedSlides.map((slide, i) => (
                    <div
                        key={i}
                        className="shrink-0 h-full flex"
                        style={{ width: `${slideWidth}%` }}
                    >
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PureSlider;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import Lightbox from 'yet-another-react-lightbox';

interface Props {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageLightbox({ src, alt = '', ...props }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="my-8 flex justify-center">
        <div
          className="relative w-full max-w-4xl rounded-lg border border-neutral-200 bg-neutral-50 overflow-hidden group cursor-pointer hover:border-neutral-300"
          onClick={handleOpen}
        >
          <Image
            src={src}
            alt={alt}
            width={typeof props.width === 'number' ? props.width : 1200}
            height={typeof props.height === 'number' ? props.height : 675}
            className="w-full h-auto object-contain"
            style={{ width: '100%', height: 'auto' }}
            unoptimized
          />

          {/* Overlay hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="p-4 rounded-full bg-black/70 text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>


      <Lightbox
        open={open}
        close={handleClose}
        slides={[{ src, alt }]}
        plugins={[Zoom]}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 10,
          pinchZoomDistanceFactor: 10,
          scrollToZoom: true,
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  );
}

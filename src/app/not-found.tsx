'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const gifIds = [
  'WfrdKQCey780sSwRCT',
  'd2jjuAZzDSVLZ5kI',
  '26BnaDJkztM5uJplK',
  '1l7GT4n3CGTzW',
  'gfIIByUBhvy7AYwaqP',
  'yxy69FCE06Ql0Fjk4Z',
  '3o85xGocUH8RYoDKKs',
  'LoGh1t5iGxFOE',
  'WoQmhbWcr7LoODs8a4',
  'xjZtu4qi1biIo',
  'TR996IaHtmDi1x98zW',
  '6UCAruhkvIBcxZEUpq',
  '1VfQztNm31zp4407Yr',
  '12s2PXFPfJXUcHHjWR',
  'hOUnTqlzHv5m0',
];

const getRandomGif = () => {
  const randomIndex = Math.floor(Math.random() * gifIds.length);
  return `https://i.giphy.com/${gifIds[randomIndex]}.gif`;
};

const NotFoundPage = () => {
  const [randomGif] = useState<string>(getRandomGif);

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center gap-6 p-3">
      {randomGif && (
        <Image
          src={randomGif}
          alt="404 Not Found"
          width={480}
          height={270}
          className="max-w-md w-full h-auto rounded-lg"
          unoptimized
        />
      )}
      <p className="italic font-semibold text-3xl text-center">
        {`"`}
        {'It looks like this dude is lost, huh?'}
        {`"`}
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity mt-4"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  badge: ReactNode;
}

const HoverBox = ({ children, badge }: Props) => {
  const animationClassNames =
    'transition ease-in-out duration-100 delay-75 group-hover:translate-y-0 group-hover:scale-105 group-hover:opacity-100';
  return (
    <div className="flex items-center justify-center h-[340px] cursor-pointer relative group">
      <div className="max-h-full flex items-center justify-center overflow-hidden">{children}</div>
      <div
        className={`badge-container w-full h-full flex items-center justify-center absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-10 opacity-0 border-white bg-transparent z-50 ${animationClassNames}`}
      >
        {badge}
      </div>
    </div>
  );
};

export default HoverBox;

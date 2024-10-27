import { ReactElement } from 'react';
import clsx from 'clsx';

const sizedestro = {
  1: 'h-1 w-1',
  2: 'h-2 w-2',
  3: 'h-3 w-3',
  4: 'h-4 w-4',
  5: 'h-5 w-5',
  6: 'h-6 w-6',
  7: 'h-7 w-7',
  8: 'h-8 w-8',
  9: 'h-9 w-9',
} as const;
type sizetype = keyof typeof sizedestro;

const positiondestro = {
  topright: 'absolute top-0 right-0 -translate-y-1/2 translate-x-full',
  topleft: 'absolute top-0 left-0 -translate-y-1/2 -translate-x-full',
  top: 'absolute inset-x-1/2 top-0 -translate-y-full',
  left: 'absolute inset-y-1/2 left-0 -translate-x-full ',
  right: 'absolute inset-y-1/2 right-0',
  bottom: 'absolute inset-x-1/2 bottom-0 translate-y-full',
} as const;

type positiontype = keyof typeof positiondestro;

type props = {
  show?: boolean | string;
  className?: string;
  size?: sizetype;
  children?: ReactElement | ReactElement[];
  position?: positiontype;
};

function DotPulse({
  show = true,
  className,
  size = 3,
  children,
  position = 'topleft',
}: props) {
  if (typeof show === 'string' && show.length === 0) return null;
  if (!show) return null;
  const sizeclass = sizedestro[size];
  const posclass = positiondestro[position];

  const extendclass = clsx(
    className,
    sizeclass,
    posclass,
    'flex items-center justift-center',
  );

  return (
    <span className={extendclass}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span
        className={`relative inline-flex rounded-full bg-sky-500 ${sizeclass}`}
      >
        {children}
      </span>
    </span>
  );
}

export default DotPulse;

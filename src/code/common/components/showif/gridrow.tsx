import { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

type props = {
  children?: ReactNode | ReactNode[] | ReactElement | ReactElement[];
  show?: boolean;
  className?: string;
};

function GridRow({ show, children, className }: props) {
  const animclass = clsx(
    {
      'grid-rows-1fr': show,
      'grid-rows-0fr': !show,
    },
    className,
  );
  return (
    <div className={`grid transition-gridrows ${animclass}`}>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

export default GridRow;

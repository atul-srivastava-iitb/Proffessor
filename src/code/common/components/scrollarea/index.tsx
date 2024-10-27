import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { ReactNode } from 'react';
import clsx from 'clsx';
/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                WORKS PERFECT UNDER NESTING              
`                                                         `
```````````````````````````````````````````````````````````
*/
type props = {
  children?: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  contClass?: string;
  rootClass?: string;
};

function ScrollArea({ children, orientation, contClass, rootClass }: props) {
  const extendcontclass = clsx(
    'grid-cols-1fr grid grid-rows-1fr items-stretch justify-stretch overflow-hidden',
    contClass,
  );
  const extendrootclass = clsx('overflow-hidden', rootClass);

  return (
    <div className={extendcontclass}>
      <RadixScrollArea.Root className={extendrootclass}>
        <RadixScrollArea.Viewport className="h-full w-full">
          {children}
        </RadixScrollArea.Viewport>
        <RadixScrollArea.Scrollbar
          orientation={orientation}
          className="flex select-none bg-gray-50"
        >
          <RadixScrollArea.Thumb className="flex-1 bg-gray-200"></RadixScrollArea.Thumb>
        </RadixScrollArea.Scrollbar>
      </RadixScrollArea.Root>
    </div>
  );
}

export default ScrollArea;

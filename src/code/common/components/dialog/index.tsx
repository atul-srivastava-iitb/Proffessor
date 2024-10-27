'use client';
import { Dialog as RadixDialog } from '@radix-ui/themes';
import { ReactElement } from 'react';
import clsx from 'clsx';

/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                Dilog  BOX         
`                                                         `
```````````````````````````````````````````````````````````
note : using barebone RadixDialog prevents css theme from applied on theme components
  
*/

type props = {
  position?: 'center' | 'bottom_full';
  contentclass?: string;
  children?: ReactElement | ReactElement[];
  open?: boolean;
  onOpenChange?: (bool: boolean) => void;
};

const ifcenter = 'left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2';
const ifbottom = 'left-0 right-0 bottom-0';

function Dialog({
  children,
  position = 'center',
  contentclass,
  onOpenChange,
  open,
}: props) {
  const extendcontentclass = clsx(
    'animate-fade fixed bg-primary shadow-sm p-0 rounded-md ',
    {
      [ifcenter]: position === 'center',
      [ifbottom]: position === 'bottom_full',
    },
    contentclass,
  );

  const bufferopen = (nv: boolean) => {
    if (onOpenChange) onOpenChange(nv);
  };

  return (
    <RadixDialog.Root open={open} onOpenChange={bufferopen}>
      <RadixDialog.Content className={extendcontentclass}>
        <RadixDialog.Title className="hidden"></RadixDialog.Title>
        <RadixDialog.Description className="hidden"></RadixDialog.Description>
        {children}
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
}
export default Dialog;

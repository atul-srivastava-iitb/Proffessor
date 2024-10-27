'use client';
import { Button as RadixButton, ButtonProps } from '@radix-ui/themes';
import { MouseEvent, ReactNode } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                Simple Button Wrapper                  
`                                                         `
```````````````````````````````````````````````````````````
*/

export interface props extends ButtonProps {
  children?: ReactNode;
  className?: string;
  ping?: (name: string) => void;
  pushTo?: string;
}

function Button({ children, className, pushTo, ping, ...rest }: props) {
  const router = useRouter();
  const extendclass = clsx(className);

  const bufferClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (pushTo) {
      router.push(pushTo);
      return;
    }
    const { name } = event.currentTarget;
    if (ping) ping(name);
  };

  return (
    <RadixButton
      className={extendclass}
      variant="outline"
      onClick={bufferClick}
      {...rest}
    >
      {children}
    </RadixButton>
  );
}
export default Button;

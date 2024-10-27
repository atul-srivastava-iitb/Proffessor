'use client';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconProps } from '@radix-ui/themes';
import { ChangeEvent, ReactNode } from 'react';
import { TextField as RadixText } from '@radix-ui/themes';
import { RootProps } from '@radix-ui/themes/dist/esm/components/text-field.js';
/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                Radix Input Wrapper         
`                                                         `
```````````````````````````````````````````````````````````
*/

interface props extends RootProps {
  ping?: (name: string, value: string) => void;
  children?: ReactNode;
}

function TextField({ children, ping, ...rest }: props) {
  const bufferinput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!ping) return;
    ping(name, value);
  };

  return (
    <RadixText.Root {...rest} onChange={bufferinput}>
      {children}
    </RadixText.Root>
  );
}

export default TextField;

type iconprops = {
  children?: ReactNode;
  RadixIcon?: ForwardRefExoticComponent<
    IconProps & RefAttributes<SVGSVGElement>
  >;
};

TextField.Icon = function ({ children }: iconprops) {
  return <RadixText.Slot className="cursor-pointer">{children}</RadixText.Slot>;
};

/**
  
Show Simple Text string

Naming
    p - category 
    bo - size
    no - boldness
    color

 */
'use client';
import { ReactNode } from 'react';
import {
  Text as RadixText,
  TextProps as RadixTextProps,
} from '@radix-ui/themes';
import clsx from 'clsx';

import { destro, destrosKeys } from './text-destro';

type props = RadixTextProps & {
  children?: string | ReactNode | ReactNode[];
  className?: string;
  type?: destrosKeys;
  name?: string;
  ping?: (name: string) => void;
};

function Text({
  children,
  name = '',
  className = '',
  type = 'p_bo_n_p',
  ping,
  ...rest
}: props) {
  const typedestro = destro[type] || '';
  const extendclass = clsx(className, typedestro);
  const clickBuffer = () => {
    if (ping) ping(name);
  };
  return (
    <RadixText className={extendclass} as="p" {...rest} onClick={clickBuffer}>
      {children}
    </RadixText>
  );
}

export default Text;

import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconProps } from '@radix-ui/themes';
import clsx from 'clsx';

/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                Simple Icon Wrapper                  
`                                                         `
```````````````````````````````````````````````````````````
Note : can use just button to achive this same
 
not that useful for now. Can replace Icon button variant: ghost
 
*/

interface props extends IconProps {
  className?: string;
  size?: number;
  iconname?: string;
  RadixIcon?: ForwardRefExoticComponent<
    IconProps & RefAttributes<SVGSVGElement>
  >;
  ping?: (name: string) => void;
  name?: string;
  align?: 'center' | undefined;
}

function Icon({
  size = 15,
  className,
  name = '',
  ping,
  RadixIcon,
  align = 'center',
  ...rest
}: props) {
  const extendclass = clsx(className, {
    'flex items-center justify-center': align === 'center',
  });
  if (!RadixIcon) return null;

  const bufferClick = () => {
    if (ping) ping(name);
  };

  return (
    <div className={extendclass} onClick={bufferClick}>
      <RadixIcon width={size} height={size} {...rest} />
    </div>
  );
}
export default Icon;

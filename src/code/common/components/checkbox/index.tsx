import { CheckboxProps, Checkbox as RadixCheckbox } from '@radix-ui/themes';

/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                Simple Checkbox Wrapper                  
`                                                         `
```````````````````````````````````````````````````````````
use ping to get( name, value )
*/

interface props extends CheckboxProps {
  ping?: (name: string, value: boolean) => void;
}

function Checkbox({ ping, name = '', ...rest }: props) {
  const bufferChecked = (newstate: boolean) => {
    if (ping) ping(name, newstate);
  };

  return (
    <RadixCheckbox name={name} onCheckedChange={bufferChecked} {...rest} />
  );
}

export default Checkbox;

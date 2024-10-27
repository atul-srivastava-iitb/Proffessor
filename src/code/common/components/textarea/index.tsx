import { TextAreaProps, TextArea as RadixTextArea } from '@radix-ui/themes';
import { ChangeEvent } from 'react';

/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                RadixText Area wrapper              
`                                                         `
```````````````````````````````````````````````````````````
*/

interface props extends TextAreaProps {
  ping?: (name: string, value: string) => void;
}

function TextArea({ ping, ...rest }: props) {
  const bufferinput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (!ping) return;
    ping(name, value);
  };

  return <RadixTextArea onChange={bufferinput} {...rest}></RadixTextArea>;
}
export default TextArea;

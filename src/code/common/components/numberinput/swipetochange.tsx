'use client';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import TextField from '../textinput';
import { RootProps } from '@radix-ui/themes/dist/esm/components/text-field.js';
import { motion, PanInfo } from 'framer-motion';

/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                SWIPE TO CHANGE NUMBER INPUTS                  
`                                                         `
```````````````````````````````````````````````````````````
Note : Use TextField for simple inputs
Built on top of TextField in ./componets
*/

interface props extends RootProps {
  ping?: (name: string, value: string) => void;
  contClass?: string;
}

function WithSwipe({ ping, contClass, value, name, ...rest }: props) {
  const [totalShift, setTotalShift] = useState<number>(0);

  const bufferinput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!ping) return;
    ping(name, value);
  };

  const panregister = (e: PointerEvent, pointInfo: PanInfo) => {
    const numVal = Number(value);
    if (isNaN(numVal)) return;
    if (!ping) return;
    const ydelta = pointInfo.delta.y;
    setTotalShift(totalShift + ydelta);
    if (totalShift > 11) {
      const decreaseby = Math.floor(Math.abs(totalShift) / 10);
      const newVal = numVal - 1;
      const strVal = String(newVal);
      ping(name || '', strVal);
      setTotalShift(totalShift - decreaseby * 10);
    }
    if (totalShift < -11) {
      const newVal = numVal + 1;
      const strVal = String(newVal);
      ping(name || '', strVal);
      const increaseBy = Math.floor(Math.abs(totalShift) / 10);
      setTotalShift(totalShift + increaseBy * 10);
    }
  };

  return (
    <motion.div className={contClass || ''} onPan={panregister}>
      <TextField
        {...rest}
        onChange={bufferinput}
        type="number"
        name={name}
        value={value}
      ></TextField>
    </motion.div>
  );
}

export default WithSwipe;

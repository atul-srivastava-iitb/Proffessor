import { Select as RadixSelect } from '@radix-ui/themes';
import { RootProps } from '@radix-ui/themes/dist/esm/components/select.js';
import clsx from 'clsx';

const _defItems = ['1', '2'];

interface props extends RootProps {
  items?: string[];
  triggerclass?: string;
  name?: string;
  ping?: (name: string, value: string) => void;
}

function SimpleSelect({
  items = _defItems,
  triggerclass = 'min-w-100 ',
  ping,
  name = '',
  ...root
}: props) {
  const extendtriggerclass = clsx(triggerclass, 'min-w-50 gap-5 px-4');

  const bufferinput = (newvalue: string) => {
    if (ping) ping(name, newvalue);
  };

  return (
    <RadixSelect.Root {...root} onValueChange={bufferinput} name={name}>
      <RadixSelect.Trigger
        placeholder="select..."
        className={extendtriggerclass}
      />
      <RadixSelect.Content className="border p-0 shadow-sm">
        {items.map((item) => {
          return (
            <RadixSelect.Item value={item} key={item}>
              {item}
            </RadixSelect.Item>
          );
        })}
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
}

export default SimpleSelect;

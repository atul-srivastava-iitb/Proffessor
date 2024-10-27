import { SegmentedControl as RadixSegment } from '@radix-ui/themes';
import { RootProps } from '@radix-ui/themes/dist/esm/components/segmented-control.js';
import { Text, Ping } from '@/code/common/components';

/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                SEGMENT NAV FROM STRINGS             
`                                                         `
```````````````````````````````````````````````````````````
Has Dot Pulse Integrated
Note : Can be turned to compound component
*/
type props = RootProps & {
  items?: string[];
  focus?: string;
  pulse?: boolean;
};

const defitems: string[] = ['details', 'expenses'];

function SegmentForText({ focus, items = defitems, ...rest }: props) {
  return (
    <RadixSegment.Root {...rest} className="m-0 p-0">
      {items.map((item) => {
        return (
          <RadixSegment.Item value={item} className="m-0 p-0" key={item}>
            <Text className="w-full px-4">{item}</Text>
            {focus === item ? (
              <Ping.dotpulse className="absolute -right-0 -top-3" />
            ) : (
              <></>
            )}
          </RadixSegment.Item>
        );
      })}
    </RadixSegment.Root>
  );
}

export default SegmentForText;

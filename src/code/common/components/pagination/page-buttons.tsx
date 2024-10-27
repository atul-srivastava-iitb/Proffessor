// basically a radio group

import { RadioCards as RadixRadioCards } from '@radix-ui/themes';
import { RootProps } from '@radix-ui/themes/dist/esm/components/radio-group.js';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
type props = {
  //
};

function PagiationRadioGroup() {
  return (
    <RadixRadioCards.Root className="flex flex-row items-center gap-3">
      <RadixRadioCards.Item
        value="previous"
        className="gap-3 px-3 py-2 font-medium"
      >
        <ChevronLeftIcon />
        Previous
      </RadixRadioCards.Item>
      <RadixRadioCards.Item value="1" className="px-3.5 py-2 font-medium">
        1
      </RadixRadioCards.Item>
      <RadixRadioCards.Item value="2" className="px-3.5 py-2 font-medium">
        2
      </RadixRadioCards.Item>
      <RadixRadioCards.Item value="3" className="px-3.5 py-2 font-medium">
        <div className="flex flex-row items-center justify-center gap-0">3</div>
      </RadixRadioCards.Item>
      <RadixRadioCards.Item value="next" className="gap- px-3 py-2 font-medium">
        Next
        <ChevronRightIcon />
      </RadixRadioCards.Item>
    </RadixRadioCards.Root>
  );
}

export default PagiationRadioGroup;

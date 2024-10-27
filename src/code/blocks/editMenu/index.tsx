import { Button, Text } from '@/code/common/components';
import {
  Pencil2Icon,
  ArrowDownIcon,
  ArrowUpIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import { DropdownMenu } from '@radix-ui/themes';

type props = {
  index: number;
  ping: (index: number, type: string) => void;
};
function EditItemMenu({ index, ping }: props) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="absolute right-16 top-2 flex aspect-square items-center justify-center rounded-md bg-white px-3 ring-2">
          <Pencil2Icon />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item
          textValue="edit"
          onClick={() => {
            ping(index, 'edit');
          }}
        >
          <Pencil2Icon /> Edit
        </DropdownMenu.Item>
        <DropdownMenu.Item
          textValue="edit"
          onClick={() => {
            ping(index, 'addup');
          }}
        >
          <ArrowUpIcon /> Add New Above
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => {
            ping(index, 'adddown');
          }}
        >
          <ArrowDownIcon /> Add New Below
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => {
            ping(index, 'del');
          }}
        >
          <TrashIcon /> Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default EditItemMenu;

import { Button, Text } from '@/code/common/components';
import {
  Pencil2Icon,
  ArrowDownIcon,
  ArrowUpIcon,
  DownloadIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import { DropdownMenu } from '@radix-ui/themes';

type props = {
  ping: (type: string) => void;
  type: string;
};

function EditGalleryMenu({ ping, type }: props) {
  const bufferClick = () => {
    if (ping) ping(type);
  };
  return (
    <div
      onClick={bufferClick}
      className="absolute right-16 top-5 z-20 flex aspect-square items-center justify-center rounded-md bg-white px-3 ring-2"
    >
      <Pencil2Icon />
    </div>
  );
}

export default EditGalleryMenu;

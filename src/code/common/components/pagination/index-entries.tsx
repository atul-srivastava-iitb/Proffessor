import Text from '../text';
import Button from '../buttons';
import clsx from 'clsx';

type props = {
  total?: number;
  start?: number;
  end?: number;
  type?: 'index_extries';
  previous?: boolean;
  next?: boolean;
  align?: 'left' | 'right';
};

function IndexEntries({
  total = 100,
  start = 0,
  end = 10,
  align = 'left',
}: props) {
  const extendcontclass = clsx(
    { 'justify-end': align === 'right' },
    'flex flex-row flex-wrap items-center gap-3',
  );
  return (
    <div className={extendcontclass}>
      <Text type="p_ba_n_p">
        <Text as="span" type="p_bo_b_p" className="px-1">
          {start}
        </Text>
        -
        <Text as="span" className="px-1" type="p_bo_b_p">
          {end}
        </Text>
        of
        <Text as="span" type="p_bo_b_p" className="px-1">
          {total}
        </Text>
      </Text>
      <div className="flex flex-row items-center gap-0">
        <Button className="rounded-none rounded-l-md bg-gray-700 px-3 py-1 text-md font-medium text-white hover:bg-gray-800">
          Prev
        </Button>
        <Button className="rounded-none rounded-r-md bg-gray-700 px-3 py-1 text-md font-medium text-white hover:bg-gray-800">
          Next
        </Button>
      </div>
    </div>
  );
}

export default IndexEntries;

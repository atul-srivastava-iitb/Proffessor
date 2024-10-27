type props = {
  items?: string[];
  active?: string;
  changeActive?: (newActive: string) => void;
};

function SecondaryMenu({ items = [], active, changeActive }: props) {
  const getClassA = (path: string) => {
    if (path === active)
      return 'cursor-pointer text-base text-[#333] font-bold  px-3 py-1 text-end';
    return 'cursor-pointer text-base text-[#333] font-thin  px-3 py-1 text-end';
  };

  const buferClick = (item: string) => {
    if (changeActive) changeActive(item);
  };
  return (
    <div className="flex flex-row flex-wrap justify-end gap-5">
      {items.map((item, index) => {
        return (
          <div
            className={getClassA(item)}
            key={index}
            onClick={() => {
              buferClick(item);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default SecondaryMenu;

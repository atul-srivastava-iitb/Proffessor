'use client';
import { BlockText } from '@/code/blocks';
import { usePublicationEdit } from '../state/page.state';
import { ITEMS } from '../utils/constants';
import PublicationCardA from '../components/publicationA';
import { SecondaryMenu } from '@/code/blocks';

function Publicaitons() {
  const active = usePublicationEdit((s) => s.active);
  const changeActive = usePublicationEdit((s) => s.changeActive);
  const allData = usePublicationEdit((s) => s.data);
  const getActiveData = usePublicationEdit((s) => s.getActiveData);
  const activeData = getActiveData(allData);
  const length = activeData.length;
  var yeartrack: string = '0';

  return (
    <div>
      <div className="h-3" />
      <SecondaryMenu
        items={ITEMS}
        active={active}
        changeActive={changeActive}
      />
      <div className="h-10" />
      <BlockText.pageHead text={active} />
      <div className="h-10" />
      <div>
        {activeData.map((item, index) => {
          const showDate = yeartrack !== item.date;
          yeartrack = item.date;
          return (
            <PublicationCardA
              publication={item}
              key={index}
              showDate={showDate}
              index={length - index}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Publicaitons;

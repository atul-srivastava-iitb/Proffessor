'use client';
import {
  BlockText,
  ButtonBlock,
  EditItemMenu,
  CodeManager,
} from '@/code/blocks';
import { usePublicationEdit } from '../state/page.state';
import { ITEMS, ITEMENUMS } from '../utils/constants';
import PublicationCardA from '../components/publicationA';
import PublicationEditManager from '../manager/editmanager';
import { SecondaryMenu } from '@/code/blocks';

const pastetextGet = (active: string) => {
  if (active === ITEMENUMS.ARTICLES)
    return 'Paste this code in : " src/data/publications/articles.tsx "';
  if (active === ITEMENUMS.BOOK)
    return 'Paste this code in : " src/data/publications/bookChapters.tsx "';
  if (active === ITEMENUMS.CONFERENCE)
    return 'Paste this code in : " src/data/publications/conference.tsx "';
  if (active === ITEMENUMS.JOURNALS)
    return 'Paste this code in : " src/data/publications/journals.tsx "';
  if (active === ITEMENUMS.NEWS)
    return 'Paste this code in : " src/data/publications/newsArticles.tsx "';
  return '';
};

function PublicaitonsEdit() {
  const active = usePublicationEdit((s) => s.active);
  const changeActive = usePublicationEdit((s) => s.changeActive);
  const editAction = usePublicationEdit((s) => s.editAction);
  const getactiveData = usePublicationEdit((s) => s.getActiveData);
  const getCode = usePublicationEdit((s) => s.getCode);
  const code = usePublicationEdit((s) => s.code);
  const allData = usePublicationEdit((s) => s.data);
  const activeData = getactiveData(allData);
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
      <div className="flex flex-row items-center gap-5">
        <BlockText.pageHead text={`${active} editor`} />
        <ButtonBlock.getCode ping={getCode}></ButtonBlock.getCode>
      </div>
      <PublicationEditManager />
      <CodeManager
        open={code.show}
        codetext={code.fileText}
        getCode={getCode}
        text={pastetextGet(active)}
      />
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
            >
              <EditItemMenu ping={editAction} index={index} />
            </PublicationCardA>
          );
        })}
      </div>
    </div>
  );
}
export default PublicaitonsEdit;

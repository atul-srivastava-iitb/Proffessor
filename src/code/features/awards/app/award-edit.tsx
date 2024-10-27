'use client';
import {
  BlockText,
  SecondaryMenu,
  CodeManager,
  ButtonBlock,
  EditItemMenu,
} from '@/code/blocks';
import { MENUENUMS, MENUITEMS } from '../utils/constants';
import AwardCardA from '../components/awardsCard';
import AwardEditManager from '../manager/awardeditmanager';
import { useAwardEdit } from '../state/page.state';
import { ShowIf } from '@/code/common/components';
import GalleryMain from '../../gallery/app';

function AwardsEdit() {
  const active = useAwardEdit((s) => s.active);
  const changeActive = useAwardEdit((s) => s.changeActive);
  const awards = useAwardEdit((s) => s.data);
  const getCode = useAwardEdit((s) => s.getCode);
  const code = useAwardEdit((s) => s.code);
  const editAction = useAwardEdit((s) => s.awardAction);

  return (
    <div>
      <div className="h-10" />

      <SecondaryMenu
        items={MENUITEMS}
        active={active}
        changeActive={changeActive}
      />
      <CodeManager
        getCode={getCode}
        open={code.show}
        codetext={code.fileText}
        text={'Paste this code in : "src/data/awards.tsx" '}
      />
      <AwardEditManager />
      <div className="h-10" />

      <div className="flex flex-row items-center gap-5">
        <BlockText.pageHead text={active} />
        <ShowIf.nowrap show={active === MENUENUMS.AWARDS}>
          <ButtonBlock.getCode ping={getCode}></ButtonBlock.getCode>
        </ShowIf.nowrap>
      </div>
      <div className="h-10" />
      <ShowIf.nowrap show={active === MENUENUMS.AWARDS}>
        <div className="grid grid-cols-1 gap-0 tab4:grid-cols-2">
          {awards.map((item, index) => {
            return (
              <AwardCardA award={item} key={index}>
                <EditItemMenu ping={editAction} index={index} />
              </AwardCardA>
            );
          })}
        </div>
      </ShowIf.nowrap>
      <ShowIf.nowrap show={active === MENUENUMS.RECOGNITION}>
        <GalleryMain type="recoginition" showType="list" />
      </ShowIf.nowrap>
    </div>
  );
}

export default AwardsEdit;

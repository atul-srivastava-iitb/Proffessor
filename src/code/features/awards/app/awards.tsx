'use client';
import { BlockText, SecondaryMenu } from '@/code/blocks';
import { ShowIf } from '@/code/common/components';
import { MENUITEMS, MENUENUMS } from '../utils/constants';
import AwardCardA from '../components/awardsCard';

import { useAwardEdit } from '../state/page.state';
import GalleryMain from '../../gallery/app';

function Awards() {
  const active = useAwardEdit((s) => s.active);
  const changeActive = useAwardEdit((s) => s.changeActive);
  const awards = useAwardEdit((s) => s.data);

  return (
    <div>
      <div className="h-10" />
      <SecondaryMenu
        items={MENUITEMS}
        active={active}
        changeActive={changeActive}
      />
      <div className="h-10" />
      <BlockText.pageHead text={active} />
      <div className="h-10" />
      <ShowIf.nowrap show={active === MENUENUMS.AWARDS}>
        <div className="grid grid-cols-1 gap-0 tab4:grid-cols-2">
          {awards.map((item, index) => {
            return <AwardCardA award={item} key={index} />;
          })}
        </div>
      </ShowIf.nowrap>
      <ShowIf.nowrap show={active === MENUENUMS.RECOGNITION}>
        <GalleryMain type="recoginition" showType="list" />
      </ShowIf.nowrap>
    </div>
  );
}

export default Awards;

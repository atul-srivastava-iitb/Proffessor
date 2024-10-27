'use client';
import { BlockText } from '@/code/blocks';
import { useGalleryEdit } from '../state/state.all';
import { SecondaryMenu } from '@/code/blocks';
import { GALLERY_MENU_ITEMS, GALLERY_MENU_ENUMNS } from '../utils/constants';

import GalleryMain from './index';
import { useEffect } from 'react';

function GalleryPage() {
  const active = useGalleryEdit((s) => s.active);
  const changeActive = useGalleryEdit((s) => s.changeActive);
  useEffect(() => {
    changeActive(GALLERY_MENU_ITEMS[0]);
  }, []);
  return (
    <div>
      <div className="h-3"></div>
      <SecondaryMenu
        items={GALLERY_MENU_ITEMS}
        active={active}
        changeActive={changeActive}
      />
      <div className="h-3"></div>
      <BlockText.pageHead text={active} />
      <div className="h-10"></div>
      <div>
        <GalleryMain showType={'carousel'} type={active} />
      </div>
    </div>
  );
}
export default GalleryPage;

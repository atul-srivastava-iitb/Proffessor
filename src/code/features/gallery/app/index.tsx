'use client';
import { ShowIf } from '@/code/common/components';
import { useGalleryEdit } from '../state/state.all';
import EditGalleryMenu from '@/code/blocks/editMenu/galleryEdit';
import { CodeManager } from '@/code/blocks';

import GalleryCarousel from './gallery';
import GalleryList from './galleryList';

type props = {
  type: string;
  allowEdit?: boolean;
  showType?: 'list' | 'carousel';
};

function GalleryMain({
  showType = 'list',
  type = 'lab',
  allowEdit = false,
}: props) {
  const changeActive = useGalleryEdit((s) => s.changeActive);
  changeActive(type);
  const getLocation = useGalleryEdit((s) => s.getLocation);
  const getImages = useGalleryEdit((s) => s.getGallery);
  const editAction = useGalleryEdit((s) => s.editAction);
  const images = getImages(type);
  const location = getLocation(type);

  const code = useGalleryEdit((s) => s.code);
  const getCode = useGalleryEdit((s) => s.getCode);
  if (showType === 'list') {
    return (
      <GalleryList images={images} location={location}>
        <ShowIf.nowrap show={allowEdit}>
          <EditGalleryMenu type={type} ping={editAction} />
          <CodeManager
            open={code.showCode}
            codetext={code.fileText}
            getCode={getCode}
          />
        </ShowIf.nowrap>
      </GalleryList>
    );
  }
  if (showType === 'carousel') {
    return (
      <GalleryCarousel images={images} location={location}>
        <ShowIf.nowrap show={allowEdit}>
          <EditGalleryMenu type={type} ping={editAction} />
          <CodeManager
            open={code.showCode}
            codetext={code.fileText}
            getCode={getCode}
          />
        </ShowIf.nowrap>
      </GalleryCarousel>
    );
  }
}
export default GalleryMain;

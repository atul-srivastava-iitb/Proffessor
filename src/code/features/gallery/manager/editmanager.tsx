'use client';
import { Dialog } from '@/code/common/components';
import { useGalleryEdit } from '../state/state.all';

function GalleryEditManager() {
  const form = useGalleryEdit((s) => s.formType);

  return <Dialog open={form.show}></Dialog>;
}
export default GalleryEditManager;

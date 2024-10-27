'use client';
import { Dialog } from '@/code/common/components';
import { useGalleryEdit } from '../state/state.all';
import GalleryImageForm from '../components/form';

function GalleryEditManager() {
  const form = useGalleryEdit((s) => s.formType);

  return (
    <Dialog open={form.show}>
      <GalleryImageForm />
    </Dialog>
  );
}
export default GalleryEditManager;

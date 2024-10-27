'use client';
import { usePublicationEdit } from '../state/page.state';
import { Dialog } from '@/code/common/components';
import PublicationEditForm from '../components/publication.form';

function PublicationEditManager() {
  const form = usePublicationEdit((s) => s.formType);
  return (
    <Dialog open={form.show}>
      <PublicationEditForm />
    </Dialog>
  );
}
export default PublicationEditManager;

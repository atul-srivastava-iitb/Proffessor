'use client';
import { useAwardEdit } from '../state/page.state';
import { Dialog } from '@/code/common/components';
import AwardEdit from '../components/awardForm';

function AwardEditManager() {
  const form = useAwardEdit((s) => s.formType);
  return (
    <Dialog open={form.show}>
      <AwardEdit />
    </Dialog>
  );
}
export default AwardEditManager;

'use client';
import { useExperienceEdit } from '../state/experience.edit';
import { ExperienceEditForm } from '../components';
import { Dialog } from '@/code/common/components';

function ExperienceEditManager() {
  const form = useExperienceEdit((s) => s.formType);

  return (
    <Dialog open={form.show}>
      <ExperienceEditForm />
    </Dialog>
  );
}
export default ExperienceEditManager;

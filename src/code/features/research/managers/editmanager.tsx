'use client';
import { useResearchEdit } from '../state/page.state';
import { Dialog, ShowIf } from '@/code/common/components';
import ProjectForm from '../components/project.form';
import FacilityForm from '../components/facility.form';
import { MENUITEM_ENUM } from '../utils/constants';

function PublicationEditManager() {
  const form = useResearchEdit((s) => s.formType);
  const active = useResearchEdit((s) => s.active);

  return (
    <Dialog open={form.show}>
      <ShowIf.nowrap show={active === MENUITEM_ENUM.PROJECT}>
        <ProjectForm />
      </ShowIf.nowrap>
      <ShowIf.nowrap show={active === MENUITEM_ENUM.RESEARCH_FACILITIES}>
        <FacilityForm />
      </ShowIf.nowrap>
    </Dialog>
  );
}
export default PublicationEditManager;

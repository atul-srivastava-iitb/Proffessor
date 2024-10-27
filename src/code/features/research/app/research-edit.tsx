'use client';
import { BlockText, ButtonBlock } from '@/code/blocks';
import { SecondaryMenu, EditItemMenu, CodeManager } from '@/code/blocks';
import { useResearchEdit } from '../state/page.state';
import { MENU_ITEMS, MENUITEM_ENUM } from '../utils/constants';
import { ShowIf } from '@/code/common/components';
import ProjectCard from '../components/projectCard';
import FacilityCard from '../components/researchFacilityCard';
import ResearchEditManager from '../managers/editmanager';

const pastetextGet = (active: string) => {
  if (active === MENUITEM_ENUM.PROJECT)
    return 'Paste this code in : " src/data/research/research-projects.tsx "';
  return '';
};

function ResearchEdit() {
  const active = useResearchEdit((s) => s.active);
  const editAction = useResearchEdit((s) => s.itemAction);
  const changeActive = useResearchEdit((s) => s.setActive);
  const getCode = useResearchEdit((s) => s.getCode);
  const code = useResearchEdit((s) => s.code);
  const allData = useResearchEdit((s) => s.data);
  const projects = allData.projects;
  const facilities = allData.facilities;

  return (
    <div>
      <div className="h-3" />

      <SecondaryMenu
        items={MENU_ITEMS}
        active={active}
        changeActive={changeActive}
      />
      <div className="h-10" />

      <div className="flex flex-row items-center gap-5">
        <BlockText.pageHead text={`${active} editor`} />
        <ShowIf.nowrap show={active === MENUITEM_ENUM.PROJECT}>
          <ButtonBlock.getCode ping={getCode}></ButtonBlock.getCode>
        </ShowIf.nowrap>
      </div>
      <CodeManager
        getCode={getCode}
        open={code.show}
        codetext={code.fileText}
        text={pastetextGet(active)}
      />
      <ResearchEditManager />
      <div className="h-10" />

      <div>
        <ShowIf.nowrap show={active === MENUITEM_ENUM.PROJECT}>
          {projects.map((item, index) => {
            return (
              <ProjectCard project={item} key={index}>
                <EditItemMenu ping={editAction} index={index} />
              </ProjectCard>
            );
          })}
        </ShowIf.nowrap>
        <ShowIf.nowrap show={active === MENUITEM_ENUM.RESEARCH_FACILITIES}>
          <div className="grid grid-cols-1 gap-5 tab3:grid-cols-2">
            {facilities.map((item, index) => {
              return <FacilityCard facility={item} key={index}></FacilityCard>;
            })}
          </div>
        </ShowIf.nowrap>
      </div>
    </div>
  );
}
export default ResearchEdit;

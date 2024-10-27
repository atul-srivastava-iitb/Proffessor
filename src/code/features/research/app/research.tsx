'use client';
import { SecondaryMenu, BlockText } from '@/code/blocks';
import { useResearchEdit } from '../state/page.state';
import { MENU_ITEMS, MENUITEM_ENUM } from '../utils/constants';
import { ShowIf } from '@/code/common/components';
import ProjectCard from '../components/projectCard';
import FacilityCard from '../components/researchFacilityCard';

function Research() {
  const active = useResearchEdit((s) => s.active);
  const changeActive = useResearchEdit((s) => s.setActive);
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
      <BlockText.pageHead text={active} />
      <div className="h-10" />
      <div>
        <ShowIf.nowrap show={active === MENUITEM_ENUM.PROJECT}>
          {projects.map((item, index) => {
            return <ProjectCard project={item} key={index} />;
          })}
        </ShowIf.nowrap>
        <ShowIf.nowrap show={active === MENUITEM_ENUM.RESEARCH_FACILITIES}>
          <div className="grid grid-cols-1 gap-10 tab3:grid-cols-2">
            {facilities.map((item, index) => {
              return <FacilityCard facility={item} key={index} />;
            })}
          </div>
        </ShowIf.nowrap>
      </div>
    </div>
  );
}
export default Research;

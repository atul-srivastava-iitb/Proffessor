import { Text } from '@/code/common/components';
import { RESEARCH_PROJECTS } from '../schema/research.sheman';

type props = {
  children?: React.ReactNode;
  project: RESEARCH_PROJECTS;
};
function ProjectCard({ children, project }: props) {
  return (
    <div className="pb-10">
      <div className="rounded-md px-5 py-7 shadow-md">
        <div className="text-center text-h3 font-semibold">
          {project.heading || ''}
        </div>
        <div className="h-4" />
        <div className="text-center italic">{project.place || ''}</div>
        <div className="h-3" />
        <div className="text-center italic">{project.role || ''}</div>
        <div className="h-3" />
        <div className="text-center italic">{project.duration || ''}</div>
        {children}
      </div>
    </div>
  );
}

export default ProjectCard;

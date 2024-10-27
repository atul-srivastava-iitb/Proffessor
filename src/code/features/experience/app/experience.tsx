'use client';
import { ExperienceCardA } from '../components';
import { BlockText } from '@/code/blocks';
import { useExperienceEdit } from '../state/experience.edit';

function Experience() {
  const experienceData = useExperienceEdit((s) => s.data);
  return (
    <div>
      <div className="h-10" />
      <BlockText.pageHead text="Experience" />
      <div className="h-10" />
      <div className="grid grid-cols-1 tab4:grid-cols-2">
        {experienceData.map((item, index) => {
          return <ExperienceCardA experience={item} key={index} />;
        })}
      </div>
    </div>
  );
}
export default Experience;

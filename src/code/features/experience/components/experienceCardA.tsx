import { Text } from '@/code/common/components';
import { EXPERIENCE } from '@/code/features/experience/schema/experience.schema';
import { ButtonBlock } from '@/code/blocks';

type props = {
  experience: EXPERIENCE;
  children?: React.ReactNode;
};

function ExperienceCardA({ experience, children }: props) {
  return (
    <div className="border-b border-l pb-6 pl-6 pt-4">
      <ButtonBlock.date date={experience.time || ''} />
      <div className="h-4" />
      <div className="text-h4 font-semibold">{experience.position || ''}</div>
      <div className="h-2" />
      <div className="text-body italic">{experience.place || ''}</div>
      <div className="h-3" />
      {children}
    </div>
  );
}
export default ExperienceCardA;

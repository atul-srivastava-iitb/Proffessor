import { AWARDS } from '@/code/features/awards/interface/awards.interface';
import { ButtonBlock } from '@/code/blocks';

type props = {
  award: AWARDS;
  children?: React.ReactNode;
};
function AwardCardA({ award, children }: props) {
  return (
    <div className="border-b border-l pb-6 pl-6 pt-4">
      <ButtonBlock.date date={award.date || '...'} />
      <div className="h-4" />
      <div className="text-h4 font-semibold">{award.title || ''}</div>
      <div className="h-2" />
      <div className="text-body italic">{award.description || ''}</div>
      <div className="h-3" />
      {children}
    </div>
  );
}
export default AwardCardA;

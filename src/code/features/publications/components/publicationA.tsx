import { ShowIf, Text } from '@/code/common/components';
import { ButtonBlock } from '@/code/blocks';
import { PUBLICATION } from '../schema/publication.schema';

type props = {
  publication: PUBLICATION;
  children?: React.ReactNode;
  showDate?: boolean;
  index?: number;
};
function PublicationCardA({
  publication,
  index = 0,
  children,
  showDate = false,
}: props) {
  return (
    <div className="border-b border-l pb-6 pl-6 pt-4">
      <ShowIf.nowrap show={showDate}>
        <ButtonBlock.date date={publication.date || ''} />
      </ShowIf.nowrap>
      <div className="h-3" />
      <div className="flex flex-row items-start">
        <div className="w-14">
          <div className="text-tertiary text-body italic">{index}</div>
        </div>
        <div className="flex-1">
          <div className="text-tertiary text-base italic">
            {publication.initialText || ''}
          </div>
          <div className="h-2" />
          <Text type="h_lg_b_p"></Text>
          <div className="text-h4 font-semibold text-primary">
            {publication.highlightedText || ''}
          </div>
          <div className="h-1" />
          <div className="text-secondary text-base font-semibold italic">
            {publication.finalText}
          </div>
          <div className="h-1" />
          <ShowIf.nowrap show={publication.link?.length !== 0}>
            <div className="text-tertiary text-body italic underline">
              <a href={publication.link?.trim()} target="_black">
                {publication.link}
              </a>
            </div>
          </ShowIf.nowrap>
        </div>
      </div>

      {children}
    </div>
  );
}

export default PublicationCardA;

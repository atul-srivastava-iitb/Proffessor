import { Text } from '@/code/common/components';
import { RESEARCH_FACILITIES } from '../schema/research.sheman';

type props = {
  facility: RESEARCH_FACILITIES;
  children?: React.ReactNode;
};

const ImageLocation = '/research_facilities/';

function FacilityCard({ facility, children }: props) {
  return (
    <div className="rounded-md px-5 py-7 shadow-md">
      <div className="mx-auto flex w-[80%] items-center justify-center">
        <img
          src={`${ImageLocation}${facility.image.trim()}`}
          alt=""
          className="mx-auto h-full w-full"
        />
      </div>
      <div className="h-5" />
      <div className="text-center text-h3 font-semibold">
        {facility.heading || ''}
      </div>
      <div className="h-3" />
      <div className="text-center text-base italic">
        {facility.content || ''}
      </div>

      {children}
    </div>
  );
}
export default FacilityCard;

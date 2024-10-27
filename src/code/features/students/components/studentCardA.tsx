import { ShowIf, Text } from '@/code/common/components';
import { STUDENTS } from '../interface/student.interface';

type props = {
  student: STUDENTS;
  children?: React.ReactNode;
};

const ImageLocation = '/students/';

function StudentCardA({ student, children }: props) {
  return (
    <div className="flex flex-row items-center gap-5 rounded-md px-5 py-7 shadow-md">
      <div className="w-[120px]">
        <div className="aspect-square w-[120px] overflow-hidden rounded-full border-2 bg-white">
          <ShowIf.nowrap show={student.image.length !== 0}>
            <img src={`${ImageLocation}${student.image.trim()}`} alt="" />
          </ShowIf.nowrap>
          <ShowIf.nowrap show={student.image.length === 0}>
            <img src={`/svg/default.png`} alt="" />
          </ShowIf.nowrap>
        </div>
      </div>
      <div className="flex-1">
        <div className="text-h3 font-semibold">{student.name || ''}</div>
        <div className="h-2" />
        <div className="text-base text-primary">{student.texta || ''}</div>
        <div className="h-2" />
        <div className="text-tertiary text-base">{student.textb || ''}</div>
        <div className="h-2" />
        <div className="text-tertiary text-base font-bold italic">
          {student.textc || ''}
        </div>
      </div>
      {children}
    </div>
  );
}
export default StudentCardA;

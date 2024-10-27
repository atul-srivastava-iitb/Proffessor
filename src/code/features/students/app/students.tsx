'use client';
import { BlockText, SecondaryMenu } from '@/code/blocks';
import { MENU1, MENU2 } from '../utils/constants';
import { StudentCardA } from '../components';
import { useStudentEdit } from '../state/student.page.state';
import { mutate } from '../utils/mutate.data';

function Students() {
  const active1 = useStudentEdit((s) => s.active1);
  const active2 = useStudentEdit((s) => s.active2);
  const changeActive = useStudentEdit((s) => s.changeActive);
  const allData = useStudentEdit((s) => s.data);
  const activeArray = mutate.getTargetArray(allData, active1, active2);

  return (
    <div>
      <div className="h-3" />
      <SecondaryMenu
        items={MENU1}
        active={active1}
        changeActive={changeActive}
      />
      <div className="h-3" />

      <SecondaryMenu
        items={MENU2}
        active={active2}
        changeActive={changeActive}
      />
      <div className="h-10" />

      <BlockText.pageHead text={active1} />
      <div className="h-10" />
      <div className="grid grid-cols-1 gap-5 tab4:grid-cols-2">
        {activeArray.map((item, index) => {
          return <StudentCardA student={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Students;

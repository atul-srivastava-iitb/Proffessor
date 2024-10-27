'use client';
import {
  BlockText,
  SecondaryMenu,
  CodeManager,
  EditItemMenu,
  ButtonBlock,
} from '@/code/blocks';
import { MENU1, MENU2, Menu1Enum } from '../utils/constants';
import { StudentCardA } from '../components';
import { useStudentEdit } from '../state/student.page.state';
import { mutate } from '../utils/mutate.data';
import StudentEditManager from '../manager/editmanager';

const pastetextGet = (active: string) => {
  if (active === Menu1Enum.DUAL)
    return 'Paste this code in : " src/data/students/mtech-dual-students.tsx "';
  if (active === Menu1Enum.PHD)
    return 'Paste this code in : " src/data/students/phd-students.tsx "';
  if (active === Menu1Enum.POST)
    return 'Paste this code in : " src/data/students/post-doctoral-students.tsx "';

  return '';
};

function StudentsEdit() {
  const active1 = useStudentEdit((s) => s.active1);
  const active2 = useStudentEdit((s) => s.active2);
  const changeActive = useStudentEdit((s) => s.changeActive);
  const allData = useStudentEdit((s) => s.data);
  const activeArray = mutate.getTargetArray(allData, active1, active2);
  const getCode = useStudentEdit((s) => s.getCode);
  const code = useStudentEdit((s) => s.code);
  const editAction = useStudentEdit((s) => s.itemAction);

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
      <CodeManager
        getCode={getCode}
        open={code.show}
        codetext={code.fileText}
        text={pastetextGet(active1)}
      />
      <StudentEditManager />
      <div className="h-10" />
      <div className="flex flex-row items-center gap-5">
        <BlockText.pageHead text={active1} />
        <ButtonBlock.getCode ping={getCode}></ButtonBlock.getCode>
      </div>
      <div className="h-10" />

      <div className="grid grid-cols-1 gap-5 tab4:grid-cols-2">
        {activeArray.map((item, index) => {
          return (
            <StudentCardA student={item} key={index}>
              <EditItemMenu ping={editAction} index={index} />
            </StudentCardA>
          );
        })}
      </div>
    </div>
  );
}

export default StudentsEdit;

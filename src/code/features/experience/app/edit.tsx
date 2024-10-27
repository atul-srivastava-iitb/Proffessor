'use client';
import { BlockText, ButtonBlock, CodeManager } from '@/code/blocks';
import { ExperienceCardA } from '../components';
import { useExperienceEdit } from '../state/experience.edit';
import ExperienceEditManager from '../manager/editmanager';
import { EditItemMenu } from '@/code/blocks';

function ExperienceEdit() {
  const editAction = useExperienceEdit((s) => s.editAction);
  const stateData = useExperienceEdit((s) => s.data);
  const getCode = useExperienceEdit((s) => s.getCode);
  const code = useExperienceEdit((s) => s.code);

  return (
    <div>
      <div className="h-10" />
      <div className="flex flex-row items-center gap-5">
        <BlockText.pageHead text="Experience Editor ..." />
        <ButtonBlock.getCode ping={getCode}></ButtonBlock.getCode>
      </div>
      <div className="h-10" />
      <ExperienceEditManager />
      <CodeManager
        text='Paste this code in : " src/data/experience.tsx " file'
        open={code.show}
        codetext={code.fileText}
        getCode={getCode}
      />
      <div className="grid grid-cols-1 tab4:grid-cols-2">
        {stateData.map((item, index) => {
          return (
            <ExperienceCardA experience={item} key={index}>
              <EditItemMenu index={index} ping={editAction} />
            </ExperienceCardA>
          );
        })}
      </div>
    </div>
  );
}
export default ExperienceEdit;

'use client';
import { Button, Text, TextField } from '@/code/common/components';
import { useExperienceEdit } from '../state/experience.edit';

function ExperienceEditForm() {
  const inputs = useExperienceEdit((s) => s.inputs);
  const pingInputs = useExperienceEdit((s) => s.pingInputs);
  const action = useExperienceEdit((s) => s.formAction);

  return (
    <div>
      <div className="mx-auto max-w-screen-sm rounded-md border bg-white p-4 shadow-md">
        <Text type="h_xl_m_p" align={'center'}>
          Experience Edit Form
        </Text>
        <div className="h-5" />
        <Text type="p_bo_n_p">Time</Text>
        <TextField
          value={inputs.time}
          name="experience.time"
          ping={pingInputs}
        />
        <div className="h-5" />
        <Text type="p_bo_n_p">Position</Text>
        <TextField
          value={inputs.position}
          name="experience.position"
          ping={pingInputs}
        />
        <div className="h-5" />

        <Text type="p_bo_n_p">Place</Text>
        <TextField
          value={inputs.place}
          name="experience.place"
          ping={pingInputs}
        />
        <div className="h-5" />
        <div className="flex flex-row items-center justify-between">
          <Button className="py-2" ping={action} name="cancel">
            Cancel
          </Button>
          <Button className="py-2" ping={action} name="save">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExperienceEditForm;

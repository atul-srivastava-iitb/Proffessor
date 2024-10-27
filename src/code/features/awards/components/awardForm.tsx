'use client';
import { Button, Text, TextField } from '@/code/common/components';
import { useAwardEdit } from '../state/page.state';

function AwardEdit() {
  const inputs = useAwardEdit((s) => s.inputs);
  const pingInputs = useAwardEdit((s) => s.pingInputs);
  const action = useAwardEdit((s) => s.formAction);

  return (
    <div>
      <div className="mx-auto max-w-screen-sm rounded-md border bg-white p-4 shadow-md">
        <Text type="h_xl_m_p" align={'center'}>
          Awards Edit Form
        </Text>
        <div className="h-5" />
        <Text type="p_bo_n_p">date</Text>
        <TextField value={inputs.date} name="award.date" ping={pingInputs} />
        <div className="h-5" />
        <Text type="p_bo_n_p">Title</Text>
        <TextField value={inputs.title} name="award.title" ping={pingInputs} />
        <div className="h-5" />
        <Text type="p_bo_n_p">Description</Text>
        <TextField
          value={inputs.description}
          name="award.description"
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
export default AwardEdit;

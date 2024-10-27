'use client';
import { Button, Text, TextField } from '@/code/common/components';
import { useStudentEdit } from '../state/student.page.state';

function StudentForm() {
  const inputs = useStudentEdit((s) => s.inputs);
  const pingInputs = useStudentEdit((s) => s.pingInputs);
  const action = useStudentEdit((s) => s.formAction);

  return (
    <div>
      <div className="mx-auto max-w-screen-sm rounded-md border bg-white p-4 shadow-md">
        <Text type="h_xl_m_p" align={'center'}>
          Student Edit Form
        </Text>
        <div className="h-5" />
        <Text type="p_bo_n_p">Name</Text>
        <TextField value={inputs.name} name="student.name" ping={pingInputs} />
        <div className="h-5" />
        <Text type="p_bo_n_p">Text Lin1</Text>
        <TextField
          value={inputs.texta}
          name="student.texta"
          ping={pingInputs}
        />
        <div className="h-5" />
        <Text type="p_bo_n_p">Text Line2</Text>
        <TextField
          value={inputs.textb}
          name="student.textb"
          ping={pingInputs}
        />
        <div className="h-5" />
        <Text type="p_bo_n_p">Text Line3</Text>
        <TextField
          value={inputs.textc}
          name="student.textc"
          ping={pingInputs}
        />
        <div className="h-5" />
        <Text type="p_bo_n_p">Link</Text>
        <TextField value={inputs.link} name="student.link" ping={pingInputs} />
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

export default StudentForm;

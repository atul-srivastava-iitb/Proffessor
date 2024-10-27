'use client';
import { Button, Text, TextField } from '@/code/common/components';
import { usePublicationEdit } from '../state/page.state';

function PublicationEditForm() {
  const inputs = usePublicationEdit((s) => s.inputs);
  const pingInputs = usePublicationEdit((s) => s.pingInputs);
  const action = usePublicationEdit((s) => s.formAction);
  return (
    <div>
      <div className="mx-auto max-w-screen-sm rounded-md border bg-white p-4 shadow-md">
        <Text type="h_xl_m_p" align={'center'}>
          Publication Edit Form
        </Text>
        <div className="h-5" />
        <Text type="p_bo_n_p">Date</Text>
        <TextField
          value={inputs.date}
          name="publication.date"
          ping={pingInputs}
        />
        <div className="h-5" />
        <Text type="p_bo_n_p">Initial Text</Text>
        <TextField
          value={inputs.initialText}
          name="publication.initialtext"
          ping={pingInputs}
        />
        <div className="h-5" />

        <Text type="p_bo_n_p">Highlighted Text</Text>
        <TextField
          value={inputs.highlightedText}
          name="publication.highlightedtext"
          ping={pingInputs}
        />
        <div className="h-5" />

        <Text type="p_bo_n_p">Final Text</Text>
        <TextField
          value={inputs.finalText}
          name="publication.finaltext"
          ping={pingInputs}
        />
        <div className="h-5" />

        <Text type="p_bo_n_p">Link</Text>
        <TextField
          value={inputs.link}
          name="publication.link"
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
export default PublicationEditForm;

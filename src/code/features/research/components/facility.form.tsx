'use client';
import { Button, Text, TextField } from '@/code/common/components';
import { useResearchEdit } from '../state/page.state';

function FacilityForm() {
  const facilityInput = useResearchEdit((s) => s.inputs.facility);
  const pingInputs = useResearchEdit((s) => s.pingInputs);
  const formActions = useResearchEdit((s) => s.formActions);

  return (
    <div>
      <div className="mx-auto max-w-screen-sm rounded-md border bg-white p-4 shadow-md">
        <Text type="h_xl_m_p" align={'center'}>
          Research Project Edit Form
        </Text>
        <div className="h-5" />
        <Text type="p_bo_n_p">Heading</Text>
        <TextField
          value={facilityInput.heading}
          name="facility.heading"
          ping={pingInputs}
        />
        <div className="h-5" />
        <Text type="p_bo_n_p">Content</Text>
        <TextField
          value={facilityInput.content}
          name="facility.content"
          ping={pingInputs}
        />
        <div className="h-5" />

        <Text type="p_bo_n_p">
          Image File Name ( Located In "Public/research_facilities" )
        </Text>
        <TextField
          value={facilityInput.image}
          name="facility.image"
          ping={pingInputs}
        />
        <div className="h-5" />
        <div className="flex flex-row items-center justify-between">
          <Button className="py-2" ping={formActions} name="cancel">
            Cancel
          </Button>
          <Button className="py-2" ping={formActions} name="facility.save">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FacilityForm;

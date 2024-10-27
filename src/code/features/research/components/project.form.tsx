'use client';
import { Button, Text, TextField } from '@/code/common/components';
import { useResearchEdit } from '../state/page.state';

function ProjectForm() {
  const projectInput = useResearchEdit((s) => s.inputs.project);
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
          value={projectInput.heading}
          name="project.heading"
          ping={pingInputs}
        />
        <Text type="p_bo_n_p">Place</Text>
        <TextField
          value={projectInput.place}
          name="project.place"
          ping={pingInputs}
        />
        <Text type="p_bo_n_p">role</Text>
        <TextField
          value={projectInput.role}
          name="project.role"
          ping={pingInputs}
        />
        <Text type="p_bo_n_p">Duration</Text>
        <TextField
          value={projectInput.duration}
          name="project.duration"
          ping={pingInputs}
        />
        <div className="h-5" />
        <div className="flex flex-row items-center justify-between">
          <Button className="py-2" ping={formActions} name="cancel">
            Cancel
          </Button>
          <Button className="py-2" ping={formActions} name="project.save">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;

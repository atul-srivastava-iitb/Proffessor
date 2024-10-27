'use client';
import { useStudentEdit } from '../state/student.page.state';
import { Dialog } from '@/code/common/components';
import StudentForm from '../components/student.form';

function StudentEditManager() {
  const form = useStudentEdit((s) => s.formType);
  return (
    <Dialog open={form.show}>
      <StudentForm />
    </Dialog>
  );
}
export default StudentEditManager;

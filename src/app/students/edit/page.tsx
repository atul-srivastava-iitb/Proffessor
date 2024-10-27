import React from 'react';
import DefaultPageWrapper from '@/code/common/layout/defpagewrapper';
import StudentsEdit from '@/code/features/students/app/students-edit';
function Page() {
  return (
    <DefaultPageWrapper>
      <StudentsEdit />
    </DefaultPageWrapper>
  );
}

export default Page;

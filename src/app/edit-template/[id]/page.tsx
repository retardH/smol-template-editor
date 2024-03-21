'use client';
import TemplateForm from '@/components/shared/template-form';
import { getTemplateFromLocalStorageById } from '@/lib/utils';
import { NextPage } from 'next';

const EditTemplatePage: NextPage<{ params: { id: string } }> = ({ params }) => {
  const templateData = getTemplateFromLocalStorageById(params.id);
  return (
    <div>
      <TemplateForm isEditMode templateData={templateData} />
    </div>
  );
};

export default EditTemplatePage;

import EditorTemplateForm from '@/components/shared/editor-template-form';
import TiptapEditor from '@/components/shared/tiptap-editor';
import { NextPage } from 'next';

const CreateTemplatePage: NextPage = () => {
  return (
    <div>
      <EditorTemplateForm />
    </div>
  );
};

export default CreateTemplatePage;

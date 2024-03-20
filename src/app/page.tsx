import TemplatesList from '@/components/shared/templates-list';
import TiptapEditor from '@/components/shared/tiptap-editor';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div>
      <TemplatesList />
    </div>
  );
};

export default HomePage;

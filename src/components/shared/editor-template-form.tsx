import { Input } from '../ui/input';
import TiptapEditor from './tiptap-editor';

const EditorTemplateForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Your Template Title"
        className="border-none px-0 text-base font-semibold focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-xl xl:text-2xl"
        required
      />
      <TiptapEditor />
    </div>
  );
};

export default EditorTemplateForm;

'use client';
import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import EditorToolbar from './editor-toolbar';
import { Input } from '../ui/input';
import {
  saveTemplateToLocalStorage,
  updateTemplateDataToLocalStorage,
} from '@/lib/utils';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import EditorBubbleMenu from './editor-bubble-menu';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import toast from 'react-hot-toast';
import { Template } from '@/lib/type-definitions';

interface TemplateFormProps {
  isEditMode?: boolean;
  templateData?: Template | null;
}

const TemplateForm = ({
  isEditMode = false,
  templateData,
}: TemplateFormProps) => {
  const router = useRouter();
  const editor = useEditor({
    content: templateData?.body ?? '',
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: true,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: true,
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
      Underline,
      Placeholder.configure({
        placeholder: 'Start making your template',
      }),
    ],
  });
  const [title, setTitle] = useState<string>(templateData?.title ?? '');

  const saveTemplate = () => {
    const htmlOutput = editor?.getHTML();
    const jsonOutput = editor?.getJSON();
    console.log(jsonOutput);
    if (!htmlOutput || !title || editor?.isEmpty) {
      toast.error('Please fill the required fields');
      return;
    }

    if (isEditMode && templateData) {
      const template = {
        id: templateData.id,
        title,
        body: htmlOutput,
        jsonBody: jsonOutput,
        createdAt: templateData.createdAt,
      };
      updateTemplateDataToLocalStorage(templateData.id, template);
    } else if (!isEditMode) {
      const template = {
        id: crypto.randomUUID(),
        title,
        body: htmlOutput,
        jsonBody: jsonOutput,
        createdAt: Date.now(),
      };
      saveTemplateToLocalStorage(template);
    }

    setTitle('');
    editor?.chain().clearContent().run();
    router.push('/');
  };

  return (
    <div className="flex flex-col gap-4">
      <Alert>
        <Info />
        <AlertTitle>Reminder!</AlertTitle>
        <AlertDescription>
          You can make dynamic data for the template by adding key name between
          two curly braces. Like this {`{key_name}`}.
        </AlertDescription>
      </Alert>
      <div className="flex items-center gap-2">
        <Input
          placeholder="Your Template Title"
          className="grow border-none px-0 text-base font-semibold focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-xl xl:text-2xl"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={saveTemplate}>
          {isEditMode ? 'Edit & Save' : 'Save'}
        </Button>
      </div>
      <div>
        <section className="mb-2">
          {editor && <EditorToolbar editor={editor} />}
        </section>
        {editor && <EditorBubbleMenu editor={editor} />}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TemplateForm;

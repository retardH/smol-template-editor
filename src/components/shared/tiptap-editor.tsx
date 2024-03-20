'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import EditorToolbar from './editor-toolbar';

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start making your template',
      }),
    ],
  });
  return (
    <div>
      <section className="mb-2">
        {editor && <EditorToolbar editor={editor} />}
      </section>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;

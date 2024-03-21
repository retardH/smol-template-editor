import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';

export const editorExtensions = [
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
    placeholder: 'Start making your template...',
  }),
];

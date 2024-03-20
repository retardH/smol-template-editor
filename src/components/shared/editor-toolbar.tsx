'use client';
import {
  Undo2,
  Redo2,
  Heading2,
  Heading3,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Code,
  Bold,
  Italic,
  Underline,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Editor } from '@tiptap/react';

interface EditorToolbarProps {
  editor: Editor;
}
const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  return (
    <div className="flex items-center gap-2 rounded-md border border-input">
      <Button size="icon" variant="ghost">
        <Undo2 />
      </Button>
      <Button size="icon" variant="ghost">
        <Redo2 />
      </Button>
      <Button size="icon" variant="ghost">
        <Heading2 />
      </Button>
      <Button size="icon" variant="ghost">
        <Heading3 />
      </Button>
      <Button size="icon" variant="ghost">
        <AlignLeft />
      </Button>
      <Button size="icon" variant="ghost">
        <AlignCenter />
      </Button>
      <Button size="icon" variant="ghost">
        <AlignRight />
      </Button>
      <Button size="icon" variant="ghost">
        <Code />
      </Button>
      <Button size="icon" variant="ghost">
        <Bold />
      </Button>
      <Button size="icon" variant="ghost">
        <Italic />
      </Button>
      <Button size="icon" variant="ghost">
        <Underline />
      </Button>
    </div>
  );
};

export default EditorToolbar;

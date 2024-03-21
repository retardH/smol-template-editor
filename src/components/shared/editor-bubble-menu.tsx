'use client';

import { BubbleMenu, Editor } from '@tiptap/react';
import { Button } from '../ui/button';
import { Bold, Italic, Strikethrough, Underline } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EditorBubbleMenuProps {
  editor: Editor;
}
const EditorBubbleMenu = ({ editor }: EditorBubbleMenuProps) => {
  const handleBoldBtnClick = () => {
    editor.chain().focus().toggleBold().run();
  };

  const handleItalicBtnClick = () => {
    editor.chain().focus().toggleItalic().run();
  };

  const handleStrikeBtnClick = () => {
    editor.chain().focus().toggleStrike().run();
  };

  const handleUnderlineBtnClick = () => {
    editor.chain().focus().toggleUnderline().run();
  };

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className="flex items-center gap-2 rounded-md border border-input bg-white"
    >
      <Button
        size="iconSmall"
        variant="ghost"
        onClick={handleBoldBtnClick}
        className={cn(
          editor.isActive('bold') && 'bg-accent text-accent-foreground',
        )}
      >
        <Bold size={18} />
      </Button>
      <Button
        size="iconSmall"
        variant="ghost"
        onClick={handleItalicBtnClick}
        className={cn(
          editor.isActive('italic') && 'bg-accent text-accent-foreground',
        )}
      >
        <Italic size={18} />
      </Button>
      <Button
        size="iconSmall"
        variant="ghost"
        onClick={handleStrikeBtnClick}
        className={cn(
          editor.isActive('strike') && 'bg-accent text-accent-foreground',
        )}
      >
        <Strikethrough size={18} />
      </Button>
      <Button
        size="iconSmall"
        variant="ghost"
        onClick={handleUnderlineBtnClick}
        className={cn(
          editor.isActive('underline') && 'bg-accent text-accent-foreground',
        )}
      >
        <Underline size={18} />
      </Button>
    </BubbleMenu>
  );
};

export default EditorBubbleMenu;

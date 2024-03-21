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
  Highlighter,
  Heading1,
  AlignJustify,
  List,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Editor } from '@tiptap/react';
import { cn } from '@/lib/utils';

interface EditorToolbarProps {
  editor: Editor;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const handleUndoBtnClick = () => {
    editor.chain().focus().undo().run();
  };

  const handleRedoBtnClick = () => {
    editor.chain().focus().redo().run();
  };

  const handleHeadingBtnClick = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
    editor.chain().focus().toggleHeading({ level: level }).run();
  };

  const handleBoldBtnClick = () => {
    editor.chain().focus().toggleBold().run();
  };

  const handleAlignBtnClick = (type: string) => {
    editor.chain().focus().setTextAlign(type).run();
  };

  const handleCodeBlockBtnClick = () => {
    editor.chain().focus().toggleCodeBlock().run();
  };

  const handleHighlighterBtnClick = () => {
    editor.chain().focus().toggleHighlight().run();
  };

  const handleListBtnClick = () => {
    editor.chain().focus().toggleBulletList().run();
  };

  return (
    <div className="flex items-center gap-2 rounded-md border border-input">
      <Button
        size="icon"
        variant="ghost"
        disabled={!editor.can().chain().undo().run()}
        onClick={handleUndoBtnClick}
      >
        <Undo2 />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        disabled={!editor.can().chain().redo().run()}
        onClick={handleRedoBtnClick}
      >
        <Redo2 />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleHeadingBtnClick(1)}
        className={cn(
          editor.isActive('heading', { level: 1 }) &&
            'bg-accent text-accent-foreground',
        )}
      >
        <Heading1 />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleHeadingBtnClick(2)}
        className={cn(
          editor.isActive('heading', { level: 2 }) &&
            'bg-accent text-accent-foreground',
        )}
      >
        <Heading2 />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleHeadingBtnClick(3)}
      >
        <Heading3 />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleAlignBtnClick('left')}
        className={cn(
          editor.isActive({ textAlign: 'left' }) &&
            'bg-accent text-accent-foreground',
        )}
      >
        <AlignLeft />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleAlignBtnClick('center')}
        className={cn(
          editor.isActive({ textAlign: 'center' }) &&
            'bg-accent text-accent-foreground',
        )}
      >
        <AlignCenter />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleAlignBtnClick('right')}
        className={cn(
          editor.isActive({ textAlign: 'right' }) &&
            'bg-accent text-accent-foreground',
        )}
      >
        <AlignRight />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => handleAlignBtnClick('justify')}
        className={cn(
          editor.isActive({ textAlign: 'justify' }) &&
            'bg-accent text-accent-foreground',
        )}
      >
        <AlignJustify />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleCodeBlockBtnClick}
        className={cn(
          editor.isActive('codeBlock') && 'bg-accent text-accent-foreground',
        )}
      >
        <Code />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleHighlighterBtnClick}
        className={cn(
          editor.isActive('highlight') && 'bg-accent text-accent-foreground',
        )}
      >
        <Highlighter />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleListBtnClick}
        className={cn(
          editor.isActive('bulletList') && 'bg-accent text-accent-foreground',
        )}
      >
        <List />
      </Button>
    </div>
  );
};

export default EditorToolbar;

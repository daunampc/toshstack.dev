import '@/styles/tiptap.scss';
import { EditorContent } from '@tiptap/react';
import { useTiptapEditor } from '@/hooks/useTiptapEditor';
import ToolbarTiptap from './ToolbarTiptap';
import DragHandleTiptap from './DragHandleTiptap';
import 'highlight.js/styles/monokai.css';
export default function EditorTiptap() {
  const editor = useTiptapEditor();

  return (
    <>
      {/* {editor && <BubbleMenuTiptap editor={editor} />} */}

      <ToolbarTiptap editor={editor} />
      <div className="overflow-y-auto h-[calc(100vh-200px)]">
        {editor && <DragHandleTiptap editor={editor} />}
        <EditorContent
          editor={editor}
          role="presentation"
          className="dark:text-neutral-200  font-sans  text-dark-slate font-normal mx-auto max-w-5xl  flex flex-col py-10"
        />
      </div>
    </>
  );
}

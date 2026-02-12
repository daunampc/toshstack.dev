import { type KeyboardEvent } from 'react';

import { Button } from '@mantine/core';
import { BsFillSendFill } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa6';
import { Editor, EditorContent } from '@tiptap/react';

export default function ChatForm({
  onSend,
  editor,
}: {
  onSend: (event: KeyboardEvent) => void;
  disabled?: boolean;
  editor: Editor;
}) {
  return (
    <div className="sticky bottom-0 w-full ">
      <div className="flex items-end gap-2 max-w-xl mx-auto dark:bg-dark-charcoal/90 backdrop-blur-sm border-t border-neutral-800 px-4 py-3 rounded-[28px]">
        <Button variant="light" radius={'lg'} color="blue" size="compact-sm">
          <FaPlus className="shrink-0 " />
        </Button>
        <EditorContent
          onKeyDown={onSend}
          className="flex-1 break-all whitespace-pre-wrap max-h-24 overflow-y-auto dark:text-neutral-200 font-medium"
          editor={editor}
        />
        <Button radius="xl" color="blue" size="compact-sm">
          <BsFillSendFill size={12} />
        </Button>
      </div>
    </div>
  );
}

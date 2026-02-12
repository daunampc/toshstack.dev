import DragHandle from '@tiptap/extension-drag-handle-react';
import { MdOutlineDragIndicator } from 'react-icons/md';
import type { DragHandleTiptapProps } from './editor.types';
import { Button, Popover } from '@mantine/core';
import { FaPlus } from 'react-icons/fa6';
import { offset, shift } from '@floating-ui/dom';

export default function DragHandleTiptap({ editor }: DragHandleTiptapProps) {
  const handleOpen = () => {
    if (!editor) return;
    editor.view.focus();

    const { $to } = editor.state.selection;
    const insertPos = $to.after($to.depth);

    // Chèn dòng mới có dấu /
    editor
      .chain()
      .insertContentAt(
        { from: insertPos, to: insertPos },
        { type: 'paragraph' },
      )
      .setTextSelection(insertPos + 2)
      .focus()
      .run();
  };
  return (
    <>
      <DragHandle
        editor={editor}
        className="transition-all duration-100"
        computePositionConfig={{
          middleware: [
            offset(6), // khoảng cách giữa handle và node
            shift({ padding: 8 }),
          ],
          placement: 'left-start',
        }}
      >
        <div className="flex items-center gap-1">
          <Button
            onClick={() => handleOpen()}
            onMouseDown={e => {
              e.preventDefault(); // không cho button cướp focus
              e.stopPropagation(); // tránh side-effect từ DragHandle
              handleOpen();
            }}
            size="compact-sm"
            variant="transparent"
          >
            <FaPlus />
          </Button>
          <Popover
            closeOnEscape={true}
            returnFocus={false}
            trapFocus={false}
            withinPortal={false}
          >
            <Popover.Target>
              <MdOutlineDragIndicator size={20} />
            </Popover.Target>
            <Popover.Dropdown>124</Popover.Dropdown>
          </Popover>
        </div>
      </DragHandle>
    </>
  );
}

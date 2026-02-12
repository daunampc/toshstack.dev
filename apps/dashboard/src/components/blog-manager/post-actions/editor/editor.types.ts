import type { Editor } from '@tiptap/react';
export interface BubbleMenuTiptapProps {
  editor: Editor;
}

export interface BubbleMenuButtonProps {
  editor: Editor;
  mark: string; // ví dụ: 'bold', 'italic', 'strike', 'code'
  icon: React.ReactNode;
  toggle: (editor: Editor) => void; // hành động khi click
}
export interface ToolbarPopoverProps {
  editor: Editor;
}
export interface PreviewTiptapProps {
  editor: Editor;
}
export interface DragHandleTiptapProps {
  editor: Editor;
}

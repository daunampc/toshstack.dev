import { tiptapExtensions } from '@/shared/config/tiptap-config';
import 'highlight.js/styles/github.css';
import { EditorContent, useEditor } from '@tiptap/react';
import '@/shared/styles/tiptap.scss';
import { MenuBar } from '@/features/editor/ui';
import { Skeleton } from '@mantine/core';
import { PostEditorProps } from '../model/types';
import clsx from 'clsx';

function EditorSkeleton() {
  return (
    <div className="border border-neutral-200 rounded-3xl flex flex-col gap-2">
      {/* MenuBar skeleton */}
      <div className="flex items-center gap-1 p-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} height={32} width={32} radius="xl" />
        ))}
      </div>
      {/* Content skeleton */}
      <div className="px-2 py-4 min-h-40">
        <Skeleton height={16} width="70%" mb={12} />
        <Skeleton height={16} width="90%" mb={12} />
        <Skeleton height={16} width="60%" />
      </div>
    </div>
  );
}

export function PostEditor({ form }: PostEditorProps) {
  const editor = useEditor({
    extensions: tiptapExtensions,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose tiptap-content max-w-none outline-none focus:outline-none border-0 focus:border-0 focus:ring-0 px-2 py-4',
      },
    },
    onUpdate: ({ editor }) => {
      if (editor.getText().length > 0) {
        form.setFieldValue('content', editor.getJSON());
      } else {
        form.setFieldValue('content', null);
      }
    },
    onBlur: () => {
      form.validateField('content');
    },
  });

  if (!editor) {
    return <EditorSkeleton />;
  }

  return (
    <div
      className={clsx(
        form.errors.content && 'border-red-400',
        !form.errors.content && 'border-neutral-200',
        'border rounded-3xl flex flex-col'
      )}
    >
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="min-h-40 h-full max-h-[500px] overflow-y-auto" />
    </div>
  );
}

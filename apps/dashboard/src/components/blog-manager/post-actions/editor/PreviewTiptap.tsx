import { generateHTML } from '@tiptap/html';
import '@/styles/tiptap.scss';
import 'highlight.js/styles/base16/dracula.css';
import type { PreviewTiptapProps } from './editor.types';
import { useEffect, useState } from 'react';
import { tiptapExtensionStandard } from '@/config';

export default function PreviewTiptap({ editor }: PreviewTiptapProps) {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    if (!editor) return;

    const updateHTML = () => {
      const html = generateHTML(
        editor.getJSON(),
        tiptapExtensionStandard,
      ).replace(/<p><br><\/p>/g, '<p data-empty></p>');
      setPreviewHTML(html);
    };

    editor.on('update', updateHTML);
    updateHTML();

    return () => {
      editor.off('update', updateHTML);
    };
  }, [editor]);

  return (
    <div
      id="preview"
      className="dark:bg-dark-charcoal-gray tiptap dark:text-neutral-200 text-dark-slate ProseMirror my-4 py-4 rounded-md"
      dangerouslySetInnerHTML={{ __html: previewHTML }}
    />
  );
}

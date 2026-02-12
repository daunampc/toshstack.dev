import { tiptapExtensionStandard } from '@/config';
import { generateHTML, type Editor } from '@tiptap/react';

export const generateHTMLTiptap = (editor: Editor): string => {
  const html = generateHTML(editor.getJSON(), tiptapExtensionStandard).replace(
    /<p><br><\/p>/g,
    '<p data-empty></p>',
  );
  return html;
};
export const generateHTMLTiptapStandard = (editor: Editor): string => {
  const html = generateHTML(editor.getJSON(), tiptapExtensionStandard).replace(
    /<p><br><\/p>/g,
    '<p data-empty></p>',
  );
  return html;
};

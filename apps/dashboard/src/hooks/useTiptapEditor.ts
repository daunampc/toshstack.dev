import { tiptapExtension, tiptapExtensionStandard } from '@/config';
import { Editor, useEditor, type EditorOptions } from '@tiptap/react';
import { v4 as uuidv4 } from 'uuid';
function ensureUniqueIds(editor: Editor) {
  const { state } = editor;
  let tr = state.tr;
  let changed = false;

  const seen = new Set<string>();

  state.doc.descendants((node, pos) => {
    if (['heading', 'paragraph'].includes(node.type.name)) {
      let id = node.attrs?.dataId;

      if (!id || seen.has(id)) {
        id = uuidv4();
        tr = tr.setNodeMarkup(
          pos,
          undefined,
          { ...node.attrs, dataId: id },
          node.marks,
        );
        changed = true;
      }

      seen.add(id);
    }
  });

  if (changed) editor.view.dispatch(tr);
}

export const useTiptapEditor = (options?: Partial<EditorOptions>) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off',
        'aria-label': 'Main content area, start typing to enter text.',
        class: 'focus:outline-none focus:border-none ',
      },
      ...options?.editorProps,
    },
    extensions: tiptapExtension,
    ...options,
    onCreate({ editor }) {
      ensureUniqueIds(editor);
    },
    onUpdate({ editor }) {
      ensureUniqueIds(editor);
    },
  });

  return editor;
};

export const useTiptapEditorChatAI = (options?: Partial<EditorOptions>) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off',
        'aria-label': 'Main content area, start typing to enter text.',
        class: 'focus:outline-none focus:border-none tiptapAiFormChat',
      },
      ...options?.editorProps,
    },
    extensions: tiptapExtensionStandard,
    ...options,
    onCreate({ editor }) {
      ensureUniqueIds(editor);
    },
    onUpdate({ editor }) {
      ensureUniqueIds(editor);
    },
  });

  return editor;
};

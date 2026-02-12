import { Extension } from '@tiptap/react';
const KeyboardHandler = Extension.create({
  name: 'KeyboardHandler',
  addKeyboardShortcuts() {
    return {
      'Shift-Enter': () =>
        this.editor.commands.first(({ commands }) => [
          () => commands.newlineInCode(),
          () => commands.createParagraphNear(),
          () => commands.liftEmptyBlock(),
          () => commands.splitBlock(),
        ]),
    };
  },
});
export default KeyboardHandler;

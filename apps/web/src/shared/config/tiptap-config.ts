import Link from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Bold from '@tiptap/extension-bold';
import { Placeholder, UndoRedo } from '@tiptap/extensions';
import Code from '@tiptap/extension-code';
import { Plugin } from '@tiptap/pm/state';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { v4 as uuidv4 } from 'uuid';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import type { Extensions } from '@tiptap/core';
import Highlight from '@tiptap/extension-highlight';
import Heading from '@tiptap/extension-heading';
import BlockQuote from '@tiptap/extension-blockquote';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';

import { common, createLowlight } from 'lowlight';
import { makeId } from '../lib/slugify';
const lowlight = createLowlight(common);

const CodeBlockHighlight = CodeBlockLowlight.configure({
  lowlight,
});
const CustomHeading = Heading.extend({
  renderHTML({ node, HTMLAttributes }) {
    const text = node.textContent || '';
    const id = makeId(text);

    return [`h${node.attrs.level}`, { ...HTMLAttributes, id }, 0];
  },
});

export const CustomParagraph = Paragraph.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      id: {
        default: null,
        renderHTML: (attrs) => {
          if (!attrs.id) return {};
          return { id: attrs.id };
        },
      },
    };
  },

  onCreate() {
    const { editor } = this;
    editor.commands.command(({ tr, state }) => {
      state.doc.descendants((node, pos) => {
        if (node.type.name === 'paragraph' && !node.attrs.id) {
          tr.setNodeMarkup(pos, undefined, {
            ...node.attrs,
            id: uuidv4(),
          });
        }
      });
      return true;
    });
  },
  addProseMirrorPlugins() {
    return [
      new Plugin({
        appendTransaction: (transactions, oldState, newState) => {
          if (!transactions.some((tr) => tr.docChanged)) return null;

          const tr = newState.tr;
          let modified = false;

          newState.doc.descendants((node, pos) => {
            if (node.type.name !== 'paragraph') return;

            if (!node.attrs.id) {
              tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                id: uuidv4(),
              });
              modified = true;
            }
          });

          return modified ? tr : null;
        },
      }),
    ];
  },
});

export const tiptapExtensions: Extensions = [
  Document,
  CustomParagraph,
  Text,

  CustomHeading,
  BlockQuote,
  Link,
  Bold,
  Code,
  Superscript,
  Subscript,
  Highlight,
  ListItem,
  BulletList,
  TextAlign.configure({ types: ['heading', 'paragraph'] }),
  Placeholder.configure({
    placeholder: 'Write your article content here.....',
  }),
  CodeBlockHighlight,
  UndoRedo,
];

import type { Extensions } from '@tiptap/react';
import Blockquote from '@tiptap/extension-blockquote';
import FloatingMenu from '@tiptap/extension-floating-menu';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';
import TextAlign from '@tiptap/extension-text-align';
import { UndoRedo } from '@tiptap/extensions';

import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { BulletList, OrderedList, ListItem } from '@tiptap/extension-list';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';

import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { Placeholder, Dropcursor } from '@tiptap/extensions';
import Heading from '@tiptap/extension-heading';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';

import { all, createLowlight } from 'lowlight';
import KeyboardHandler from './extensions/KeyboardHandler';

const WithDataId = (ext: any) =>
  ext.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        dataId: {
          default: null,
          parseHTML: (el: HTMLElement) => el.getAttribute('data-id'),
          renderHTML: (attrs: any) => ({
            'data-id': attrs.dataId || null,
          }),
        },
      };
    },
  });

const HeadingWithId = WithDataId(Heading);
const ParagraphWithId = WithDataId(Paragraph);

const lowlight = createLowlight(all);

const tiptapExtensionStandard: Extensions = [
  Document,
  ParagraphWithId,
  Text,
  Heading,
  Placeholder.configure({
    placeholder: `Ask anything`,
  }),
  KeyboardHandler,
];
const tiptapExtension: Extensions = [
  Document,
  ParagraphWithId,
  Text,
  Bold,
  Italic,
  Strike,
  HeadingWithId.configure({
    levels: [1, 2, 3, 4],
  }),
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Blockquote,
  FloatingMenu.configure({
    // cấu hình nếu cần
  }),
  BulletList,
  OrderedList.configure({
    HTMLAttributes: {
      class: 'list-decima ml-2',
    },
  }),
  ListItem,
  Underline,
  Code,
  Superscript,

  Subscript,

  Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: 'https',
    protocols: ['http', 'https'],
    isAllowedUri: (url, ctx) => {
      try {
        // construct URL
        const parsedUrl = url.includes(':')
          ? new URL(url)
          : new URL(`${ctx.defaultProtocol}://${url}`);

        // use default validation
        if (!ctx.defaultValidate(parsedUrl.href)) {
          return false;
        }

        // disallowed protocols
        const disallowedProtocols = ['ftp', 'file', 'mailto'];
        const protocol = parsedUrl.protocol.replace(':', '');

        if (disallowedProtocols.includes(protocol)) {
          return false;
        }

        // only allow protocols specified in ctx.protocols
        const allowedProtocols = ctx.protocols.map(p =>
          typeof p === 'string' ? p : p.scheme,
        );

        if (!allowedProtocols.includes(protocol)) {
          return false;
        }

        // disallowed domains
        const disallowedDomains = [
          'example-phishing.com',
          'malicious-site.net',
        ];
        const domain = parsedUrl.hostname;

        if (disallowedDomains.includes(domain)) {
          return false;
        }

        // all checks have passed
        return true;
      } catch {
        return false;
      }
    },
    shouldAutoLink: url => {
      try {
        // construct URL
        const parsedUrl = url.includes(':')
          ? new URL(url)
          : new URL(`https://${url}`);

        // only auto-link if the domain is not in the disallowed list
        const disallowedDomains = [
          'example-no-autolink.com',
          'another-no-autolink.com',
        ];
        const domain = parsedUrl.hostname;

        return !disallowedDomains.includes(domain);
      } catch {
        return false;
      }
    },
  }),
  Highlight.configure({ multicolor: true }),
  CodeBlockLowlight.configure({
    lowlight,
  }),
  Dropcursor.configure({
    color: '#3b82f6',
    width: 2,
  }),
  UndoRedo,
  Placeholder.configure({
    placeholder: `Write, type '/' for commands...`,
  }),
];
export { tiptapExtension, tiptapExtensionStandard };

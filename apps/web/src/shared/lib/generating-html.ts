import type { JSONContent } from '@tiptap/react';
import { generateHTML } from '@tiptap/html';
import DOMPurify from 'isomorphic-dompurify';
import { tiptapExtensions } from '../config/tiptap-config';
import Prism from 'prismjs';
import '@/shared/config/prismjs-config';
export function renderHTMLFromJSON(json: JSONContent | null) {
  if (!json) return '';

  // If it's a plain string (not JSONContent), just sanitize and return
  if (typeof json === 'string') {
    return sanitizeHtml(json);
  }

  // Validate that it's proper JSONContent with a type property
  if (!json.type) {
    return '';
  }

  let html = generateHTML(json, tiptapExtensions);
  html = highlightCodeBlocks(html);
  return sanitizeHtml(html);
}

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p',
      'br',
      'strong',
      'b',
      'em',
      'i',
      'u',
      's',
      'blockquote',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'ul',
      'ol',
      'li',
      'pre',
      'code',
      'a',
      'img',
      'hr',
      'span',
      'div',
      'button',
      'pre',
      'code',
      'span',
      'svg',
      'path',
    ],
    ALLOWED_ATTR: [
      'href',
      'target',
      'rel',
      'src',
      'alt',
      'title',
      'class',
      'id',
      'data-code',
      'aria-label',
      'viewBox',
      'd',
    ],
    FORBID_TAGS: ['style', 'script', 'iframe', 'object', 'embed'],
    FORBID_ATTR: ['style', 'onerror', 'onclick', 'onload'],
  });
}
function decodeHTMLEntities(text: string) {
  return text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}
function highlightCodeBlocks(html: string) {
  return html.replace(/<pre[^>]*>\s*<code[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/g, (_, code) => {
    const raw = decodeHTMLEntities(code).trimEnd();

    const lang = 'javascript';
    const grammar = Prism.languages[lang] || Prism.languages.javascript;

    const highlighted = Prism.highlight(raw, grammar, lang);

    return `
<div class="code-wrapper" data-code="${encodeURIComponent(raw)}">
  <button class="code-copy" aria-label="Copy code">...</button>
  <pre class="language-${lang}">
    <code class="language-${lang}">${highlighted}</code>
  </pre>
</div>`;
  });
}

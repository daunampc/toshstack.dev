import { renderHTMLFromJSON, sanitizeHtml } from '@/shared/lib/generating-html';
import '@/shared/styles/tiptap.scss';
import { PostDetailContentProps } from '../model';
import 'prism-themes/themes/prism-one-light.css';

export function PostDetailContent({ post }: PostDetailContentProps) {
  const html = sanitizeHtml(renderHTMLFromJSON(JSON.parse(post.content)));
  return <div className="tiptap-content py-4" dangerouslySetInnerHTML={{ __html: html }} />;
}

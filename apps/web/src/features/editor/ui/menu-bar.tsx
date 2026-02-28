'use client';
import { MenubarProps } from '../model';
import { ActionIcon, Button, FileButton, Modal, TextInput, Tooltip } from '@mantine/core';
import '@/shared/styles/tiptap.scss';
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaLink,
  FaImage,
  FaStrikethrough,
  FaSuperscript,
  FaCode,
  FaTable,
  FaHighlighter,
  FaMarkdown,
} from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa6';
import { PiCodeBlockBold, PiListBulletsBold } from 'react-icons/pi';
import { TbListNumbers } from 'react-icons/tb';
import { useDisclosure } from '@mantine/hooks';
import { Editor } from '@tiptap/core';
import { useState, useCallback, useMemo } from 'react';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { isValidUrl, validateImageFile } from '@/shared/lib/validate';
import Image from 'next/image';
import { ALLOWED_IMAGE_TYPES } from '@toshstack/domain';
import { uploadImage } from '../api';

const ImageModal: React.FC<{ editor: Editor }> = ({ editor }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = useCallback(() => {
    setFileImage(null);
    setPreview(null);
    setError(null);
    setIsDragging(false);
    setIsLoading(false);
    close();
  }, [close]);

  const processFile = useCallback((file: File) => {
    setError(null);
    const validation = validateImageFile(file);

    if (!validation.valid) {
      setError(validation.error || 'Invalid file');
      setFileImage(null);
      setPreview(null);
      return;
    }

    setFileImage(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.onerror = () => {
      setError('Failed to read file');
      setFileImage(null);
      setPreview(null);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFileChange = useCallback(
    (file: File | null) => {
      if (file) {
        processFile(file);
      }
    },
    [processFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        processFile(files[0]);
      }
    },
    [processFile]
  );

  const handleInsertImage = useCallback(async () => {
    if (!fileImage) return;

    setIsLoading(true);
    setError(null);

    try {
      // Upload image to server and get URL
      const response = await uploadImage(fileImage);

      // Insert image with URL from server
      editor.chain().focus().setImage({ src: response.url, alt: fileImage.name }).run();
      handleClose();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to upload image. Please try again.';
      setError(errorMessage);
      setIsLoading(false);
    }
  }, [editor, fileImage, handleClose]);

  return (
    <>
      <Tooltip
        withArrow
        color="#FFFFFF"
        classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
        label="Image"
      >
        <ActionIcon
          onClick={open}
          className="disabled:bg-transparent"
          radius={'xl'}
          variant="subtle"
          color="dark"
          size={'lg'}
        >
          <FaImage className="text-black-primary" size={14} />
        </ActionIcon>
      </Tooltip>
      <Modal
        title="Add image"
        classNames={{ title: 'font-medium' }}
        centered
        opened={opened}
        radius={'md'}
        onClose={handleClose}
      >
        <div className="flex flex-col gap-3">
          {!preview ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`w-full h-40 rounded-md border-dashed border-2 flex flex-col items-center justify-center gap-2 transition-colors ${
                isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-neutral-300 hover:border-neutral-400'
              }`}
            >
              <MdOutlineCloudUpload className="text-neutral-400" size={32} />
              <div className="text-sm font-medium text-black-primary">
                Drag and Drop or upload media
              </div>
              <div className="text-xs text-neutral-500">PNG, JPG, GIF, WEBP (max 5MB)</div>
              <FileButton onChange={handleFileChange} accept={ALLOWED_IMAGE_TYPES.join(',')}>
                {(props) => (
                  <Button size="xs" variant="light" radius={'xl'} {...props}>
                    Choose file
                  </Button>
                )}
              </FileButton>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="relative w-full h-48 rounded-md overflow-hidden bg-neutral-100">
                <Image
                  width={800}
                  height={800}
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 truncate max-w-[200px]">
                  {fileImage?.name}
                </span>
                <Button
                  size="xs"
                  variant="subtle"
                  color="red"
                  onClick={() => {
                    setFileImage(null);
                    setPreview(null);
                    setError(null);
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}

          {error && <div className="text-sm text-red-500 bg-red-50 p-2 rounded-md">{error}</div>}

          <div className="flex items-center gap-2">
            <Button
              variant="light"
              color="dark"
              className="flex-1"
              radius={'xl'}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="light"
              className="flex-1"
              radius={'xl'}
              onClick={handleInsertImage}
              disabled={!fileImage || isLoading}
              loading={isLoading}
            >
              Insert
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
const LinkModal: React.FC<{ editor: Editor }> = ({ editor }) => {
  const [opened, { open, close }] = useDisclosure();
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [linkRange, setLinkRange] = useState<{ from: number; to: number } | null>(null);
  const [touched, setTouched] = useState(false);

  const urlError = useMemo(() => {
    if (!touched || !url) return null;
    if (!isValidUrl(url)) return 'Please enter a valid URL (e.g., https://example.com)';
    return null;
  }, [url, touched]);

  const isValidForm = useMemo(() => {
    return url && isValidUrl(url);
  }, [url]);

  const handleOpen = useCallback(() => {
    const { from, to } = editor.state.selection;
    let selectedText = editor.state.doc.textBetween(from, to, '');
    const existingLink = editor.getAttributes('link').href || '';
    let range: { from: number; to: number } | null = null;

    // If there's a selection, use that range
    if (from !== to) {
      range = { from, to };
      selectedText = editor.state.doc.textBetween(from, to, '');
    }
    // If cursor is inside a link but no selection, get the link text and range
    else if (editor.isActive('link')) {
      const $pos = editor.state.selection.$from;
      const linkMark = $pos.marks().find((mark) => mark.type.name === 'link');
      if (linkMark) {
        let start = $pos.pos;
        let end = $pos.pos;

        // Search backwards for link start
        editor.state.doc.nodesBetween($pos.start(), $pos.pos, (node, pos) => {
          if (node.isText && node.marks.some((m) => m.type.name === 'link')) {
            start = pos;
          }
        });

        // Search forwards for link end
        editor.state.doc.nodesBetween($pos.pos, $pos.end(), (node, pos) => {
          if (node.isText && node.marks.some((m) => m.type.name === 'link')) {
            end = pos + node.nodeSize;
          }
        });

        range = { from: start, to: end };
        selectedText = editor.state.doc.textBetween(start, end, '');
      }
    }

    setLinkRange(range);
    setText(selectedText);
    setUrl(existingLink);
    open();
  }, [editor, open]);

  const handleClose = useCallback(() => {
    setText('');
    setUrl('');
    setLinkRange(null);
    setTouched(false);
    close();
  }, [close]);

  const handleSave = useCallback(() => {
    if (!url || !isValidUrl(url)) return;

    const displayText = text || url;

    // If editing existing link or selection, replace the range
    if (linkRange) {
      editor
        .chain()
        .focus()
        .setTextSelection(linkRange)
        .deleteSelection()
        .insertContent({
          type: 'text',
          text: displayText,
          marks: [{ type: 'link', attrs: { href: url } }],
        })
        .run();
    } else {
      // Insert new link at cursor position
      editor
        .chain()
        .focus()
        .insertContent({
          type: 'text',
          text: displayText,
          marks: [{ type: 'link', attrs: { href: url } }],
        })
        .run();
    }

    handleClose();
  }, [editor, text, url, handleClose]);

  return (
    <>
      <Tooltip
        withArrow
        color="#FFFFFF"
        classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
        label="Link"
      >
        <ActionIcon
          onClick={handleOpen}
          className="disabled:bg-transparent"
          radius={'xl'}
          variant={editor.isActive('link') ? 'light' : 'subtle'}
          color="dark"
          size={'lg'}
        >
          <FaLink className="text-black-primary" size={14} />
        </ActionIcon>
      </Tooltip>
      <Modal
        title="Add Link"
        classNames={{ title: 'font-medium' }}
        radius={'md'}
        size={'sm'}
        centered
        opened={opened}
        onClose={handleClose}
      >
        <div className="flex flex-col gap-3">
          <TextInput
            label="Text"
            size="md"
            radius={'xl'}
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            placeholder="Display text (optional)"
          />
          <TextInput
            required
            label="Link"
            size="md"
            radius={'xl'}
            value={url}
            onChange={(e) => setUrl(e.currentTarget.value)}
            onBlur={() => setTouched(true)}
            placeholder="https://example.com"
            error={urlError}
          />
          <div className="flex items-center gap-1">
            <Button
              variant="light"
              color="dark"
              className="flex-1"
              radius={'xl'}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="light"
              className="flex-1"
              radius={'xl'}
              onClick={handleSave}
              disabled={!isValidForm}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export function MenuBar({ editor }: MenubarProps) {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center flex-row flex-nowrap grow gap-1 w-full ">
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Bold"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleBold().run()}
            className="disabled:bg-transparent"
            radius={'xl'}
            variant={editor.isActive('bold') ? 'light' : 'subtle'}
            color="dark"
            size={'lg'}
          >
            <FaBold size={14} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Italic"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleItalic().run()}
            variant={editor.isActive('italic') ? 'light' : 'subtle'}
            radius={'xl'}
            color="dark"
            size={'lg'}
          >
            <FaItalic className="text-black-primary" size={14} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Strike"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleStrike().run()}
            variant={editor.isActive('strike') ? 'light' : 'subtle'}
            className="disabled:bg-transparent"
            radius={'xl'}
            color="dark"
            size={'lg'}
          >
            <FaStrikethrough className="text-black-primary" size={14} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Superscript"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            variant={editor.isActive('subscript') ? 'light' : 'subtle'}
            className="disabled:bg-transparent"
            radius={'xl'}
            color="dark"
            size={'lg'}
          >
            <FaSuperscript className="text-black-primary" size={14} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Heading"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            variant={editor.isActive('heading') ? 'light' : 'subtle'}
            className="disabled:bg-transparent"
            radius={'xl'}
            color="dark"
            size={'lg'}
          >
            <FaHeading className="text-black-primary" size={14} />
          </ActionIcon>
        </Tooltip>
        <hr className="mx-0 h-4 border-solid border border-neutral-300" />
        <LinkModal editor={editor} />
        <ImageModal editor={editor} />
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Bullet List"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            variant={editor.isActive('bulletlist') ? 'light' : 'subtle'}
            className="disabled:bg-transparent"
            radius={'xl'}
            color="dark"
            size={'lg'}
          >
            <PiListBulletsBold className="text-black-primary" size={16} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Number List"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            variant={editor.isActive('orderedlist') ? 'light' : 'subtle'}
            className="disabled:bg-transparent"
            radius={'xl'}
            color="dark"
            size={'lg'}
          >
            <TbListNumbers className="text-black-primary" size={16} />
          </ActionIcon>
        </Tooltip>
        <hr className="mx-0 h-4 border-solid border border-neutral-300" />
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Highlight"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            variant={editor.isActive('highlight') ? 'light' : 'subtle'}
            className="disabled:bg-transparent"
            radius={'xl'}
            color="dark"
            size={'lg'}
          >
            <FaHighlighter className="text-black-primary" size={14} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Quote Block"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            variant={editor.isActive('blockquote') ? 'light' : 'subtle'}
            className="disabled:bg-transparent"
            radius={'xl'}
            color="dark"
            size={'lg'}
          >
            <FaQuoteLeft className="text-black-primary" size={16} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Code"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleCode().run()}
            variant={editor.isActive('code') ? 'light' : 'subtle'}
            className="disabled:bg-transparent"
            radius={'xl'}
            color="dark"
            size={'lg'}
          >
            <FaCode className="text-black-primary" size={16} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Code Block"
        >
          <ActionIcon
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            variant={editor.isActive('codeblock') ? 'light' : 'subtle'}
            className="disabled:bg-transparent"
            radius={'xl'}
            color="dark"
            size={'lg'}
          >
            <PiCodeBlockBold className="text-black-primary" size={16} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          withArrow
          color="#FFFFFF"
          classNames={{ tooltip: 'text-black-primary font-medium shadow-input' }}
          label="Table"
        >
          <ActionIcon
            className="disabled:bg-transparent"
            radius={'xl'}
            variant="subtle"
            color="dark"
            size={'lg'}
          >
            <FaTable className="text-black-primary" size={16} />
          </ActionIcon>
        </Tooltip>
      </div>
      <ActionIcon radius={'xl'} variant="subtle" color="dark" size={'lg'}>
        <FaMarkdown size={16} />
      </ActionIcon>
    </div>
  );
}

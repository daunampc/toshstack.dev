import { Button, ColorPicker, Input, Popover, Tooltip } from '@mantine/core';
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaCode,
  FaHeading,
  FaHighlighter,
  FaItalic,
  FaLink,
  FaList,
  FaQuoteLeft,
  FaStrikethrough,
  FaUnderline,
} from 'react-icons/fa6';
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuSuperscript,
  LuTrash,
} from 'react-icons/lu';
import type { Editor } from '@tiptap/react';
import type { Level } from '@tiptap/extension-heading';
import { GoListOrdered, GoListUnordered } from 'react-icons/go';
import type { ToolbarPopoverProps } from './editor.types';
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { CgCornerDownLeft } from 'react-icons/cg';
import { TbSubscript } from 'react-icons/tb';
import { RiArrowGoBackFill, RiArrowGoForwardFill } from 'react-icons/ri';
const HeadingPopover = ({ editor }: { editor: Editor }) => {
  const menus = [
    { label: 'Heading 1', icon: <LuHeading1 />, level: 1 },
    { label: 'Heading 2', icon: <LuHeading2 />, level: 2 },
    { label: 'Heading 3', icon: <LuHeading3 />, level: 3 },
    { label: 'Heading 4', icon: <LuHeading4 />, level: 4 },
    { label: 'Heading 5', icon: <LuHeading5 />, level: 5 },
  ];

  const handleSetHeading = (level: Level) => {
    editor?.chain().focus().toggleHeading({ level }).run();
  };

  return (
    <Popover radius="lg" position="bottom-start" withinPortal>
      <Popover.Target>
        <Tooltip label="Heading">
          <Button
            size="compact-sm"
            radius="md"
            variant="transparent"
            className="hover:bg-dark-charcoal-gray text-sm dark:text-neutral-300 font-semibold "
          >
            <FaHeading size={16} />
          </Button>
        </Tooltip>
      </Popover.Target>

      <Popover.Dropdown className="p-1.5 dark:bg-dark-charcoal dark:border-neutral-700 flex flex-col">
        {menus.map(({ label, icon, level }) => (
          <Button
            key={level}
            size="xs"
            radius="lg"
            variant="transparent"
            leftSection={icon}
            onClick={() => handleSetHeading(level as Level)}
            className={`hover:bg-dark-charcoal-gray text-sm dark:text-neutral-300 font-semibold ${
              editor?.isActive('heading', { level })
                ? 'bg-dark-charcoal-gray'
                : ''
            }`}
          >
            {label}
          </Button>
        ))}
      </Popover.Dropdown>
    </Popover>
  );
};
const ListPopover: React.FC<ToolbarPopoverProps> = ({ editor }) => {
  const menus = [
    {
      label: 'Bullet List',
      icon: <GoListUnordered />,
      action: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      label: 'Ordered List',
      icon: <GoListOrdered />,
      action: () => editor.chain().focus().toggleOrderedList().run(),
    },
  ];
  return (
    <Popover radius="lg" position="bottom-start">
      <Popover.Target>
        <Tooltip label="List">
          <Button
            size="compact-md"
            radius={'md'}
            variant="transparent"
            className="hover:bg-dark-charcoal-gray text-sm dark:text-neutral-300 font-semibold"
          >
            <FaList size={16} />
          </Button>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown className="p-1.5 dark:bg-dark-charcoal dark:border-neutral-700 flex flex-col">
        {menus.map(({ label, icon, action }, idx) => (
          <Button
            key={idx}
            size="xs"
            radius="lg"
            justify="start"
            variant="transparent"
            leftSection={icon}
            className={`hover:bg-dark-charcoal-gray text-sm dark:text-neutral-300 font-semibold `}
            onClick={action}
          >
            {label}
          </Button>
        ))}
      </Popover.Dropdown>
    </Popover>
  );
};
const HighlightPopover: React.FC<ToolbarPopoverProps> = ({ editor }) => {
  const [openColor, setOpenColor] = useState<boolean>(false);
  const [color, setColor] = useState<string>(
    editor.getAttributes('highlight').color,
  );
  useEffect(() => {
    const color = editor.getAttributes('highlight').color || '';
    if (color !== '') setColor(color);
  }, [editor, openColor]);
  const handleColor = (color_ip: string) => {
    if (color_ip.length > 0) {
      editor.chain().focus().setHighlight({ color: color_ip }).run();
    } else if (color_ip === 'transparent') {
      editor.chain().focus().unsetHighlight().run();
    }
  };
  return (
    <Popover radius={'lg'} opened={openColor}>
      <Popover.Target>
        <Tooltip label="Hight Light">
          <Button
            onClick={() => setOpenColor(!openColor)}
            size="compact-md"
            disabled
            radius="md"
            variant="transparent"
            className={clsx(
              editor.isActive('highlight') ? 'dark:bg-dark-charcoal-gray' : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold disabled:dark:bg-neutral-800 disabled:dark:text-neutral-500',
            )}
          >
            <FaHighlighter size={16} />
          </Button>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown className="p-1.5 dark:bg-dark-charcoal dark:border-neutral-700 ">
        <ColorPicker
          format="hex"
          value={color}
          onChange={value => {
            setColor(value);
            handleColor(value);
          }}
          swatches={[
            '#2E8B57',
            '#3B82F6',
            '#8B5CF6',
            '#F59E0B',
            '#DC2626',
            '#0EA5E9',
            '#D97706',
            '#4B5563',
            'transparent',
          ]}
        />
      </Popover.Dropdown>
    </Popover>
  );
};
const LinkPopover: React.FC<ToolbarPopoverProps> = ({ editor }) => {
  const [link, setLink] = useState<string | null>(
    editor.getAttributes('link').href,
  );
  const handleSetLink = useCallback(() => {
    if (link === null) return;
    if (link === '')
      return editor.chain().focus().extendMarkRange('link').unsetLink().run();
    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: link })
      .run();
  }, [editor, link]);
  return (
    <Popover radius={'lg'}>
      <Popover.Target>
        <Tooltip label="Link">
          <Button
            disabled
            size="compact-md"
            radius="md"
            variant="transparent"
            className={clsx(
              editor.isActive('link') ? 'dark:bg-dark-charcoal-gray' : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold disabled:bg-neutral-800 disabled:text-neutral-500',
            )}
          >
            <FaLink size={16} />
          </Button>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown
        w={350}
        className="p-1.5 dark:bg-dark-charcoal dark:border-neutral-700 "
      >
        <div className="flex items-center">
          <Input
            className="flex-1"
            size="sm"
            value={link || ''}
            onChange={e => setLink(e.target.value)}
            variant="unstyled"
            classNames={{ input: 'dark:text-neutral-200 font-medium' }}
            placeholder="Paste a link..."
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleSetLink();
              }
            }}
            rightSection={<CgCornerDownLeft />}
          />
          <div className="w-px h-6 dark:bg-neutral-700  kj" />
          <Button variant="transparent" size="compact-xs">
            <FaLink size={16} className="dark:text-neutral-400" />
          </Button>
          <Button variant="transparent" size="compact-xs">
            <LuTrash size={16} className="dark:text-neutral-400" />
          </Button>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
export default function ToolbarTiptap({ editor }: { editor: Editor }) {
  return (
    <div className="w-full dark:bg-dark-charcoal bg-white rounded-lg sticky top-0 z-10 p-1.5 border-b dark:border-neutral-700 border-neutral-300 shadow">
      <div className="flex items-center gap-0.5 justify-center">
        <Tooltip label="Undo">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().undo().run()}
            variant="transparent"
            className="hover:bg-dark-charcoal-gray text-sm dark:text-neutral-300 font-semibold"
          >
            <RiArrowGoBackFill size={16} />
          </Button>
        </Tooltip>
        <Tooltip label="Redo">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().redo().run()}
            variant="transparent"
            className="hover:bg-dark-charcoal-gray text-sm dark:text-neutral-300 font-semibold"
          >
            <RiArrowGoForwardFill size={16} />
          </Button>
        </Tooltip>
        <div className="w-px dark:bg-neutral-600 h-4 mx-1"></div>
        <HeadingPopover editor={editor} />
        <ListPopover editor={editor} />
        <Tooltip label="Quote">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            variant="transparent"
            className="dark:hover:bg-dark-charcoal-gray hover:bg-neutral-100 dark:text-neutral-300 text-dark-slate font-semibold"
          >
            <FaQuoteLeft size={16} />
          </Button>
        </Tooltip>
        <Tooltip label="Code">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            variant="transparent"
            className="dark:hover:bg-dark-charcoal-gray hover:bg-neutral-100 dark:text-neutral-300 text-dark-slate font-semibold"
          >
            <FaCode size={16} />
          </Button>
        </Tooltip>
        <div className="w-px dark:bg-neutral-600 h-4 mx-1"></div>
        <Tooltip label="Bold">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().toggleBold().run()}
            variant="transparent"
            className={clsx(
              editor.isActive('bold')
                ? 'dark:bg-dark-charcoal-gray bg-neutral-100'
                : '',
              'dark:hover:bg-dark-charcoal-gray hover:bg-neutral-100 dark:text-neutral-300 text-dark-slate font-semibold',
            )}
          >
            <FaBold size={16} />
          </Button>
        </Tooltip>
        <Tooltip label="Italic">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            variant="transparent"
            className={clsx(
              editor.isActive('italic')
                ? 'dark:bg-dark-charcoal-gray bg-neutral-100'
                : '',
              'dark:hover:bg-dark-charcoal-gray hover:bg-neutral-100 dark:text-neutral-300 text-dark-slate font-semibold',
            )}
          >
            <FaItalic size={16} />
          </Button>
        </Tooltip>

        <Tooltip label="Strike">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            variant="transparent"
            className={clsx(
              editor.isActive('strike') ? 'dark:bg-dark-charcoal-gray' : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold',
            )}
          >
            <FaStrikethrough size={16} />
          </Button>
        </Tooltip>
        <Tooltip label="Code Block">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().toggleCode().run()}
            variant="transparent"
            className={clsx(
              editor.isActive('code') ? 'dark:bg-dark-charcoal-gray' : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold',
            )}
          >
            <FaCode size={16} />
          </Button>
        </Tooltip>
        <Tooltip label="Underline">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            variant="transparent"
            className={clsx(
              editor.isActive('underline') ? 'dark:bg-dark-charcoal-gray' : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold',
            )}
          >
            <FaUnderline size={16} />
          </Button>
        </Tooltip>
        <HighlightPopover editor={editor} />
        <LinkPopover editor={editor} />
        <div className="w-px dark:bg-neutral-600 h-4 mx-1"></div>
        <Tooltip label="Superscript">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            variant="transparent"
            className={clsx(
              editor.isActive('superscript')
                ? 'dark:bg-dark-charcoal-gray'
                : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold',
            )}
          >
            <LuSuperscript size={16} />
          </Button>
        </Tooltip>
        <Tooltip label="Subscript">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            variant="transparent"
            className={clsx(
              editor.isActive('subscript') ? 'dark:bg-dark-charcoal-gray' : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold',
            )}
          >
            <TbSubscript size={16} />
          </Button>
        </Tooltip>

        <div className="w-px dark:bg-neutral-600 h-4 mx-1"></div>
        <Tooltip label="Align Left">
          <Button
            size="compact-md"
            radius="md"
            onClick={() => editor.chain().focus().toggleTextAlign('left').run()}
            variant="transparent"
            className={clsx(
              editor.isActive({ textAlign: 'left' })
                ? 'dark:bg-dark-charcoal-gray'
                : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold',
            )}
          >
            <FaAlignLeft size={16} />
          </Button>
        </Tooltip>

        <Tooltip label="Align Center">
          <Button
            size="compact-md"
            radius="md"
            onClick={() =>
              editor.chain().focus().toggleTextAlign('center').run()
            }
            variant="transparent"
            className={clsx(
              editor.isActive({ textAlign: 'center' })
                ? 'dark:bg-dark-charcoal-gray'
                : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold',
            )}
          >
            <FaAlignCenter size={16} />
          </Button>
        </Tooltip>
        <Tooltip label="Align Right">
          <Button
            size="compact-md"
            radius="md"
            onClick={() =>
              editor.chain().focus().toggleTextAlign('right').run()
            }
            variant="transparent"
            className={clsx(
              editor.isActive({ textAlign: 'right' })
                ? 'dark:bg-dark-charcoal-gray'
                : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold',
            )}
          >
            <FaAlignRight size={16} />
          </Button>
        </Tooltip>

        <Tooltip label="Align Justify">
          <Button
            size="compact-md"
            radius="md"
            onClick={() =>
              editor.chain().focus().toggleTextAlign('justify').run()
            }
            variant="transparent"
            className={clsx(
              editor.isActive({ textAlign: 'justify' })
                ? 'dark:bg-dark-charcoal-gray'
                : '',
              'hover:bg-dark-charcoal-gray dark:text-neutral-300 font-semibold',
            )}
          >
            <FaAlignJustify size={16} />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

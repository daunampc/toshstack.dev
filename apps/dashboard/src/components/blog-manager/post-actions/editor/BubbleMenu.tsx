import { Button, Popover, Tooltip } from '@mantine/core';
import { BubbleMenu } from '@tiptap/react/menus';
import { CgBandAid } from 'react-icons/cg';
import {
  FaBold,
  FaCode,
  FaEllipsis,
  FaItalic,
  FaLink,
  FaStrikethrough,
} from 'react-icons/fa6';
import {
  FiType,
  FiCheckSquare,
  FiHash,
  FiCode,
  FiCircle,
  FiEdit3,
  FiCheckCircle,
  FiPlusCircle,
  FiMinusCircle,
  FiZap,
  FiSmile,
  FiCpu,
  FiCornerDownRight,
  FiList,
  FiGlobe,
} from 'react-icons/fi';
import { HiOutlineLanguage } from 'react-icons/hi2';
import { IoColorFilterOutline } from 'react-icons/io5';
import type {
  BubbleMenuButtonProps,
  BubbleMenuTiptapProps,
} from './editor.types';
import clsx from 'clsx';

const ImprovePopover = () => {
  const languages = [
    { key: 'en', name: 'English' },
    { key: 'ko', name: 'Korean' },
    { key: 'zh', name: 'Chinese' },
    { key: 'ja', name: 'Japanese' },
    { key: 'es', name: 'Spanish' },
    { key: 'ru', name: 'Russian' },
    { key: 'fr', name: 'French' },
    { key: 'pt', name: 'Portuguese' },
    { key: 'de', name: 'German' },
    { key: 'it', name: 'Italian' },
    { key: 'nl', name: 'Dutch' },
    { key: 'id', name: 'Indonesian' },
    { key: 'vi', name: 'Vietnamese' },
    { key: 'tr', name: 'Turkish' },
    { key: 'ar', name: 'Arabic' },
  ];
  const items = [
    { icon: <FiEdit3 />, label: 'Adjust tone' },
    { icon: <FiCheckCircle />, label: 'Fix spelling & grammar' },
    { icon: <FiPlusCircle />, label: 'Extend text' },
    { icon: <FiMinusCircle />, label: 'Reduce text' },
    { icon: <FiZap />, label: 'Simplify text' },
    { icon: <FiSmile />, label: 'Emojify' },
    { divider: true },
    { icon: <FiCpu />, label: 'Ask AI' },
    { icon: <FiCornerDownRight />, label: 'Complete sentence' },
    { icon: <FiList />, label: 'Summarize' },
    // { icon: <FiGlobe />, label: 'Translate' },
  ];
  return (
    <>
      <Popover
        withinPortal
        middlewares={{ flip: false, shift: false }}
        position="bottom-start"
        radius={'md'}
      >
        <Popover.Target>
          <Tooltip label="Improve">
            <Button
              size="xs"
              color=""
              leftSection={<CgBandAid />}
              variant="transparent"
              className="hover:bg-dark-charcoal text-sm dark:text-neutral-300 font-semibold"
              radius="sm"
            >
              Improve
            </Button>
          </Tooltip>
        </Popover.Target>
        <Popover.Dropdown
          className="dark:bg-dark-charcoal-gray shadow dark:border-neutral-600 p-2"
          w={200}
        >
          {items.map((item, i) =>
            item.divider ? (
              <div key={i} className="my-1 border-t border-zinc-700" />
            ) : (
              <Button
                key={i}
                justify="start"
                size="xs"
                variant="transparent"
                className="w-full text-sm font-medium dark:text-neutral-400 hover:text-neutral-300 hover:bg-dark-charcoal transition-all duration-200 rounded-md px-2 py-1"
                classNames={{ label: 'gap-1.5' }}
              >
                {item.icon}
                {item.label}
              </Button>
            ),
          )}
          <Popover position="right-start" radius={'lg'}>
            <Popover.Target>
              <Button
                justify="start"
                size="xs"
                variant="transparent"
                className="w-full text-sm font-medium dark:text-neutral-400 hover:text-neutral-300 hover:bg-dark-charcoal transition-all duration-200 rounded-md px-2 py-1"
                classNames={{ label: 'gap-1.5' }}
              >
                <FiGlobe /> Translate
              </Button>
            </Popover.Target>
            <Popover.Dropdown
              w={150}
              className="dark:bg-dark-charcoal-gray shadow dark:border-neutral-600 p-2"
            >
              {languages.map(it => {
                return (
                  <Button
                    key={it.key}
                    justify="start"
                    size="xs"
                    variant="transparent"
                    className="w-full text-sm font-medium dark:text-neutral-400 hover:text-neutral-300 hover:bg-dark-charcoal transition-all duration-200 rounded-md px-2 py-1"
                    classNames={{ label: 'gap-1.5' }}
                  >
                    <HiOutlineLanguage />
                    {it.name}
                  </Button>
                );
              })}
            </Popover.Dropdown>
          </Popover>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};
const TextPopover = () => {
  const items = [
    { icon: <FiType />, label: 'Text', action: 'paragraph' },
    { icon: <FiHash />, label: 'Heading 1', action: 'h1' },
    { icon: <FiHash />, label: 'Heading 2', action: 'h2' },
    { icon: <FiHash />, label: 'Heading 3', action: 'h3' },
    { icon: <FiCircle />, label: 'Bulleted list', action: 'bulletList' },
    { icon: <FiList />, label: 'Numbered list', action: 'orderedList' },
    { icon: <FiCheckSquare />, label: 'To-do list', action: 'taskList' },
    { icon: <FiList />, label: 'Blockquote', action: 'blockquote' },
    { icon: <FiCode />, label: 'Code block', action: 'codeBlock' },
  ];
  return (
    <div>
      <Button
        justify="start"
        size="xs"
        variant="transparent"
        className="w-full text-sm font-medium dark:text-neutral-300 hover:text-neutral-200 hover:bg-dark-charcoal transition-all duration-200 rounded-md px-2 py-1"
        classNames={{ label: 'gap-1.5' }}
      >
        Text
      </Button>
    </div>
  );
};
const FormatButton: React.FC<BubbleMenuButtonProps> = ({
  editor,
  mark,
  icon,
  toggle,
}) => {
  const isActive = editor.isActive(mark);

  return (
    <Button
      size="compact-md"
      radius="md"
      variant="transparent"
      onClick={() => toggle(editor)}
      className={clsx(
        'hover:bg-dark-charcoal text-sm dark:text-neutral-300 font-semibold',
        isActive && 'bg-dark-charcoal',
      )}
    >
      {icon}
    </Button>
  );
};

const LinkPopover = () => {
  return (
    <Popover>
      <Popover.Target>
        <Button
          size="compact-md"
          radius={'md'}
          variant="transparent"
          className="hover:bg-dark-charcoal text-sm dark:text-neutral-300 font-semibold"
        >
          <FaLink />
        </Button>
      </Popover.Target>
    </Popover>
  );
};
const ColorPopover = () => {
  return (
    <Popover>
      <Popover.Target>
        <Button
          size="compact-md"
          radius={'md'}
          variant="transparent"
          className="hover:bg-dark-charcoal text-sm dark:text-neutral-300 font-semibold"
        >
          <IoColorFilterOutline />
        </Button>
      </Popover.Target>
      <Popover.Dropdown></Popover.Dropdown>
    </Popover>
  );
};
const MenuMore = () => {
  return (
    <Button
      size="compact-sm"
      radius={'md'}
      variant="transparent"
      className="hover:bg-dark-charcoal text-sm dark:text-neutral-300 font-semibold"
    >
      <FaEllipsis />
    </Button>
  );
};

export default function BubbleMenuTiptap({ editor }: BubbleMenuTiptapProps) {
  return (
    <BubbleMenu
      editor={editor}
      className="dark:bg-dark-charcoal-gray  p-0.5 rounded-xl border dark:border-neutral-700 bubbleMenu"
      options={{ placement: 'top', offset: 8, flip: true }}
    >
      <div className="flex items-center gap-1 bubble-menu">
        <ImprovePopover />
        <div className="w-px h-6 dark:bg-neutral-600" />
        <TextPopover />
        <FormatButton
          mark="bold"
          icon={<FaBold />}
          editor={editor}
          toggle={editor => editor.chain().focus().toggleBold().run()}
        />

        <FormatButton
          editor={editor}
          mark="italic"
          icon={<FaItalic />}
          toggle={editor => editor.chain().focus().toggleItalic().run()}
        />
        <FormatButton
          editor={editor}
          mark="strike"
          icon={<FaStrikethrough />}
          toggle={editor => editor.chain().focus().toggleStrike().run()}
        />
        <FormatButton
          editor={editor}
          mark="code"
          icon={<FaCode />}
          toggle={editor => editor.chain().focus().toggleCode().run()}
        />
        <div className="w-px h-6 dark:bg-neutral-600" />
        <LinkPopover />
        <ColorPopover />
        <div className="w-px h-6 dark:bg-neutral-600" />
        <MenuMore />
      </div>
    </BubbleMenu>
  );
}

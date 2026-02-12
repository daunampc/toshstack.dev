// SlashCommandMantine.tsx
import { useEffect, useState } from 'react';
import { Button, Popover } from '@mantine/core';
import { Editor, Extension } from '@tiptap/core';
import Suggestion from '@tiptap/suggestion';
import { FaTextWidth } from 'react-icons/fa6';
import { BiSolidBot } from 'react-icons/bi';
import { LuHeading1, LuHeading2, LuHeading3 } from 'react-icons/lu';
import { MdFormatListBulleted, MdFormatListNumbered } from 'react-icons/md';
import { GrBlockQuote } from 'react-icons/gr';

// --------- tiny event-bus to bridge Suggestion ↔ React ----------
type SlashPayload = {
  open: boolean;
  editor?: any;
  range?: any;
  items?: any[];
  clientRect?: (() => DOMRect) | null;
};

type Listener = (s: SlashPayload) => void;

const slashStore = (() => {
  let state: SlashPayload = { open: false, items: [], clientRect: null };
  const listeners = new Set<Listener>();
  return {
    get: () => state,
    set: (next: Partial<SlashPayload>) => {
      state = { ...state, ...next };
      listeners.forEach(l => l(state));
    },
    subscribe: (l: Listener) => {
      listeners.add(l);
      // emit immediately
      l(state);
      return () => listeners.delete(l);
    },
    reset: () => {
      state = { open: false, items: [], clientRect: null };
      listeners.forEach(l => l(state));
    },
  };
})();

// ---------- React UI for the suggestion menu (Mantine Popover) ----------
function SlashMenu({
  items,
  onPick,
}: {
  items: any[];
  onPick: (item: any) => void;
}) {
  return (
    <div className="w-48 p-1 flex flex-col">
      {items?.map((item: any) => (
        <Button
          onMouseDown={e => {
            e.preventDefault();
            e.stopPropagation();
            onPick(item);
          }}
          justify="start"
          leftSection={item.icon}
          variant="transparent"
          color="dark"
          radius={'md'}
          className="dark:text-neutral-300 hover:dark:bg-dark-charcoal-gray font-medium"
          size="compact-md"
          key={item.title}
          classNames={{ label: 'text-sm' }}
        >
          {item.title}
        </Button>
      ))}
      {(!items || items.length === 0) && (
        <div className="px-3 py-2 text-sm text-zinc-400">No results</div>
      )}
    </div>
  );
}

// Mount this once in your Editor page/component
export function SlashSuggestionPortal() {
  const [s, setS] = useState(slashStore.get());

  useEffect(() => {
    slashStore.subscribe(setS);
  }, []);

  if (!s.open || !s.clientRect) return null;
  const rect = s.clientRect?.();

  const top = rect?.bottom ?? rect?.y ?? 0;
  const left = rect?.x ?? 0;

  // 💡 vị trí popover đặt tuyệt đối tại caret
  const style = {
    position: 'absolute' as const,
    top: `${top + window.scrollY}px`,
    left: `${left + window.scrollX}px`,
    zIndex: 9999,
  };

  return (
    <div style={style}>
      <Popover
        opened={true}
        radius={'lg'}
        withinPortal={false}
        trapFocus={false}
        width="auto"
        shadow="md"
      >
        <Popover.Dropdown className="dark:bg-dark-charcoal dark:border-neutral-700 dark:shadow-lg shadow p-0 h-60 overflow-y-scroll">
          <SlashMenu
            items={s.items || []}
            onPick={item => {
              item.command?.({ editor: s.editor, range: s.range });
              s.editor?.chain().focus().deleteRange(s.range).run();
              slashStore.reset();
            }}
          />
        </Popover.Dropdown>
      </Popover>
    </div>
  );
} // ---------- Tiptap Extension ----------
export const SlashCommandMantine = Extension.create({
  name: 'slash-command-mantine',

  addOptions() {
    return {
      suggestion: {
        char: '/',
        startOfLine: false,
        // danh sách item cơ bản; bạn tuỳ biến thêm tuỳ ý
        items: ({ query }: { query: string }) => {
          const all = [
            {
              icon: <BiSolidBot size={16} />,
              title: 'Ask AI',
              command: ({ editor }: any) =>
                editor.chain().focus().toggleHeading({ level: 1 }).run(),
            },
            {
              icon: <FaTextWidth size={16} />,
              title: 'Text',
              command: ({ editor }: { editor: Editor }) =>
                editor.chain().focus().setHeading({ level: 1 }).run(),
            },
            {
              icon: <LuHeading1 size={16} />,
              title: 'Heading 1',
              command: ({ editor }: { editor: Editor }) =>
                editor.chain().focus().toggleHeading({ level: 1 }).run(),
            },
            {
              icon: <LuHeading2 size={16} />,
              title: 'Heading 2',
              command: ({ editor }: { editor: Editor }) =>
                editor.chain().focus().setHeading({ level: 2 }).run(),
            },
            {
              icon: <LuHeading3 size={16} />,
              title: 'Heading 3',
              command: ({ editor }: any) =>
                editor.chain().focus().toggleHeading({ level: 3 }).run(),
            },
            {
              icon: <MdFormatListBulleted size={16} />,
              title: 'Bullet List',
              command: ({ editor }: any) =>
                editor.chain().focus().toggleHeading({ level: 4 }).run(),
            },
            {
              icon: <MdFormatListNumbered size={16} />,
              title: 'Number List',
              command: ({ editor }: any) =>
                editor.chain().focus().toggleHeading({ level: 5 }).run(),
            },
            {
              icon: <GrBlockQuote size={16} />,
              title: 'Blockquote',
              command: ({ editor }: any) =>
                editor.chain().focus().toggleHeading({ level: 5 }).run(),
            },
            {
              icon: <GrBlockQuote size={16} />,
              title: 'Blockquote',
              command: ({ editor }: any) =>
                editor.chain().focus().toggleHeading({ level: 5 }).run(),
            },
            {
              icon: <GrBlockQuote size={16} />,
              title: 'Blockquote',
              command: ({ editor }: any) =>
                editor.chain().focus().toggleHeading({ level: 5 }).run(),
            },
          ];
          return all.filter(i =>
            i.title.toLowerCase().includes((query || '').toLowerCase()),
          );
        },
        // render → dùng event-bus, không tạo root mới → chạy ổn trên Vite
        render: () => {
          return {
            onStart: (props: any) => {
              console.log('🔥 Slash start', props.query, props.clientRect?.());

              // Delay 1 frame để đảm bảo clientRect() trả về đúng vị trí caret
              requestAnimationFrame(() => {
                slashStore.set({
                  open: true,
                  editor: props.editor,
                  range: props.range,
                  items: props.items,
                  clientRect: props.clientRect || null,
                });
              });
            },
            onUpdate: (props: any) => {
              console.log('🔥 Slash update', props.query);
              slashStore.set({
                open: true,
                editor: props.editor,
                range: props.range,
                items: props.items,
                clientRect: props.clientRect || null,
              });
            },
            onKeyDown: (props: any) => {
              if (props.event.key === 'Escape') {
                slashStore.reset();
                return true;
              }
              return false;
            },
            onExit: () => {
              slashStore.reset();
            },
          };
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor, // quan trọng: truyền editor vào
        ...this.options.suggestion,
      }),
    ];
  },
});

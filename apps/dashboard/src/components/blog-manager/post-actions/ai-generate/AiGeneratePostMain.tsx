import '@/styles/tiptap.scss';
import { Button, HoverCard, Tooltip } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { FaCopy, FaFlag } from 'react-icons/fa6';
import ChatForm from './ChatForm';

import { useTiptapEditorChatAI } from '@/hooks/useTiptapEditor';
import { generateHTMLTiptap } from '@/lib';
export default function AiGeneratePostMain() {
  const editor = useTiptapEditorChatAI({
    editorProps: {
      attributes: {
        class: 'tiptapAiFormChat focus:outline-none focus:border-none ',
      },
    },
  });
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [isBotTyping, setIsBotTyping] = useState(false);

  const [messages, setMessages] = useState([
    { text_base: '', text_html: '', from: 'user' },
  ]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isBotTyping]);
  const handleChat = (event: KeyboardEvent) => {
    if (
      !event.shiftKey &&
      event.key === 'Enter' &&
      editor.getJSON() &&
      !isBotTyping
    ) {
      const html = generateHTMLTiptap(editor);
      setMessages([
        ...messages,
        { text_base: editor.getText(), text_html: html, from: 'user' },
      ]);

      editor.commands.clearContent();
      setIsBotTyping(true);
      setTimeout(() => {
        const newBotMsg = {
          text_base: `Nếu bạn muốn form chat luôn dính đáy (sticky bottom) — tức là luôn hiển thị ở cuối khi cuộn nội dung tin nhắn — thì chỉ cần thêm class "sticky bottom-0" (hoặc "fixed bottom-0" nếu muốn dính với viewport).`,
          text_html: `Nếu bạn muốn form chat luôn dính đáy (sticky bottom) — tức là luôn hiển thị ở cuối khi cuộn nội dung tin nhắn — thì chỉ cần thêm class "sticky bottom-0" (hoặc "fixed bottom-0" nếu muốn dính với viewport).`,
          from: 'bot',
        };
        setMessages(prev => [...prev, newBotMsg]);
        setIsBotTyping(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full flex flex-row h-[calc(100vh-140px)]">
      <div className="basis-2/3 flex flex-col gap-4 ">
        <div className="flex-1 rounded-lg flex flex-col gap-6 overflow-y-auto px-8">
          <AnimatePresence>
            {messages.map((msg, i) => {
              if (msg.text_html && msg.text_html.length > 0)
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }} // Bắt đầu mờ và thấp hơn
                    animate={{ opacity: 1, y: 0 }} // Hiện lên và trượt lên
                    exit={{ opacity: 0, y: -10 }} // (tùy chọn) khi xóa tin
                    transition={{ duration: 0.3 }} // Thời gian hiệu ứng
                    className={`flex w-full ${
                      msg.from === 'user'
                        ? 'items-end flex-col'
                        : 'items-start flex-col'
                    } gap-2`}
                  >
                    <HoverCard
                      position={msg.from === 'user' ? 'left' : 'right'}
                      offset={{ mainAxis: 0 }}
                    >
                      <HoverCard.Target>
                        <div
                          className={`border px-4 py-1.5 font-medium rounded-3xl ${
                            msg.from === 'user'
                              ? 'dark:bg-dark-charcoal border-neutral-700'
                              : 'dark:bg-[#003F7A] border-blue-900'
                          } max-w-3/4`}
                        >
                          <div className="whitespace-pre-wrap break-all text-base dark:text-neutral-200">
                            <div
                              className="tiptapAiFormChat"
                              dangerouslySetInnerHTML={{
                                __html: msg.text_html,
                              }}
                            />
                          </div>
                        </div>
                      </HoverCard.Target>
                      <HoverCard.Dropdown className="p-0 bg-transparent border-none">
                        <Tooltip label="Copy">
                          <Button
                            size="compact-sm"
                            variant="transparent"
                            radius={'md'}
                            onClick={() =>
                              navigator.clipboard.writeText(msg.text_base)
                            }
                            className="hover:bg-neutral-700/50"
                          >
                            <FaCopy className="dark:text-neutral-300" />
                          </Button>
                        </Tooltip>
                        <Tooltip label="Report">
                          <Button
                            radius={'md'}
                            className="hover:bg-neutral-700/50"
                            size="compact-sm"
                            variant="transparent"
                          >
                            <FaFlag className="dark:text-neutral-300" />
                          </Button>
                        </Tooltip>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </motion.div>
                );
            })}
          </AnimatePresence>
          {isBotTyping && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-2">
                  <div className=" px-3 py-2 rounded-full flex items-center space-x-2 shadow-lg shadow-blue-900/20">
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-dot-1"></div>
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-dot-2"></div>
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-dot-3"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="sticky bottom-0">
          <ChatForm onSend={handleChat} editor={editor} />
        </div>
      </div>
      <div className="basis-1/3 dark:bg-dark-charcoal bg-white shadow rounded-lg">
        <div className="p-3">
          <div className="font-medium text-lg dark:text-neutral-200 ">
            History
          </div>
        </div>
      </div>
    </div>
  );
}

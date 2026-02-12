import {
  MessagesInfomation,
  MessagesMain,
  MessagesSidebar,
} from '@/components/messages';

export default function MessagesPage() {
  return (
    <div className="w-full flex flex-row gap-3 h-[calc(100vh-125px)] transition-all duration-300">
      <div className="w-80">
        <MessagesSidebar />
      </div>
      <div className="flex-1">
        <MessagesMain />
      </div>
      <MessagesInfomation />
    </div>
  );
}

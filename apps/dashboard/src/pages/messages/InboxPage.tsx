import { InboxFilter, InboxList } from '@/components/messages';

export default function InboxPage() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="col-span-1">
        <InboxFilter />
      </div>
      <div className="col-span-3">
        <InboxList />
      </div>
    </div>
  );
}

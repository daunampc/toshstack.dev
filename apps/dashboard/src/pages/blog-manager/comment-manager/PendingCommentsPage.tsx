import {
  PendingCommentsHeader,
  PendingCommentsMain,
} from '@/components/blog-manager';

export default function PendingCommentsPage() {
  return (
    <div className="w-full space-y-3">
      <PendingCommentsHeader />
      <PendingCommentsMain />
    </div>
  );
}

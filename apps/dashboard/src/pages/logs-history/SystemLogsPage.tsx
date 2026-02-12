import { SystemLogsHeader, SystemLogsMain } from '@/components/blog-manager';

export default function SystemLogsPage() {
  return (
    <div className="w-full space-y-3">
      <SystemLogsHeader />
      <SystemLogsMain />
    </div>
  );
}

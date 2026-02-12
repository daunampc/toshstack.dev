import {
  ViolationLogsHeader,
  ViolationLogsMain,
} from '@/components/blog-manager';

export default function ViolationLogsPage() {
  return (
    <div className="w-full">
      <ViolationLogsHeader />
      <ViolationLogsMain />
    </div>
  );
}

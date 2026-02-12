import { AllCommentsHeader, AllCommentsMain } from '@/components/blog-manager';

export default function AllCommentsPage() {
  return (
    <div className="w-full space-y-3">
      <AllCommentsHeader />
      <AllCommentsMain />
    </div>
  );
}

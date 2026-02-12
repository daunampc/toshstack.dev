import {
  ModerationRulesHeader,
  ModerationRulesMain,
} from '@/components/blog-manager';

export default function ModerationRulesPage() {
  return (
    <div className="w-full space-y-3">
      <ModerationRulesHeader />
      <ModerationRulesMain />
    </div>
  );
}

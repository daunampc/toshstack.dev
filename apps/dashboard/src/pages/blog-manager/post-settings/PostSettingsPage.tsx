import {
  PostSettingsHeader,
  PostSettingsMain,
} from '@/components/blog-manager';

export default function PostSettingsPage() {
  return (
    <div className="w-full space-y-3">
      <PostSettingsHeader />
      <PostSettingsMain />
    </div>
  );
}

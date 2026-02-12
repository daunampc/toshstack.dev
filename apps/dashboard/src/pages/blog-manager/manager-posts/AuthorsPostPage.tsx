import { AuthorsPostHeader, AuthorsPostMain } from '@/components/blog-manager';

export default function AuthorsPostPage() {
  return (
    <div className="w-full space-y-3">
      <AuthorsPostHeader />
      <AuthorsPostMain />
    </div>
  );
}

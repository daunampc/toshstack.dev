'use client';
import { UserAbout } from '@/entities/user/ui/profile';
import { useProfileQuery } from '@/features/user/profile/model';

export default function UserOverview(params: { handle: string }) {
  const { data } = useProfileQuery(params.handle);
  if (!data) return null;
  return (
    <div className="flex flex-col gap-4">
      <UserAbout about={data.profile.about_me} isOwner={false} />
    </div>
  );
}

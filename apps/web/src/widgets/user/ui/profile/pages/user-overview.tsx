'use client';
import { useUserProfileQuery } from '@/entities/user/api';
import { UserAbout } from '@/entities/user/ui/profile';

export default function UserOverview(params: { handle: string }) {
  const { data } = useUserProfileQuery(params.handle);
  if (!data) return null;
  return (
    <div className="flex flex-col gap-4">
      <UserAbout about={data.profile.about_me} isOwner={false} />
    </div>
  );
}

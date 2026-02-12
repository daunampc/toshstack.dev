import {
  GroupTeamsHeader,
  GroupTeamsManager,
} from '@/components/users/group-teams';

export default function GroupTeamsPage() {
  return (
    <div className="space-y-3">
      <GroupTeamsHeader />
      <GroupTeamsManager />
    </div>
  );
}

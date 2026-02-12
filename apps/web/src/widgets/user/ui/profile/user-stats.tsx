'use client';
import { BsFillPostcardHeartFill } from 'react-icons/bs';
import { useUserProfileQuery } from '@/entities/user/api';
import { formatIsoToDdMonYyyy } from '@/shared/lib/format-date';
import { FaStar, FaUserCheck, FaUserPlus } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';

export default function UserStats(params: { handle: string }) {
  const { data } = useUserProfileQuery(params.handle);
  if (!data) return null;
  const { created_at, user_follow } = data;
  return (
    <div className="space-y-1.5 mb-3">
      <div className="inline-flex items-center gap-1  text-gray-800">
        <IoCreate />
        <span className="font-medium text-sm">Created May:</span>
        <span className="font-semibold text-sm">{formatIsoToDdMonYyyy(created_at)}</span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {[
          {
            label: 'Followers',
            value: user_follow?.follower.count ?? 0,
            icon: FaUserCheck,
            cls: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
          },
          {
            label: 'Following',
            value: user_follow?.following ?? 0,
            icon: FaUserPlus,
            cls: 'bg-sky-50 text-sky-700 ring-sky-200',
          },
          {
            label: 'Posts',
            value: '96.981',
            icon: BsFillPostcardHeartFill,
            cls: 'bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200',
          },
          {
            label: 'Stars',
            value: '32.981',
            icon: FaStar,
            cls: 'bg-amber-50 text-amber-600 ring-amber-200',
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ring-1 ${item.cls}`}
            >
              <Icon size={14} className="shrink-0" />
              <span className="text-xs font-medium text-gray-700/80">{item.label}</span>
              <span className="text-xs font-semibold tabular-nums">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

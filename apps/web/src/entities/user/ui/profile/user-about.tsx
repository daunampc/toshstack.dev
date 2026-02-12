import { LuBookOpenText } from 'react-icons/lu';
import { UserAboutProps } from '../../model';
import Link from 'next/link';

export function UserAbout({ about, isOwner }: UserAboutProps) {
  if (about) {
    return (
      <div className="border border-gray-200 p-2 rounded-md bg-gray-50">
        <p className="text-sm font-medium whitespace-pre-line">{about}</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 p-12 rounded-md bg-gray-50 flex flex-col items-center">
      <LuBookOpenText size={30} />
      <div className="text-sm">
        Your about me section is currently blank.
        {isOwner && (
          <Link className="text-blue-700" href="/settings/profile">
            Edit profile
          </Link>
        )}
      </div>
    </div>
  );
}

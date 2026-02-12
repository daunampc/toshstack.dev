import clsx from 'clsx';
import { useSearchParams } from 'react-router';

const commentsActionTab = [
  {
    key: 'admin-actions',
    label: 'Admin Actions',
  },
  {
    key: 'automations',
    label: 'Automations',
  },
  {
    key: 'advanced-management',
    label: 'Advanced Management',
  },
];
export default function CommentsActionHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const actionTab = searchParams.get('action');
  const handleActionTab = (tab: string) => {
    searchParams.set('action', tab);
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full dark:bg-dark-charcoal rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-lg p-1">
          {commentsActionTab.map(it => {
            return (
              <div
                key={it.key}
                onClick={() => handleActionTab(it.key)}
                className={clsx(
                  actionTab === it.key && 'dark:bg-dark-charcoal-gray',
                  'px-3 py-1.5 text-sm font-medium dark:text-neutral-200 rounded-lg cursor-pointer',
                )}
              >
                {it.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

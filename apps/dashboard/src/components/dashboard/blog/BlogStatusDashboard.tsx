import { CardStatusBlog } from '@/components/ui/card';
import { Button } from '@mantine/core';
import { BiSolidCommentDetail } from 'react-icons/bi';
import { FaCommentSlash, FaUserLock } from 'react-icons/fa6';
import { MdOutlinePendingActions } from 'react-icons/md';
import { SiAdblock } from 'react-icons/si';

export default function BlogStatusDashboard() {
  return (
    <div className="w-full shadow dark:bg-dark-charcoal bg-white rounded-lg">
      <div className="w-full flex items-center justify-between p-3">
        <div className="font-semibold dark:text-neutral-200 text-dark-slate">
          Blog Status
        </div>
        <Button size="xs" variant="light" color="blue" radius={'lg'}>
          View all
        </Button>
      </div>
      <div className="border-t dark:border-t-neutral-600 border-neutral-200 grid grid-cols-3 p-3 gap-3">
        <CardStatusBlog
          color="green"
          label="Post pending"
          value="500000"
          status={false}
          icon={MdOutlinePendingActions}
        />
        <CardStatusBlog
          color="red"
          label="Post block/report"
          value="500000"
          status={false}
          icon={MdOutlinePendingActions}
        />
        <CardStatusBlog
          label="Account pending"
          color="blue"
          value="500000"
          status={false}
          icon={SiAdblock}
        />
        <CardStatusBlog
          label={'Account block/report'}
          color="pink"
          value="500000"
          status={false}
          icon={FaUserLock}
        />
        <CardStatusBlog
          label="Comment pending"
          value="500000"
          status={false}
          color="cyan"
          icon={BiSolidCommentDetail}
        />
        <CardStatusBlog
          label="Comment report/lock"
          value="500000"
          color="yellow"
          status={false}
          icon={FaCommentSlash}
        />
      </div>
    </div>
  );
}

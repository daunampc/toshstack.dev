import {
  BlogPerformanceChart,
  RecentCommentsBlog,
  UtmCampaignDashboard,
} from '@/components/dashboard/blog';
import BlogStatusDashboard from '@/components/dashboard/blog/BlogStatusDashboard';
import ReportBlogDashboard from '@/components/dashboard/blog/ReportBlogDashboard';
import { CardStatBlog } from '@/components/ui/card';
import { BiCategory } from 'react-icons/bi';
import { BsPostcardHeart } from 'react-icons/bs';
import { FaRegComments } from 'react-icons/fa6';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { MdOutlinePendingActions } from 'react-icons/md';
import { SlEye } from 'react-icons/sl';
import { TbUsers } from 'react-icons/tb';
import { VscFileMedia } from 'react-icons/vsc';

export default function BlogDashboardPage() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-3">
        <CardStatBlog icon={SlEye} label="Total Views" value={'500000'} />
        <CardStatBlog
          icon={HiOutlineClipboardDocumentList}
          label="Avg Post Views"
          value={'500000'}
        />
        <CardStatBlog
          icon={BsPostcardHeart}
          label="Total Post"
          value={'500000'}
        />
        <CardStatBlog
          icon={BiCategory}
          label="Total Categories"
          value={'500000'}
        />
        <CardStatBlog icon={TbUsers} label="Total User" value={'500000'} />
        <CardStatBlog
          icon={FaRegComments}
          label="Total Comment"
          value={'500000'}
        />
        <CardStatBlog
          icon={MdOutlinePendingActions}
          label="Total Post pending"
          value={'500000'}
        />
        <CardStatBlog
          icon={VscFileMedia}
          label="Total Media Files"
          value={'500000'}
        />
      </div>
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-4">
          <UtmCampaignDashboard />
        </div>
        <div className="col-span-2">
          <RecentCommentsBlog />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <ReportBlogDashboard />
        <BlogStatusDashboard />
      </div>

      <BlogPerformanceChart />
    </div>
  );
}

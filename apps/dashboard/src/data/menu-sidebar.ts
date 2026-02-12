import { BiPlanet } from 'react-icons/bi';
import {
  RiBloggerLine,
  RiFileSettingsLine,
  RiRobot2Line,
} from 'react-icons/ri';
import { AiOutlineApi, AiOutlineTags } from 'react-icons/ai';
import { BsBoxes } from 'react-icons/bs';
import { GrSystem } from 'react-icons/gr';

import { BiMessageDots } from 'react-icons/bi';

import {
  MdHistory,
  MdImportantDevices,
  MdOutlineEditCalendar,
  MdOutlineReport,
  MdOutlineSupportAgent,
  MdSwitchAccount,
} from 'react-icons/md';

import { MdOutlineDashboard } from 'react-icons/md';
import { FiServer } from 'react-icons/fi';
import { PiMoney } from 'react-icons/pi';
import { GoLog } from 'react-icons/go';
import { TiFolderOpen } from 'react-icons/ti';
import type { IMenuSidebar } from '@/types';
import { VscGithubAction, VscPreview } from 'react-icons/vsc';
import { TbDeviceDesktopAnalytics, TbSeo } from 'react-icons/tb';
import { CgComment } from 'react-icons/cg';

export const menuSidebar: IMenuSidebar[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: MdOutlineDashboard,
    path: '/',
    children: [
      {
        label: 'Automation Product',
        path: '/dashboard/automation-product',
      },
      {
        label: 'Manager redis',
        path: '/dashboard/manager-redis',
      },
      {
        label: 'Analytics',
        path: '/dashboard/analytics',
      },
      {
        label: 'Blog',
        path: '/dashboard/blog-dashboard',
      },
      {
        label: 'Stocks',
        path: '/dashboard/stocks',
      },
      {
        label: 'Products',
        path: '/dashboard/products',
      },
      {
        label: 'Account',
        path: '/dashboard/accounts',
      },
      {
        label: 'Email Marketing',
        path: '/dashboard/email-marketing',
      },
    ],
  },
  {
    key: 'users',
    label: 'Manager User',
    icon: MdSwitchAccount,
    children: [
      {
        label: 'Group Teams',
        path: '/users/group-teams',
      },
      {
        label: 'List Users',
        path: '/users',
      },

      {
        label: 'User Activity Logs',
        path: '/users/activity-logs',
      },
      {
        label: 'Manager Roles',
        path: '/users/roles',
      },
      {
        label: 'Users settings',
        path: '/users/settings',
      },
    ],
  },
  {
    key: 'messages',
    label: 'Message',
    icon: BiMessageDots,
    children: [
      {
        label: 'Messages',
        path: '/messages',
      },
      {
        label: 'Inbox',
        path: '/messages/inbox',
      },
      {
        label: 'Sent',
        path: '/messages/sent',
      },
      {
        label: 'Archived',
        path: '/messages/archived',
      },
      { label: 'Blocked', path: '/messages/blocked' },
    ],
  },
  {
    key: 'blog-manager',
    label: 'Blog manager',
    icon: RiBloggerLine,
    open_menu: true,
  },
  {
    key: 'web-manager',
    label: 'Webstie manager',
    icon: BiPlanet,
  },
  {
    key: 'server-manager',
    label: 'Server Manager',
    icon: FiServer,
  },
  {
    key: 'products-manager',
    label: 'Products manager',
    icon: BsBoxes,
  },
  {
    key: 'pricing-plans',
    label: 'Pricing plans',
    icon: PiMoney,
  },
  {
    key: 'support-setting',
    label: 'Support setting',
    icon: MdOutlineSupportAgent,
  },
  {
    key: 'integrations',
    label: 'Integrations',
    icon: AiOutlineApi,
  },
  {
    key: 'logs-manager',
    label: 'Logs manager',
    icon: GoLog,
  },
  {
    key: 'system-manager',
    label: 'System manager',
    icon: GrSystem,
  },
  {
    key: 'resource-manager',
    label: 'Resource manager',
    icon: TiFolderOpen,
  },
  {
    key: 'calendar',
    label: 'Calendar',
    icon: MdOutlineEditCalendar,
  },
  {
    key: 'reports',
    label: 'Reports',
    icon: MdOutlineReport,
  },
];

export const menuSidebarBlogManager: IMenuSidebar[] = [
  {
    key: 'blog-manager/posts',
    label: 'Posts Manager',
    icon: RiBloggerLine,
    children: [
      {
        label: 'All post',
        path: '/blog-manager/posts-manager/all-posts',
      },
      {
        label: 'Authors post',
        path: '/blog-manager/posts-manager/authors-posts',
      },
      {
        label: 'Scheduled',
        path: '/blog-manager/posts-manager/scheduled',
      },
    ],
  },
  {
    key: 'blog-manager/automation-posts',
    label: 'Automation Posts',
    icon: RiRobot2Line,
    children: [
      {
        label: 'AI Generated',
        path: '/blog-manager/automation-posts/ai',
      },
      {
        label: 'RSS Imported',
        path: '/blog-manager/automation-posts/rss',
      },
      {
        label: 'Scheduled Automation',
        path: '/blog-manager/automation-posts/scheduled',
      },
      {
        label: 'Failed Automation',
        path: '/blog-manager/automation-posts/failed',
      },
      {
        label: 'Automation Logs',
        path: '/blog-manager/automation-posts/logs',
      },
    ],
  },
  {
    key: 'blog-manager/post-actions',
    label: 'Post Actions',
    icon: VscGithubAction,
    children: [
      {
        label: 'AI Generate Post',
        path: '/blog-manager/post-actions/ai-generate-post',
      },
      {
        label: 'Add new post',
        path: '/blog-manager/post-actions/add-new-post',
      },
      {
        label: 'Quick Edit',
        path: '/blog-manager/post-actions/quick-edit',
      },
    ],
  },
  {
    key: 'blog-manager/analytics',
    label: 'Analytics',
    icon: TbDeviceDesktopAnalytics,
    children: [
      {
        label: 'Overview',
        path: '/blog-manager/analytics/overview',
      },
      {
        label: 'By Category',
        path: '/blog-manager/analytics/category',
      },
    ],
  },
  {
    key: 'blog-manager/categories-and-tags',
    label: 'Categories & Tags',
    icon: AiOutlineTags,
    children: [
      {
        label: 'All Categories',
        path: '/blog-manager/categories-and-tags/all-categoires',
      },
      {
        label: 'All Tags',
        path: '/blog-manager/categories-and-tags/all-tags',
      },
    ],
  },
  {
    key: 'blog-manager/seo-optimization',
    label: 'SEO & Optimization',
    icon: TbSeo,
    children: [
      {
        label: 'SEO Checker',
        path: '/blog-manager/seo-optimization/seo-checker',
      },
      {
        label: 'AI SEO Suggestion',
        path: '/blog-manager/seo-optimization/ai',
      },
      {
        label: 'Open Graph Preview',
        path: '/blog-manager/seo-optimization/og',
      },
      {
        label: 'Meta Settings',
        path: '/blog-manager/seo-optimization/settings',
      },
    ],
  },
  {
    key: 'blog-manager/comment-manager',
    label: 'Comment Manager',
    icon: CgComment,
    children: [
      {
        label: 'All Comments',
        path: '/blog-manager/comment-manager/all-comments',
      },
      {
        label: 'Pending Comments',
        path: '/blog-manager/comment-manager/pending-comments',
      },
      {
        label: 'Reported / Flagged',
        path: '/blog-manager/comment-manager/reported-flagged',
      },
      {
        label: 'Moderation Rules',
        path: '/blog-manager/comment-manager/moderation-rules',
      },
      {
        label: 'Violation Logs',
        path: '/blog-manager/comment-manager/violation-logs',
      },
      {
        label: 'Banned Users',
        path: '/blog-manager/comment-manager/banned-users',
      },
      {
        label: 'Settings',
        path: '/blog-manager/comment-manager/settings-comment',
      },
    ],
  },
  {
    key: 'blog-manager/review-queue',
    label: 'Review Queue',
    icon: VscPreview,
    children: [
      {
        label: 'Pending',
        path: 'blog-manager/review-queue/pending',
      },
      {
        label: 'Approved',
        path: 'blog-manager/review-queue/approved',
      },
      {
        label: 'Rejected',
        path: 'blog-manager/review-queue/rejected',
      },
      {
        label: 'AI Moderation',
        path: 'blog-manager/review-queue/ai',
      },
    ],
  },
  {
    key: 'blog-manager/logs-history',
    label: 'Logs & History',
    icon: MdHistory,
    children: [
      {
        label: 'Edit History',
        path: '/blog-manager/logs-history/edit-history',
      },
      {
        label: 'Version Compare',
        path: '/blog-manager/logs-history/version-compare',
      },
      {
        label: 'User Actions',
        path: '/blog-manager/logs-history/user-actions',
      },
      {
        label: 'System Logs',
        path: '/blog-manager/logs-history/system-logs',
      },
    ],
  },
  {
    key: 'blog-manager/import-export',
    label: 'Import / Export',
    icon: MdImportantDevices,
    children: [
      {
        label: 'Import Posts',
        path: 'blog-manager/import-export/import-posts',
      },
      {
        label: 'Export Posts',
        path: 'blog-manager/import-export/export-posts',
      },
      {
        label: 'Sync External Source',
        path: 'blog-manager/import-export/sync',
      },
    ],
  },
  {
    key: 'blog-manager/post-settings',
    label: 'Post Settings',
    icon: RiFileSettingsLine,
    path: '/blog-manager/post-settings',
  },
];

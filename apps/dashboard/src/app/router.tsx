import { createBrowserRouter } from 'react-router';
import {
  AddNewPostPage,
  AllCommentsPage,
  AllPosts,
  AllTagsPage,
  AuthorsPostPage,
  CommentsActionPage,
  HomePage,
  ModerationRulesPage,
  PendingCommentsPage,
  PostSettingsPage,
  PostsLockedPage,
  SeoCheckerPage,
  SettingsCommentPage,
  ViolationLogsPage,
} from '@/pages';
import NotFoundPage from '@/pages/NotFoundPage';
import DashboardLayout from '@/layouts/DashboardLayout';
import {
  AutoProductDashboardPage,
  BlogDashboardPage,
  EmailMKTDashboardPage,
} from '@/pages/dashboard';
import { ListUserPage, UserDetailPage } from '@/pages/users';
import { GroupTeamsPage } from '@/pages/teams';
import MessagesPage from '@/pages/messages/MessagesPage';
import InboxPage from '@/pages/messages/InboxPage';
import { PostActionPage } from '@/pages/blog-manager/post-actions/PostActionPage';
import AiGeneratePostPage from '@/pages/blog-manager/post-actions/AiGeneratePostPage';
import AllCategoriesPage from '@/pages/blog-manager/categries-tags/AllCategoriesPage';
import VersionComparePage from '@/pages/logs-history/VersionComparePage';
import SystemLogsPage from '@/pages/logs-history/SystemLogsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'dashboard',
        children: [
          {
            path: 'automation-product',
            element: <AutoProductDashboardPage />,
          },
          {
            path: 'blog-dashboard',
            element: <BlogDashboardPage />,
          },
          {
            path: 'email-marketing',
            element: <EmailMKTDashboardPage />,
          },
        ],
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            element: <ListUserPage />,
          },
          {
            path: ':user_id',
            element: <UserDetailPage />,
          },
        ],
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            element: <MessagesPage />,
          },
          {
            path: 'inbox',
            element: <InboxPage />,
          },
        ],
      },
      {
        path: 'blog-manager',
        children: [
          {
            path: 'posts-manager',
            children: [
              {
                path: 'all-posts',
                element: <AllPosts />,
              },
              {
                path: 'authors-posts',
                element: <AuthorsPostPage />,
              },
              {
                path: 'locked',
                element: <PostsLockedPage />,
              },
            ],
          },
          {
            path: 'post-actions',
            children: [
              {
                path: '',
                element: <PostActionPage />,
              },
              {
                path: 'ai-generate-post',
                element: <AiGeneratePostPage />,
              },
              {
                path: 'add-new-post',
                element: <AddNewPostPage />,
              },
            ],
          },
          {
            path: 'categories-and-tags',
            children: [
              {
                path: 'all-categoires',
                element: <AllCategoriesPage />,
              },
              {
                path: 'all-tags',
                element: <AllTagsPage />,
              },
            ],
          },
          {
            path: 'seo-optimization',
            children: [
              {
                path: 'seo-checker',
                element: <SeoCheckerPage />,
              },
            ],
          },
          {
            path: 'comment-manager',
            children: [
              {
                path: 'all-comments',
                element: <AllCommentsPage />,
              },
              {
                path: 'comments-action',
                element: <CommentsActionPage />,
              },
              {
                path: 'pending-comments',
                element: <PendingCommentsPage />,
              },
              {
                path: 'moderation-rules',
                element: <ModerationRulesPage />,
              },
              {
                path: 'violation-logs',
                element: <ViolationLogsPage />,
              },
              {
                path: 'settings-comment',
                element: <SettingsCommentPage />,
              },
            ],
          },
          {
            path: 'logs-history',
            children: [
              {
                path: 'version-compare',
                element: <VersionComparePage />,
              },
              {
                path: 'system-logs',
                element: <SystemLogsPage />,
              },
            ],
          },
          {
            path: 'post-settings',
            element: <PostSettingsPage />,
          },
        ],
      },

      {
        path: 'teams',
        children: [
          {
            path: '',
            element: <GroupTeamsPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
export default router;

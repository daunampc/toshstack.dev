import { User } from '@/entities/user/model';

export interface Post {
  post_id: string;
  slug: string;
  banner_image: string | null;
  title: string;
  author: User;
  content: string;
  description: string;
  created_at: string;
  updated_at: string;
  // community: Community | null;
  tags: string[] | null;
  // community_member: CommunityMember[] | null;
  member_count: number;
  comment_count: number;
  like: {
    count: number;
    me: boolean;
  };
  dislike: {
    count: number;
    me: boolean;
  };
}

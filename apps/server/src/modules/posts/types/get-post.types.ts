export interface FollowCount {
  follower_count: number;
  my_follower: boolean;
}

export interface PostRaw {
  like_count: number;
  dislike_count: number;
  is_liked_by_me: boolean;
  is_disliked_by_me: boolean;
}

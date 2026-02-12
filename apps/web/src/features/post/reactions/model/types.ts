export interface PostReactionsProps {
  post_id: string;
  post_reaction: PostReactionsType;
}
export type PostReactionsType = {
  like: {
    count: number;
    me: boolean;
  };
  dislike: {
    count: number;
    me: boolean;
  };
};
export type PostReactionStatus = 'LIKE' | 'DISLIKE';

export type IconTypeLiked = 'liked' | 'unliked';
export type IconTypeDisliked = 'disliked' | 'undisliked';
export type IconAnimatedProps =
  | {
      type: 'liked';
      value: IconTypeLiked;
      active: boolean;
    }
  | {
      type: 'disliked';
      value: IconTypeDisliked;
      active: boolean;
    };

export type CreatePostReactionPayload = {
  type: PostReactionStatus;
  post_id: string;
};

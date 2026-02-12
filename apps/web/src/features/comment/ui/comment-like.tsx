import { Button } from '@mantine/core';
import { AnimatePresence, motion } from 'motion/react';
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from 'react-icons/bi';
import { CommentLikeProps, CommentReaction } from '../model/types';
import { useState } from 'react';
import { useToggleCommentReaction } from '../model/use-comment-reaction';
import { useQueryClient } from '@tanstack/react-query';

type ReactionType = 'like' | 'dislike';
const ReactionIcon = ({
  type,
  active,
  burstKey,
  colorClass = 'text-blue-600',
  ringColorClass = 'border-blue-500',
  dotColorClass = 'bg-blue-500',
}: {
  type: ReactionType;
  active: boolean;
  burstKey: number;
  colorClass?: string;
  ringColorClass?: string;
  dotColorClass?: string;
}) => {
  return (
    <span className="relative inline-flex">
      {/* Burst */}
      <AnimatePresence>
        {burstKey > 0 && (
          <motion.span
            key={burstKey}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            {/* Ring */}
            <motion.span
              className={`absolute inset-[-6px] rounded-full border ${ringColorClass}`}
              initial={{ opacity: 0.8, scale: 0.2 }}
              animate={{ opacity: 0, scale: 1.3 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
            {/* Rays */}
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (360 / 6) * i;
              return (
                <motion.span
                  key={i}
                  className={`absolute left-1/2 top-1/2 h-1 w-1 rounded-full ${dotColorClass}`}
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-10px)`,
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              );
            })}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Icon */}
      <motion.span
        key={active ? 'active' : 'inactive'}
        initial={active ? { scale: 0.7, rotate: -10 } : { scale: 0.95 }}
        animate={active ? { scale: 1.15, rotate: 0 } : { scale: 1 }}
        transition={
          active
            ? { type: 'spring', stiffness: 700, damping: 18 }
            : { type: 'spring', stiffness: 500, damping: 22 }
        }
        className="inline-flex"
      >
        {type === 'like' ? (
          active ? (
            <BiSolidLike className={colorClass} />
          ) : (
            <BiLike className={colorClass} />
          )
        ) : active ? (
          <BiSolidDislike className={colorClass} />
        ) : (
          <BiDislike className={colorClass} />
        )}
      </motion.span>
    </span>
  );
};
const ReactionButton = ({
  type,
  active,
  count,
  onClick,
  burstKey,
}: {
  type: ReactionType;
  active: boolean;
  count: number;
  onClick: () => void;
  burstKey: number;
}) => {
  return (
    <Button
      variant="transparent"
      onClick={onClick}
      size="compact-sm"
      classNames={{ section: 'me-1' }}
      leftSection={
        <ReactionIcon
          type={type}
          active={active}
          burstKey={burstKey}
          colorClass={active ? 'text-pink-500' : 'text-black-primary'}
          ringColorClass="border-blue-500"
          dotColorClass="bg-blue-500"
        />
      }
      className="text-black-primary font-semibold rounded-md ps-0 px-0"
    >
      {count}
    </Button>
  );
};
export function CommentLike({ comment }: CommentLikeProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useToggleCommentReaction();
  const [reaction, setReaction] = useState({
    LIKE: comment.like,
    DISLIKE: comment.dislike,
  });
  const handleReaction = (type: CommentReaction) => {
    if (isPending) return;
    const prevState = reaction;
    setReaction((prev) => {
      const isLike = type === 'LIKE';
      const current = prev[type];
      const opposite: CommentReaction = isLike ? 'DISLIKE' : 'LIKE';
      return {
        ...prev,
        [type]: {
          count: current.me ? current.count - 1 : current.count + 1,
          me: !current.me,
        },
        [opposite]: prev[opposite].me
          ? {
              count: prev[opposite].count - 1,
              me: false,
            }
          : prev[opposite],
      };
    });
    mutate(
      { comment_id: comment.id, reaction: type },
      {
        onSuccess: () => {},

        onError: () => {
          setReaction(prevState);
        },
      }
    );
  };
  return (
    <div className="flex items-center gap-2">
      <ReactionButton
        onClick={() => handleReaction('LIKE')}
        count={reaction.LIKE.count}
        active={reaction.LIKE.me}
        burstKey={1}
        type="like"
      />
      <ReactionButton
        onClick={() => handleReaction('DISLIKE')}
        count={reaction.DISLIKE.count}
        active={reaction.DISLIKE.me}
        burstKey={1}
        type="dislike"
      />
    </div>
  );
}

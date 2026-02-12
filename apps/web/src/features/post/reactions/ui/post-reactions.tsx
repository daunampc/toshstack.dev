'use client';
import { AnimatePresence, motion } from 'motion/react';
import {
  IconAnimatedProps,
  PostReactionsType,
  PostReactionsProps,
  PostReactionStatus,
  useCreatePostReaction,
} from '../model';
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from 'react-icons/bi';
import { Button, Skeleton } from '@mantine/core';
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { toast } from 'sonner';
const IconAnimated = ({ type, value, active }: IconAnimatedProps) => {
  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5">
      <AnimatePresence>
        {value === 'liked' ||
          (value === 'disliked' && (
            <motion.span
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              <motion.span
                className="absolute inset-[-6px] rounded-full border border-blue-500"
                initial={{ opacity: 0.8, scale: 0.2 }}
                animate={{ opacity: 0, scale: 1.3 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (360 / 6) * i;
                return (
                  <motion.span
                    key={i}
                    className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-blue-500"
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
          ))}
      </AnimatePresence>

      <motion.span
        key={active ? 'liked' : 'unliked'}
        initial={active ? { scale: 0.7, rotate: -10 } : { scale: 0.95 }}
        animate={active ? { scale: 1.15, rotate: 0 } : { scale: 1 }}
        transition={
          active
            ? { type: 'spring', stiffness: 700, damping: 18 }
            : { type: 'spring', stiffness: 500, damping: 22 }
        }
        className="inline-flex"
      >
        {type === 'liked' ? (
          <>
            {active ? (
              <BiSolidLike className="text-blue-600" />
            ) : (
              <BiLike className="text-blue-600" />
            )}
          </>
        ) : (
          <>
            {active ? (
              <BiSolidDislike className="text-blue-600" />
            ) : (
              <BiDislike className="text-blue-600" />
            )}
          </>
        )}
      </motion.span>
    </div>
  );
};
export function PostReactionsContent({ post_id, post_reaction }: PostReactionsProps) {
  const [reaction, setReaction] = useState<PostReactionsType>(post_reaction);
  const { mutate, isPending } = useCreatePostReaction();
  const isFirstRender = useRef(true);

  const handleReaction = (type: PostReactionStatus) => {
    if (isPending) return;
    const prevReaction = reaction;

    const nextReaction = (() => {
      const isLike = type === 'LIKE';
      const like = { ...reaction.like };
      const dislike = { ...reaction.dislike };

      if (isLike && like.me) {
        like.count--;
        like.me = false;
        return { like, dislike };
      }

      if (!isLike && dislike.me) {
        dislike.count--;
        dislike.me = false;
        return { like, dislike };
      }

      if (isLike && dislike.me) {
        dislike.count--;
        dislike.me = false;
      }

      if (!isLike && like.me) {
        like.count--;
        like.me = false;
      }

      if (isLike) {
        like.count++;
        like.me = true;
      } else {
        dislike.count++;
        dislike.me = true;
      }

      return { like, dislike };
    })();

    setReaction(nextReaction);

    mutate(
      { type, post_id },
      {
        onError: () => {
          toast.error('Working reaction post', {
            position: 'top-center',
          });
          setReaction(prevReaction);
        },
      }
    );
  };
  return (
    <div className="flex items-center gap-1.5 bg-slate-100 px-1.5 py-1 rounded-xl">
      <Button
        classNames={{ section: 'me-1' }}
        onClick={() => handleReaction('LIKE')}
        leftSection={
          <IconAnimated
            type="liked"
            active={reaction.like.me}
            value={reaction.like.me ? 'liked' : 'unliked'}
          />
        }
        variant="subtle"
        size="compact-sm"
        className="hover:bg-transparent p-0 font-semibold group"
      >
        <motion.span
          initial={isFirstRender.current ? false : { y: 2, opacity: 0.6, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.12 }}
          className="text-black-primary"
        >
          {reaction.like.count}
        </motion.span>
      </Button>
      <Button
        classNames={{ section: 'me-1' }}
        onClick={() => handleReaction('DISLIKE')}
        leftSection={
          <IconAnimated
            type="disliked"
            active={reaction.dislike.me}
            value={reaction.dislike.me ? 'disliked' : 'undisliked'}
          />
        }
        variant="subtle"
        size="compact-sm"
        className="hover:bg-transparent p-0 font-semibold group"
      >
        <motion.span
          initial={isFirstRender.current ? false : { y: 2, opacity: 0.6, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.12 }}
          className="text-black-primary"
          onAnimationComplete={() => {
            isFirstRender.current = false;
          }}
        >
          {reaction.dislike.count}
        </motion.span>
      </Button>
    </div>
  );
}

export const PostReactions = dynamic(() => Promise.resolve(PostReactionsContent), {
  ssr: false,
  loading: () => (
    <div className="flex items-center gap-1.5 bg-slate-100 px-1.5 py-1 rounded-xl">
      <Skeleton height={24} width={50} radius="md" />
      <Skeleton height={24} width={50} radius="md" />
    </div>
  ),
});

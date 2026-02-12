import {
  Avatar,
  Badge,
  Button,
  Modal,
  Pagination,
  Popover,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import clsx from 'clsx';
import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';

export default function PendingCommentsMain() {
  const [commentItem, setCommentItem] = useState<number[]>([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectActive] = useState<boolean>(false);
  const handleCommentItem = (comment_id: number) => {
    const result = commentItem.find(i => i === comment_id);
    if (!result) {
      setCommentItem([...commentItem, comment_id]);
    } else {
      const result_remove = commentItem.filter(i => i !== comment_id);
      if (result_remove) {
        setCommentItem(result_remove);
      }
    }
  };
  const handleShowDetailComment = (comment_id: number) => {
    console.log(comment_id);
    open();
  };
  return (
    <div className="w-full  space-y-3">
      <div className="font-medium dark:text-neutral-200 text-dark-slate dark:bg-dark-charcoal bg-white shadow p-2 rounded-lg">
        Total pending comments: <b className="text-blue-400">961K</b>
      </div>
      <Modal
        radius={'md'}
        size={'lg'}
        classNames={{
          content: 'dark:bg-dark-charcoal',
          header:
            'dark:bg-dark-charcoal bg-white dark:text-neutral-200 text-dark-slate border-b dark:border-neutral-700',
          title: 'font-semibold',
          body: 'pt-2',
        }}
        opened={opened}
        onClose={close}
        title="Comment detail"
        centered
      >
        <div className="flex flex-col gap-2">
          <Badge radius={'md'} className="capitalize" variant="light">
            422283e0-eb91-454f-ab9c-d8f2437055b5
          </Badge>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Avatar size={'md'} />
              <div className="flex flex-col">
                <div className="font-medium dark:text-neutral-200">
                  Itou Toshiro
                </div>
                <span className="text-xs text-blue-400 font-medium">
                  @toshstack
                </span>
              </div>
            </div>
            <div>
              <p className="dark:bg-dark-charcoal-gray p-2 rounded-lg text-sm dark:text-neutral-200 leading-6 font-medium min-h-full max-h-60  overflow-y-auto">
                Supabase is the Postgres development platform. Start your
                project with a Postgres database, Authentication, instant APIs,
                Edge Functions, Realtime subscriptions, Storage, and Vector
                embeddings.Supabase is the Postgres development platform. Start
                your project with a Postgres database, Authentication, instant
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <div className="grid grid-cols-4 gap-4">
        {Array(36)
          .fill('_')
          .map((_, idx) => {
            return (
              <div
                key={idx}
                onDoubleClick={() => handleShowDetailComment(idx)}
                className={clsx(
                  commentItem.find(i => i === idx) &&
                    selectActive &&
                    'scale-105 dark:border-neutral-600 border',
                  'rounded-lg dark:bg-dark-charcoal bg-white border border-transparent shadow dark:hover:bg-dark-charcoal/60 transition-all duration-300',
                )}
              >
                <div className="flex flex-col">
                  <div
                    onClick={() => handleCommentItem(idx)}
                    className="flex items-center justify-between p-2 "
                  >
                    <div className="flex items-center gap-1">
                      <Avatar />
                      <div className="flex flex-col gap-1">
                        <div className="font-medium text-sm dark:text-neutral-200 text-dark-slate">
                          Itou Toshiro
                        </div>
                        <span className="text-xs font-medium text-blue-400">
                          @toshstack
                        </span>
                      </div>
                    </div>
                    <Popover position="bottom-end">
                      <Popover.Target>
                        <Button size="compact-sm" variant="light" color="grape">
                          <FiSettings />
                        </Button>
                      </Popover.Target>
                      <Popover.Dropdown
                        w={250}
                        className="dark:bg-dark-charcoal bg-white shadow dark:border-neutral-700 border-gray-100"
                      >
                        <div></div>
                      </Popover.Dropdown>
                    </Popover>
                  </div>

                  <div className="space-y-2 border-t dark:border-neutral-700 border-gray-300 p-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        className="capitalize"
                        variant="light"
                        color="orange"
                      >
                        Comment new
                      </Badge>
                      <Badge className="capitalize" color="red">
                        Report
                      </Badge>
                    </div>
                    <div className="text-xs dark:text-blue-400 text-blue-500 underline font-medium">
                      dd581bbd-9d47-43d0-9991-5e5809d3beec
                    </div>
                    <p className="text-[13px] dark:text-neutral-300 text-dark-slate font-medium line-clamp-3">
                      System/360's chief architect was Gene Amdahl and the
                      project was managed by Fred Brooks, responsible to
                      Chairman Thomas J. Watson Jr.[4][5] The commercial release
                      was piloted by another of Watson's lieutenants
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t dark:border-neutral-700 border-gray-300 dark:text-neutral-200 text-dark-slate p-2">
                    <div className="font-medium text-xs">
                      Report: <b className="text-red-500">91</b>
                    </div>
                    <div className="font-medium text-xs ">
                      Status: <b className="text-blue-500">Pending</b>
                    </div>
                    <div className="font-medium text-xs">
                      Type: <b className="text-yellow-500">Bot Lock</b>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="dark:bg-dark-charcoal p-2 rounded-lg flex justify-end">
        <Pagination
          total={25}
          size={'sm'}
          classNames={{
            control:
              'dark:bg-dark-charcoal-gray bg-white shadow dark:border-neutral-700 border-gray-100 dark:text-neutral-200 text-dark-slate dark:focus:bg-dark-charcoal font-medium',
            dots: 'dark:text-neutral-200',
          }}
        />
      </div>
    </div>
  );
}

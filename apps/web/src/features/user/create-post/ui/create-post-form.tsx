'use client';

import { ActionIcon, Button, FileButton, Switch, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { CreatePostFormType } from '../model/types';
import clsx from 'clsx';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { LuImages } from 'react-icons/lu';
import { ImageSlider } from './image-slider';
import { useEffect, useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { PostEditor } from './post-editor';
import { PiWarningCircleBold } from 'react-icons/pi';
import { SchedulePost } from './schedule-post';
import dayjs from 'dayjs';
import { useCreatePost } from '../model/use-create-post';
import { toast } from 'sonner';

export function CreatePostForm() {
  const { mutate, isPending } = useCreatePost({
    onError: (error) => {
      toast.error(error.message, {
        position: 'top-center',
      });
    },
  });
  const [imagePreview, setImagePreivew] = useState<string[] | null>(null);
  const [isImage, setIsImage] = useState<boolean>(false);
  const form = useForm<CreatePostFormType>({
    initialValues: {
      title: '',
      images: null,
      content: null,
      schedule_post: null,
    },
    validate: {
      title: isNotEmpty('Title must not be empty'),
      content: isNotEmpty('Content must not be empty.'),
      schedule_post: (value) => {
        if (!value) return null;

        const now = new Date();
        const selectedDate = dayjs(value);

        if (!selectedDate.isValid()) {
          return 'Invalid date.';
        }

        if (selectedDate.isBefore(now)) {
          return 'Cannot schedule in the past.';
        }

        if (selectedDate.diff(now, 'minute') < 5) {
          return 'Please schedule at least 5 minutes from now.';
        }

        if (selectedDate.diff(now, 'day') > 90) {
          return 'Cannot schedule more than 90 days in advance.';
        }

        return null;
      },
    },
  });

  useEffect(() => {
    if (!form.values.images) {
      setImagePreivew(null);
      return;
    }

    const urls = form.values.images.map((file) => URL.createObjectURL(file));
    setImagePreivew(urls);
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [form.values.images]);
  useEffect(() => {
    if (!isImage) {
      setImagePreivew(null);
      form.setValues({ images: null });
    }
  }, [isImage]);

  const addImagePost = (values: File[] | null) => {
    if (!values) return;

    const current = form.values.images ?? [];
    const next = [...current, ...values];

    form.setFieldValue('images', next);
  };

  const removeImagePost = (fileIdx: number) => {
    const current = form.values.images ?? [];
    const next = current.filter((_, i) => i !== fileIdx);

    form.setFieldValue('images', next.length >= 1 ? next : null);
  };

  const removeImagePostAll = () => {
    form.setFieldValue('images', null);
  };
  const handleNewPost = (values: CreatePostFormType) => {
    if (isPending) return;
    mutate(values);
  };
  return (
    <form onSubmit={form.onSubmit(handleNewPost)} className="flex flex-col gap-3">
      <div className="space-y-0.5">
        <TextInput
          key={form.key('title')}
          {...form.getInputProps('title')}
          required
          maxLength={300}
          size="md"
          label="Title"
          placeholder="Enter title post"
          radius={'xl'}
        />
        <div
          className={clsx(
            form.values.title.length > 300 && 'text-red-500',
            form.values.title.length <= 300 && 'text-black-primary',
            'text-end text-xs font-medium'
          )}
        >
          {form.values.title.length}/300
        </div>
      </div>
      <div className="space-y-2">
        <Switch
          checked={isImage}
          onChange={(event) => setIsImage(event.currentTarget.checked)}
          size="md"
          className="font-medium"
          label="Image & Video"
        />
        {!form.values.images && isImage && (
          <div className="w-full border border-dashed border-neutral-300 h-40 rounded-md flex items-center justify-center">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">Drag and Drop or upload media</span>
              <FileButton
                key={form.key('images')}
                {...form.getInputProps('images')}
                accept="image/png,image/jpeg"
                multiple
              >
                {(props) => (
                  <ActionIcon size={'md'} {...props} variant="light" radius={'xl'}>
                    <MdOutlineCloudUpload />
                  </ActionIcon>
                )}
              </FileButton>
            </div>
          </div>
        )}
        {form.values.images && imagePreview && isImage && (
          <div className="w-full">
            <ImageSlider onDelete={removeImagePost} images={imagePreview} />
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-1">
                <FileButton accept="image/png,image/jpeg" onChange={addImagePost} multiple>
                  {(props) => (
                    <Button
                      {...props}
                      size="compact-sm"
                      variant="light"
                      radius="xl"
                      leftSection={<LuImages />}
                    >
                      Add
                    </Button>
                  )}
                </FileButton>
              </div>
              <Button
                onClick={removeImagePostAll}
                size="compact-sm"
                variant="light"
                color="red"
                radius={'xl'}
                leftSection={<FaRegTrashCan />}
              >
                Remove all
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="space-y-1.5">
        <PostEditor form={form} />
        {form.errors.content && (
          <div className={'flex items-center gap-1 text-red-500 text-sm font-medium'}>
            <PiWarningCircleBold />
            <span>{form.errors?.content}</span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-end gap-1.5">
        <Button disabled={isPending} type="button" variant="light" color="gray" radius={'xl'}>
          Save Draft
        </Button>
        <SchedulePost form={form} />
        <Button
          loading={isPending}
          disabled={isPending}
          color="indigo"
          type="submit"
          variant="filled"
          radius={'xl'}
        >
          Post
        </Button>
      </div>
    </form>
  );
}

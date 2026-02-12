import {
  Avatar,
  Button,
  Checkbox,
  Collapse,
  Select,
  TagsInput,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import dayjs from 'dayjs';
import { useState } from 'react';
import { GrCloudUpload } from 'react-icons/gr';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function PostActionsGeneral() {
  const [isMeta, setIsMeta] = useState<boolean>(true);
  const domain = window.location.origin;
  return (
    <div className="space-y-3">
      <div className="dark:text-neutral-200 dark:bg-dark-charcoal bg-white shadow font-semibold p-3 rounded-md">
        General
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <div className="col-span-2 space-y-3">
          <div className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-md space-y-3">
            <div className="text-base dark:text-neutral-200 font-medium">
              Basis Infomation
            </div>
            <TextInput
              label="Title post"
              placeholder="Enter your name post"
              withAsterisk
              classNames={{
                label: 'dark:text-neutral-200 font-medium',
                input:
                  'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
              }}
            />

            <TextInput
              label="Slug"
              placeholder="Slug by post"
              withAsterisk
              classNames={{
                label: 'dark:text-neutral-200 font-medium',
                input:
                  'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
              }}
            />
            <Textarea
              label="Description"
              minRows={10}
              withAsterisk
              placeholder="Enter your description"
              classNames={{
                label: 'dark:text-neutral-200 font-medium',
                input:
                  'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium h-20',
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-md space-y-3">
              <div className="dark:text-neutral-200 text-sm font-medium">
                Upload Attachements
              </div>
              <div className="relative w-full border border-dashed dark:border-neutral-500 h-40 rounded-lg flex items-center justify-center">
                <input
                  type="file"
                  className="absolute top-0 left-0 w-full h-full opacity-0"
                />
                <div className="flex items-center gap-1 dark:text-blue-400 font-medium text-sm">
                  <GrCloudUpload size={25} />
                  <span>You can also drop your files here</span>
                </div>
              </div>
            </div>
            <div className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-md ">
              <div className="dark:text-neutral-200 text-sm font-medium">
                Post type
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div
              onClick={() => setIsMeta(!isMeta)}
              className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-md flex items-center justify-between"
            >
              <div className="dark:text-neutral-200 text-sm font-medium">
                SEO Meta
              </div>
              <MdKeyboardArrowDown
                size={21}
                className="dark:text-neutral-200"
              />
            </div>
            <Collapse
              in={isMeta}
              className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-md space-y-3"
            >
              <TextInput
                label="Meta title"
                placeholder="Meta title"
                withAsterisk
                classNames={{
                  label: 'dark:text-neutral-200 font-medium',
                  input:
                    'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
                }}
              />
              <Textarea
                label="Meta description"
                minRows={10}
                withAsterisk
                placeholder="Enter your description"
                classNames={{
                  label: 'dark:text-neutral-200 font-medium',
                  input:
                    'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium h-20',
                }}
              />
              <TagsInput
                label="Meta keywords"
                placeholder="Enter your keyword"
                maxTags={6}
                classNames={{
                  label: 'dark:text-neutral-200 font-medium',
                  input:
                    'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
                }}
              />
              <div className="space-y-2 max-w-[652px]">
                <div className="flex items-center gap-2">
                  <Avatar />
                  <div className="text-sm font-medium">
                    <div className="dark:text-neutral-200">toshstack.dev</div>
                    <div className="dark:text-neutral-400">{domain}</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="dark:text-blue-500 text-base font-medium">
                    How to create beautiful glowing components on React Native
                    0.76+ 121212
                  </div>
                  <div className="text-sm dark:text-neutral-300">
                    Hi, it's Takuya. I've been taking a year-end and New Year
                    break until January 20th and have been reflecting on my
                    personal goals for 2025.
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        <div className="col-span-1 space-y-3">
          <div className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-md space-y-3">
            <div className="text-base dark:text-neutral-200 font-medium">
              Classification and tagging
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Select
                label="Category"
                searchable
                withAsterisk
                data={['Guide', 'News', 'Post']}
                classNames={{
                  label: 'dark:text-neutral-200 font-medium',
                  dropdown:
                    'dark:bg-dark-charcoal dark:border-neutral-600 dark:text-neutral-200 font-medium',
                  input:
                    'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
                  option: 'dark:hover:bg-dark-charcoal-gray',
                }}
              />
              <Select
                label="Post type"
                withAsterisk
                defaultChecked
                defaultValue={'published'}
                data={[
                  {
                    value: 'published',
                    label: 'Published',
                  },
                  {
                    value: 'unpublished',
                    label: 'Unpublished',
                  },
                  {
                    value: 'draft',
                    label: 'Draft',
                  },
                ]}
                classNames={{
                  label: 'dark:text-neutral-200 font-medium',
                  dropdown:
                    'dark:bg-dark-charcoal dark:border-neutral-600 dark:text-neutral-200 font-medium',
                  input:
                    'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
                  option: 'dark:hover:bg-dark-charcoal-gray',
                }}
              />
              <Select
                className="col-span-full"
                label="Related Topics"
                searchable
                name="related-topics"
                classNames={{
                  label: 'dark:text-neutral-200 font-medium',
                  dropdown:
                    'dark:bg-dark-charcoal dark:border-neutral-600 dark:text-neutral-200 font-medium',
                  input:
                    'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
                  option: 'dark:hover:bg-dark-charcoal-gray',
                }}
              />
            </div>
          </div>
          <div className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-md space-y-3">
            <div className="dark:text-neutral-200 font-medium">Image post</div>
            <div className="w-full h-52 border-dashed border-neutral-600 border rounded-md flex items-center justify-center relative">
              <input
                className="absolute w-full h-full top-0 left-0 opacity-0"
                type="file"
              />
              <div className="flex flex-col items-center gap-1.5">
                <IoCloudUploadOutline
                  size={26}
                  className="dark:text-neutral-200"
                />
                <div className="dark:text-neutral-200 font-medium text-sm">
                  Choose a file or drag & drop it here
                </div>
                <span className="text-xs dark:text-neutral-400 font-medium">
                  JPEG, PNG, JPG, WEBP
                </span>
                <Button size="compact-xs" variant="light">
                  Browse file
                </Button>
              </div>
            </div>
          </div>
          <div className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-md space-y-3">
            <div className="dark:text-neutral-200 font-medium">
              Publishing & Visibility
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Select
                label="Post status"
                withAsterisk
                defaultChecked
                defaultValue={'published'}
                data={[
                  {
                    value: 'published',
                    label: 'Published',
                  },
                  {
                    value: 'unpublished',
                    label: 'Unpublished',
                  },
                  {
                    value: 'draft',
                    label: 'Draft',
                  },
                ]}
                classNames={{
                  label: 'dark:text-neutral-200 font-medium',
                  dropdown:
                    'dark:bg-dark-charcoal dark:border-neutral-600 dark:text-neutral-200 font-medium',
                  input:
                    'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
                  option: 'dark:hover:bg-dark-charcoal-gray',
                }}
              />
              <Select
                label="Authors"
                withAsterisk
                defaultChecked
                defaultValue={'published'}
                data={[
                  {
                    value: 'published',
                    label: 'Published',
                  },
                  {
                    value: 'unpublished',
                    label: 'Unpublished',
                  },
                  {
                    value: 'draft',
                    label: 'Draft',
                  },
                ]}
                classNames={{
                  label: 'dark:text-neutral-200 font-medium',
                  dropdown:
                    'dark:bg-dark-charcoal dark:border-neutral-600 dark:text-neutral-200 font-medium',
                  input:
                    'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
                  option: 'dark:hover:bg-dark-charcoal-gray',
                }}
              />
              <div className="space-y-3 col-span-full">
                <Checkbox
                  label="Scheduled Publish Date"
                  size="sm"
                  classNames={{
                    label: 'dark:text-neutral-200 font-medium',
                  }}
                />
                <DateTimePicker
                  placeholder="Choose date published"
                  presets={[
                    {
                      value: dayjs()
                        .subtract(1, 'day')
                        .format('YYYY-MM-DD HH:mm:ss'),
                      label: 'Yesterday',
                    },
                    {
                      value: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                      label: 'Today',
                    },
                    {
                      value: dayjs()
                        .add(1, 'day')
                        .format('YYYY-MM-DD HH:mm:ss'),
                      label: 'Tomorrow',
                    },
                    {
                      value: dayjs()
                        .add(1, 'month')
                        .format('YYYY-MM-DD HH:mm:ss'),
                      label: 'Next month',
                    },
                    {
                      value: dayjs()
                        .add(1, 'year')
                        .format('YYYY-MM-DD HH:mm:ss'),
                      label: 'Next year',
                    },
                    {
                      value: dayjs()
                        .subtract(1, 'month')
                        .format('YYYY-MM-DD HH:mm:ss'),
                      label: 'Last month',
                    },
                    {
                      value: dayjs()
                        .subtract(1, 'year')
                        .format('YYYY-MM-DD HH:mm:ss'),
                      label: 'Last year',
                    },
                  ]}
                  classNames={{
                    levelsGroup: 'w-full ',
                    input:
                      'dark:bg-dark-charcoal-gray dark:text-neutral-200 dark:border-neutral-600 font-medium',
                  }}
                  className="dark:text-neutral-200 w-full"
                />
              </div>
              <div className="col-span-full">
                <Select
                  label="Language"
                  placeholder="Choose language post"
                  searchable
                  data={[
                    {
                      label: 'Vietnam',
                      value: 'vn',
                    },
                    {
                      label: 'US',
                      value: 'us',
                    },
                  ]}
                  classNames={{
                    label: 'dark:text-neutral-200 font-medium',
                    dropdown:
                      'dark:bg-dark-charcoal dark:border-neutral-600 dark:text-neutral-200 font-medium',
                    input:
                      'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
                    option: 'dark:hover:bg-dark-charcoal-gray',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-3">
        <Button variant="light" color="red" radius={'md'}>
          Cancel
        </Button>
        <Button variant="gradient" radius={'md'}>
          Publish
        </Button>
      </div>
    </div>
  );
}

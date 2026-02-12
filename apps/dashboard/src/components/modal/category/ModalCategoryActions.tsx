import {
  Button,
  Checkbox,
  Modal,
  Select,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaPencil } from 'react-icons/fa6';
import { IoKey, IoText } from 'react-icons/io5';
import type { ModalCategoryActionsProps } from './ModalCategory.types';

export const ModalCategoryActions: React.FC<ModalCategoryActionsProps> = ({
  type,
}) => {
  const titleModal =
    type === 'update'
      ? 'Update Category'
      : type === 'create'
        ? 'Create new category'
        : 'Delete category';
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button
        onClick={open}
        radius="md"
        variant="light"
        color="grape"
        size="compact-sm"
      >
        <FaPencil size={12} />
      </Button>
      <Modal
        radius={'lg'}
        classNames={{
          title:
            'dark:text-neutral-200 dark:text-dark-slate font-medium text-base',
          content: 'dark:bg-dark-charcoal bg-white',
          body: 'dark:bg-dark-charcoal bg-white',
          header: 'dark:bg-dark-charcoal bg-white',
        }}
        opened={opened}
        onClose={close}
        title={titleModal}
        centered
      >
        <div className="w-full flex flex-col gap-3">
          <div className="w-full border border-dashed h-36 dark:border-neutral-600 rounded-lg flex items-center justify-center relative">
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-1"
            />
            <div className="space-y-0.5 text-center">
              <div className="text-sm font-medium dark:text-neutral-200">
                <b className="text-blue-500">Click to upload </b>
                or drag and drop
              </div>
              <span className="text-xs font-medium dark:text-neutral-400">
                (Max.File size:24MB)
              </span>
            </div>
          </div>
          <TextInput
            label={
              <div className="flex items-center gap-1">
                <span>Key</span>
              </div>
            }
            leftSection={<IoKey />}
            placeholder="Key"
            name="key-category"
            classNames={{
              label: 'dark:text-neutral-200 text-dark-slate font-medium',
              input:
                'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 text-dark-slate font-medium',
            }}
          />
          <TextInput
            label={
              <div className="flex items-center gap-1">
                <span>Title</span>
              </div>
            }
            name="title"
            placeholder="Title"
            leftSection={<IoText />}
            classNames={{
              label: 'dark:text-neutral-200 text-dark-slate font-medium',
              input:
                'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 text-dark-slate font-medium',
            }}
          />
          <Textarea
            label="Description"
            name="description"
            placeholder="Enter your description"
            classNames={{
              label: 'dark:text-neutral-200 text-dark-slate font-medium',
              input:
                'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 text-dark-slate font-medium',
            }}
          />

          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Type"
              name="type-category"
              data={['type-1', 'type-2']}
              placeholder="Choose type category"
              classNames={{
                label: 'dark:text-neutral-200 text-dark-slate font-medium',
                input:
                  'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 text-dark-slate font-medium',
                dropdown: 'dark:bg-dark-charcoal dark:border-neutral-700',
                option:
                  'dark:hover:bg-dark-charcoal-gray dark:text-neutral-200 font-medium',
              }}
            />
            <Select
              label="Role"
              name="role-category"
              data={['user', 'group']}
              placeholder="Choose role category"
              classNames={{
                label: 'dark:text-neutral-200 text-dark-slate font-medium',
                input:
                  'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 text-dark-slate font-medium',
                dropdown: 'dark:bg-dark-charcoal dark:border-neutral-700',
                option:
                  'dark:hover:bg-dark-charcoal-gray dark:text-neutral-200 font-medium',
              }}
            />
          </div>
          <Checkbox
            label="Is Premium"
            name="is-premium"
            classNames={{
              label: 'dark:text-neutral-200 text-dark-slate font-medium',
              input:
                'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 text-dark-slate font-medium',
            }}
          />
          <div className="flex items-center gap-1 justify-end">
            <Button variant="light" color="red" size="xs">
              Cancel
            </Button>
            <Button variant="gradient" color="blue" size="xs">
              {type === 'update'
                ? 'Update now'
                : type === 'create'
                  ? 'Create new'
                  : 'Delete'}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

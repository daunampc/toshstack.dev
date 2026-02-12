import { Button, Checkbox, Modal, Textarea, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';

export default function AddNewPostModal() {
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        radius={'md'}
        classNames={{
          body: 'dark:bg-dark-charcoal',
          header: 'dark:bg-dark-charcoal',
          content: 'dark:bg-dark-charcoal',
          title: 'dark:text-neutral-200 font-medium',
        }}
        opened={opened}
        onClose={close}
        title="Create new post"
        centered
      >
        <div className="space-y-3">
          <TextInput
            label="Title post"
            name="title-post"
            placeholder="Enter your title post"
            withAsterisk
            classNames={{
              input:
                'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 font-medium',
              label: 'dark:text-neutral-200 font-medium',
            }}
          />
          <Textarea
            label="Desription"
            name="description"
            placeholder="Enter your title post"
            classNames={{
              input:
                'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 font-medium',
              label: 'dark:text-neutral-200 font-medium',
            }}
          />
          <Checkbox
            label="Is Password"
            checked={isPassword}
            onClick={() => setIsPassword(!isPassword)}
            classNames={{ label: 'dark:text-neutral-200 font-medium' }}
          />
          {isPassword && (
            <TextInput
              label="Password"
              name="password-post"
              placeholder="Enter your password"
              withAsterisk
              type="password"
              classNames={{
                input:
                  'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 font-medium',
                label: 'dark:text-neutral-200 font-medium',
              }}
            />
          )}
          <div className="flex justify-end gap-1.5">
            <Button onClick={close} variant="light" color="red" size="xs">
              Cancel
            </Button>
            <Button variant="filled" color="blue" size="xs">
              Create
            </Button>
          </div>
        </div>
      </Modal>
      <div
        onClick={open}
        className="dark:bg-dark-charcoal shadow p-16 rounded-lg flex flex-col items-center"
      >
        <HiOutlineClipboardDocumentList
          size={38}
          className="dark:text-slate-200"
        />
        <div className="font-medium dark:text-slate-200 text-center">
          Create new post
        </div>
      </div>
    </>
  );
}

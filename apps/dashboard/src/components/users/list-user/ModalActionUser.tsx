import { useDisclosure } from '@mantine/hooks';
import { Button, Modal, Select, TextInput } from '@mantine/core';
import { RiEdit2Line } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';
import { useState } from 'react';
import type {
  ModalChangeUserProps,
  ModalChangeUserType,
} from './ListUser.types';
import { FaEye } from 'react-icons/fa6';
import { Link } from 'react-router';
import { ModalConfirm } from '@/components/ui/modal';

const ModalChangeUser: React.FC<ModalChangeUserProps> = ({ onClose }) => {
  return (
    <div className="space-y-3">
      <TextInput
        label="ID"
        radius={'md'}
        disabled
        classNames={{
          label: 'dark:text-neutral-200 text-dark-slate',
          input:
            'dark:bg-dark-charcoal-gray dark:border-neutral-600 dark:text-neutral-200 text-dark-slate',
        }}
        value={'03075970-07d8-41be-9bde-b3df559fb51c'}
      />
      <div className="flex gap-3">
        <TextInput
          label="First name"
          radius={'md'}
          className="flex-1"
          classNames={{
            label: 'dark:text-neutral-200 text-dark-slate',
            input:
              'dark:bg-dark-charcoal-gray dark:border-neutral-600 dark:text-neutral-200 text-dark-slate',
          }}
          placeholder="Your first Name"
        />
        <TextInput
          label="First name"
          radius={'md'}
          className="flex-1"
          classNames={{
            label: 'dark:text-neutral-200 text-dark-slate',
            input:
              'dark:bg-dark-charcoal-gray dark:border-neutral-600 dark:text-neutral-200 text-dark-slate',
          }}
          placeholder="Your first Name"
        />
      </div>
      <TextInput
        label="Email"
        radius={'md'}
        required
        className="flex-1"
        classNames={{
          label: 'dark:text-neutral-200 text-dark-slate',
          input:
            'dark:bg-dark-charcoal-gray dark:border-neutral-600 dark:text-neutral-200 text-dark-slate',
        }}
        placeholder="Your email"
      />
      <div className="flex gap-3">
        <Select
          placeholder="Your Role"
          radius={'md'}
          label="Role"
          required
          data={['Admin', 'Editor', 'Developer']}
          classNames={{
            label: 'dark:text-neutral-200 text-dark-slate',
            input:
              'dark:bg-dark-charcoal-gray dark:border-neutral-600 dark:text-neutral-200 text-dark-slate',
            dropdown:
              'dark:bg-dark-charcoal dark:border-neutral-600 dark:text-neutral-200 font-medium',
            option: 'dark:hover:dark:bg-neutral-800',
          }}
        />
        <Select
          label="Status"
          radius={'md'}
          required
          className="flex-1"
          data={['Locked', 'Active', 'Pending', 'Inactive']}
          classNames={{
            label: 'dark:text-neutral-200 text-dark-slate',
            input:
              'dark:bg-dark-charcoal-gray dark:border-neutral-600 dark:text-neutral-200 text-dark-slate',
            dropdown:
              'dark:bg-dark-charcoal dark:border-neutral-600 dark:text-neutral-200 font-medium',
            option: 'dark:hover:dark:bg-neutral-800',
          }}
          placeholder="Your email"
        />
      </div>
      <div onClick={onClose} className="flex justify-end gap-2">
        <Button variant="light" color="red">
          Cancel
        </Button>

        <Button variant="" color="blue">
          Update
        </Button>
      </div>
    </div>
  );
};
export default function ModalActionUser() {
  const [opened, { open, close }] = useDisclosure(false);
  const [typeAction, setTypeAction] = useState<ModalChangeUserType>('EDIT');

  const handleModal = (type: ModalChangeUserType) => {
    setTypeAction(type);
    open();
  };
  return (
    <>
      <div className="flex items-center gap-1">
        <Button
          onClick={() => handleModal('EDIT')}
          variant="filled"
          color="indigo"
          size="compact-xs"
        >
          <RiEdit2Line />
        </Button>
        <ModalConfirm
          title="Delete account"
          description="This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed."
          onCancel={() => {}}
          onConfirm={() => {}}
        >
          <Button variant="filled" color="red" size="compact-xs">
            <MdDeleteOutline />
          </Button>
        </ModalConfirm>
        <Button
          to={
            'c364568c-dd74-484f-b487-a0739cc06ecb?action=view&tab=user_profile'
          }
          component={Link}
          size="compact-xs"
          variant="filled"
          color="orange"
        >
          <FaEye />
        </Button>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        radius={'md'}
        title={
          typeAction === 'EDIT' ||
          typeAction === 'UPDATED' ||
          typeAction === 'CREATED'
            ? 'Change user'
            : 'Delete user'
        }
        className=""
        classNames={{
          content: 'dark:bg-dark-charcoal',
          title: 'text-lg font-semibold',
          header: 'bg-transparent dark:text-neutral-200 text-dark-slate ',
        }}
        centered
      >
        <ModalChangeUser onClose={close} type={typeAction} />
      </Modal>
    </>
  );
}

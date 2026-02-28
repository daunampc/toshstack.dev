'use client';

import { ActionIcon, Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TbEditCircle } from 'react-icons/tb';
import { ModalImageEditProps } from '../model/types';
import Image from 'next/image';
import { FaRegTrashCan } from 'react-icons/fa6';

export function ModalImageEdit({ images, onRemove }: ModalImageEditProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button
        onClick={open}
        size="compact-sm"
        variant="light"
        radius="xl"
        leftSection={<TbEditCircle />}
      >
        Edit
      </Button>
      <Modal
        radius={'md'}
        classNames={{ title: 'font-medium' }}
        size={'xl'}
        title="Edit gallery"
        centered
        opened={opened}
        onClose={close}
      >
        <div className="grid grid-cols-3 gap-3">
          {images.map((it, idx) => {
            return (
              <div key={idx} className="relative w-full">
                <Image
                  alt="image"
                  width={800}
                  height={800}
                  className="w-full h-[180px] object-contain"
                  src={URL.createObjectURL(it)}
                />
                <div className="absolute top-0 right-0">
                  <ActionIcon
                    onClick={() => onRemove(idx)}
                    variant="light"
                    color="red"
                    size={'xs'}
                    radius={'xl'}
                  >
                    <FaRegTrashCan />
                  </ActionIcon>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
}

import type { ModalConfirmProps } from './modal.types';
import { modals } from '@mantine/modals';

export default function ModalConfirm({
  title,
  description,
  onCancel,
  onConfirm,
  children,
}: ModalConfirmProps) {
  const openModal = () =>
    modals.openConfirmModal({
      title: <div className="dark:text-neutral-200 font-semibold">{title}</div>,
      children: (
        <div className="text-sm dark:text-neutral-300">{description}</div>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel,
      onConfirm,
      classNames: {
        header: 'dark:bg-dark-charcoal',
        body: 'dark:bg-dark-charcoal',
        content: 'dark:bg-dark-charcoal',
        root: 'dark:bg-dark-charcoal',
      },
      centered: true,
    });
  return <div onClick={openModal}>{children}</div>;
}

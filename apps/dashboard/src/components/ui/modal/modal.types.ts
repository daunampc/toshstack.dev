export interface ModalConfirmProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

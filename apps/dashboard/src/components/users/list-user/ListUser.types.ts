export type ModalChangeUserType = 'EDIT' | 'CREATED' | 'UPDATED' | 'DELETE';
export interface ModalChangeUserProps {
  type: ModalChangeUserType;
  onClose: () => void;
}

export interface ModalWindowsSharedProps<T> {
  onClose: () => void;
  onSave: (data: T) => void | Promise<void>;
}

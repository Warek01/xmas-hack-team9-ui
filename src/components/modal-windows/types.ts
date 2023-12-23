import { AddOptions } from '@/pages/Timetable/enums';

export interface ModalWindowsSharedProps<T> {
  onClose: () => void;
  onSave: (data: ModalWindowReturnType<T>) => void | Promise<void>;
}

export interface ModalWindowReturnType<T> {
  type: AddOptions;
  data: T;
}

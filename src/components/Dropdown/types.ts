import type { Dispatch, SetStateAction } from 'react';

export interface DropdownProps {
  options: string[];
  selectedOption?: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  className?: string;
  placeholder?: string;
}

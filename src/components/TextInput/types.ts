import { Dispatch, SetStateAction } from 'react';

export interface TextInputProps {
  placeholder?: string;
  name?: string;
  className?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
  type?: 'text' | 'password' | 'number';
}

import type { Dispatch, SetStateAction } from 'react';
import type { IconComponent } from '@/types/icon-component';

export interface TextInputProps {
  placeholder?: string;
  name?: string;
  className?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
  type?: 'text' | 'password' | 'number';
  Icon?: IconComponent;
  min?: number;
  max?: number;
}

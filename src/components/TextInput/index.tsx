import { FC, memo, useId } from 'react';

import { cn } from '@helpers/cn';

import type { TextInputProps } from './types';

const TextInput: FC<TextInputProps> = ({
  name,
  className,
  value,
  setValue,
  placeholder,
  disabled = false,
  type = 'text',
}) => {
  const id = useId();

  return (
    <div
      className={cn(
        'rounded-full py-1 px-3 bg-white overflow-hidden w-full',
        className,
      )}
    >
      <input
        placeholder={placeholder}
        name={name ?? id}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        disabled={disabled}
        type={type}
        className="focus-within:outline-none text-secondary placeholder:text-[]"
      />
    </div>
  );
};

export default memo(TextInput);

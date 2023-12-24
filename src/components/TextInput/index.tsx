import { FC, memo, useId } from 'react';

import { cn } from '@helpers/cn';

import type { TextInputProps } from './types';

const TextInput: FC<TextInputProps> = ({
  name,
  className,
  value,
  setValue,
  placeholder,
  Icon,
  min,
  max,
  disabled = false,
  type = 'text',
}) => {
  const id = useId();

  return (
    <div
      className={cn(
        'flex justify-between rounded-full py-1 px-3 bg-white overflow-hidden w-full',
        className,
      )}
    >
      <input
        placeholder={placeholder}
        name={name ?? id}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        type={type}
        className="focus-within:outline-none text-secondary flex-1"
      />
      {Icon && <Icon className="fill-light-gray" width={25} height={25} />}
    </div>
  );
};

export default memo(TextInput);

import { FC, memo } from 'react';
import classNames from 'classnames';

import { cn } from '@helpers/cn';
import * as icons from '@icons';

import type { DropdownProps } from './types';

const Dropdown: FC<DropdownProps> = ({
  className,
  options,
  selectedOption,
  setSelectedOption,
  placeholder,
}) => {
  return (
    <div className={cn('cursor-pointer group w-fit -mb-1 pb-1', className)}>
      <div className="bg-white flex items-center gap-1 rounded-full w-fit px-3 py-1.5">
        <span className={selectedOption ? 'text-secondary' : 'text-light-gray'}>
          {selectedOption ?? placeholder}
        </span>
        <icons.Chevron className="fill-light-gray" width={25} height={25} />
      </div>
      <ul
        className="absolute flex w-fit flex-col mt-1 group-hover:h-fit h-0 overflow-hidden
        bg-white rounded-lg duration-100 ease-in-out"
      >
        {options.map((option) => (
          <li
            key={option}
            onClick={() => setSelectedOption(option)}
            className={classNames(
              'text-secondary min-w-24 px-3 py-1.5 hover:bg-black/10',
              {
                'bg-black/10': selectedOption === option,
              },
            )}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Dropdown);

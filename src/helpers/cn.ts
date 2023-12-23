import classNames, { ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

// apply classnames + twMerge
export const cn = (...args: ArgumentArray) => twMerge(classNames(...args));

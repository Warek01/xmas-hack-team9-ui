import { FC, memo, PropsWithChildren, useEffect } from 'react';

import { Modal } from '@components';
import * as icons from '@icons';

import type { ModalWindowProps } from './types';

const ModalWindow: FC<PropsWithChildren<ModalWindowProps>> = ({
  children,
  onClose,
  title,
}) => {
  useEffect(() => {
    document.querySelector('*').scrollTo({ top: 0, left: 0 });
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  return (
    <Modal>
      <div className="absolute inset-0 w-screen h-screen flex items-center justify-center z-50 bg-black/30">
        <div className="bg-primary rounded-2xl p-5 relative drop-shadow-2xl flex flex-col">
          <div className="flex items-center justify-between gap-4 pb-1">
            <p className="text-white text-[18px]">{title}</p>
            <button
              className="group hover:bg-black/10 duration-100 p-1 rounded-full"
              onClick={() => onClose()}
            >
              <icons.CloseCircle
                className="fill-secondary group-hover:fill-black duration-100"
                width={25}
                height={25}
              />
            </button>
          </div>

          {children}
        </div>
      </div>
    </Modal>
  );
};

export default memo(ModalWindow);

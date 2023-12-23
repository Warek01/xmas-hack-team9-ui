import { FC, memo, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { ModalWindow, TextInput } from '@components';
import type { ModalWindowsSharedProps } from '@components/modal-windows/types';
import type { AddRoom } from '@/types/add-entities';
import { hasNullishValue } from '@helpers/has-nullish-value';

const CreateRoomModal: FC<ModalWindowsSharedProps<AddRoom>> = ({
  onClose,
  onSave,
}) => {
  const [name, setName] = useState<string>('');
  const [peopleCount, setPeopleCount] = useState<string>('');
  const [isLab, setIsLab] = useState<boolean>(false);

  const handleSave = useCallback(() => {
    if (hasNullishValue([isLab, peopleCount, name])) {
      toast('All values must be filled', { type: 'warning' });
      return;
    }

    onSave({
      isLab,
      peopleCount: parseInt(peopleCount),
      name,
    });

    onClose();
  }, [onSave, isLab, peopleCount, name, onClose]);

  return (
    <ModalWindow title="Add room" onClose={onClose}>
      <div className="flex flex-col gap-1.5">
        <TextInput
          value={name}
          setValue={setName}
          name="name"
          placeholder="Room name"
        />
        <TextInput
          value={peopleCount}
          setValue={setPeopleCount}
          type="number"
          name="people-count"
          placeholder="No. of people"
        />
        <label className="flex items-center gap-2">
          <span className="text-white">Laboratory</span>
          <input
            type="checkbox"
            name="is-lab"
            className="focus-within:outline-none"
            onChange={(e) => setIsLab(e.target.checked)}
            checked={isLab}
          />
        </label>
        <button
          className="px-3 py-1.5 bg-secondary rounded-full w-fit text-white font-medium self-end"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </ModalWindow>
  );
};

export default memo(CreateRoomModal);

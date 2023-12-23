import { FC, memo, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { ModalWindow, TextInput } from '@components';
import type { ModalWindowsSharedProps } from '@components/modal-windows/types';
import type { AddProfessor } from '@/types/add-entities';
import { hasNullishValue } from '@helpers/has-nullish-value';

const CreateProfessorModal: FC<ModalWindowsSharedProps<AddProfessor>> = ({
  onClose,
  onSave,
}) => {
  const [name, setName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [isLab, setIsLab] = useState<boolean>(false);
  const [mondayCourses, setMondayCourses] = useState<string>('');
  const [tuesdayCourses, setTuesdayCourses] = useState<string>('');
  const [wednesdayCourses, setWednesdayCourses] = useState<string>('');
  const [thursdayCourses, setThursdayCourses] = useState<string>('');
  const [fridayCourses, setFridayCourses] = useState<string>('');
  const [saturdayCourses, setSaturdayCourses] = useState<string>('');

  const handleSave = useCallback(() => {
    if (
      hasNullishValue([
        isLab,
        name,
        subject,
        mondayCourses,
        tuesdayCourses,
        wednesdayCourses,
        thursdayCourses,
        fridayCourses,
        saturdayCourses,
      ])
    ) {
      toast('All values must be filled', { type: 'warning' });
      return;
    }

    // onSave({
    //   isLab,
    //   name,
    // });

    onClose();
  }, [
    onSave,
    onClose,
    isLab,
    name,
    subject,
    mondayCourses,
    tuesdayCourses,
    wednesdayCourses,
    thursdayCourses,
    fridayCourses,
    saturdayCourses,
  ]);

  return (
    <ModalWindow title="Add professor" onClose={onClose}>
      <div className="flex flex-col gap-1.5">
        <TextInput
          value={name}
          setValue={setName}
          name="name"
          placeholder="Name"
        />
        <TextInput
          value={subject}
          setValue={setSubject}
          name="subject"
          placeholder="Subject"
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

export default memo(CreateProfessorModal);

import { FC, memo, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { ModalWindow, TextInput } from '@components';
import type { ModalWindowsSharedProps } from '@components/modal-windows/types';
import type { AddProfessor } from '@/types/add-entities';
import { hasNullishValue } from '@helpers/has-nullish-value';
import { convertCoursesToArr } from '@helpers/convert-courses-to-arr';
import { AddOptions } from '@/pages/Timetable/enums';

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
    if (hasNullishValue([isLab, name, subject])) {
      toast('All values must be filled', { type: 'warning' });
      return;
    }

    onSave({
      type: AddOptions.PROF,
      data: {
        isLab,
        name,
        subject,
        mondayCourses: convertCoursesToArr(mondayCourses.split(',')),
        tuesdayCourses: convertCoursesToArr(tuesdayCourses.split(',')),
        wednesdayCourses: convertCoursesToArr(wednesdayCourses.split(',')),
        thursdayCourses: convertCoursesToArr(thursdayCourses.split(',')),
        fridayCourses: convertCoursesToArr(fridayCourses.split(',')),
        saturdayCourses: convertCoursesToArr(saturdayCourses.split(',')),
      },
    });

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
        <TextInput
          value={mondayCourses}
          setValue={setMondayCourses}
          name="monday-courses"
          placeholder="Monday courses"
        />
        <TextInput
          value={tuesdayCourses}
          setValue={setTuesdayCourses}
          name="tuesday-courses"
          placeholder="Tuesday courses"
        />
        <TextInput
          value={wednesdayCourses}
          setValue={setWednesdayCourses}
          name="wednesday-courses"
          placeholder="Wednesday courses"
        />
        <TextInput
          value={thursdayCourses}
          setValue={setThursdayCourses}
          name="thursday-courses"
          placeholder="Thursday courses"
        />
        <TextInput
          value={fridayCourses}
          setValue={setFridayCourses}
          name="friday-courses"
          placeholder="Friday courses"
        />
        <TextInput
          value={saturdayCourses}
          setValue={setSaturdayCourses}
          name="saturday-courses"
          placeholder="Saturday courses"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="is-lab"
            className="focus-within:outline-none"
            onChange={(e) => setIsLab(e.target.checked)}
            checked={isLab}
          />
          <span className="text-white">Laboratory</span>
        </label>
        <button
          className="px-3 py-1.5 mt-5 bg-secondary rounded-full w-fit text-white font-medium self-end"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </ModalWindow>
  );
};

export default memo(CreateProfessorModal);

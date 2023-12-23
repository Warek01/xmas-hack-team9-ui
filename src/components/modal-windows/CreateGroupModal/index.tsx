import { FC, memo, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { Dropdown, ModalWindow, TextInput } from '@components';
import type { ModalWindowsSharedProps } from '@components/modal-windows/types';
import { supportedLanguages } from '@constants/supported-languages';
import type { AddGroup } from '@/types/add-entities';
import { hasNullishValue } from '@helpers/has-nullish-value';

const CreateGroupModal: FC<ModalWindowsSharedProps<AddGroup>> = ({
  onClose,
  onSave,
}) => {
  const [speciality, setSpeciality] = useState<string>('');
  const [peopleCount, setPeopleCount] = useState<string>('');
  const [subjectIds, setSubjectIds] = useState<string>('');
  const [language, setLanguage] = useState<string>(null);

  const handleSave = useCallback(() => {
    if (hasNullishValue([speciality, peopleCount, subjectIds, language])) {
      toast('All values must be filled', { type: 'warning' });
      return;
    }

    onSave({
      peopleCount: parseInt(peopleCount),
      subjectIds: subjectIds.split(',').map((sub) => sub.trim()),
      speciality,
      language,
    });

    onClose();
  }, [onSave, speciality, peopleCount, subjectIds, language, onClose]);

  return (
    <ModalWindow title="Add group" onClose={onClose}>
      <div className="flex flex-col gap-1.5">
        <TextInput
          value={speciality}
          setValue={setSpeciality}
          name="speciality"
          placeholder="Speciality"
        />
        <TextInput
          value={peopleCount}
          setValue={setPeopleCount}
          type="number"
          name="people-count"
          placeholder="No. of people"
        />
        <TextInput
          value={subjectIds}
          setValue={setSubjectIds}
          name="subject-ids"
          placeholder="Subject IDs"
        />
        <Dropdown
          options={supportedLanguages}
          selectedOption={language}
          setSelectedOption={setLanguage}
          placeholder="Language"
        />
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

export default memo(CreateGroupModal);

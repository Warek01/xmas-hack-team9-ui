import { FC, memo, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { ModalWindow, TextInput } from '@components';
import type { ModalWindowsSharedProps } from '@components/modal-windows/types';
import type { AddSubject } from '@/types/add-entities';
import { hasNullishValue } from '@helpers/has-nullish-value';
import { AddOptions } from '@/pages/Timetable/enums';

const CreateSubjectModal: FC<ModalWindowsSharedProps<AddSubject>> = ({
  onClose,
  onSave,
}) => {
  const [courseName, setCourseName] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [semester, setSemester] = useState<string>('');
  const [theoryHoursCount, setTheoryHoursCount] = useState<string>('');
  const [practiceHoursCount, setPracticeHoursCount] = useState<string>('');
  const [labHoursCount, setLabHoursCount] = useState<string>('');
  const [totalHoursCount, setTotalHoursCount] = useState<string>('');

  const handleSave = useCallback(() => {
    if (
      hasNullishValue([
        courseName,
        year,
        semester,
        theoryHoursCount,
        practiceHoursCount,
        labHoursCount,
        totalHoursCount,
      ])
    ) {
      toast('All values must be filled', { type: 'warning' });
      return;
    }

    onSave({
      type: AddOptions.SUB,
      data: {
        courseName,
        year: parseInt(year),
        semester: parseInt(semester),
        theoryHoursCount: parseInt(theoryHoursCount),
        practiceHoursCount: parseInt(practiceHoursCount),
        labHoursCount: parseInt(labHoursCount),
        totalHoursCount: parseInt(totalHoursCount),
      },
    });
    onClose();
  }, [
    onSave,
    onClose,
    courseName,
    year,
    semester,
    theoryHoursCount,
    practiceHoursCount,
    labHoursCount,
    totalHoursCount,
  ]);

  return (
    <ModalWindow title="Add subject" onClose={onClose}>
      <div className="flex flex-col gap-1.5">
        <TextInput
          value={courseName}
          setValue={setCourseName}
          name="course-name"
          placeholder="Course name"
        />
        <TextInput
          value={year}
          setValue={setYear}
          name="year"
          type="number"
          placeholder="Year"
        />
        <TextInput
          value={semester}
          setValue={setSemester}
          name="semester"
          type="number"
          placeholder="Semester"
        />
        <TextInput
          value={theoryHoursCount}
          setValue={setTheoryHoursCount}
          name="theory-hours-count"
          type="number"
          placeholder="No. of theory hours"
        />
        <TextInput
          value={practiceHoursCount}
          setValue={setPracticeHoursCount}
          name="practice-hours-count"
          type="number"
          placeholder="No. of practice hours"
        />
        <TextInput
          value={labHoursCount}
          setValue={setLabHoursCount}
          name="lab-hours-count"
          type="number"
          placeholder="No. of laboratory hours"
        />
        <TextInput
          value={totalHoursCount}
          setValue={setTotalHoursCount}
          name="total-hours-count"
          type="number"
          placeholder="Total no. hours"
        />
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

export default memo(CreateSubjectModal);

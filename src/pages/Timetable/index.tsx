import { FC, memo, useEffect, useMemo, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { Link } from 'react-router-dom';

import { Dropdown, Tabs, Table } from '@components';
import { AppRoute } from '@enums/app-route';
import {
  CreateGroupModal,
  CreateProfessorModal,
  CreateRoomModal,
  CreateSubjectModal,
} from '@components/modal-windows';
import type { ModalWindowsSharedProps } from '@components/modal-windows/types';

import { Year, Semester, AddOptions } from './enums';
import { ScheduleDetails } from '@components/Table/types';

// const scheduleDetails = {
//   'AI-213': {
//     'Monday-8:00 - 9:30': {
//       subject: 'Math',
//       room: 'Room 101',
//       professorName: 'Placeholder Professor',
//     },
//     'Monday-9:45 - 11:15': {
//       subject: 'Physics',
//       room: 'Room 101',
//       professorName: 'Placeholder Professor',
//     },
//     'Monday-11:30 - 13:00': {
//       subject: 'History',
//       room: 'Lab 1',
//       professorName: 'Placeholder Professor',
//     },
//     'Tuesday-8:00 - 9:30': {
//       subject: 'Biology',
//       room: 'Room 102',
//       professorName: 'Placeholder Professor',
//     },
//   },
//   'BI-118': {
//     'Monday-8:00 - 9:30': {
//       subject: 'Chemistry',
//       room: 'Lab 2',
//       professorName: 'Placeholder Professor',
//     },
//     'Monday-9:45 - 11:15': {
//       subject: 'English',
//       room: 'Room 103',
//       professorName: 'Placeholder Professor',
//     },
//     'Monday-11:30 - 13:00': {
//       subject: 'Art',
//       room: 'Room 201',
//       professorName: 'Placeholder Professor',
//     },
//     'Tuesday-8:00 - 9:30': {
//       subject: 'Computer Science',
//       room: 'Lab 3',
//       professorName: 'Placeholder Professor',
//     },
//   },
//   'BI-119': {
//     'Monday-8:00 - 9:30': {
//       subject: 'Chemistry',
//       room: 'Lab 2',
//       professorName: 'Placeholder Professor',
//     },
//     'Monday-9:45 - 11:15': {
//       subject: 'English',
//       room: 'Room 103',
//       professorName: 'Placeholder Professor',
//     },
//     'Monday-11:30 - 13:00': {
//       subject: 'Art',
//       room: 'Room 201',
//       professorName: 'Placeholder Professor',
//     },
//     'Tuesday-8:00 - 9:30': {
//       subject: 'Computer Science',
//       room: 'Lab 3',
//       professorName: 'Placeholder Professor',
//     },
//   },
//   'BI-120': {
//     'Monday-8:00 - 9:30': {
//       subject: 'Chemistry',
//       room: 'Lab 2',
//       professorName: 'Placeholder Professor',
//     },
//     'Monday-9:45 - 11:15': {
//       subject: 'English',
//       room: 'Room 103',
//       professorName: 'Placeholder Professor',
//     },
//     'Monday-11:30 - 13:00': {
//       subject: 'Art',
//       room: 'Room 201',
//       professorName: 'Placeholder Professor',
//     },
//     'Tuesday-8:00 - 9:30': {
//       subject: 'Computer Science',
//       room: 'Lab 3',
//       professorName: 'Placeholder Professor',
//     },
//   },
// };

const academicGroups = [
  'AI-213',
  'BI-118',
  'BI-119',
  'BI-120',
  'BI-121',
  'BI-122',
  'BI-123',
];

const TimetablePage: FC = () => {
  const [year = Year.FIRST, setYear] = useQueryParam<string>(
    'year',
    StringParam,
  );
  const [semester = Semester.FIRST, setSemester] = useQueryParam<string>(
    'semester',
    StringParam,
  );
  const [scheduleDetails, setScheduleDetails] = useState<any>(null);

  const [modalOpen, setModalOpen] = useState<string>(null);

  const openedModalElement = useMemo(() => {
    let Component: FC<ModalWindowsSharedProps<unknown>>;

    switch (modalOpen) {
      case AddOptions.GROUP:
        Component = CreateGroupModal;
        break;
      case AddOptions.PROF:
        Component = CreateProfessorModal;
        break;
      case AddOptions.SUB:
        Component = CreateSubjectModal;
        break;
      case AddOptions.ROOM:
        Component = CreateRoomModal;
        break;
    }

    return (
      <Component
        onClose={() => setModalOpen(null)}
        onSave={(e) => console.log(e)}
      />
    );
  }, [modalOpen]);

  useEffect(() => {
    (async () => {
      const req = await fetch('http://localhost:3000/api/schedule', {

      });
      const data = await req.json();
      console.log(data);
      setScheduleDetails(data);
    })();
  }, [year, semester]);

  return (
    <>
      {modalOpen && openedModalElement}
      <div className="flex flex-col overflow-auto">
        <div className="flex justify-between items-center pb-10 pt-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Current timetable</h1>
            <p className="max-w-[788px] text-xl">
              Welcome to your centralized scheduling hub. Here, you can view the
              current timetable and quickly manage the schedule.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to={AppRoute.RESOURCES}
              className="px-3 py-2.5 rounded-full duration-100 bg-secondary hover:bg-secondary/70"
            >
              View resources
            </Link>
            <Dropdown
              options={Object.values(AddOptions)}
              setSelectedOption={setModalOpen}
              selectedOption={modalOpen}
              placeholder="Add"
            />
          </div>
        </div>

        <nav className="flex items-center justify-between">
          <Tabs
            tabs={Object.values(Year)}
            selectedTab={year}
            setSelectedTab={setYear}
          />
          <Tabs
            tabs={Object.values(Semester)}
            selectedTab={semester}
            setSelectedTab={setSemester}
          />
        </nav>

        <main className="oveflow-auto">
          {scheduleDetails && (
            <Table
              academicGroups={academicGroups}
              scheduleDetails={scheduleDetails as unknown as ScheduleDetails}
            />
          )}
        </main>
      </div>
    </>
  );
};

export default memo(TimetablePage);

import { FC, memo, useEffect, useMemo, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { Link } from 'react-router-dom';

import { Dropdown, Tabs } from '@components';
import { AppRoute } from '@enums/app-route';
import {
  CreateGroupModal,
  CreateProfessorModal,
  CreateRoomModal,
  CreateSubjectModal,
} from '@components/modal-windows';
import type { ModalWindowsSharedProps } from '@components/modal-windows/types';

import { Year, Semester, AddOptions } from './enums';

const TimetablePage: FC = () => {
  const [year = Year.FIRST, setYear] = useQueryParam<string>(
    'year',
    StringParam,
  );
  const [semester = Semester.FIRST, setSemester] = useQueryParam<string>(
    'semester',
    StringParam,
  );

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
    // TODO: table query
    console.log(year, semester);
  }, [year, semester]);

  return (
    <>
      {modalOpen && openedModalElement}
      <div className="flex flex-col">
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

        <main>{/*  TODO: table */}</main>
      </div>
    </>
  );
};

export default memo(TimetablePage);

import { FC, memo, useEffect, useState } from 'react';
import { Tabs } from '@components';
import { StringParam, useQueryParam } from 'use-query-params';

import { Tabs as TabsEnum } from './enums';

const profMocks = [
  { name: 'John Withcer', subject: 'Test', type: 'TEOR,PRACT' },
  { name: 'Vlad Crucerescu', subject: 'Test', type: 'TEOR,PRACT' },
  { name: 'Kern', subject: 'Test', type: 'TEOR,PRACT' },
  { name: 'John Withcer', subject: 'Test', type: 'TEOR,PRACT' },
];

const subjMocks = [
  {
    name: 'ALGO',
    theory: '30',
    practice: '30',
    labs: '25',
    total: '2',
    year: 1,
    sem: 2,
  },
  {
    name: 'ALGO',
    theory: '30',
    practice: '30',
    labs: '25',
    total: '2',
    year: 1,
    sem: 2,
  },
  {
    name: 'ALGO',
    theory: '30',
    practice: '30',
    labs: '25',
    total: '2',
    year: 1,
    sem: 2,
  },
];

const roomsMock = [
  {
    name: '3-3',
    isLab: false,
    peopleCount: 300,
  },
  {
    name: '3-3',
    isLab: false,
    peopleCount: 300,
  },
  {
    name: '3-3',
    isLab: false,
    peopleCount: 300,
  },
  {
    name: '3-3',
    isLab: false,
    peopleCount: 300,
  },
];

const ResourcesPage: FC = () => {
  const [tab = TabsEnum.GROUPS, setTab] = useQueryParam('tab', StringParam);
  const [groups, setGroups] = useState<any[]>([]);

  const groupsTab = (
    <>
      <header className="h-[90px] w-full flex divide-x divide-black font-bold">
        <div className="w-[15%] h-full flex items-center justify-center">
          Speciality Name
        </div>
        <div className="w-[15%] h-full flex items-center justify-center">
          Language
        </div>
        <div className="w-[15%] h-full flex items-center justify-center">
          No. of people
        </div>
        <div className="w-[55%] h-full flex items-center justify-center">
          Subjects
        </div>
      </header>
      <main className="w-full border-t border-black flex flex-col divide-y divide-black">
        {groups.map((m, i) => (
          <div key={i} className="h-[90px] w-full flex divide-x divide-black">
            <div className="w-[15%] h-full flex items-center justify-center">
              {m.name}
            </div>
            <div className="w-[15%] h-full flex items-center justify-center">
              {m.language}
            </div>
            <div className="w-[15%] h-full flex items-center justify-center">
              {m.peopleCount}
            </div>
            <div className="overflow-x-auto w-[55%] h-full flex items-center justify-start px-8 text-ellipsis overflow-hidden text-nowrap">
              {m.subjects
                ?.slice(1)
                .reduce((s1, s2) => s1 + ', ' + s2, m.subjects[0])}
            </div>
          </div>
        ))}
      </main>
    </>
  );

  const profsTab = (
    <>
      <header className="h-[90px] w-full flex divide-x divide-black font-bold">
        <div className="w-[33.33%] h-full flex items-center justify-center">
          Name
        </div>
        <div className="w-[33.33%] h-full flex items-center justify-center">
          Subject
        </div>
        <div className="w-[33.33%] h-full flex items-center justify-center">
          Type
        </div>
      </header>
      <main className="w-full border-t border-black flex flex-col divide-y divide-black">
        {profMocks.map((p, i) => (
          <div key={i} className="h-[90px] w-full flex divide-x divide-black">
            <div className="w-[33.33%] h-full flex items-center justify-center">
              {p.name}
            </div>
            <div className="w-[33.33%] h-full flex items-center justify-center">
              {p.subject}
            </div>
            <div className="w-[33.33%] h-full flex items-center justify-center">
              {p.type}
            </div>
          </div>
        ))}
      </main>
    </>
  );

  const roomsTab = (
    <>
      <header className="h-[90px] w-full flex divide-x divide-black font-bold">
        <div className="w-[33.33%] h-full flex items-center justify-center">
          Name
        </div>
        <div className="w-[33.33%] h-full flex items-center justify-center">
          Laboratory
        </div>
        <div className="w-[33.33%] h-full flex items-center justify-center">
          People count
        </div>
      </header>
      <main className="w-full border-t border-black flex flex-col divide-y divide-black">
        {roomsMock.map((r, i) => (
          <div key={i} className="h-[90px] w-full flex divide-x divide-black">
            <div className="w-[33.33%] h-full flex items-center justify-center">
              {r.name}
            </div>
            <div className="w-[33.33%] h-full flex items-center justify-center">
              {r.isLab ? 'Yes' : 'No'}
            </div>
            <div className="w-[33.33%] h-full flex items-center justify-center">
              {r.peopleCount}
            </div>
          </div>
        ))}
      </main>
    </>
  );

  const subjTab = (
    <>
      <header className="h-[90px] w-full flex divide-x divide-black font-bold">
        <div className="w-[20%] h-full flex items-center justify-center">
          Name
        </div>
        <div className="w-[13.33%] h-full flex items-center justify-center">
          Theory
        </div>
        <div className="w-[13.33%] h-full flex items-center justify-center">
          Practice
        </div>
        <div className="w-[13.33%] h-full flex items-center justify-center">
          Lab
        </div>
        <div className="w-[13.33%] h-full flex items-center justify-center">
          Total
        </div>
        <div className="w-[13.33%] h-full flex items-center justify-center">
          Year
        </div>
        <div className="w-[13.33%] h-full flex items-center justify-center">
          Semester
        </div>
      </header>
      <main className="w-full border-t border-black flex flex-col divide-y divide-black">
        {subjMocks.map((s, i) => (
          <div key={i} className="h-[90px] w-full flex divide-x divide-black">
            <div className="w-[20%] h-full flex items-center justify-center">
              {s.name}
            </div>
            <div className="w-[13.33%] h-full flex items-center justify-center">
              {s.theory}
            </div>
            <div className="w-[13.33%] h-full flex items-center justify-center">
              {s.practice}
            </div>
            <div className="w-[13.33%] h-full flex items-center justify-center">
              {s.labs}
            </div>
            <div className="w-[13.33%] h-full flex items-center justify-center">
              {s.total}
            </div>
            <div className="w-[13.33%] h-full flex items-center justify-center">
              {s.year}
            </div>
            <div className="w-[13.33%] h-full flex items-center justify-center">
              {s.sem}
            </div>
          </div>
        ))}
      </main>
    </>
  );

  let shownTab: any;

  useEffect(() => {
    switch (tab) {
      case TabsEnum.GROUPS:
        (async () => {
          const req = await fetch('http://localhost:3000/api/groups');
          setGroups(await req.json());
        })();
        break;
    }
  }, [tab]);

  switch (tab) {
    case TabsEnum.GROUPS:
      shownTab = groupsTab;
      break;
    case TabsEnum.PROF:
      shownTab = profsTab;
      break;
    case TabsEnum.SUB:
      shownTab = subjTab;
      break;
    case TabsEnum.ROOMS:
      shownTab = roomsTab;
      break;
  }

  console.log(groups);

  return (
    <div className="flex flex-col py-20 gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl">Resources</h1>
        <p className="text-xl max-w-[788px]">
          Welcome to your centralized scheduling hub. Here, you can view the
          current resources which can be sorted by groups, professors, subjects
          and rooms.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex w-full justify-end">
          <Tabs
            tabs={Object.values(TabsEnum)}
            selectedTab={tab}
            setSelectedTab={setTab}
          />
        </div>
        <div className="flex flex-col w-full bg-white border border-black text-black">
          {shownTab}
        </div>
      </div>

      <div className="flex justify-center">
        <button disabled className="px-3 py-2.5 bg-secondary rounded-full">
          Load more
        </button>
      </div>
    </div>
  );
};

export default memo(ResourcesPage);

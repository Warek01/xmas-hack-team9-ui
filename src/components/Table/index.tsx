import React, { FC, memo, useMemo } from 'react';
import { useTable } from 'react-table';

import { daysOfWeek, displayData, timeSlots, transformData } from './helpers';
import { TableProps } from '@components/Table/types';

const createColumns = (academicGroups: string[]) => [
  {
    Header: 'Day / Time',
    // @ts-ignore
    accessor: (row) => (row.isDayRow ? row.day : row.time),
    id: 'dayTime',
  },
  ...academicGroups.map((group) => ({
    Header: group,
    accessor: group,
  })),
];

const Table: FC<TableProps> = ({ academicGroups, scheduleDetails }) => {
  const data = useMemo(
    () => transformData(academicGroups, scheduleDetails),
    [academicGroups, scheduleDetails],
  );
  const columns = useMemo(
    () => createColumns(academicGroups),
    [academicGroups],
  );

  const {
    // getTableProps,
    getTableBodyProps,
    // headerGroups,
    // rows,
    // prepareRow,
  } = useTable({ columns, data });

  const width = 400 + academicGroups.length * 300

  return (
    <div className="mb-16 overflow-x-auto min-w-full">
      <table className="overflow-x-auto min-w-full max-w-[99999px]" style={{width: `${width}px`}}>
        <thead className="bg-white text-black font-bold border-[1px] border-black text-center">
          <tr>
            <th className="px-6 py-3 font-bold text-2xl tracking-wider border-r-0 min-w-[100px] max-w-[100px] text-center">
              Day / Time
            </th>
            <th className="border-r border-black" />
            {academicGroups.map((group) => (
              <th
                key={group}
                className="px-6 py-3 font-bold uppercase tracking-wider border-r border-black text-center text-2xl"
              >
                {group}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className="bg-white divide-y divide-black overflow-visible"
          {...getTableBodyProps()}
        >
          {daysOfWeek.map((day) => {
            return (
              <React.Fragment key={day}>
                {timeSlots.map((time, timeIndex) => (
                  <tr key={`${day}-${time}`}>
                    {timeIndex === 0 && (
                      <td
                        rowSpan={timeSlots.length}
                        className="text-black border-1 border-black px-6 py-4 whitespace-nowrap text-2xl border-b-1 font-bold max-w-[94px] text-center"
                      >
                        {day}
                      </td>
                    )}
                    <td className="border border-black px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-[84px]">
                      {time}
                    </td>
                    {academicGroups.map((group) => (
                      <td
                        key={`${day}-${time}-${group}`}
                        className="border border-black px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        {displayData(
                          // @ts-ignore
                          scheduleDetails[group]?.[`${day}-${time}`],
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);

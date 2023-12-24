import { flatMap, get } from 'lodash';
import { DayRow, rawData, ScheduleDetails, TimeSlotRow } from '@components/Table/types';

export const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const timeSlots = ['8:00 - 9:30', '9:45 - 11:15', '11:30 - 13:00', '13:30 - 15:00', '15:15 - 16:45', '17:00 - 18:30', '18:45 - 20:15'];

export const transformData = (
  academicGroups: string[],
  scheduleDetails: ScheduleDetails,
): (DayRow | TimeSlotRow)[] => {
  return flatMap(daysOfWeek, (day) => {
    const dayRow: DayRow = { day, isDayRow: true } as any; // vpadlu cu ts
    academicGroups.forEach((group) => {
      dayRow[group] = '';
    });

    const timeSlotRows: TimeSlotRow[] = timeSlots.map((time) => {
      const timeSlotRow: TimeSlotRow = { time, isDayRow: false } as any; // vpadlu cu ts
      academicGroups.forEach((group) => {
        const key = `${day}-${time}`;
        timeSlotRow[group] = get(scheduleDetails, [group, key], '');
      });
      return timeSlotRow;
    });

    return [dayRow, ...timeSlotRows];
  });
};

export const displayData = (dataToDisplay: rawData) => {
  if (!dataToDisplay) return <>-</>;

  const { subject, room, professorName } = dataToDisplay;
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <span>{subject}</span>
      <span>{room}</span>
      <span>{professorName}</span>
    </div>
  );
};
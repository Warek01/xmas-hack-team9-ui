export type rawData = {
  subject: string;
  room: string;
  professorName: string;
}

export type ScheduleDetails = {
  [group: string]: {
    [key: string]: string;
  };
};

export type DayRow = {
  day: string;
  isDayRow: boolean;
  // [group: string]: string;
} & Record<string, string>;

export type TimeSlotRow = {
  time: string;
  isDayRow: boolean;
  // [group: string]: string;
} & Record<string, string>;

export interface TableProps {
  academicGroups: string[]
  scheduleDetails: ScheduleDetails
}

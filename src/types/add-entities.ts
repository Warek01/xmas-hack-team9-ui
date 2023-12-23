// TODO: modify to match API DTOs
export interface AddGroup {
  speciality: string;
  peopleCount: number;
  subjectIds: string[];
  language: string;
}

export interface AddSubject {
  courseName: string;
  year: number;
  semester: number;
  theoryHoursCount: number;
  practiceHoursCount: number;
  labHoursCount: number;
  totalHoursCount: number;
}

export interface AddRoom {
  name: string;
  peopleCount: number;
  isLab: boolean;
}

export interface AddProfessor {
  name: string;
  subject: string;
  isLab: boolean;
  mondayCourses: boolean[]
  tuesdayCourses: boolean[]
  wednesdayCourses: boolean[]
  thursdayCourses: boolean[]
  fridayCourses: boolean[]
  saturdayCourses: boolean[]
}

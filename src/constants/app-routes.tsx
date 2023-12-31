import { RouteObject } from 'react-router';

import { AppRoute } from '@enums/app-route';
import {
  GenerateSchedulePage,
  HomePage,
  ResourcesPage,
  RoomAvailabilityPage,
  TimetablePage,
} from '@/pages';
import App from '@/App';

export const appRoutes: RouteObject[] = [
  {
    path: AppRoute.HOME,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: AppRoute.GENERATE_SCHEDULE,
        element: <GenerateSchedulePage />,
      },
      {
        path: AppRoute.TIMETABLE,
        element: <TimetablePage />,
      },
      {
        path: AppRoute.RESOURCES,
        element: <ResourcesPage />,
      },
      {
        path: AppRoute.ROOM_AVAILABILITY,
        element: <RoomAvailabilityPage />,
      },
    ],
  },
];

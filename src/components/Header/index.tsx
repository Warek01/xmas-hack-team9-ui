import { FC, memo } from 'react';

import * as icons from '@icons';
import { Link } from 'react-router-dom';
import { AppRoute } from '@enums/app-route';

const Header: FC = () => {
  return (
    <header className="w-full h-40 flex justify-center items-center border-b border-b-secondary">
      <main className="pt-10 flex w-full justify-between max-w-8xl">
        <Link to={AppRoute.HOME} className="flex items-center gap-1">
          <icons.Calendar className="fill-white" width={30} height={30} />
          <span className="text-4xl tracking-widest">SCHEDU</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to={AppRoute.TIMETABLE} className="hover:underline">
            Timetable
          </Link>
          <Link to={AppRoute.RESOURCES} className="hover:underline">
            Resources
          </Link>
          <Link
            to={AppRoute.GENERATE_SCHEDULE}
            className="py-2.5 px-3 bg-secondary rounded-full duration-100 hover:bg-secondary/70"
          >
            Generate schedule
          </Link>
        </div>
      </main>
    </header>
  );
};

export default memo(Header);

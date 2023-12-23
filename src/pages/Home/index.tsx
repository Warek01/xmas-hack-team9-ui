import { FC, memo } from 'react';

import * as icons from '@icons';
import { Link } from 'react-router-dom';
import { AppRoute } from '@enums/app-route';

const HomePage: FC = () => {
  return (
    <div className="flex justify-between py-24">
      <div className="flex flex-col gap-16">
        <h1 className="font-bold text-3xl w-[690px]">
          #1 Streamlined Scheduling for Academic Excellence
        </h1>
        <div className="flex flex-col gap-4">
          <p className="flex gap-5 items-center">
            <icons.Spinner className="fill-secondary" width={25} height={25} />
            <span>Sync your academic data effortlessly</span>
          </p>
          <p className="flex gap-5 items-center">
            <icons.Graph className="fill-secondary" width={25} height={25} />
            <span>AI-powered scheduling that considers all variables</span>
          </p>
          <p className="flex gap-5 items-center">
            <icons.Timeline className="fill-secondary" width={25} height={25} />
            <span>Engage with a dynamic timetable at your fingertips</span>
          </p>
        </div>
        <div className="flex items-center pl-10">
          <div className="flex flex-col gap-1 justify-center">
            <Link
              to={AppRoute.GENERATE_SCHEDULE}
              className="py-2.5 px-3 bg-secondary rounded-full duration-100 hover:bg-secondary/70"
            >
              Generate schedule
            </Link>
            <Link
              to={AppRoute.TIMETABLE}
              className="text-center text-secondary text-lg hover:text-black"
            >
              View timetable
            </Link>
          </div>
        </div>
      </div>

      <div>
        <img src="/home/hero.png" alt="idk" width={400} height={400} />
      </div>
    </div>
  );
};

export default memo(HomePage);

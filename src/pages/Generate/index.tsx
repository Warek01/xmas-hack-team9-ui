import { FC, memo, useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AppRoute } from '@enums/app-route';
import * as icons from '@icons';

import style from './style.module.css';
import classNames from 'classnames';

const Generating: FC = ({ isGenerating, setIsGenerating }) => {
  const handleGenerate = useCallback(async () => {
    setIsGenerating(true);
  }, []);

  useEffect(() => {
    if (!isGenerating) return;

    document.body.classList.add('cursor-wait');

    return () => {
      document.body.classList.remove('cursor-wait');
    };
  }, [isGenerating]);

  return (
    <main className="flex items-center justify-center flex-1 h-full">
      {isGenerating ? (
        <div className="flex flex-col items-center gap-28">
          <div className="relative">
            <img
              alt="generating"
              src="/generate/sleep.svg"
              width={220}
              height={280}
            />
            <icons.Z
              className={classNames('absolute top-[210px] left-[140px] fill-white', style.z1)}
              width={25}
              height={25}
            />
            <icons.Z
              className={classNames('absolute top-[180px] left-[180px] fill-white', style.z2)}
              width={25}
              height={25}
            />
            <icons.Z
              className={classNames('absolute top-[120px] left-[190px] fill-white', style.z3)}
              width={25}
              height={25}
            />
          </div>
          <h1 className="text-3xl text-center max-w-[900px]">
            Generating schedules at the speed of thought. Just a moment longer!
          </h1>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-20 flex-1 h-full">
          <h1 className="text-2xl max-w-[1070px] self-center text-center">
            Are you sure you want to generate the table with the current data,
            or would you like to make modifications on the Current Timetable
            page before generating?
          </h1>
          <div className="flex flex-col gap-3">
            <button
              onClick={handleGenerate}
              className="py-2.5 self-center px-3 bg-secondary rounded-full hover:bg-secondary/70 duration-100"
            >
              Generate schedule
            </button>
            <Link
              to={AppRoute.RESOURCES}
              className="self-center hover:underline"
            >
              Make some changes
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default memo(Generating);

import { FC, memo, useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '@enums/app-route';

const GenerateSchedulePage: FC = () => {
  const navigate = useNavigate();

  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = useCallback(async () => {
    setIsGenerating(true)

    setTimeout(() => {
      // TODO: connect generation
      navigate(AppRoute.TIMETABLE);
    }, 2000);
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
          <img
            alt="generating"
            src="/generate/sleep.png"
            width={220}
            height={280}
          />
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

export default memo(GenerateSchedulePage);

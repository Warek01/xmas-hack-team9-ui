import { FC, memo, useCallback, useState } from 'react';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';

import * as icons from '@icons';
import { TextInput } from '@components';
import { hasNullishValue } from '@helpers/has-nullish-value';

const RoomAvailabilityPage: FC = () => {
  const [room, setRoom] = useState<string>('');
  const [course, setCourse] = useState<string>('');
  const [date, setDate] = useState(new Date());

  const handleCheck = useCallback(async () => {
    if (hasNullishValue([room, course])) {
      toast('Fill all fields', { type: 'warning' });
      return;
    }
  }, [room, course, date]);

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-2 py-20">
        <h1 className="text-4xl">Room availability</h1>
        <p className="text-xl">
          Here, you can check the availability of rooms based on certain
          criteria.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 max-w-[382px] self-center">
        <TextInput
          placeholder="Room"
          Icon={icons.Home}
          name="room"
          value={room}
          setValue={setRoom}
        />
        <div className="flex self-stretch items-center justify-between rounded-full bg-white overflow-hidden px-3 py-1">
          <DatePicker
            className="text-secondary focus-within:outline-none"
            selected={date}
            onChange={(date) => setDate(date)}
          />
          <icons.Timeline className="fill-light-gray" width={25} height={25} />
        </div>
        <TextInput
          placeholder="Course no."
          name="course"
          value={course}
          min={1}
          max={7}
          type="number"
          setValue={setCourse}
          Icon={icons.Clock}
        />
        <button
          onClick={handleCheck}
          className="mt-10 rounded-full px-3 py-1.5 bg-secondary w-fit duration-100 hover:bg-secondary/70"
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default memo(RoomAvailabilityPage);

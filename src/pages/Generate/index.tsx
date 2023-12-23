import { FC, memo, useState } from 'react';

import { CreateProfessorModal } from '@components/modal-windows'

const GenerateSchedulePage: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <button onClick={() => setOpen(true)}>Test</button>
      {open && (
        <CreateProfessorModal onClose={() => setOpen(false)} onSave={data => console.log(data)} />
      )}
    </main>
  );
};

export default memo(GenerateSchedulePage);

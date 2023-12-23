import { FC, memo, PropsWithChildren } from 'react';
import { Footer, Header } from '@components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      className="relative bg-primary text-white font-dm-sans text-xl font-normal
      overflow-auto w-screen min-h-screen"
    >
      <div className="overflow-auto min-h-screen flex flex-col flex-1">
        <Header />
        <div className="flex flex-1 justify-center">
          <div className="max-w-8xl flex-1 overflow-auto">{children}</div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default memo(Layout);

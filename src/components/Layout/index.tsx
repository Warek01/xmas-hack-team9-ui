import { FC, memo, PropsWithChildren } from 'react';
import { Footer, Header } from '@components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      className="relative bg-primary text-white font-dm-sans text-xl font-normal
      overflow-auto w-screen max-w-[100vw] overflow-x-hidden min-h-screen"
    >
      <div className="overflow-y-auto overflow-x-hidden min-h-screen flex flex-col flex-1">
        <Header />
        <div id="overflow-element" className="flex flex-1 overflow-x-hidden max-w-[100vw] justify-center">
          <div className="max-w-8xl flex-1 overflow-auto">{children}</div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default memo(Layout);

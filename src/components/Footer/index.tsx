import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '@enums/app-route';

const Footer: FC = () => {
  return (
    <footer className="w-full h-25 bg-secondary flex items-center justify-center">
      <main className="max-w-8xl w-full flex justify-between">
        <nav className="flex gap-16">
          <Link to={AppRoute.HOME} className="hover:underline">
            Help and support
          </Link>
          <Link to={AppRoute.HOME} className="hover:underline">
            Privacy policy
          </Link>
          <Link to={AppRoute.HOME} className="hover:underline">
            Terms and conditions
          </Link>
        </nav>
        <p>© 2023 Schedu. All rights reserved.</p>
      </main>
    </footer>
  );
};

export default memo(Footer);

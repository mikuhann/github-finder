import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/Routes';

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to={ROUTES.home} className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to={ROUTES.home} className='mx-1 btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to={ROUTES.about} className='mx-1 btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

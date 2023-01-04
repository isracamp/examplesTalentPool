import { memo, FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>LOGO pending</Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default memo(Navbar);

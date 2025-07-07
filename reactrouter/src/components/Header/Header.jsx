import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='flex flex-row justify-between items-center border-2 border-white px-5 py-2 w-[50%] rounded-4xl mt-3'>
        <div className='text-purple-600 text-2xl text-shadow-purple-900 shadow-2xl'>
          <Link to="/">YourLogo</Link>
        </div>
        <ul className='flex flex-row justify-center items-center gap-5'>
          <li >
            <NavLink
              to='/'
              className={({ isActive }) =>
                `font-bold no-underline transition duration-200 ${
                  isActive ? 'text-green-600' : 'text-white'
                } hover:underline`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                `font-bold no-underline transition duration-200 ${
                  isActive ? 'text-green-600' : 'text-white'
                } hover:underline`
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/github'
              className={({ isActive }) =>
                `font-bold no-underline transition duration-200 ${
                  isActive ? 'text-green-600' : 'text-white'
                } hover:underline`
              }
            >
              GitHub
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

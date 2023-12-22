import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import ButtonIcon from './ButtonIcon';
import { useApp } from '../context/AppContext';
import {
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';
import useMediaScreen from '../hooks/useMediaScreen';
import useWindowDimensions from '../hooks/useWindowDimensions';

function MainNav() {
  const navigate = useNavigate();
  const mediaScreen = useMediaScreen();
  const { width: winWidth } = useWindowDimensions();
  const { showNav } = useApp();
  // const { toggleDarkMode, isDarkMode } = useDarkMode();
  const navs = [
    { name: 'Home', to: '/', icon: <HiOutlineHome /> },
    { name: 'Projects', to: '/projects', icon: <HiOutlineRocketLaunch /> },
    { name: 'Contact Us', to: '/contact', icon: <HiOutlinePhone /> },
  ];

  return (
    // ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in dura

    // md-py-0 absolute left-0 top-[-400px] flex w-full flex-col gap-4 border-b-2 border-b-primary-lm bg-back-light py-4 shadow-sm transition-all duration-200 dark:border-b-primary-dm dark:bg-back-dark md:static md:z-auto md:w-auto md:flex-row md:items-center md:gap-2 md:border-none md:opacity-100 md:shadow-none

    // bg-back-light dark:bg-back-dark md:dark:bg-none
    <ul
      className={`md-py-0 transition1 md:transitionNone absolute left-0 top-[-400px] flex w-full flex-col gap-4 border-b-2 border-b-primary-lm bg-back-light py-4 shadow-sm dark:border-b-primary-dm dark:bg-back-dark md:static md:z-auto md:w-auto md:flex-row md:items-center md:gap-2 md:border-none md:bg-none md:opacity-100 md:shadow-none md:dark:bg-none ${
        !showNav
          ? 'top-[-200px] opacity-0 ease-out '
          : 'top-[60px] opacity-95 ease-in'
      }`}
    >
      {navs.map(({ name, to, icon }) => (
        <li key={name}>
          <Link
            className={`button flex items-center justify-items-center gap-3 ${
              winWidth < 768 && 'mx-8'
            }`}
            to={to}
          >
            {winWidth < 768 && icon} {name}
          </Link>
        </li>

        // <Button key={name} onClick={() => navigate(to)}>
        //   {winWidth < 768 && icon} {name}
        // </Button>
      ))}
      <ButtonIcon type="dark-mode" label={winWidth < 768 && 'Dark Mode'} />
    </ul>
  );
}

export default MainNav;

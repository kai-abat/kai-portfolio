import ButtonIcon from './ButtonIcon';
import { useApp } from '../context/AppContext';
import {
  HiOutlineHome,
  HiOutlineMoon,
  HiOutlinePhone,
  HiOutlineRocketLaunch,
  HiOutlineSun,
} from 'react-icons/hi2';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useDarkMode } from '../context/DarkModeContext';
import LinkScroll from './LinkScroll';

function MainNav() {
  // const navigate = useNavigate();

  const { width: winWidth } = useWindowDimensions();
  const { showNav } = useApp();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // const { toggleDarkMode, isDarkMode } = useDarkMode();
  const navs = [
    { name: 'Profile', to: 'profile', icon: <HiOutlineHome /> },
    { name: 'Projects', to: 'projects', icon: <HiOutlineRocketLaunch /> },
    { name: 'Contact', to: 'contact', icon: <HiOutlinePhone /> },
  ];

  return (
    <ul
      className={`md-py-0 transition1 md:transitionNone absolute left-0 top-[-400px] flex w-full flex-col  gap-4 border-b-2 border-b-primary-lm bg-back-light py-4 shadow-sm dark:border-b-primary-dm dark:bg-back-dark md:static md:z-auto md:w-auto md:flex-row md:items-center md:gap-2 md:border-none md:bg-none md:opacity-100 md:shadow-none md:dark:bg-none ${
        winWidth < 768
          ? !showNav
            ? 'top-[-200px] opacity-0 ease-out '
            : 'top-[60px] opacity-95 ease-in'
          : ''
      }`}
    >
      {navs.map(({ name, to, icon }) => (
        <LinkScroll
          className={winWidth < 768 && 'mx-8 flex items-center gap-x-4'}
          key={name}
          to={to}
        >
          {winWidth < 768 && icon} {name}
        </LinkScroll>
      ))}
      {/* <LinkScroll to="contact">To contact</LinkScroll> */}

      <ButtonIcon
        onClick={toggleDarkMode}
        className="mx-8 flex items-center gap-x-3"
      >
        {!isDarkMode ? (
          <HiOutlineMoon className="h-5 w-5" />
        ) : (
          <HiOutlineSun className="h-5 w-5" />
        )}
        {winWidth < 768 && !isDarkMode && 'Dark Theme'}
        {winWidth < 768 && isDarkMode && 'Light Theme'}
      </ButtonIcon>
    </ul>
  );
}

export default MainNav;

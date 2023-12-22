import {
  HiOutlineBars3,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineXMark,
} from 'react-icons/hi2';
import { useDarkMode } from '../context/DarkModeContext';
import { useApp } from '../context/AppContext';

function ButtonIcon({ onClick, type, label }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { showNav } = useApp();
  const iconStyle = 'h-5 w-5';
  let handle, icon;

  if (onClick) handle = onClick;

  if (type === 'dark-mode') {
    handle = toggleDarkMode;
    icon = !isDarkMode ? (
      <HiOutlineMoon className={iconStyle} />
    ) : (
      <HiOutlineSun className={iconStyle} />
    );
    if (label) {
      label = !isDarkMode ? 'Dark Theme' : 'Light Theme';
    }
  }

  // handle = toggleDarkMode;
  // icon = !isDarkMode ? (
  //   <HiOutlineMoon className={iconStyle} />
  // ) : (
  //   <HiOutlineSun className={iconStyle} />
  // );

  if (type === 'nav') {
    icon = !showNav ? (
      <HiOutlineBars3 className={iconStyle} />
    ) : (
      <HiOutlineXMark
        className={`${iconStyle} text-error-lm dark:text-error-dm`}
      />
    );
  }

  return (
    <button
      className={`button flex items-center  ${
        label ? 'mx-8 gap-2' : 'justify-center'
      }`}
      onClick={handle ? handle : ''}
    >
      {icon ? icon : 'No Icon'} {label && label}
    </button>
  );
}

export default ButtonIcon;

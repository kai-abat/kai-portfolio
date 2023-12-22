import { Icon } from '@iconify/react';
import { useDarkMode } from '../context/DarkModeContext';

function LinkIcon({ children, title, url, iconName, width = '24', text }) {
  const { isDarkMode } = useDarkMode();
  return (
    <a
      href={url}
      title={title}
      className={
        text && 'button flex items-center justify-center gap-x-2 rounded-lg'
      }
    >
      {children}
      {isDarkMode ? (
        <Icon icon={iconName} color="#fafafa" width={width} />
      ) : (
        <Icon icon={iconName} color="#09090b" width={width} />
      )}
    </a>
  );
}

export default LinkIcon;

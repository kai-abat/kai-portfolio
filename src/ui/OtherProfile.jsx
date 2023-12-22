import { Icon } from '@iconify/react';
import { useDarkMode } from '../context/DarkModeContext';

function OtherProfile() {
  const { isDarkMode } = useDarkMode();
  const iconWidth = '24';
  const linkedinUrl = 'https://www.linkedin.com/in/chaim-abat-69aa3963';
  const githubUrl = 'https://github.com/kai-abat';
  return (
    <div className="mt-4 flex items-center justify-start gap-5">
      <div>
        <a href={linkedinUrl} title="My Linkedin Profile">
          {isDarkMode ? (
            <Icon icon="uil:linkedin" color="#fafafa" width={iconWidth} />
          ) : (
            <Icon icon="uil:linkedin" color="#09090b" width={iconWidth} />
          )}
        </a>
      </div>
      <div>
        <a href={githubUrl} title="My Github Profile">
          {isDarkMode ? (
            <Icon icon="bi:github" color="#fafafa" width={iconWidth} />
          ) : (
            <Icon icon="bi:github" color="#09090b" width={iconWidth} />
          )}
        </a>
      </div>
    </div>
  );
}

export default OtherProfile;

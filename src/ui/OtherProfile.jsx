import { Icon } from '@iconify/react';
import { useDarkMode } from '../context/DarkModeContext';
import LinkIcon from './LinkIcon';

function OtherProfile() {
  const linkedinUrl = 'https://www.linkedin.com/in/chaim-abat-69aa3963';
  const githubUrl = 'https://github.com/kai-abat';
  return (
    <div className="mt-4 flex items-center justify-start gap-5">
      <LinkIcon
        title="My Linkedin Profile"
        url={linkedinUrl}
        iconName="uil:linkedin"
      />
      <LinkIcon
        title="My Github Profile"
        url={githubUrl}
        iconName="bi:github"
      />
    </div>
  );
}

export default OtherProfile;

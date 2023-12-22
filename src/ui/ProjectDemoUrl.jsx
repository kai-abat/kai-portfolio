import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { useDarkMode } from '../context/DarkModeContext';
import LinkIcon from './LinkIcon';

function ProjectDemoUrl({ githubUrl, demoUrl }) {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="flex justify-evenly ">
      <LinkIcon
        text="Code"
        iconName="bi:github"
        url={githubUrl}
        title="This project github link"
        width="26"
      >
        <span className=" font-semibold">Code</span>
      </LinkIcon>

      <a
        className="button flex items-center justify-center gap-x-2 rounded-lg"
        href={demoUrl}
        title="This project live demo link"
      >
        <span className=" font-semibold">Live Demo</span>
        {isDarkMode ? (
          <HiOutlineArrowTopRightOnSquare className="h-[26px] w-[26px] text-current" />
        ) : (
          <HiOutlineArrowTopRightOnSquare className="h-[26px] w-[26px] text-current" />
        )}
      </a>
    </div>
  );
}

export default ProjectDemoUrl;

import { Icon } from "@iconify/react";
import { useDarkMode } from "../context/DarkModeContext";

function OtherProfile() {
  const { isDarkMode } = useDarkMode();
  const iconWidth = "48";
  const linkedinUrl = "https://www.linkedin.com/in/chaim-abat-69aa3963";
  const githubUrl = "https://github.com/kai-abat";
  return (
    <div className="flex gap-5">
      <a href={linkedinUrl} title="My Linkedin Profile">
        {isDarkMode ? (
          <Icon icon="uil:linkedin" color="#fafafa" width={iconWidth} />
        ) : (
          <Icon icon="uil:linkedin" color="#09090b" width={iconWidth} />
        )}
      </a>
      <a href={githubUrl} title="My Github Profile">
        {isDarkMode ? (
          <Icon icon="bi:github" color="#fafafa" width={iconWidth} />
        ) : (
          <Icon icon="bi:github" color="#09090b" width={iconWidth} />
        )}
      </a>
    </div>
  );
}

export default OtherProfile;

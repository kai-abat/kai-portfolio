import { Icon } from '@iconify/react';
function TechIcon({ iconNames }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {iconNames.map((icon, index) => (
        <span key={index} title={icon.name}>
          <Icon
            className=" h-10 w-10 rounded-2xl p-2 shadow-sm shadow-stone-950 dark:bg-stone-700 dark:shadow-none"
            icon={icon.iconName}
          />
        </span>
      ))}
    </div>
  );
}

export default TechIcon;

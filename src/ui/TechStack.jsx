import { Icon } from '@iconify/react';

function TechStack() {
  const iconNames = [
    { name: 'Javacript', iconName: 'logos:javascript' },
    { name: 'React', iconName: 'logos:react' },
    { name: 'React Router', iconName: 'devicon:reactrouter' },
    { name: 'React Query', iconName: 'logos:react-query-icon' },
    { name: 'Redux Toolkit', iconName: 'logos:redux' },
    { name: 'Styled Components', iconName: 'skill-icons:styledcomponents' },
    { name: 'Tailwind', iconName: 'devicon:tailwindcss' },
    { name: 'Supabase', iconName: 'logos:supabase-icon' },
  ];

  return (
    <>
      <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-8">
        <div className="flex items-center justify-center">
          <span className=" text-xl  font-semibold ">Tech Stack</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {iconNames.map((icon, index) => (
            <span key={index} title={icon.name}>
              <Icon
                className=" h-10 w-10 rounded-2xl p-2 shadow-sm shadow-stone-950 dark:bg-stone-800 dark:shadow-none"
                icon={icon.iconName}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechStack;

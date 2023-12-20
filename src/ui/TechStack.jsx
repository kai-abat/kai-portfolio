import { Icon } from "@iconify/react";

function TechStack() {
  const iconNames = [
    { name: "Vite", iconName: "vscode-icons:file-type-vite" },
    { name: "React", iconName: "logos:react" },
    { name: "React Router", iconName: "devicon:reactrouter" },
    { name: "Styled Components", iconName: "skill-icons:styledcomponents" },
    { name: "React Query", iconName: "logos:react-query-icon" },
    { name: "Supabase", iconName: "logos:supabase-icon" },
  ];

  return (
    <>
      <div className="flex gap-4 mt-10 justify-center items-center">
        <span className=" mr-6 font-semibold text-2xl dark:border-r-back-light border-r-back-dark border-r-2 pr-5">
          Tech Stack
        </span>

        {iconNames.map((icon, index) => (
          <span key={index} title={icon.name}>
            <Icon
              className=" p-2 w-10 h-10 border-lime-400 bg-lime-300 rounded-2xl shadow-sm shadow-stone-950 dark:shadow-stone-100"
              icon={icon.iconName}
            />
          </span>
        ))}
      </div>
    </>
  );
}

export default TechStack;

import Description from './Description';
import ProjectDemoUrl from './ProjectDemoUrl';
import TechUse from './TechUse';
import Title from './Title';

const Project = ({ children, position }) => {
  return (
    <div
      id="project-content"
      className={`flex h-full w-full items-center justify-center gap-2 rounded-lg bg-stone-100 px-3 py-6 shadow-md dark:bg-stone-800 xl:flex-row xl:items-start xl:justify-evenly ${
        position !== 'left' ? 'flex-col-reverse' : 'flex-col'
      }`}
    >
      {children}
    </div>
  );
};

const Image = ({ photo }) => {
  return (
    <div
      id="project-image"
      className=" flex h-full w-full items-center justify-center "
    >
      <img className="h-full w-full rounded-lg  " src={photo} alt="" />
    </div>
  );
};

const Details = ({ title, description, githubUrl, demoUrl, iconNames }) => {
  return (
    <div id="project-details" className="flex h-full w-full flex-col gap-y-5">
      <Title title={title} />
      <Description description={description} />
      <TechUse iconNames={iconNames} />
      <ProjectDemoUrl githubUrl={githubUrl} demoUrl={demoUrl} />
    </div>
  );
};

Project.Image = Image;
Project.Details = Details;

export default Project;

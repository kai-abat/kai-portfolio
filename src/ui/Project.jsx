import Description from './Description';
import ProjectDemoUrl from './ProjectDemoUrl';
import TechUse from './TechUse';
import Title from './Title';

const Project = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
      {children}
    </div>
  );
};

const Image = ({ photo }) => {
  return (
    <img
      className=" h-[20rem] w-[20rem] basis-1/2 rounded-lg "
      src={photo}
      alt=""
    />
  );
};

const Details = ({ title, description, githubUrl, demoUrl, techUse }) => {
  return (
    <div className="flex h-[20rem] w-[40rem] basis-1/2 flex-col gap-y-5 rounded-lg px-6 py-3 dark:bg-stone-900">
      <Title title={title} />
      <Description description={description} />
      <TechUse techs={techUse} />
      <ProjectDemoUrl githubUrl={githubUrl} demoUrl={demoUrl} />
    </div>
  );
};

Project.Image = Image;
Project.Details = Details;

export default Project;

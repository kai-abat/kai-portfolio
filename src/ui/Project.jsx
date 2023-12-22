import Description from './Description';
import ProjectDemoUrl from './ProjectDemoUrl';
import TechUse from './TechUse';
import Title from './Title';

const Project = ({ children, position }) => {
  return (
    <div
      className={`flex items-center justify-center gap-10 md:flex-row ${
        position !== 'left' ? 'flex-col-reverse' : 'flex-col'
      }`}
    >
      {children}
    </div>
  );
};

const Image = ({ photo }) => {
  return (
    <img className=" h-[20rem] w-[25rem] rounded-lg " src={photo} alt="" />
  );
};

const Details = ({ title, description, githubUrl, demoUrl, techUse }) => {
  return (
    <div className="flex h-[20rem] w-[10] flex-col gap-y-5 rounded-lg px-4 py-3 dark:bg-stone-900 xs:w-[25rem] sm:w-[35rem] md:w-[40rem]">
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

import TechName from './TechName';

function TechUse({ techs }) {
  return (
    <div className="flex items-center justify-evenly gap-x-2 font-semibold sm:gap-x-6">
      {techs.map((tech) => (
        <TechName key={tech}>{tech}</TechName>
      ))}
    </div>
  );
}

export default TechUse;

import Project from './Project';

function Portfolio() {
  return (
    <div
      id="portfolio"
      className=" gap mt-16 flex flex-col items-start justify-center gap-6"
    >
      <div className="w-full text-xl font-semibold uppercase tracking-wide text-primary-lm dark:text-primary-dm">
        Portfolio
      </div>
      <div className="flex flex-col gap-20 ">
        <Project>
          <Project.Image photo="/hjb-pandeazucar-hotel.png" />
          <Project.Details
            title="HJB Pan de Azucar Hotel"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam a, ratione amet dolore animi explicabo consectetur ullam doloremque magnam fugiat incidunt ducimus, libero quisquam quibusdam, culpa laboriosam exercitationem qui."
            githubUrl="https://github.com/kai-abat/hjb-pandeazucar-hotel.git"
            demoUrl="https://hjbpandeazucar.netlify.app"
            techUse={['React', 'React Query', 'Styled Components', 'Supabase']}
          />
        </Project>
        <Project>
          <Project.Details
            title="HJB Pan de Azucar Hotel"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam a, ratione amet dolore animi explicabo consectetur ullam doloremque magnam fugiat incidunt ducimus, libero quisquam quibusdam, culpa laboriosam exercitationem qui."
            githubUrl="https://github.com/kai-abat/hjb-pandeazucar-hotel.git"
            demoUrl="https://hjbpandeazucar.netlify.app"
            techUse={['React', 'React Query', 'Styled Components', 'Supabase']}
          />
          <Project.Image photo="/hjb-pandeazucar-hotel.png" />
        </Project>
      </div>
    </div>
  );
}

export default Portfolio;

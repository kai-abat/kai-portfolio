import Project from './Project';
import Content from './Content';
import {
  REACT_ICON,
  REACT_QUERY_ICON,
  STYLED_COMP_ICON,
  SUPABASE_ICON,
} from '../utils/constants';

function Portfolio() {
  return (
    <Content title="projects">
      <Project position="left">
        <Project.Image photo="/hjb-pandeazucar-hotel.png" />
        <Project.Details
          title="HJB Pan de Azucar Hotel"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam a, ratione amet dolore animi explicabo consectetur ullam doloremque magnam fugiat incidunt ducimus, libero quisquam quibusdam, culpa laboriosam exercitationem qui."
          githubUrl="https://github.com/kai-abat/hjb-pandeazucar-hotel.git"
          demoUrl="https://hjbpandeazucar.netlify.app"
          iconNames={[
            REACT_ICON,
            REACT_QUERY_ICON,
            STYLED_COMP_ICON,
            SUPABASE_ICON,
          ]}
        />
      </Project>
      <Project position="right">
        <Project.Details
          title="HJB Pan de Azucar Hotel"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam a, ratione amet dolore animi explicabo consectetur ullam doloremque magnam fugiat incidunt ducimus, libero quisquam quibusdam, culpa laboriosam exercitationem qui."
          githubUrl="https://github.com/kai-abat/hjb-pandeazucar-hotel.git"
          demoUrl="https://hjbpandeazucar.netlify.app"
          iconNames={[
            REACT_ICON,
            REACT_QUERY_ICON,
            STYLED_COMP_ICON,
            SUPABASE_ICON,
          ]}
        />
        <Project.Image photo="/hjb-pandeazucar-hotel.png" />
      </Project>
    </Content>
  );
}

export default Portfolio;

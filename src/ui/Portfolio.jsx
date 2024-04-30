import Project from './Project';
import Content from './Content';
import {
  NEXTJS_ICON,
  NEXT_UI_ICON,
  REACT_HOOK_FORM_ICON,
  REACT_ICON,
  REACT_QUERY_ICON,
  STYLED_COMP_ICON,
  SUPABASE_ICON,
  TAILWIND_ICON,
} from '../utils/constants';

function Portfolio() {
  return (
    <Content title="projects">
      <Project position="left">
        <Project.Image photo="/saigonbrewers-landingpage.png" />
        <Project.Details
          title="Saigon Brewers Landing Page"
          description="Saigon Brewers is our business coffee shop located in Iloilo City. Using NextJS 14, React, Next UI, Tailwind and Supabase, I was able to create our landing page app. This app uses supabase authentication service. Administrator can add/edit and delete Menu to the app."
          githubUrl="https://github.com/kai-abat/saigonb-next-ts-app"
          demoUrl="https://saigonbrewers.vercel.app"
          iconNames={[
            NEXTJS_ICON,
            REACT_ICON,
            NEXT_UI_ICON,
            TAILWIND_ICON,
            REACT_HOOK_FORM_ICON,
            SUPABASE_ICON,
          ]}
        />
      </Project>
      <Project position="left">
        <Project.Image photo="/hjb-pandeazucar-hotel.png" />
        <Project.Details
          title="HJB Pan de Azucar Hotel Dashboard 🏨"
          description="A hotel manangement system that manage the accomodation of customers to the hotel. Using Vite, React, Styled Components and Supabase, I was able to create a full stack app."
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
      {/* <Project position="right">
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
      </Project> */}
    </Content>
  );
}

export default Portfolio;

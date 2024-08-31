import Project from './Project';
import Content from './Content';
import {
  EXPRESS_ICON,
  JS_ICON,
  MONGODB_ICON,
  NEXTJS_ICON,
  NEXT_UI_ICON,
  NODEJS_ICON,
  RBOOTSTRAP_ICON,
  REACT_HOOK_FORM_ICON,
  REACT_ICON,
  REACT_QUERY_ICON,
  SOCKETIO_ICON,
  STYLED_COMP_ICON,
  SUPABASE_ICON,
  TAILWIND_ICON,
  TYPESCRIPT_ICON,
  ZOD_ICON,
} from '../utils/constants';

function Portfolio() {
  return (
    <Content title="projects">
      <Project position="left">
        <Project.Image photo="/gchat.png" />
        <Project.Details
          title="GCHAT"
          description="A simple chat application develop in MERN stack and Socket.io."
          githubUrl="https://github.com/kai-abat/React-Chat-App.git"
          demoUrl="https://gchat-92kx.onrender.com"
          iconNames={[
            JS_ICON,
            TYPESCRIPT_ICON,
            REACT_ICON,
            NODEJS_ICON,
            EXPRESS_ICON,
            MONGODB_ICON,
            SOCKETIO_ICON,
            RBOOTSTRAP_ICON,
          ]}
        />
      </Project>

      <Project position="left">
        <Project.Image photo="/saigonbrewers-landingpage.png" />
        <Project.Details
          title="Saigon Brewers Landing Page"
          description="Saigon Brewers is our business coffee shop located in Iloilo City. Using NextJS 14, React, Next UI, Tailwind and Supabase, I was able to create our landing page app. This app uses supabase authentication service. Administrator can add/edit and delete Menu to the app."
          githubUrl="https://github.com/kai-abat/saigonb-next-ts-app"
          demoUrl="https://saigonbrewers.vercel.app"
          iconNames={[
            NEXTJS_ICON,
            TYPESCRIPT_ICON,
            REACT_ICON,
            NEXT_UI_ICON,
            TAILWIND_ICON,
            REACT_HOOK_FORM_ICON,
            ZOD_ICON,
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
            JS_ICON,
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

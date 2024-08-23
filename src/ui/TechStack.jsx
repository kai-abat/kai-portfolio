import {
  JS_ICON,
  REACT_ICON,
  REACT_ROUTER_ICON,
  REACT_QUERY_ICON,
  REDUX_ICON,
  STYLED_COMP_ICON,
  TAILWIND_ICON,
  SUPABASE_ICON,
  NEXTJS_ICON,
  TYPESCRIPT_ICON,
  SOCKETIO_ICON,
  NODEJS_ICON,
  EXPRESS_ICON,
  MONGODB_ICON,
} from '../utils/constants';
import TechIcon from './TechIcon';

function TechStack() {
  const iconNames = [
    JS_ICON,
    TYPESCRIPT_ICON,
    REACT_ICON,
    NEXTJS_ICON,
    REACT_ROUTER_ICON,
    REACT_QUERY_ICON,
    REDUX_ICON,
    STYLED_COMP_ICON,
    TAILWIND_ICON,
    SUPABASE_ICON,
    SOCKETIO_ICON,
    NODEJS_ICON,
    EXPRESS_ICON,
    MONGODB_ICON,
  ];

  return (
    <>
      <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-8">
        <div className="flex items-center justify-center">
          <span className=" text-xl  font-semibold ">Tech Stack</span>
        </div>
      </div>
      <TechIcon iconNames={iconNames} />
    </>
  );
}

export default TechStack;

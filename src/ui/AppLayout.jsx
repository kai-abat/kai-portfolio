import { Outlet } from 'react-router-dom';
import HeaderContent from './HeaderContent';
import FooterContent from './FooterContent';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { useApp } from '../context/AppContext';
// import Header from "../ui/Header";
// import Loader from "./Loader";

function AppLayout() {
  const { toggleNavBar, showNav } = useApp();

  const handleToggleNavBar = () => {
    showNav ? toggleNavBar() : null;
  };
  const ref = useOutsideClick(handleToggleNavBar);
  return (
    // grid adjust the layout
    // h-screen to cover all gaps of the browser
    <div className="textColor flex h-screen flex-col gap-y-4 bg-back-light dark:bg-back-dark">
      {/* transition duration-200 delay-75 ease-in */}
      {/* {isLoading && <Loader />} */}
      {/* {true && <Loader />} */}
      {/* 
      <header className="items-center justify-between space-y-4  py-6 font-semibold 
      uppercase sm:px-10 md:flex md:space-y-0 "> */}
      <header
        ref={ref}
        className="px-8 pb-3 pt-3 shadow shadow-primary-lm dark:shadow-primary-dm"
      >
        <HeaderContent />
      </header>
      {/* overflow-scroll - add scroll inside the main content only without the header and footer */}
      <div className="flex flex-col gap-4 overflow-scroll py-3">
        <main>
          <Outlet />
        </main>
        <footer>
          <FooterContent />
        </footer>
      </div>
    </div>
  );
}

export default AppLayout;

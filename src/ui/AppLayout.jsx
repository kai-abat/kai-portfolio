import HeaderContent from './HeaderContent';
import FooterContent from './FooterContent';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { useApp } from '../context/AppContext';
import Home from '../pages/Home';
// import Header from "../ui/Header";
// import Loader from "./Loader";

function AppLayout() {
  const { toggleNavBar, showNav } = useApp();

  const handleToggleNavBar = () => {
    if (showNav) {
      toggleNavBar();
    } else {
      return null;
    }
  };

  const ref = useOutsideClick(handleToggleNavBar);
  return (
    // grid adjust the layout
    // h-screen to cover all gaps of the browser
    <div className="textColor flex flex-col gap-y-4 bg-back-light dark:bg-back-dark">
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

      <main className="flex flex-col gap-5 px-8 py-4 sm:px-20 md:px-[8.5rem] lg:px-40">
        <Home />
      </main>

      <footer className=" mt-6 flex items-center justify-center border-t-2 border-t-stone-200 pb-3 pt-8 dark:border-t-stone-800">
        <FooterContent />
      </footer>
    </div>
  );
}

export default AppLayout;

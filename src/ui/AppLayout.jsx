import { Outlet } from 'react-router-dom';
import HeaderContent from './HeaderContent';
import FooterContent from './FooterContent';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { useApp } from '../context/AppContext';
// import Header from "../ui/Header";
// import Loader from "./Loader";

function AppLayout() {
  const { toggleNavBar } = useApp();
  const ref = useOutsideClick(toggleNavBar);
  return (
    // grid adjust the layout
    // h-screen to cover all gaps of the browser
    <div className="textColor flex h-screen flex-col gap-y-4 bg-back-light transition delay-75 duration-200 ease-in dark:bg-back-dark">
      {/* transition duration-200 delay-75 ease-in */}
      {/* {isLoading && <Loader />} */}
      {/* {true && <Loader />} */}
      {/* 
      <header className="items-center justify-between space-y-4  py-6 font-semibold 
      uppercase sm:px-10 md:flex md:space-y-0 "> */}
      <header ref={ref} className="px-8 pb-3 pt-3 shadow dark:shadow-stone-900">
        <HeaderContent />
      </header>
      {/* overflow-scroll - add scroll inside the main content only without the header and footer */}

      <main className="mx-auto flex items-center justify-center ">
        {/* <h1>Content</h1> */}
        <Outlet />
      </main>

      <footer>
        <FooterContent />
      </footer>
    </div>
  );
}

export default AppLayout;

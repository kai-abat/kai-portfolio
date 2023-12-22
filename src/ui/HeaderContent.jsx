import { Link } from 'react-router-dom';
import MainNav from './MainNav';
import ButtonIcon from './ButtonIcon';
import { useApp } from '../context/AppContext';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';

function HeaderContent() {
  const { toggleNavBar, showNav } = useApp();

  return (
    <nav className="flex items-center justify-between">
      <div className="flex grow items-center justify-between">
        <Link
          to="/"
          className="text-lg font-extrabold normal-case tracking-[0.25em]"
        >
          Kai.dev
        </Link>
        <span className="block md:hidden">
          <ButtonIcon onClick={toggleNavBar}>
            {!showNav ? (
              <HiOutlineBars3 className="h-5 w-5" />
            ) : (
              <HiOutlineXMark
                className={`h-5 w-5 text-error-lm dark:text-error-dm`}
              />
            )}
          </ButtonIcon>
        </span>
      </div>

      <MainNav />
    </nav>
  );
}

export default HeaderContent;

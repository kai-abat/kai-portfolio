import { Link } from 'react-router-dom';
import MainNav from './MainNav';
import ButtonIcon from './ButtonIcon';
import { useApp } from '../context/AppContext';

function HeaderContent() {
  const { toggleNavBar } = useApp();

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
          <ButtonIcon onClick={toggleNavBar} type="nav" />
        </span>
      </div>

      <MainNav />
    </nav>
  );
}

export default HeaderContent;

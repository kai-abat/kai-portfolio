import { Link } from 'react-scroll';

function LinkScroll({ children, to, className }) {
  console.log(to);
  return (
    <Link
      to={to}
      smooth={true}
      offset={0}
      duration={500}
      className={`button ${
        className ? className : 'flex items-center justify-center '
      }`}
    >
      {children}
    </Link>
  );
}

export default LinkScroll;

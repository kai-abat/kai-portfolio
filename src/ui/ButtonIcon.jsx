import useWindowDimensions from '../hooks/useWindowDimensions';

function ButtonIcon({ children, onClick, className }) {
  const { width: winWidth } = useWindowDimensions();
  return (
    <button
      className={`button ${
        className ? className : 'flex items-center justify-center'
      } `}
      onClick={onClick ? onClick : ''}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;

import useWindowDimensions from '../hooks/useWindowDimensions';

function ButtonIcon({ children, onClick, type, label }) {
  const { width: winWidth } = useWindowDimensions();
  return (
    <button
      className={`button flex items-center  ${
        winWidth < 768 ? 'mx-8 gap-2' : 'justify-center'
      }`}
      onClick={onClick ? onClick : ''}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;

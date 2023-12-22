import useWindowDimensions from './useWindowDimensions';

const useMediaScreen = () => {
  const { width } = useWindowDimensions();

  if (width >= 1536) return '2xl';
  if (width >= 1280) return 'xl';
  if (width >= 1024) return 'lg';
  if (width >= 768) return 'md';
  if (width >= 640) return 'sm';
  return 'xs';
};

export default useMediaScreen;

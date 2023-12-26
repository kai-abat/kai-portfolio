import { useMoveBack } from '../hooks/useMoveBack';
import Button from '../ui/Button';

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className=" ml-4 mt-8 flex flex-col items-start justify-start gap-6">
      <h1 className="text-3xl">
        The page you are looking for could not be found 😢
      </h1>
      <Button onClick={moveBack} size="large">
        &larr; Go back
      </Button>
    </div>
  );
}

export default PageNotFound;

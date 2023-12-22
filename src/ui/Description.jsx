const Description = ({ description }) => {
  return (
    <div className="text-center text-sm font-light text-stone-700 dark:text-stone-400">
      {description}
    </div>
  );
  // return <div className="flex px-4 py-3 font-semibold">{description}</div>;
};

export default Description;

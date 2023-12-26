import { Element } from 'react-scroll';

function Content({ title, isNoTitle, children }) {
  return (
    <Element
      id={title}
      // className=" gap mt-16 flex w-4/5 flex-col items-start justify-center gap-6"
      className="mt-20 w-full"
    >
      {!isNoTitle && (
        <div className="w-full text-left text-xl font-semibold uppercase tracking-wide text-primary-lm dark:text-primary-dm">
          {title}
        </div>
      )}
      <div className={`${!isNoTitle && 'mt-10'} flex w-full flex-col gap-10`}>
        {children}
      </div>
    </Element>
  );
}

export default Content;

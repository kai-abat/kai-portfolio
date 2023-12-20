function Loader() {
  return (
    // absolute position to put the component to the the top
    // of the display position overlapping all existing display
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>;
    </div>
  );
}

export default Loader;

const Body = (props) => {
  return (
    <div className="block text-white w-full max-w-6xl">
      <div className="inline-block text-2xl md:text-3xl font-light p-4 pl-4 pb-1 pt-2 md:pr-8 md:pl-8 md:pb-4 md:pt-4 tracking-widest bg-black border-pink border-t-2 border-l-2 border-r-2">
        {props.headlineText}
      </div>
      <div className="bg-black border-pink border-2 p-3 md:w-1/2 shadow text-lg md:text-xl md:p-8 font-light">
        {props.bodyText}
      </div>
    </div>
  );
};

export default Body;

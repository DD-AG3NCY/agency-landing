const Body = (props) => {
  return (
    <div className="block text-white max-w-6xl">
      <div className="inline-block sm:text-lg md:text-3xl font-light pr-4 pl-4 pb-1 pt-2 md:pr-8 md:pl-8 md:pb-2 md:pt-4 tracking-widest bg-pink">
        {props.headlineText}
      </div>
      <div className="bg-pink md:text-lg p-5 md:text-3xl md:p-10 font-light">
        {props.bodyText}
      </div>
    </div>
  );
};

export default Body;

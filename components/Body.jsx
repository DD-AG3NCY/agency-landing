const Body = (props) => {
  return (
    <div className="block text-white max-w-4xl">
      <div className="inline-block font-light pr-4 pl-4 pt-2 tracking-widest bg-pink">
        {props.headlineText}
      </div>
      <div className="bg-pink text-2xl p-4 font-light">
        {props.bodyText}
      </div>
    </div>
  );
};

export default Body;

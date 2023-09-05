const Frame = (props) => {
  return (
    <div className="bg-red-500 h-[calc(100vh-3rem)] text-black">
      {props.children}
    </div>
  );
};

export default Frame;

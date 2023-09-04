const Frame = (props) => {
  return (
    <div className="bg-white h-[calc(100vh-3rem)] text-black">
      {props.children}
    </div>
  );
};

export default Frame;

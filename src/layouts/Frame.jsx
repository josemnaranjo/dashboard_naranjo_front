const Frame = (props) => {
  return (
    <div className=" bg-frame to-secondary-dark h-[calc(100vh-3rem)] text-black flex items-center justify-center">
      {props.children}
    </div>
  );
};

export default Frame;

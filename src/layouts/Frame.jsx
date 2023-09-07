const Frame = (props) => {
  return (
    <div className=" bg-gradient-to-l from-slate-100 to-frame  h-[calc(100vh-3rem)] text-black flex items-center justify-center">
      {props.children}
    </div>
  );
};

export default Frame;

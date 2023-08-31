const Frame = (props) => {
  return <div className="bg-black h-[calc(100vh-3rem)]">{props.children}</div>;
};

export default Frame;

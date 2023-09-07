
import Userform from "../components/Userform";

const User = () => {
  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <div>
        <Userform handleSubmit={handleSubmit} />
    </div>
  );
};

export default User;

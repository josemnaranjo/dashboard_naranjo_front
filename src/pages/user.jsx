import Userform from "../components/Userform";
import { register } from "../api/user.services";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const registerUser = async (values) => {
    // const response = await register(values);
    console.log(values);
  };
  const handleSubmit = (value) => {
    registerUser(value);
    // navigate("/");
  };

  return (
    <div>
      <Userform handleSubmit={handleSubmit} />
    </div>
  );
};

export default User;

import Userform from "../components/Userform";
import { register } from "../api/user.services";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

const User = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const registerUser = async (values) => {
    const response = await register(values);
    if (response.data.mensaje === "") {
      setUser(response.data.newUser);
      navigate("/");
    } else {
      console.log(response.data);
    }
  };
  const handleSubmit = (value) => {
    registerUser(value);
  };

  return (
    <div>
      <Userform handleSubmit={handleSubmit} />
    </div>
  );
};

export default User;

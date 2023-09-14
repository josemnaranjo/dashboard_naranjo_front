import Userform from "../components/Userform";
import { register, getUser } from "../api/user.services";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

const User = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const registerUser = async (values) => {
    const response = await register(values);
    if (response.data.mensaje === "") {
      const userEmail = { email: response.data.newUser.email };
      const userData = await getUser(userEmail);
      setUser(userData.data);
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

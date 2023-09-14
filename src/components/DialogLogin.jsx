import { Button, Dialog } from "@radix-ui/themes";
import { BsBoxArrowInRight } from "react-icons/bs";
import Loginform from "../components/Loginform";
import { login, getUser } from "../api/user.services.js";
import { useUser } from "../context/userContext";

const DialogLogin = () => {
  const { setUser } = useUser();

  const cardStyle = {
    backgroundColor: "rgba(55, 75, 229, 0.97)",
    color: "white",
    width: "fit-content",
    padding: "15px",
  };
  const loginUser = async (values) => {
    const response = await login(values);

    if (response.data.mensaje === "Sesión iniciada con éxito") {
      const userEmail = { email: response.data.user[0].email };
      const userData = await getUser(userEmail);
      setUser(userData.data);
    } else {
      console.log(response.data);
    }
  };

  const handleSubmit = (values) => {
    loginUser(values);
  };
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="solid">
            <BsBoxArrowInRight />
            login
          </Button>
        </Dialog.Trigger>

        <Dialog.Content style={cardStyle}>
          <Loginform handleSubmit={handleSubmit} />
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default DialogLogin;

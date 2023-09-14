import { Link } from "react-router-dom";
import { Button } from "@radix-ui/themes";
import { BsPersonAdd, BsBoxArrowInLeft } from "react-icons/bs";
import DialogLogin from "../components/DialogLogin";
import { useUser } from "../context/userContext";
import { logout } from "../api/user.services";

const Navbar = () => {
  const { user, setUser } = useUser();

  const logoutUser = async () => {
    const { success } = await logout();
    if (success) setUser(null);
    else window.alert("Error. No hemos podido desloguear tu usuario");
  };


  const renderInfo = () => {
    if (user) {
      return (
        <div className="flex justify-end gap-3">
          <p className="text-base pt-2">¡Bienvenido, {user[0]?.name}!</p>
          <Link
            to="/user"
            className="flex items-center gap-2 hover:drop-shadow-lg"
          >
            <BsPersonAdd />
            <p className="text-base">nuevo usuario</p>
          </Link>
          <Button variant="solid" onClick={logoutUser}>
            <BsBoxArrowInLeft />
            logout
          </Button>
        </div>
      );
    } else {
      return (
        <div className="flex justify-end gap-3">
          <Link
            to="/user"
            className="flex items-center gap-2 hover:drop-shadow-lg"
          >
            <BsPersonAdd />
            <p className="text-base">nuevo usuario</p>
          </Link>
          <DialogLogin />
        </div>
      );
    }
  };

  return (
    <div className="bg-primary-dark text-white p-2">
      <div className="flex justify-end gap-3">{renderInfo()}</div>
    </div>
  );
};

export default Navbar;

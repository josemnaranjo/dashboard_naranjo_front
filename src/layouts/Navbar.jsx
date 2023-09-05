import { Link } from "react-router-dom";
import { BsPersonAdd, BsBoxArrowInLeft } from "react-icons/bs";
import DialogLogin from "../components/DialogLogin";

const Navbar = () => {
  const handleLogin = (value) => {
    console.log(value);
  };
  return (
    <div className="bg-primary-dark text-white p-2">
      <div className="flex justify-end gap-3">
        <Link
          to="/user"
          className="flex items-center gap-2 hover:drop-shadow-lg"
        >
          <BsPersonAdd />
          <p className="text-base">nuevo usuario</p>
        </Link>
        <DialogLogin handleLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Navbar;

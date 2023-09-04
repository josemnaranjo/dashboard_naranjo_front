import { Link } from "react-router-dom";
import { BsPersonAdd, BsBoxArrowInLeft } from "react-icons/bs";
import DialogLogin from "../components/DialogLogin";

const Navbar = () => {
  return (
    <div className="bg-primary-dark text-white rounded-l-lg p-2 ">
      <div className="flex justify-end gap-3">
        <Link to="/user" className="flex items-center gap-2">
          <BsPersonAdd />
          <p className="text-base">nuevo usuario</p>
        </Link>
        <DialogLogin />
      </div>
    </div>
  );
};

export default Navbar;

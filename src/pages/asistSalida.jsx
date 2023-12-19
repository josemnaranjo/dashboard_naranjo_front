import AttendanceForm from "../components/AttendanceForm";
import { checkOut } from "../api/workday.services";
const AsistSalida = () => {
  return (
    <div>
      <AttendanceForm handleCheckOut={checkOut} />
    </div>
  );
};

export default AsistSalida;

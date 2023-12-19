import AttendanceForm from "../components/AttendanceForm";
import { checkIn } from "../api/workday.services";
const AsistEntrada = () => {
  return (
    <div>
      <AttendanceForm start={true} handleCheckIn={checkIn} />
    </div>
  );
};

export default AsistEntrada;

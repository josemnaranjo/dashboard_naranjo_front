import { useParams } from "react-router-dom";
const AsistInformeVisual = ({ monthsData, setViewMonthList }) => {
  const { monthKey } = useParams();

  return (
    <div>
      <h1>Asistencia informe visual</h1>
    </div>
  );
};

export default AsistInformeVisual;

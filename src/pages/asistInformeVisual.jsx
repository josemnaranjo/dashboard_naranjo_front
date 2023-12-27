import { useParams, useOutletContext } from "react-router-dom";

const AsistInformeVisual = () => {
  const months = useOutletContext();
  const { monthKey } = useParams();

  console.log(months);
  return (
    <div>
      <h1>Asistencia informe visual {monthKey}</h1>
    </div>
  );
};

export default AsistInformeVisual;

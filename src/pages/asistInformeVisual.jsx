import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const AsistInformeVisual = () => {
  const months = useOutletContext();
  const { monthKey } = useParams();
  const navigate = useNavigate();

  const selectedMonth = months.filter((month) => month.key == monthKey);
  console.log(selectedMonth);

  return (
    <div className="absolute top-20 left-40 bg-slate-400 h-[40rem] w-[78rem] border border-black rounded-xl p-8 text-white">
      <h1>Asistencia informe visual {monthKey}</h1>
      <button onClick={() => navigate("/asistencia-informe-general")}>
        regresar
      </button>
    </div>
  );
};

export default AsistInformeVisual;

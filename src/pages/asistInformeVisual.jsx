import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMonthReport } from "../api/workers.services";

const AsistInformeVisual = () => {
  const [reportInfo, setReportInfo] = useState([]);
  const months = useOutletContext();
  const { monthKey } = useParams();
  const navigate = useNavigate();

  const selectedMonth = months.filter((month) => month.key == monthKey);
  const selectedMonthDates = selectedMonth.map((month) => ({
    startDate: month.startDate,
    endDate: month.endDate,
  }));

  const handleGetMonthReport = async () => {
    const monthsData = selectedMonthDates[0];
    const response = await getMonthReport(monthsData);
    setReportInfo(response.data);
  };

  useEffect(() => {
    handleGetMonthReport();
  }, []);

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

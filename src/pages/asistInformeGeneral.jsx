import { useNavigate, Outlet } from "react-router-dom";
import PaginatedMonths from "../components/PaginatedMonths";
import dayjs from "dayjs";

const AsistInformeGeneral = () => {
  const navigate = useNavigate();
  const year = dayjs().year();
  const yearString = year.toString();
  const months = [
    {
      key: 1,
      month: "enero",
      startDate: yearString + "-01" + "-01",
      endDate: yearString + "-01" + "-31",
    },
    {
      key: 2,
      month: "febrero",
      startDate: yearString + "-02" + "-01",
      endDate: yearString + "-01" + "-28",
    },
    {
      key: 3,
      month: "marzo",
      startDate: yearString + "-03" + "-01",
      endDate: yearString + "-01" + "-31",
    },
    {
      key: 4,
      month: "abril",
      startDate: yearString + "-04" + "-01",
      endDate: yearString + "-01" + "-30",
    },
    {
      key: 5,
      month: "mayo",
      startDate: yearString + "-05" + "-01",
      endDate: yearString + "-01" + "-31",
    },
    {
      key: 6,
      month: "junio",
      startDate: yearString + "-06" + "-01",
      endDate: yearString + "-01" + "-30",
    },
    {
      key: 7,
      month: "julio",
      startDate: yearString + "-07" + "-01",
      endDate: yearString + "-01" + "-31",
    },
    {
      key: 8,
      month: "agosto",
      startDate: yearString + "-08" + "-01",
      endDate: yearString + "-01" + "-31",
    },
    {
      key: 9,
      month: "septiembre",
      startDate: yearString + "-09" + "-01",
      endDate: yearString + "-01" + "-30",
    },
    {
      key: 10,
      month: "octubre",
      startDate: yearString + "-10" + "-01",
      endDate: yearString + "-01" + "-31",
    },
    {
      key: 11,
      month: "noviembre",
      startDate: yearString + "-11" + "-01",
      endDate: yearString + "-01" + "-30",
    },
    {
      key: 12,
      month: "diciembre",
      startDate: yearString + "-12" + "-01",
      endDate: yearString + "-01" + "-31",
    },
  ];
  return (
    <div>
      <PaginatedMonths
        monthsData={months}
        itemsPerPage={4}
        navigate={navigate}
      />
      <Outlet context={months} />
    </div>
  );
};

export default AsistInformeGeneral;

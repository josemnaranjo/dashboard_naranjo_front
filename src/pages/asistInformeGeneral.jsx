import PaginatedMonths from "../components/PaginatedMonths";

const AsistInformeGeneral = () => {
  const months = [
    { key: 1, month: "enero" },
    { key: 2, month: "febrero" },
    { key: 3, month: "marzo" },
    { key: 4, month: "abril" },
    { key: 5, month: "mayo" },
    { key: 6, month: "junio" },
    { key: 7, month: "julio" },
    { key: 8, month: "agosto" },
    { key: 9, month: "septiembre" },
    { key: 10, month: "octubre" },
    { key: 11, month: "noviembre" },
    { key: 12, month: "diciembre" },
  ];
  return (
    <div>
      <PaginatedMonths monthsData={months} itemsPerPage={4} />
    </div>
  );
};

export default AsistInformeGeneral;

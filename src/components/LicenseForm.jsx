import { Form, Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { formatRut, RutFormat } from "@fdograph/rut-utilities";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import Swal from "sweetalert2";

const valSchema = Yup.object().shape({
  starDate: Yup.string().required("Campo obligatorio"),
  finishDate: Yup.string().required("Campo obligatorio"),
});

const createLicense = (workerData, createWorkerLicense, setToggleForm) => {
  const handleToggleForm = () => {
    setToggleForm(false);
  };
  return (
    <Formik
      initialValues={{
        starDate: "",
        finishDate: "",
        rut: workerData.rut,
      }}
      validationSchema={valSchema}
      onSubmit={(values, { resetForm }) => {
        const rut = values.rut;
        const newLicenseData = {
          licenceStartDate: values.starDate,
          licenceEndDate: values.finishDate,
        };
        createWorkerLicense(rut, newLicenseData);
        resetForm();
        setToggleForm(false);
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form className=" flex justify-center items-center bg-gray-300 text-white container mx-auto h-full w-96 rounded-xl border-2  border-secondary-middle">
          <div className="flex flex-col items-center gap-8">
            <div className="text-xl">
              <h1>
                {workerData.name} {workerData.lastName}
              </h1>
              <h1 className="text-center">
                {formatRut(workerData.rut, RutFormat.DOTS_DASH)}
              </h1>
            </div>
            <div className="flex flex-col h-fit">
              <label htmlFor="starDate" className="text-white">
                Fecha de inicio
              </label>
              <DatePicker
                selected={values.starDate}
                onChange={(date) => setFieldValue("starDate", date)}
                dateFormat={"dd-MM-yyyy"}
                minDate={new Date()}
                placeholderText="seleccione fecha de inicio"
                className="w-48 rounded-lg border border-stone-400 bg-white px-2 py-1 text-center text-sm text-black"
                popperPlacement="top-end"
              />
              {errors.starDate && touched.starDate ? (
                <p className="text-label  text-red-500">{errors.starDate}</p>
              ) : null}
            </div>
            <div className="flex flex-col h-fit">
              <label htmlFor="finishDate">Fecha de término</label>
              <DatePicker
                selected={values.finishDate}
                onChange={(date) => setFieldValue("finishDate", date)}
                dateFormat={"dd-MM-yyyy"}
                minDate={new Date()}
                placeholderText="seleccione fecha de termino"
                className="w-48 rounded-lg border border-stone-400 bg-white px-2 py-1 text-center text-sm text-black"
                popperPlacement="top-end"
              />
              {errors.finishDate && touched.finishDate ? (
                <p className="text-label text-red-500">{errors.finishDate}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-secondary-middle text-white rounded-xl h-8 w-40 hover:bg-secondary-dark hover:drop-shadow-md"
            >
              registrar licencia
            </button>
            <button onClick={handleToggleForm}>volver</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const editLicense = (
  workerWithLicenseData,
  updateWorkerLicense,
  setToggleForm,
  setToggleCreateOrEdit
) => {
  const handleToggleForm = () => {
    setToggleCreateOrEdit(true);
    setToggleForm(false);
  };
  return (
    <Formik
      initialValues={{
        starDate: new Date(workerWithLicenseData.licenceStartDate),
        finishDate: new Date(workerWithLicenseData.licenceEndDate),
        rut: workerWithLicenseData.rut,
      }}
      validationSchema={valSchema}
      onSubmit={(values, { resetForm }) => {
        const rut = values.rut;
        const newLicenseData = {
          licenceStartDate: values.starDate,
          licenceEndDate: values.finishDate,
        };
        Swal.fire({
          text: "¿Estas seguro de editar la licencia?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "confirmar",
          cancelButtonText: "cancelar",
          color: "#fff",
          background: "#374be5",
          confirmButtonColor: "#E1BF1A",
          cancelButtonColor: "#b8b6b6",
        }).then((result) => {
          if (result.isConfirmed) {
            updateWorkerLicense(rut, newLicenseData);
            resetForm();
            setToggleForm(false);
            Swal.fire({
              color: "#fff",
              background: "#374be5",
              text: "Licencia actualizada exitosamente",
              icon: "success",
            });
          }
        });
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form className=" flex justify-center items-center bg-gray-300 text-white container mx-auto w-96 h-full rounded-xl border-2 border-primary-middle">
          <div className=" flex flex-col justify-center items-center gap-5 py-12">
            <div className="text-xl">
              <h1>
                {workerWithLicenseData.name} {workerWithLicenseData.lastName}
              </h1>
              <h1>
                {formatRut(workerWithLicenseData.rut, RutFormat.DOTS_DASH)}
              </h1>
            </div>
            <div className="flex flex-col h-fit items-center gap-2 ">
              <label htmlFor="starDate" className="text-white">
                Fecha de inicio:{" "}
                {dayjs(workerWithLicenseData.licenceStartDate).format(
                  "DD-MM-YYYY"
                )}
              </label>
              <DatePicker
                todayButton="hoy"
                selected={values.starDate}
                onChange={(date) => setFieldValue("starDate", date)}
                dateFormat={"dd-MM-yyyy"}
                minDate={new Date()}
                placeholderText="seleccione fecha de inicio"
                className="w-48 rounded-lg border border-stone-400 bg-white px-2 py-1 text-center text-sm text-black"
                popperPlacement="top-end"
              />
              {errors.starDate && touched.starDate ? (
                <p className="text-label  text-red-500">{errors.starDate}</p>
              ) : null}
            </div>
            <div className="flex flex-col items-center h-fit gap-2">
              <label htmlFor="finishDate">
                Fecha de término:{" "}
                {dayjs(workerWithLicenseData.licenceEndDate).format(
                  "DD-MM-YYYY"
                )}
              </label>
              <DatePicker
                todayButton="hoy"
                selected={values.finishDate}
                onChange={(date) => setFieldValue("finishDate", date)}
                dateFormat={"dd-MM-yyyy"}
                minDate={new Date()}
                placeholderText="seleccione fecha de termino"
                className="w-48 rounded-lg border border-stone-400 bg-white px-2 py-1 text-center text-sm text-black"
              />
              {errors.finishDate && touched.finishDate ? (
                <p className="text-label text-red-500">{errors.finishDate}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-primary-middle text-white rounded-xl h-8 w-40 hover:bg-primary-dark hover:drop-shadow-md"
            >
              editar licencia
            </button>
            <button onClick={handleToggleForm}>volver</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const LicenseForm = ({
  workerToAddLicense,
  toggleCreateOrEdit,
  workerWithLicenseToEdit,
  createWorkerLicense,
  updateWorkerLicense,
  setToggleForm,
  setToggleCreateOrEdit,
}) => {
  return (
    <div>
      {toggleCreateOrEdit
        ? createLicense(workerToAddLicense, createWorkerLicense, setToggleForm)
        : editLicense(
            workerWithLicenseToEdit,
            updateWorkerLicense,
            setToggleForm,
            setToggleCreateOrEdit
          )}
    </div>
  );
};

export default LicenseForm;

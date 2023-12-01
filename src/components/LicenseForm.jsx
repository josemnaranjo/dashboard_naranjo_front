import { Form, Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { formatRut, RutFormat } from "@fdograph/rut-utilities";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { BsXSquare } from "react-icons/bs";

const valSchema = Yup.object().shape({
  starDate: Yup.string().required("Campo obligatorio"),
  finishDate: Yup.string().required("Campo obligatorio"),
});

const createLicense = (workerData, updateWorkerLicense, setToggleForm) => {
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
        updateWorkerLicense(rut, newLicenseData);
        resetForm();
        setToggleForm(false);
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form className="bg-gray-300 text-white container mx-auto h-full w-96 rounded-xl border-2  border-secondary-middle">
          <div className="mt-14 ml-10">
            <BsXSquare />
          </div>
          <div className="flex flex-col justify-center items-center gap-8 py-14">
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
          </div>
        </Form>
      )}
    </Formik>
  );
};

const editLicense = (workerWithLicenseData) => {
  return (
    <Formik
      initialValues={{
        starDate: new Date(workerWithLicenseData.licenceStartDate),
        finishDate: new Date(workerWithLicenseData.licenceEndDate),
      }}
      validationSchema={valSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form className="bg-gray-300 text-white container mx-auto w-96 py-20 h-full rounded-xl flex flex-col justify-around items-center border-2 border-primary-middle">
          <div className="text-xl">
            <h1>
              {workerWithLicenseData.name} {workerWithLicenseData.lastName}
            </h1>
            <h1>{formatRut(workerWithLicenseData.rut, RutFormat.DOTS_DASH)}</h1>
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
              {dayjs(workerWithLicenseData.licenceEndDate).format("DD-MM-YYYY")}
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
        </Form>
      )}
    </Formik>
  );
};

const LicenseForm = ({
  workerToAddLicense,
  toggleCreateOrEdit,
  workerWithLicenseToEdit,
  updateWorkerLicense,
  setToggleForm,
}) => {
  return (
    <div>
      {toggleCreateOrEdit
        ? createLicense(workerToAddLicense, updateWorkerLicense, setToggleForm)
        : editLicense(workerWithLicenseToEdit)}
    </div>
  );
};

export default LicenseForm;

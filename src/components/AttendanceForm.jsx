import { Form, Formik, Field } from "formik";
import dayjs from "dayjs";
import { formatRut } from "@fdograph/rut-utilities";
import Swal from "sweetalert2";

const today = dayjs().format("DD-MM-YYYY");
const initialValues = {
  rut: "",
};

const re = /^[0-9]{7,8}[-]{1}[0-9kK]{1}$/;

const validationRut = (value) => {
  let error;
  if (!value) {
    error = "Por favor, ingresar RUT del trabajador";
  } else if (!re.test(value)) {
    error = "Formato de RUT incorrecto";
  }
  return error;
};

const AttendanceForm = ({ start, handleCheckIn }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          if (start) {
            try {
              const date = dayjs().format("YYYY-MM-DD");
              const rut = { rut: values.rut };
                handleCheckIn(date, rut);
              Swal.fire({
                icon: "success",
                text: "registro de ingreso creado exitosamente",
                background: "#374be5",
                color: "#fff",
              });
            } catch (error) {
              console.log(error);
              Swal.fire({
                icon: "error",
                text: "error al crear el registro de ingreso",
                background: "#374be5",
                color: "#fff",
              });
            }
          } else {
            console.log("check out");
          }
          resetForm();
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className="bg-gray-300 text-white container mx-auto w-96 py-20 h-full rounded-xl flex flex-col justify-around items-center gap-8 border-2 border-gray-400">
            <h1 className="text-xl">
              {start ? "registro de entrada" : "registro de salida"}
            </h1>
            <h2>fecha:{today}</h2>

            <div className="flex flex-col">
              <label htmlFor="rut">Rut</label>
              <Field
                id="rut"
                type="text"
                name="rut"
                className="w-64 h-7 rounded-lg px-2 text-black"
                onBlur={(event) => {
                  const formattedRut = formatRut(event.target.value);
                  setFieldValue("rut", formattedRut);
                }}
                validate={validationRut}
              />
              {errors.rut && touched.rut ? (
                <p className="text-label text-red-500">{errors.rut}</p>
              ) : null}
            </div>
            <div>
              <button
                type="submit"
                className="bg-secondary-middle text-white rounded-xl h-8 w-40 hover:bg-secondary-dark hover:drop-shadow-md"
              >
                registrar ingreso
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AttendanceForm;

import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

const valSchema = Yup.object().shape({
  starDate: Yup.string().required("Campo obligatorio"),
  finishDate: Yup.string().required("Campo obligatorio"),
});

const toggleCreateOrEdit = true;

const createLicense = () => {
  return (
    <Formik
      initialValues={{
        starDate: "",
        finishDate: "",
      }}
      validationSchema={valSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="bg-gray-300 text-white container mx-auto w-96 py-20 h-full rounded-xl flex flex-col justify-around items-center border-2 border-secondary-middle">
          <div className="text-xl">
            <h1>Prueba Uno</h1>
            <h1>17.353.051-K</h1>
          </div>
          <div className="flex flex-col h-fit">
            <label htmlFor="starDate" className="text-white">
              Fecha de inicio
            </label>
            <Field
              id="starDate"
              type="text"
              name="starDate"
              className="w-64 h-7 rounded-lg px-2 text-black"
            />
            {errors.starDate && touched.starDate ? (
              <p className="text-label  text-red-500">{errors.starDate}</p>
            ) : null}
          </div>
          <div className="flex flex-col h-fit">
            <label htmlFor="finishDate">Fecha de término</label>
            <Field
              id="finishDate"
              type="text"
              name="finishDate"
              className="w-64 h-7 rounded-lg px-2 text-black"
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
        </Form>
      )}
    </Formik>
  );
};

const editLicense = () => {
  return (
    <Formik
      initialValues={{
        starDate: "",
        finishDate: "",
      }}
      validationSchema={valSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="bg-gray-300 text-white container mx-auto w-96 py-20 h-full rounded-xl flex flex-col justify-around items-center border-2 border-primary-middle">
          <div className="text-xl">
            <h1>Prueba Uno</h1>
            <h1>17.353.051-K</h1>
          </div>
          <div className="flex flex-col h-fit">
            <label htmlFor="starDate" className="text-white">
              Fecha de inicio
            </label>
            <Field
              id="starDate"
              type="text"
              name="starDate"
              className="w-64 h-7 rounded-lg px-2 text-black"
            />
            {errors.starDate && touched.starDate ? (
              <p className="text-label  text-red-500">{errors.starDate}</p>
            ) : null}
          </div>
          <div className="flex flex-col h-fit">
            <label htmlFor="finishDate">Fecha de término</label>
            <Field
              id="finishDate"
              type="text"
              name="finishDate"
              className="w-64 h-7 rounded-lg px-2 text-black"
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

const LicenseForm = () => {
  return <div>{toggleCreateOrEdit ? createLicense(): editLicense()}</div>;
};

export default LicenseForm;

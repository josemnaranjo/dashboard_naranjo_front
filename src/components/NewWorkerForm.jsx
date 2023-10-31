import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { formatRut } from "@fdograph/rut-utilities";

const NewWorkerForm = ({
  handleSubmitCreate,
  handleSubmitUpdate,
  workerToUpdate,
}) => {
  const valSchema = Yup.object().shape({
    name: Yup.string().required("Campo obligatorio"),

    lastName: Yup.string().required("Campo obligatorio"),

    rut: Yup.string().required("Campo obligatorio"),
  });

  const createWorkerForm = () => {
    return (
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          rut: "",
          exWorker: false,
        }}
        validationSchema={valSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmitCreate(values);
          resetForm();
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className="bg-gray-300 text-white container mx-auto w-96 py-20 h-full rounded-xl flex flex-col justify-around items-center">
            <h1 className="text-xl">Nuevo trabajador</h1>
            <div className="flex flex-col h-fit">
              <label htmlFor="name" className="text-white">
                Nombre
              </label>
              <Field
                id="name"
                type="text"
                name="name"
                className="w-64 h-7 rounded-lg px-2 text-black"
              />
              {errors.name && touched.name ? (
                <p className="text-label  text-red-500">{errors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col h-fit">
              <label htmlFor="lastName">Apellido</label>
              <Field
                id="lastName"
                type="text"
                name="lastName"
                className="w-64 h-7 rounded-lg px-2 text-black"
              />
              {errors.lastName && touched.lastName ? (
                <p className="text-label text-red-500">{errors.lastName}</p>
              ) : null}
            </div>
            <div className="flex flex-col h-fit">
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
              />
              {errors.rut && touched.rut ? (
                <p className="text-label text-red-500">{errors.rut}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="exWorker">
                {" "}
                El trabajador es exempleado
                <Field type="checkbox" name="exWorker" className="ml-2" />
              </label>
            </div>
            <button
              type="submit"
              className="bg-secondary-middle text-white rounded-xl h-8 w-40 hover:bg-secondary-dark hover:drop-shadow-md"
            >
              crear trabajador
            </button>
          </Form>
        )}
      </Formik>
    );
  };

  const updateWorkerForm = () => {
    return (
      <Formik
        initialValues={{
          name: workerToUpdate.name,
          lastName: workerToUpdate.lastName,
          rut: workerToUpdate.rut,
          id: workerToUpdate.id,
        }}
        enableReinitialize
        validationSchema={valSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmitUpdate(values);
          resetForm();
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className="bg-gray-300 text-white container mx-auto w-96 py-20 h-full rounded-xl flex flex-col justify-around items-center">
            <h1 className="text-xl">Nuevo trabajador</h1>
            <div className="flex flex-col h-fit">
              <label htmlFor="name" className="text-white">
                Nombre
              </label>
              <Field
                id="name"
                type="text"
                name="name"
                className="w-64 h-7 rounded-lg px-2 text-black"
              />
              {errors.name && touched.name ? (
                <p className="text-label  text-red-500">{errors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col h-fit">
              <label htmlFor="lastName">Apellido</label>
              <Field
                id="lastName"
                type="text"
                name="lastName"
                className="w-64 h-7 rounded-lg px-2 text-black"
              />
              {errors.lastName && touched.lastName ? (
                <p className="text-label text-red-500">{errors.lastName}</p>
              ) : null}
            </div>
            <div className="flex flex-col h-fit">
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
              />
              {errors.rut && touched.rut ? (
                <p className="text-label text-red-500">{errors.rut}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-secondary-middle text-white rounded-xl h-8 w-40 hover:bg-secondary-dark hover:drop-shadow-md"
            >
              actualizar datos
            </button>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <div>
      {workerToUpdate.toUpdate ? updateWorkerForm() : createWorkerForm()}
    </div>
  );
};

export default NewWorkerForm;

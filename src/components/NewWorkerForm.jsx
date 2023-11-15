import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { formatRut } from "@fdograph/rut-utilities";
import { useState, useEffect } from "react";
import isEqual from "lodash.isequal";
import Swal from "sweetalert2";

const NewWorkerForm = ({
  handleSubmitCreate,
  updateWorkerAsync,
  workerToUpdate,
}) => {
  const [form, setForm] = useState();

  //VALIDACIONES

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

  const valSchema = Yup.object().shape({
    name: Yup.string().required("Campo obligatorio"),

    lastName: Yup.string().required("Campo obligatorio"),
  });

  //FIN VALIDACIONES

  //FORMULARIO CREAR TRABAJADOR

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
          <Form className="bg-gray-300 text-white container mx-auto w-96 py-20 h-full rounded-xl flex flex-col justify-around items-center border-2 border-secondary-middle">
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
                validate={validationRut}
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

  // FIN FORMULARIO CREAR TRABAJADOR

  //Todo lo que está abajo corresponde al formulario para actualizar los datos del trabajador

  const handleResetFormToCreate = () => {
    setForm(false);
  };

  const handleUpdateSubmit = (values) => {
    updateWorkerAsync(values);
    handleResetFormToCreate();
  };

  // transformar esta funcion en un hook
  const handleFormRender = () => {
    if (workerToUpdate.toUpdate) {
      setForm(true);
    } else {
      setForm(false);
    }
  };

  //UseEffect para setear el state "form" como falso al principio, con el objetivo de mostrar el formulario de crear. Luego, registrar los cambios en
  //workerToUpdate y permitir variación entre uno y otro formulario
  useEffect(() => {
    handleFormRender();
  }, [workerToUpdate]);

  const initialValuesForUpdate = {
    name: workerToUpdate.name,
    lastName: workerToUpdate.lastName,
    rut: workerToUpdate.rut,
    id: workerToUpdate.id,
  };

  const updateWorkerForm = () => {
    return (
      <Formik
        initialValues={initialValuesForUpdate}
        enableReinitialize
        validationSchema={valSchema}
        onSubmit={(values, { resetForm }) => {
          if (isEqual(initialValuesForUpdate, values)) {
            Swal.fire({
              icon: "error",
              text: "No se registraron cambios en la información del trabajador",
              background: "#374be5",
              color: "#fff",
            });
          } else {
            handleUpdateSubmit(values);
            resetForm();
          }
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className="bg-gray-300 text-white container mx-auto w-96 py-20 h-full rounded-xl flex flex-col justify-around items-center border-2 border-primary-middle">
            <h1 className="text-xl">Editar trabajador</h1>
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
                validate={validationRut}
              />
              {errors.rut && touched.rut ? (
                <p className="text-label text-red-500">{errors.rut}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="bg-secondary-middle text-white rounded-xl h-8 w-40 hover:bg-secondary-dark hover:drop-shadow-md"
              >
                actualizar datos
              </button>
              <button
                type="button"
                onClick={() => {
                  handleResetFormToCreate();
                  setFieldValue("id", "");
                  setFieldValue("name", "");
                  setFieldValue("lastName", "");
                  setFieldValue("rut", "");
                }}
              >
                volver
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  //Fin de la parte para controlar el formulario para actualizar los datos del trabajador

  return (
    <div>
      {/* {workerToUpdate.toUpdate ? updateWorkerForm() : createWorkerForm()} */}
      {form ? updateWorkerForm() : createWorkerForm()}
    </div>
  );
};

export default NewWorkerForm;

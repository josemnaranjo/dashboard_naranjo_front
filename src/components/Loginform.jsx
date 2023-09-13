import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

const Loginform = ({ handleSubmit }) => {
  const valSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato de correo incorrecto")
      .required("Campo obligatorio"),

    password: Yup.string().required("Campo obligatorio"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={valSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className=" text-white p-2 rounded-md">

            <div className="flex flex-col">
              <label htmlFor="email">email</label>
              <Field
                id="email"
                type="text"
                name="email"
                className="w-38 rounded-lg px-2 text-black"
              />
              {errors.email && touched.email ? (
                <p className="text-label text-red-500">{errors.email}</p>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">contraseña</label>
              <Field
                id="password"
                type="password"
                name="password"
                className="w-38 rounded-lg px-2 text-black"
              />
              {errors.password && touched.password ? (
                <p className="text-label mt-2 text-red-500">
                  {errors.password}
                </p>
              ) : null}
            </div>
            <div className="flex justify-around items-center mt-5">
              <button className="bg-primary-dark p-1 px-3 rounded">crear</button>
              <button className="bg-secondary-dark p-1 rounded">cancelar</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Loginform;

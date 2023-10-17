import { Button } from "@radix-ui/themes";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

const Userform = ({ handleSubmit }) => {
  const valSchema = Yup.object().shape({
    name: Yup.string().required("Campo obligatorio"),

    lastName: Yup.string().required("Campo obligatorio"),

    email: Yup.string()
      .email("Formato de correo incorrecto")
      .required("Campo obligatorio"),

    password: Yup.string()
      .required("Campo obligatorio")
      .min(8, "Tu contraseña debe ser más larga")
      .equals(
        [Yup.ref("confirmPassword"), null],
        "las contraseñas no son iguales"
      ),

    confirmPassword: Yup.string()
      .required("Campo obligatorio")
      .min(8, "Tu contraseña debe ser más larga")
      .equals(
        [Yup.ref("confirmPassword"), null],
        "las contraseñas no son iguales"
      ),
  });
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={valSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-slate-300 text-white container mx-auto w-96 p-8 rounded-md grid grid-rows-7 gap-3">
            <h1 className="text-xl font-bold">Formulario de registro</h1>

            <div className="flex flex-col">
              <label htmlFor="name">nombre</label>
              <Field
                id="name"
                type="text"
                name="name"
                className="w-38 rounded-lg px-2 text-black"
              />
              {errors.name && touched.name ? (
                <p className="text-label mt-2 text-red-500">{errors.name}</p>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName">apellido</label>
              <Field
                id="lastName"
                type="text"
                name="lastName"
                className="w-38 rounded-lg px-2 text-black"
              />
              {errors.lastName && touched.lastName ? (
                <p className="text-label mt-2 text-red-500">
                  {errors.lastName}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">email</label>
              <Field
                id="email"
                type="text"
                name="email"
                className="w-38 rounded-lg px-2 text-black"
              />
              {errors.email && touched.email ? (
                <p className="text-label mt-2 text-red-500">{errors.email}</p>
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

            <div className="flex flex-col">
              <label htmlFor="confirmPassword">confirmar contraseña</label>
              <Field
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                className="w-38 rounded-lg px-2 text-black"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="text-label mt-2 text-red-500">
                  {errors.confirmPassword}
                </p>
              ) : null}
            </div>

            <Button type="submit" variant="solid">
              crear
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Userform;

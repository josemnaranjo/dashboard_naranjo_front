import { Button } from "@radix-ui/themes";
import { Form, Formik, Field } from "formik";

const User = () => {
  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        <Form className="bg-slate-400 text-white container mx-auto w-96 p-8 rounded-md grid grid-rows-6 gap-3">
          <h1 className="text-xl font-bold">Formulario de registro</h1>
          <div className="flex flex-col">
            <label htmlFor="name">nombre</label>
            <Field
              id="name"
              type="text"
              name="name"
              className="w-38 rounded-lg px-2 text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName">apellido</label>
            <Field
              id="lastName"
              type="text"
              name="lastName"
              className="w-38 rounded-lg px-2 text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">email</label>
            <Field
              id="email"
              type="text"
              name="email"
              className="w-38 rounded-lg px-2 text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">contraseña</label>
            <Field
              id="password"
              type="password"
              name="password"
              className="w-38 rounded-lg px-2 text-black"
            />
          </div>

          <Button variant="solid">crear</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default User;

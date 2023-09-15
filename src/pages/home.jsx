import { useUser } from "../context/userContext";
const Home = () => {
  const { user } = useUser();

  const renderInfo = () => {
    if (user) {
      return (
        <div>
          <h1>Informacion por definir</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>Por favor, inicia sesión para poder acceder al dashboard</h1>
      </div>
    );
  };
  return <div>{renderInfo()}</div>;
};

export default Home;

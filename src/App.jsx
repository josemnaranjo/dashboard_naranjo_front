import { Button } from "@radix-ui/themes";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline ">Hola Mundo!</h1>
      <Button size="4" variant="classic" className="bg-red-900">
        Botón
      </Button>
    </>
  );
}

export default App;

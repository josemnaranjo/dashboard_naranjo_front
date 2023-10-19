import { BsSearch } from "react-icons/bs";
const WorkersList = () => {
  return (
    <div className="bg-gray-300 rounded-xl flex flex-col py-20 justify-around">
      <div className="pt-7 flex justify-center items-center gap-2">
        <input
          type="text"
          className="rounded-lg px-3 w-80 h-7"
          placeholder="buscar trabajador"
        />
        <button className="rounded-full border-2 p-1.5 hover:drop-shadow-xl">
          <BsSearch className="text-white w-3 h-3" />
        </button>
      </div>
      <ul className="text-white px-5">
        <li className="grid grid-cols-3 gap-4 mt-3">
          <h2 className="py-1">Trabajador Uno</h2>
          <button className="bg-primary-middle text-white rounded-xl px-3 py-1 hover:bg-primary-dark hover:drop-shadow-md">
            borrar
          </button>
          <button className="bg-secondary-middle text-white rounded-xl px-3 py-1 hover:bg-secondary-dark hover:drop-shadow-md">
            editar
          </button>
        </li>
        <li className="grid grid-cols-3 gap-4 mt-3">
          <h2 className="py-1">Trabajador Dos</h2>
          <button className="bg-primary-middle text-white rounded-xl px-3 py-1 hover:bg-primary-dark hover:drop-shadow-md">
            borrar
          </button>
          <button className="bg-secondary-middle text-white rounded-xl px-3 py-1 hover:bg-secondary-dark hover:drop-shadow-md">
            editar
          </button>
        </li>
        <li className="grid grid-cols-3 gap-4 mt-3">
          <h2 className="py-1">Trabajador Tres</h2>
          <button className="bg-primary-middle text-white rounded-xl px-3 py-1 hover:bg-primary-dark hover:drop-shadow-md">
            borrar
          </button>
          <button className="bg-secondary-middle text-white rounded-xl px-3 py-1 hover:bg-secondary-dark hover:drop-shadow-md">
            editar
          </button>
        </li>
        <li className="grid grid-cols-3 gap-4 mt-3">
          <h2 className="py-1">Trabajador Cuatro</h2>
          <button className="bg-primary-middle text-white rounded-xl px-3 py-1 hover:bg-primary-dark hover:drop-shadow-md">
            borrar
          </button>
          <button className="bg-secondary-middle text-white rounded-xl px-3 py-1 hover:bg-secondary-dark hover:drop-shadow-md">
            editar
          </button>
        </li>
        <li className="grid grid-cols-3 gap-4 mt-3">
          <h2 className="py-1">Trabajador Cinco</h2>
          <button className="bg-primary-middle text-white rounded-xl px-3 py-1 hover:bg-primary-dark hover:drop-shadow-md">
            borrar
          </button>
          <button className="bg-secondary-middle text-white rounded-xl px-3 py-1 hover:bg-secondary-dark hover:drop-shadow-md">
            editar
          </button>
        </li>
      </ul>
      <div className="text-white text-center">
        <h1>1,2,3</h1>
      </div>
    </div>
  );
};

export default WorkersList;

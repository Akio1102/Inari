import { useCategorys } from "../Context/CategorysContext";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  const { deleteCategory } = useCategorys();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-lg shadow-2xl">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{category.nombre}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            className="bg-red-500 hover:bg-red-500 px-4 py-2 rounded-xl"
            onClick={() => {
              deleteCategory(category._id);
            }}
          >
            Delete
          </button>
          <Link
            to={`/category/${category._id}`}
            className="bg-blue-500 hover:bg-blue-500 px-4 py-2 rounded-xl"
          >
            Edit
          </Link>
        </div>
      </header>
      <p className="text-slate-300">{category.descripcion}</p>
    </div>
  );
}

export default CategoryCard;

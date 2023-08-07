import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useCategorys } from "../Context/CategorysContext";
import { useEffect } from "react";

export default function CategoryFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { createCategory, getCategory, updateCategory } = useCategorys();
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadCategory() {
      if (params.id) {
        const category = await getCategory(params.id);
        console.log(category);
        setValue("nombre", category.nombre);
        setValue("descripcion", category.descripcion);
      }
    }
    loadCategory();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      updateCategory(params.id, data);
    } else {
      try {
        await createCategory(data);
        navigation("/categorys");
      } catch (error) {
        console.error(error);
      }
    }
  });

  const formInputStyle = `w-full bg-transparent border rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500`;

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md p-8 rounded-lg shadow-2xl bg-zinc-700"
      >
        <div className="mb-4">
          <label htmlFor="nombre" className="text-lg font-semibold mb-2">
            Nombre de la Categoria:
          </label>
          <input
            type="text"
            id="nombre"
            autoFocus
            {...register("nombre", { required: true })}
            className={`${formInputStyle} ${
              errors.email ? "border-red-500" : "border-zinc-500"
            } focus:border-indigo-500 transition-colors`}
          />
          {errors.nombre && (
            <p className="text-red-500 my-2">
              El Nombre de la Categoria es requerido
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="text-lg font-semibold mb-2">
            Descripcion Categoria:
          </label>
          <textarea
            id="descripcion"
            rows="10"
            {...register("descripcion", { required: true })}
            className={`${formInputStyle} ${
              errors.descripcion ? "border-red-500" : "border-zinc-500"
            } focus:border-indigo-500 transition-colors`}
          ></textarea>
          {errors.descripcion && (
            <p className="text-red-500 my-2">La descripcion es requerida</p>
          )}
        </div>
        <button
          type="submit"
          className={
            "bg-blue-500 hover:bg-blue-700 text-white text-lg h-10 w-full rounded-3xl"
          }
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

import { useEffect } from "react";
import { useCategorys } from "../Context/CategorysContext";
import CategoryCard from "../Components/CategoryCard";

function CategorysPage() {
  const { categorys, getCategorys } = useCategorys();

  useEffect(() => {
    getCategorys();
  }, []);

  if (categorys.length === 0) {
    return <h1>No hay Categorias</h1>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {categorys.map((category) => (
        <CategoryCard category={category} key={category._id} />
      ))}
    </div>
  );
}

export default CategorysPage;

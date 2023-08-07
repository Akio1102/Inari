import { createContext, useContext, useState } from "react";
import {
  createCategorysRequest,
  getCategorysRequest,
  deleteCategorysRequest,
  getOneCategoryRequest,
  updateCategorysRequest,
} from "../Api/Categorys";

const CategoryContext = createContext();

export const useCategorys = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategorys debe ser utilizado dentro de un Provider");
  }
  return context;
};

export function CategoryProvider({ children }) {
  const [categorys, setCategorys] = useState([]);

  const getCategorys = async () => {
    try {
      const res = await getCategorysRequest();
      setCategorys(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await deleteCategorysRequest(id);
      if (res.status === 200) {
        setCategorys(categorys.filter((category) => category._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createCategory = async (category) => {
    try {
      const res = await createCategorysRequest(category);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategory = async (id) => {
    try {
      const res = await getOneCategoryRequest(id);
      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateCategory = async (id, category) => {
    try {
      await updateCategorysRequest(id, category);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        categorys,
        createCategory,
        getCategorys,
        deleteCategory,
        getCategory,
        updateCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

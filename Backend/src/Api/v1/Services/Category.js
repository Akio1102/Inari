import Categorias from "../Models/Category.Schema.js";

const getAllCategorias = async () => {
  try {
    const allCategorias = await Categorias.find();
    if (allCategorias < 0) {
      return { msg: "No hay Cagetogiras", status: 404 };
    }
    return { msg: "Cagetogiras Encontradas", data: allCategorias };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const getOneCategoria = async (categoriaID) => {
  try {
    const OneCategory = await Categorias.findById(categoriaID);

    if (!OneCategory) {
      return { msg: "No Existe esa Categoria", status: 404 };
    }
    return { msg: "Categoria encontrada", data: OneCategory };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const createNewCategoria = async (newCategoriaData) => {
  try {
    const newCategory = await Categorias.create(newCategoriaData);
    if (newCategory) {
      return {
        status: 201,
        msg: "Categoria creada Exitosamente",
        data: newCategory,
      };
    } else {
      return {
        status: 400,
        msg: "Categoria Faltan Datos",
      };
    }
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const updateOneCategoria = async (categoriaID, categoriaData) => {
  try {
    const existingCategory = await Categorias.findById(categoriaID);

    if (!existingCategory) {
      return {
        msg: `La Categoria no existe`,
        status: 404,
      };
    }

    const updateTransaccion = await Categorias.findByIdAndUpdate(
      categoriaID,
      categoriaData,
      {
        new: true,
      }
    );

    return {
      status: 201,
      msg: "Categoria Actualizado Exitosamente",
      data: updateTransaccion,
    };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const deleteOneCategoria = async (categoriaID) => {
  try {
    const deletedCategory = await Categorias.findByIdAndDelete(categoriaID);
    if (!deletedCategory) {
      return {
        msg: `La Categoria no existe`,
        status: 404,
      };
    }

    return {
      status: 200,
      msg: "Categoria Eliminada Exitosamente",
    };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

export default {
  getAllCategorias,
  getOneCategoria,
  createNewCategoria,
  updateOneCategoria,
  deleteOneCategoria,
};

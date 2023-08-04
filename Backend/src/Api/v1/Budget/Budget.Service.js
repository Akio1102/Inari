import Presupuestos from "./Budget.Schema.js";

const getAllPresupuestos = async () => {
  try {
    const allPresupuestos = await Presupuestos.find();
    if (allPresupuestos > 0) {
      return { msg: "Presupuestos Encontrados", data: allPresupuestos };
    }
    return { msg: "No hay Presupuestos", status: 404 };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const getOnePresupuesto = async (presupuestoID) => {
  try {
    const OnePresupuesto = await Presupuestos.findById(presupuestoID);

    if (!OnePresupuesto) {
      return { msg: "No Existe esa Presupuesto", status: 404 };
    }
    return { msg: "Presupuesto encontrado", data: OnePresupuesto };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const createNewPresupuesto = async (newPresupuestoData) => {
  try {
    const newPresupuesto = await Presupuestos.create(newPresupuestoData);
    if (newPresupuesto) {
      return {
        status: 201,
        msg: "Presupuesto creado Exitosamente",
        data: newPresupuesto,
      };
    } else {
      return {
        status: 400,
        msg: "Presupuesto Faltan Datos",
      };
    }
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const updateOnePresupuesto = async (presupuestoID, presupuestoData) => {
  try {
    const existingPresupuesto = await Presupuestos.findById(presupuestoID);

    if (!existingPresupuesto) {
      return {
        msg: `El Presupuesto no existe`,
        status: 404,
      };
    }

    const updatePresupuesto = await Presupuestos.findByIdAndUpdate(
      categoriaID,
      categoriaData,
      {
        new: true,
      }
    );

    return {
      status: 201,
      msg: "Presupuesto Actualizado Exitosamente",
      data: updatePresupuesto,
    };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const deleteOnePresupuesto = async (presupuestoID) => {
  try {
    const deletedPresupuesto = await Presupuestos.findByIdAndDelete(presupuestoID);

    if (!deletedPresupuesto) {
      return {
        msg: `La Presupuesto no existe`,
        status: 404,
      };
    }

    return {
      status: 200,
      msg: "Presupuesto Eliminado Exitosamente",
    };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

export default {
  getAllPresupuestos,
  getOnePresupuesto,
  createNewPresupuesto,
  updateOnePresupuesto,
  deleteOnePresupuesto,
};

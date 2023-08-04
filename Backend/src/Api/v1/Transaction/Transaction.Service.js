import Transacciones from "./Transaction.Schema.js";

const getAllTransacciones = async () => {
  try {
    const allTransacciones = await Transacciones.find();
    if (allTransacciones > 0) {
      return { msg: "Transancciones Encontradas", data: allUser };
    }
    return { msg: "No hay Transancciones", status: 404 };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const getOneTransaccion = async (transaccionID) => {
  try {
    const OneTransaccion = await Transacciones.findById(transaccionID);

    if (!OneTransaccion) {
      return { msg: "No Existe esa Transanccion", status: 404 };
    }
    return { msg: "Transanccion encontrada", data: OneTransaccion };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const createNewTransaccion = async (newTransaccionData) => {
  try {
    const newTransanccion = await Transacciones.create(newTransaccionData);
    if (newTransanccion) {
      return {
        status: 201,
        msg: "Transanccion creada Exitosamente",
        data: newTransanccion,
      };
    } else {
      return {
        status: 400,
        msg: "Transanccion Faltan Datos",
      };
    }
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const updateOneTransaccion = async (transaccionID, transaccionData) => {
  try {
    const existingUser = await Usuarios.findById(transaccionID);

    if (!existingUser) {
      return {
        msg: `La Transaccion no existe`,
        status: 404,
      };
    }

    const updateTransaccion = await Usuarios.findByIdAndUpdate(
      transaccionID,
      transaccionData,
      {
        new: true,
      }
    );

    return {
      status: 201,
      msg: "Transaccopm Actualizado Exitosamente",
      data: updateTransaccion,
    };
  } catch (error) {
    throw new Error("Hubo un problema al actualizar la Transaccion");
  }
};

const deleteOneTransaccion = async (transaccionID) => {
  try {
    const deletedTransaccion = await Transacciones.findByIdAndDelete(
      transaccionID
    );

    if (!deletedTransaccion) {
      return {
        msg: `La Transaccion no existe`,
        status: 404,
      };
    }

    return {
      status: 200,
      msg: "Transaccion Eliminada Exitosamente",
    };
  } catch (error) {
    throw new Error("Hubo un problema al actualizar el usuario");
  }

  return await Transacciones.findByIdAndDelete(transaccionID);
};

export default {
  getAllTransacciones,
  getOneTransaccion,
  createNewTransaccion,
  updateOneTransaccion,
  deleteOneTransaccion,
};

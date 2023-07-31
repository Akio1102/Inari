import Transacciones from "../../Models/Transaccion.js";

const getAllTransacciones = async () => {
  return await Transacciones.find();
};

const getOneTransaccion = async (transaccionID) => {
  return await Transacciones.findById(transaccionID);
};

const createNewTransaccion = async (newTransaccionData) => {
  return await Transacciones.create(newTransaccionData);
};

const updateOneTransaccion = async (transaccionID, transaccionData) => {
  return await Transacciones.findByIdAndUpdate(transaccionID, transaccionData, {
    new: true,
  });
};

const deleteOneTransaccion = async (transaccionID) => {
  return await Transacciones.findByIdAndDelete(transaccionID);
};

export default {
  getAllTransacciones,
  getOneTransaccion,
  createNewTransaccion,
  updateOneTransaccion,
  deleteOneTransaccion,
};

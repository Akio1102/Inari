import Presupuestos from "../../Models/Presupuesto.js";

const getAllPresupuestos = async () => {
  return await Presupuestos.find();
};

const getOnePresupuesto = async (presupuestoID) => {
  return await Presupuestos.findById(presupuestoID);
};

const createNewPresupuesto = async (newPresupuestoData) => {
  return await Presupuestos.create(newPresupuestoData);
};

const updateOnePresupuesto = async (presupuestoID, presupuestoData) => {
  return await Presupuestos.findByIdAndUpdate(presupuestoID, presupuestoData, {
    new: true,
  });
};

const deleteOnePresupuesto = async (presupuestoID) => {
  return await Presupuestos.findByIdAndDelete(presupuestoID);
};

export default {
  getAllPresupuestos,
  getOnePresupuesto,
  createNewPresupuesto,
  updateOnePresupuesto,
  deleteOnePresupuesto,
};

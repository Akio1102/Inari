import presupuestosService from "../Services/Budget.js";
import { sendErrorResponse, handleResponse } from "../Helpers/sendResponse.js";

const getAllPresupuestos = async (req, res) => {
  try {
    const { id } = req.user;
    const allPresupuestos = await presupuestosService.getAllPresupuestos(id);
    handleResponse(res, allPresupuestos);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getOnePresupuesto = async (req, res) => {
  try {
    const { presupuestoId } = req.params;
    const OnePresupuesto = await presupuestosService.getOnePresupuesto(
      presupuestoId
    );
    handleResponse(res, OnePresupuesto);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewPresupuesto = async (req, res) => {
  try {
    const { id } = req.user;
    const { categoria, monto } = req.body;

    const data = {
      usuario: id,
      categoria,
      monto,
    };
    const createdPresupuesto = await presupuestosService.createNewPresupuesto(
      data
    );
    handleResponse(res, createdPresupuesto);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOnePresupuesto = async (req, res) => {
  try {
    const { presupuestoId } = req.params;
    const { id } = req.user;
    const { categoria, monto } = req.body;

    const data = {
      usuario: id,
      categoria,
      monto,
    };
    const updatedPresupuesto = await presupuestosService.updateOnePresupuesto(
      presupuestoId,
      data
    );
    handleResponse(res, updatedPresupuesto);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOnePresupuesto = async (req, res) => {
  try {
    const { presupuestoId } = req.params;
    const deletedPresupuesto = await presupuestosService.deleteOnePresupuesto(
      presupuestoId
    );
    handleResponse(res, deletedPresupuesto);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export default {
  getAllPresupuestos,
  getOnePresupuesto,
  createNewPresupuesto,
  updateOnePresupuesto,
  deleteOnePresupuesto,
};

import presupuestosService from "./Budget.Service.js";
import {
  sendErrorResponse,
  handleUsuariosResponse,
} from "../Helpers/sendResponse.js";

const getAllPresupuestos = async (req, res) => {
  try {
    const allPresupuestos = await presupuestosService.getAllPresupuestos();
    handleUsuariosResponse(res, allPresupuestos);
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
    handleUsuariosResponse(res, OnePresupuesto);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewPresupuesto = async (req, res) => {
  try {
    const createdPresupuesto = await presupuestosService.createNewPresupuesto(
      req.body
    );
    handleUsuariosResponse(res, createdPresupuesto);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOnePresupuesto = async (req, res) => {
  try {
    const { presupuestoId } = req.params;
    const updatedPresupuesto = await presupuestosService.updateOnePresupuesto(  presupuestoId,req.body);
    handleUsuariosResponse(res, updatedPresupuesto);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOnePresupuesto = async (req, res) => {
  try {
    const { presupuestoId } = req.params;
    const deletedPresupuesto = await presupuestosService.deleteOnePresupuesto(presupuestoId);
    handleUsuariosResponse(res, deletedPresupuesto);
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

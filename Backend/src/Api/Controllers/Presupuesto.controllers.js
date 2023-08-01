import presupuestosService from "../Services/PresupuestoService.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/sendResponse.js";

const getAllPresupuestos = async (req, res) => {
  try {
    const allPresupuestos = await presupuestosService.getAllPresupuestos();
    if (allPresupuestos.length > 0) {
      sendSuccessResponse(res, allPresupuestos, "Presupuestos encontrados");
    } else {
      sendErrorResponse(res, "No hay Presupuestos", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getOnePresupuesto = async (req, res) => {
  try {
    const OnePresupuesto = await presupuestosService.getOnePresupuesto(
      req.params.presupuestoId
    );
    if (OnePresupuesto) {
      sendSuccessResponse(res, OnePresupuesto, "Presupuesto encontrada");
    } else {
      sendErrorResponse(res, "No Existe ese Presupuesto", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewPresupuesto = async (req, res) => {
  try {
    const createdPresupuesto = await presupuestosService.createNewPresupuesto(
      req.body
    );
    sendSuccessResponse(res, createdPresupuesto, "Presupuesto Creado", 201);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOnePresupuesto = async (req, res) => {
  try {
    const updatedPresupuesto = await presupuestosService.updateOnePresupuesto(
      req.params.presupuestoId,
      req.body
    );
    if (updatedPresupuesto) {
      sendSuccessResponse(res, updatedPresupuesto, "Presupuesto Actualizado");
    } else {
      sendErrorResponse(res, "Presupuesto no encontrado", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOnePresupuesto = async (req, res) => {
  try {
    const deletedPresupuesto = await presupuestosService.deleteOnePresupuesto(
      req.params.presupuestoId
    );
    if (deletedPresupuesto) {
      sendSuccessResponse(res, deletedPresupuesto, "Presupuesto Eliminado");
    } else {
      sendErrorResponse(res, "Presupuesto no encontrado", 404);
    }
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

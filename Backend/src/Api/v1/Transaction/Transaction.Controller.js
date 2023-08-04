import transaccionesService from "./Transaction.Service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
  handleUsuariosResponse,
} from "../Helpers/sendResponse.js";

const getAllTransacciones = async (req, res) => {
  try {
    const allTransancciones = await transaccionesService.getAllTransacciones();
    handleUsuariosResponse(res, allTransancciones);
  } catch (error) {
    sendErrorResponse(res, `Error al Obtener usuario: ${error.message}`);
  }
};

const getOneTransaccion = async (req, res) => {
  try {
    const { transaccionId } = req.params;
    const OneTransaccion = await transaccionesService.getOneTransaccion(
      transaccionId
    );
    handleUsuariosResponse(res, OneTransaccion);
  } catch (error) {
    sendErrorResponse(res, `Error al Obtener usuario: ${error.message}`);
  }
};

const createNewTransaccion = async (req, res) => {
  try {
    const createdTransaccion = await transaccionesService.createNewTransaccion(
      req.body
    );
    sendSuccessResponse(res, createdTransaccion);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneTransaccion = async (req, res) => {
  try {
    const { transaccionId } = req.params;
    const updatedUsuario = await transaccionesService.updateOneTransaccion(
      transaccionId,
      req.body
    );
    handleUsuariosResponse(res, updatedUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneTransaccion = async (req, res) => {
  try {
    const { transaccionId } = req.params;
    const deletedTransaccion = await transaccionesService.deleteOneTransaccion(
      transaccionId
    );
    handleUsuariosResponse(res, deletedTransaccion);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export default {
  getAllTransacciones,
  getOneTransaccion,
  createNewTransaccion,
  updateOneTransaccion,
  deleteOneTransaccion,
};

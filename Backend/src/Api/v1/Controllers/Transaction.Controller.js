import transaccionesService from "../Services/Transaction.js";
import {
  sendErrorResponse,
  handleUsuariosResponse,
} from "../Helpers/sendResponse.js";

const getAllTransacciones = async (req, res) => {
  try {
    const { id } = req.user;
    const allTransancciones = await transaccionesService.getAllTransacciones(
      id
    );
    handleUsuariosResponse(res, allTransancciones);
  } catch (error) {
    sendErrorResponse(res, error);
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
    sendErrorResponse(res, error);
  }
};

const createNewTransaccion = async (req, res) => {
  try {
    const { id } = req.user;
    const { categoria, tipo, monto, fecha } = req.body;

    const data = {
      usuario: id,
      categoria,
      tipo,
      monto,
      fecha,
    };

    const createdTransaccion = await transaccionesService.createNewTransaccion(
      data
    );
    handleUsuariosResponse(res, createdTransaccion);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneTransaccion = async (req, res) => {
  try {
    const { id } = req.user;
    const { categoria, tipo, monto, fecha } = req.body;

    const data = {
      usuario: id,
      categoria,
      tipo,
      monto,
      fecha,
    };
    const { transaccionId } = req.params;
    const updatedUsuario = await transaccionesService.updateOneTransaccion(
      transaccionId,
      data
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

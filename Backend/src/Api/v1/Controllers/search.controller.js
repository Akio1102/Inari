import { response } from "express";
import { Types } from "mongoose";
import Presupuestos from "../Models/Budget.Schema.js";
import Categoria from "../Models/Category.Schema.js";
import Transaccion from "../Models/Transaction.Schema.js";
import Usuarios from "../Models/User.Schema.js";

const objectId = Types.ObjectId;

const allowedCollections = [
  "presupuestos",
  "categorias",
  "transacciones",
  "usuarios",
];

const searchPresupuestos = async (criterio = "", res = response) => {
  const isMongoID = objectId.isValid(criterio); // TRUE

  if (isMongoID) {
    const presupuesto = await Presupuestos.findById(criterio).populate(
      "categoria",
      "nombre"
    );
    return res.json({
      results: presupuesto ? [presupuesto] : [],
    });
  }

  const regex = new RegExp(criterio, "i");
  const presupuestos = await Presupuestos.find({
    name: regex,
    state: true,
  }).populate("categoria", "nombre");

  res.json({
    results: presupuestos,
  });
};

const searchCategorias = async (criterio = "", res = response) => {
  const isMongoID = objectId.isValid(criterio); // TRUE

  if (isMongoID) {
    const categoria = await Categoria.findById(criterio);
    return res.json({
      results: categoria ? [categoria] : [],
    });
  }

  const regex = new RegExp(criterio, "i");
  const categorias = await Categoria.find({ nombre: regex, estado: true });

  res.json({
    results: categorias,
  });
};

const searchTransacciones = async (criterio = "", res = response) => {
  const isMongoID = objectId.isValid(criterio); // TRUE

  if (isMongoID) {
    const transaccion = await Transaccion.findById(criterio).populate(
      "categoria",
      "nombre"
    );
    return res.json({
      results: transaccion ? [cheese] : [],
    });
  }

  const regex = new RegExp(criterio, "i");
  const transaccionones = await Transaccion.find({
    name: regex,
    state: true,
  }).populate("categoria", "nombre");

  res.json({
    results: transaccionones,
  });
};

const searchUsers = async (criterio = "", res = response) => {
  const isMongoID = objectId.isValid(criterio); // TRUE

  if (isMongoID) {
    const usuario = await Usuarios.findById(criterio);
    return res.json({
      results: usuario ? [usuario] : [],
    });
  }

  const regex = new RegExp(criterio, "i");
  const usuarios = await Usuarios.find({
    $or: [{ nombre: regex }, { email: regex }],
    $and: [{ estado: true }],
  });

  res.json({
    results: usuarios,
  });
};

const search = (req, res = response) => {
  const { coleccion, criterio } = req.params;

  if (!allowedCollections.includes(coleccion)) {
    return res.status(400).json({
      msg: `El buscador solo permite las colecciones: ${allowedCollections}`,
    });
  }

  switch (coleccion) {
    case "presupuestos":
      searchPresupuestos(criterio, res);
      break;
    case "categorias":
      searchCategorias(criterio, res);
      break;
    case "transacciones":
      searchTransacciones(criterio, res);
      break;
    case "usuarios":
      searchUsers(criterio, res);
      break;

    default:
      res.status(500).json({
        msg: "This search doesnt exists",
      });
  }
};

export default search;

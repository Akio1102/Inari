import mongoose from "mongoose";

export default async function (MONGO_URI) {
  try {
    const connectionDB = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const url = `Conexion a mongo en el server ${connectionDB.connection.host} en el puerto ${connectionDB.connection.port}`;
    console.log(url);
  } catch (error) {
    console.log(`Error en la conexion a MongoDB: ${error.message}`);
    process.exit(1);
  }
}

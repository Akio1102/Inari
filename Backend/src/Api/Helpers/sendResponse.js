export function sendSuccessResponse(res, data, message, statusCode = 200) {
  res.status(statusCode).json({ data, message });
}

export function sendErrorResponse(res, err, statusCode = 500) {
  console.log(err);
  res.status(statusCode).send({ error: "Error en el Server" });
}

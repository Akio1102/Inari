import { SignJWT, jwtVerify } from "jose";

export const createToken = async (req, res, next) => {
  console.log(req.body);
  try {
    const { body } = req;
    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT(body);
    const token = await new jwtconstructor.setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode("qweeqwew"));
    req.auth = token;
    next();
  } catch (error) {
    console.error(error);
    throw new Error("Error al generar el token");
  }
};

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, Config.JWT_PRIVATE_KEY);
    return payload;
  } catch (error) {
    throw new Error("Token inválido");
  }
}

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { registerRequest } from "../Api/auth.js";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onRegister = handleSubmit(async (data) => {
    try {
      const res = await registerRequest(data);
      if (res.data.message === "Usuario creado Exitosamente") {
        navigate("/login");
      } else {
        setError(
          res.error ||
            "Error al registrar el usuario, vuelve a ingresar valores válidos"
        );
      }
    } catch (error) {
      setError(
        "Error al registrar el usuario, vuelve a ingresar valores válidos"
      );
    }
  });
  const formInputStyle = `w-full bg-transparent border rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500`;

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-800">
      <div className="w-full max-w-md p-8 rounded-lg shadow-2xl bg-zinc-700">
        <form onSubmit={onRegister}>
          {error && (
            <div className="text-red-600 bg-red-200 px-4 py-2 rounded-md mb-4">
              {error}
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="username" className="text-xl font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: true, minLength: 3 })}
              className={`${formInputStyle} ${
                errors.username ? "border-red-500" : "border-zinc-500"
              } focus:border-indigo-500 transition-colors`}
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-600 mt-1">El Username es requerido</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="text-xl font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className={`${formInputStyle} ${
                errors.email ? "border-red-500" : "border-zinc-500"
              } focus:border-indigo-500 transition-colors`}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 mt-1">El Email es requerido</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-xl font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className={`${formInputStyle} ${
                errors.password ? "border-red-500" : "border-zinc-500"
              } focus:border-indigo-500 transition-colors`}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600 mt-1">La Password es requerida</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg h-12 w-full rounded-3xl transition-colors"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-zinc-500">
          ¿Tienes cuenta?
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl text-white mx-4"
          >
            Logeate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;

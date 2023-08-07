import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { login, errores, isAuthenticated } = useAuth();

  const onLogin = handleSubmit((data) => {
    login(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/categorys");
    }
  });

  const formInputStyle = `w-full bg-transparent border rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500`;

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-800">
      <div className="w-full max-w-md p-8 rounded-lg shadow-2xl bg-zinc-700">
        <form onSubmit={onLogin}>
          {errores && errores !== "Ok" && (
            <div className="text-red-500 bg-red-200 px-4 py-2 rounded-md mb-4">
              {errores.error}
            </div>
          )}

          <div className="my-4">
            <label htmlFor="email" className="text-lg font-semibold mb-2">
              Email:
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
              <p className="text-red-500 my-2">El Email es requerido</p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="password" className="text-lg font-semibold mb-2">
              Password:
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
              <p className="text-red-500 my-2">La Password es requerida</p>
            )}
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white text-lg h-12 w-full rounded-3xl"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-zinc-500">
          ¿No tienes una cuenta?
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl text-white mx-4"
          >
            Crear Cuenta
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
